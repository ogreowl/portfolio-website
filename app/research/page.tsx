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
              We applied computational methods to analyze reference patterns across 1,076 philosophical texts 
              from Project Gutenberg, revealing quantitative insights into how philosophical ideas have spread 
              across time. By combining network analysis with natural language processing, we mapped over 
              109,692 references to measure historical influence patterns, finding that Plato and Aristotle 
              account for nearly 25% of all citations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our interactive tool allows users to explore these philosophical networks, choosing a philosopher 
              to display who they commonly reference and who references them—with the ability to sort references 
              by topic (e.g., &apos;ethics&apos; or &apos;metaphysics&apos;). The project reveals distinct network structures among 
              philosophical traditions, supporting traditional understandings of intellectual lineages while 
              challenging others.
            </p>
          </div>

          <div className="flex gap-4 mb-16">
            <a 
              href="https://ogreowl.github.io/PhilBERT/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Interactive Demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://github.com/ogreowl/nlp-philosophy-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View GitHub
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Second Project */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Analyzing Philosophical Texts in Embedding Space</h2>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              After experimenting with mapping philosophical relationships using LLMs, I explored how traditional 
              NLP algorithms could be applied to philosophy. I trained a Word2Vec model on 43 classical philosophical 
              texts, including works from Kant, Plato, Aristotle, Descartes, Hegel, Spinoza, and Marx. The model 
              represents words as numerical vectors, capturing semantic relationships in high-dimensional space.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Using Principal Component Analysis and Latent Dirichlet Allocation, I visualized relationships 
              between philosophical concepts and texts. This led to the development of a search application for 
              Plato&apos;s dialogues, independently discovering an approach similar to Retrieval Augmented Generation. 
              This work later influenced the development of a semantic search engine at Advice Company.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://bobbybecker2001.com/nlp-philosophy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Third Project */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-6">Deriving Historical Networks from Large Language Models </h2>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Working with Professor Alireza Shirvani, I explored patterns in LLM outputs through quantitative 
              analysis. Using the OpenAI API, I generated and analyzed 500+ responses to understand how LLMs model 
              and represent knowledge domains. Recently, I&apos;ve been conducting preliminary experiments and reading
              to explore re-approaching this project with Aron Culotta as a way to systematically measure 
              how different large language models represent history.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://bobbybecker2001.com/empirical-research-and-data-visualization-of-llms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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