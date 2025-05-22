'use client'
import dynamic from 'next/dynamic';
import { useEffect, useState, useMemo } from 'react';
import type { Data, Layout } from 'plotly.js';

const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading visualization...</div>
}) as React.ComponentType<{
  data: Data[];
  layout: Partial<Layout>;
  useResizeHandler?: boolean;
  style?: React.CSSProperties;
  config?: any;
}>;

const colors = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
];

// Cache key and expiration time (24 hours)
const CACHE_KEY = 'umap_data_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface CacheData {
  data: any[];
  timestamp: number;
}

interface UMAPData {
  UMAP1: number;
  UMAP2: number;
  UMAP3: number;
  Cluster: number;
  [key: string]: any;
}

interface Expert3DScatterProps {
  height?: string;
}

interface PlotProps {
  data: Data[];
  layout: Partial<Layout>;
  useResizeHandler?: boolean;
  style?: React.CSSProperties;
  config?: any;
}

export default function Expert3DScatter({ height = '400px' }: Expert3DScatterProps) {
  const [data, setData] = useState<UMAPData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache first
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data: cachedUmapData, timestamp }: CacheData = JSON.parse(cachedData);
          const isStale = Date.now() - timestamp > CACHE_EXPIRY;
          
          if (!isStale) {
            setData(cachedUmapData);
            setLoading(false);
            return;
          }
        }

        // If no cache or stale, fetch from server
        const response = await fetch('/umap.json');
        const json = await response.json();
        
        // Update cache
        const cacheData: CacheData = {
          data: json,
          timestamp: Date.now()
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
        
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Preprocess data and memoize plot data
  const plotData = useMemo(() => {
    if (!data.length) return [];
    
    const clusters = [...new Set(data.map(d => d.Cluster))];
    const clusterData = new Map();
    
    // Preprocess data by cluster
    data.forEach(d => {
      if (!clusterData.has(d.Cluster)) {
        clusterData.set(d.Cluster, {
          x: [],
          y: [],
          z: [],
          text: []
        });
      }
      const cluster = clusterData.get(d.Cluster);
      cluster.x.push(d.UMAP1);
      cluster.y.push(d.UMAP2);
      cluster.z.push(d.UMAP3);
      cluster.text.push(`Cluster: ${d.Cluster}<br>(${d.UMAP1.toFixed(2)}, ${d.UMAP2.toFixed(2)}, ${d.UMAP3.toFixed(2)})`);
    });

    return clusters.map((cluster, i) => ({
      ...clusterData.get(cluster),
      hoverinfo: 'text',
      mode: 'markers',
      type: 'scatter3d',
      name: `Cluster ${cluster}`,
      marker: {
        size: 7,
        color: colors[i % colors.length],
        opacity: 0.8,
        line: { width: 1, color: '#333' }
      }
    }));
  }, [data]);

  // Memoize layout configuration
  const layout = useMemo(() => ({
    autosize: true,
    margin: { l: 0, r: 0, b: 0, t: 0 },
    title: { text: '' },
    paper_bgcolor: '#fff',
    plot_bgcolor: '#fff',
    showlegend: false,
    scene: {
      xaxis: { title: { text: 'UMAP1' }, gridcolor: '#e5e5e5' },
      yaxis: { title: { text: 'UMAP2' }, gridcolor: '#e5e5e5' },
      zaxis: { title: { text: 'UMAP3' }, gridcolor: '#e5e5e5' }
    }
  }), []);

  if (loading) return <div>Loading 3D scatter plot...</div>;
  if (!data.length) return <div>No data found.</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 mb-4">
        <Plot
          data={plotData}
          layout={layout}
          useResizeHandler={true}
          style={{ width: '100%', height }}
          config={{ responsive: true, displayModeBar: false }}
        />
      </div>
    </div>
  );
} 