'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Highlight, themes } from 'prism-react-renderer'
import Expert3DScatter from '../../components/Expert3DScatter'

export default function SemanticSearchEngine() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Bobby Becker
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Projects
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
              Semantic Search Engine for Expert Witnesses
            </h1>
          </div>

          {/* 3D Scatter Plot Visualization */}
          <div className="mb-12">
            <Expert3DScatter />
            <p className="text-gray-600 text-sm text-center mb-12">
            3D visualization of expert witness embeddings created by a sentence transformer model. This gives each expert a rich semantic representation which is used by the search engine.
            </p>
          </div>

          {/* Project Overview */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As part of my role at Advice Company, I re-engineered the search experience for ExpertPages.com, 
              an online directory of expert witnesses. The main technical challenge involved integrating modern 
              NLP algorithms into a legacy website, which required a mix of backend data processing, cloud 
              deployment, and custom front-end design.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The clients for this website are expert witnesses—professionals in medicine, law, business, and 
              technology who testify in court cases involving their expertise. Attorneys rely on websites like 
              ours to connect with expert witnesses based on the specific needs of a given case. Our old search 
              system depended on experts classifying themselves into predefined categories, but this often failed 
              to surface relevant or intuitive results. My new solution used a deep learning model to capture 
              the unique characteristics of each expert and match them with an attorney&apos;s specific requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
            The engine is now used by hundreds of attorneys each month and has become a key selling point for attracting 
            and retaining clients on ExpertPages! Since its launch last November, I&apos;ve 
              continued to improve its accuracy, manage its cloud infrastructure, and iterate on its design 
              based on user feedback.

            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Technical Implementation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To build the engine, I first wrote a Python script to generate a short summary of each expert 
              based on available metadata, and used a pre-trained BERT embedding model to represent each 
              expert as a high-dimensional vector:
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-2xl">
              <Highlight
                theme={themes.github}
                code={`
# generate summaries via metadata & GPT-3.5:
def generate_expert_summaries(df):
    summaries = []
    for _, row in df.iterrows():
        prompt = f"""Create a concise summary of this expert witness:
        Name: {row['name']}
        Field: {row['field']}
        Experience: {row['experience']}
        Education: {row['education']}
        Keep it under 100 words."""
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=150
        )
        summaries.append(response.choices[0].message.content)
    return summaries

# generate embeddings via transformer model:
def generate_embeddings(summaries):
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode(summaries, show_progress_bar=True)
    return embeddings
                `.trim()}
                language="python"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="text-gray-500 mr-4 select-none text-xs">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Then, I created a program that takes in a query—either 
              a description or keywords—and finds the most relevant experts using cosine similarity with the 
              precomputed embeddings:
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-2xl">
              <Highlight
                theme={themes.github}
                code={`
def find_top_matches(query, df, top_n=10):
    # call previous function to get query embedding from API:
    query_embedding = get_query_embedding(query)
    
    # normalize query embedding:
    query_embedding = query_embedding / np.linalg.norm(query_embedding)
    
    # stack and normalize the precomputed embeddings:
    summary_embeddings = np.vstack(df['summary_embedding'].values)
    summary_embeddings = summary_embeddings / np.linalg.norm(summary_embeddings)

    # compute cosine similarity between query and precomputed embeddings:
    similarities = np.dot(summary_embeddings, query_embedding)

    # apply the modifier to boost the similarity score:
    similarities *= df['modifier'].values
                `.trim()}
                language="python"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="text-gray-500 mr-4 select-none text-xs">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              After optimizing and testing the backend, I deployed the engine using Docker and Google Cloud Run. 
              This allowed it to be accessed via an API, which I integrated onto the existing website using 
              custom JavaScript:
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-2xl">
              <Highlight
                theme={themes.github}
                code={`
// send the query
function sendQuery() {
    const query = document.getElementById("queryInput").value.trim();
    const loadingElement = document.getElementById("loading");
    const responseElement = document.getElementById("api-response");

    if (!query) {
        responseElement.innerHTML = "Please enter a query.";
        return;
    }

    loadingElement.style.display = "block";
    responseElement.innerHTML = "";

    fetch(serviceUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
                `.trim()}
                language="javascript"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="text-gray-500 mr-4 select-none text-xs">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              And then designed the front-end UI with custom CSS and HTML:
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-2xl">
              <Highlight
                theme={themes.github}
                code={`
<!-- Search Interface -->
<div class="search-container">
  <div class="search-box">
    <input 
      type="text" 
      id="searchInput" 
      placeholder="Describe the expert you&apos;re looking for..."
      class="search-input"
    />
    <button onclick="searchExperts()" class="search-button">
      Search
    </button>
  </div>
  <div id="results" class="results-container"></div>
</div>
<script>
async function searchExperts() {
  const query = document.getElementById('searchInput').value;
  const resultsDiv = document.getElementById('results');
  
  try {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    
    const experts = await response.json();
    
    resultsDiv.innerHTML = experts.map(expert => \`
      <div class="expert-card">
        <h3>\${expert.name}</h3>
        <p class="field">\${expert.field}</p>
        <p class="summary">\${expert.summary}</p>
        <div class="match-score">
          Match: \${(expert.similarity * 100).toFixed(1)}%
        </div>
      </div>
    \`).join('');
  } catch (error) {
    resultsDiv.innerHTML = 'Error searching for experts';
  }
}

                `.trim()}
                language="html"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="text-gray-500 mr-4 select-none text-xs">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>


          </div>
        </div>
      </main>
    </div>
  )
}
