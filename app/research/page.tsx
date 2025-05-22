// app/research/page.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function PhilosophyResearch() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">
              Bobby Becker
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              <Link href="/research" className="text-blue-400 transition">Research</Link>
              <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md shadow-lg">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/research" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link 
                href="/projects" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12 pt-20">
        {/* First Project */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Computational Analysis of Reference Networks Across Philosophical Texts</h1>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              As a research assitant at Tulane University, I conducted what is currently the largest 
              computational analysis of historical texts in philosophy—analyzing over 2,245 texts, from 550 BCE to 
              1940 AD,to investigate patterns in how philosophical influence has spread across time. We created custom 
              Python scripts to identify and track over 294,970 references between authors and classified these references 
              with a transformer-based natural language processing model to investigate how major figures influenced different areas
              of philosophy.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We represented our data as graphs, treating authors as node and their in-text references 
              to other authors as edges, which allowed us to apply graph theory algorithms 
              to its structure. We informed our analysis with a deep investigation
              into primary and secondary sources in philosophy, and created a publically available3D interactive tool to visualize our results.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              This research was conducted under the guidance of Aron Culotta, a scholar in natural language processing 
              and social network analysis. From our literature review, it is currently the largest computational analysis
              of philosophical texts that has ever been conducted. Our work is currently undergoing peer review
              at the Oxford Journal &quot;Digital Scholarship in the Humanities&quot;, and is available in pre-print at arXiv.
            </p>
          </div>

          <div className="flex gap-4 mb-16">
          <Link
              href="research/philosophy-network-analysis"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <a 
              href="https://arxiv.org/abs/2504.20065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Pre-Print
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://ogreowl.github.io/PhilBERT/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Try Interactive Demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

                {/* Third Project */}
                <div id="chess-analysis" className="scroll-mt-20">
          <h2 className="text-4xl font-bold mb-4">Machine Learning Analysis of 40,000 Chess Games</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">Scikit-learn</span>
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Pandas</span>
            <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">NumPy</span>
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Matplotlib</span>
            <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Seaborn</span>
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Machine Learning</span>
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">KNN</span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
            I analyzed over 40,000 online chess games to explore relationships between player ratings, outcomes, openings, and other variables. After conducting a detailed statistical and visual analysis using Python, Pandas, Matplotlib, and Seaborn, I designed a customized K-Nearest Neighbors (KNN) model to predict a player&apos;s rating based on their opening move, game outcome, and opponent skill level — achieving a median error rate within 1.5% of a player&apos;s true ranking.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
            In addition, I built a Generative Pretrained Transformer to play chess by continually predicting the next move within a sequence. I tested its performance against StockFish, the most powerful Chess Engine, in order to illustrate the potential, limitations, and modern approaches of applying attention-based AI architectures to domains currently dominated by traditional deep learning systems.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="research/ml-chess-analysis/"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link 
              href="https://github.com/ogreowl/chess-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View on GitHub
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link
              href="https://ogreowl.github.io/chess-analysis/"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read Tutorial
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
          <br></br><br></br>
        </div>

        {/* Second Project */}
        <div id="protein-factors" className="mb-16 scroll-mt-20">
          <h1 className="text-4xl font-bold mb-4">Using Deep Learning to Predict B-Factors of Amino Acids via Protein Sequences</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">PyTorch</span>
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Transformers</span>
            <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">BERT</span>
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Deep Learning</span>
            <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Bioinformatics</span>
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Pandas</span>
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">NumPy</span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Working with two peers at Tulane University, I helped develop a transformer-based model to predict protein B-factors from amino acid sequences. 
              B-factors measure how much each part of a protein varies from its average position; when, for example, a protein is modeled in Alphafold, 
              each amino acid is displayed in its average position, while B-Factor would measure how much each amino acid would move. Our final model was trained on 
              60,000 protein sequences, achieving a Pearson correlation coefficient of 0.82, on-par with state-of-the-art performance.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              My main role in the project involved systematically testing architectures and set-ups -- including linear models, RNNs, LSTMs, and Transformers -- to inform
              how we would design our final model. Using my experience in NLP, I found that BERT embeddings allowed all models to make far more accurate predictions, an insight
              which greatly improved the efficiency of our final model.
            </p>
          </div>

          <div className="flex gap-4 mb-16">
            <Link
              href="/research/b-factor"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link 
              href="https://github.com/ogreowl/B-Factor_Prediction_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View on GitHub
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="py-8 mt-auto border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex justify-center">
            <ul className="flex items-center gap-6">
              <li>
                <a 
                  href="https://github.com/ogreowl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/bobby-becker-496964195/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link 
                  href="/resume.pdf" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:bobbybeckerdev@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}