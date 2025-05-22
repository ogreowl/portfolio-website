'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PhilosophyNetworkAnalysis() {
    return (
      <div className="min-h-screen bg-white" suppressHydrationWarning>
        {/* Navigation */}
        <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Bobby Becker
              </Link>
              <Link 
                href="/research" 
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Research
              </Link>
            </div>
          </div>
        </nav>
  
        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Analyzing Reference Networks Across Philosophical Texts
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the past year, I worked with Aron Culotta, a well-known professor in AI and natural language processing, to conduct what is currently the largest computational analysis of philosophical texts within the English language. Our work is currently undergoing peer review from the Oxford Journal, &quot;Digital Scholarship in the Humanities.&quot;
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                In our study, we downloaded & processed over 2,000 philosophical texts, and used Python to track how often each author references other authors within the dataset. With these results, we constructed graph representations—with authors as nodes and references as edges—to represent the reference networks mathematically. We also applied transformer models to classify each reference by its surrounding contexts, allowing us to identify specific threads in how philosophical influence has spread.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We applied multiple algorithms from graph theory to analyze these networks—clustering them, identifying paths between nodes, and determining the influence of individual authors. We combined our data analysis with a deep dive into philosophical literature, spanning across both primary and secondary sources to inform our analysis. Finally, we created a visualization tool with the D3 javascript library to allows anyone to interact with and visualize our networks for their own research.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our paper first analyzes the overall structure of our network. For instance, we use total incoming references and in-degree centrality (incoming references from unique authors) to quantify the level of influence of various philosophers:
              </p>

              <div className="my-8 flex flex-col items-center">
                <Image
                  src="/images/figure1.jpg"
                  width={700}
                  height={320}
                  quality={100}
                  alt="Network Structure Analysis"
                  className="rounded-lg shadow-lg"
                />
                <p className="text-gray-600 text-sm italic mt-2 max-w-2xl text-center">
                  Figure 1: Distribution of incoming references across authors in our dataset.
                </p>
              </div>
              <div className="my-8 flex flex-col items-center">
                <Image
                  src="/images/figure2.jpg"
                  width={700}
                  height={320}
                  quality={100}
                  alt="Network Structure Analysis"
                  className="rounded-lg shadow-lg"
                />
                <p className="text-gray-600 text-sm italic mt-2 max-w-2xl text-center">
                  Figure 2: In-degree centrality of top 15 authors in our dataset.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                We also make similar calculations of subsets of our data which only include references classified into various topics. This allows us to make more precise estimates on the level of influence across different areas within philosophy:
              </p>

              <div className="my-8 flex flex-col items-center">
                <Image
                  src="/images/figure3.jpg"
                  width={700}
                  height={320}
                  quality={100}
                  alt="Network Structure Analysis"
                  className="rounded-lg shadow-lg"
                />
                <p className="text-gray-600 text-sm italic mt-2 max-w-2xl text-center">
                Figure 3: Percentage of incoming references across topics in philosophy. Shows how the most influential philosophers have impacted different areas.

                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Finally, we explore the positions of various key figures with our visualization tool, providing additional context on how individuals relate to the wider network:
              </p>

              <div className="my-8 flex flex-col items-center">
                <Image
                  src="/images/figure5.jpg"
                  width={750}
                  height={350}
                  quality={100}
                  alt="Network Structure Analysis"
                  className="rounded-lg shadow-lg"
                />
                <p className="text-gray-600 text-sm italic mt-2 max-w-2xl text-center">
                Figure 4: Reference networks of top authors with our visualization tool.

                </p>
              </div>
              <div className="my-8 flex flex-col items-center">
                <Image
                  src="/images/figure4.jpg"
                  width={750}
                  height={350}
                  quality={100}
                  alt="Network Structure Analysis"
                  className="rounded-lg shadow-lg"
                />
                <p className="text-gray-600 text-sm italic mt-2 max-w-2xl text-center">
                Figure 5: Kant&apos;s position in our reference network

                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                If interested, feel free to check out the full paper here, our GitHub repository here, our visualization tool here, or some of my previous work in this area here. Special thanks to Aron Culotta for his guidance and the Tulane computer science department for their support!
              </p>

              <div className="flex gap-4 mt-8">
                <a 
                  href="https://arxiv.org/abs/2504.20065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Read Pre-Print
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://ogreowl.github.io/PhilBERT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400/10 transition-colors"
                >
                  Try Visualization Tool
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
