// app/projects/page.tsx

'use client'
import { useState } from 'react'
import Link from 'next/link';

export default function Projects() {
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
              <Link href="/research" className="hover:text-blue-400 transition">Research</Link>
              <Link href="/projects" className="text-blue-400 transition">Projects</Link>
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
        <div id="expert-search" className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Expert Witness Semantic Search Engine</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">BERT</span>
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Docker</span>
            <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">Google Cloud</span>
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">React</span>
            <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">FastAPI</span>
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">PostgreSQL</span>
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Hugging Face</span>
            <span className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">JavaScript</span>
            <span className="px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">LLMs</span>
            <span className="px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">PHP</span>
            <span className="px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">CSS</span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Advice Company, I re-engineered the company&apos;s search system for attorneys to find expert witnesses. To do this, I first
              created a script to systematically search through our database and create LLM summaries of each expert witness. Then, I embedded these summaries using
              a BERT model, and created a system to match these precomputed vectors with the embedding of a user query.  
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I was able to deploy this system as an API endpoint through Docker and Google Cloud, and designed the front-end interface to integrate it onto the website.
               For the last few months, I&apos;ve been monitoring the system, making adjustments based on user feedback, and improving its efficiency. The service is now live 
               to 500+ high-paying clients on ExpertPages.com, an online directory for expert witnesses.
            </p>
          </div>

          <div className="flex gap-4 mb-16">
            <Link 
              href="https://github.com/ogreowl/expertWitnessFinder"
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
              href="https://bobbybecker2001.com/expertpages-rag-system/"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link
              href="https://www.expertpages.com/ai-expert-finder"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Try it Out
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
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
              B-factors measure how much each part of a protein varies from its average position; when, for example, a protein is modelled in Alphafold, 
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
            <Link
              href="/projects/b-factor"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
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
              In this project, I downloaded 40,000 Chess games from Kaggle (sourced from Lichess) and explored the relationships between
              player rankings, game outcomes, and moves. After conducting a thorough EDA, I developed a customized K-Nearest Neigbhors model with the goal 
              of predicting player ranking through an interpretable algorithm.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The model considers three key features: opponent skill level, game outcome, and opening move. As an example, when predicting a player&apos;s ranking who won 
              with a d4 opening against a 1500-rated opponent, the model first filters for games with matching outcomes and openings, 
              then identifies the five most similar games based on opponent rating, calculating a weighted average to make its prediction.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The model&apos;s mean error rate was, by contrast, around 82 ELO points, which indicates that the KNN struggles with outliers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              In addition, I began preliminary work on building a GPT-based Chess engine from games generated by Stockfish. 
            </p>
          </div>

          <div className="flex gap-4">
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
              href="https://bobbybecker2001.com/ml-chess-analysis/"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read More
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
        </div>

        {/* Experimental Research section */}
        <div id="unity-game" className="mt-16">
          <h2 className="text-4xl font-bold mb-4">Integrating LLMs into an Original 3D Unity Game</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Unity</span>
            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">C#</span>
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">LLMs</span>
            <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">API Design</span>
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">3D Graphics</span>
            <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Game Dev</span>
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Python</span>
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">RAG</span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I led a group project in creating an original Unity-based video game which incorprates Large Language Models to create dynamic NPC interactions and combat narratives. 
              We managed the game state & character behaviors through C# scripts and Unity&apos;s component system, while a custom API helped us handle LLM prompting, context management, 
              and response processing.
            </p>
            <div className="text-gray-600 text-lg leading-relaxed mb-4">
              Technical Features:
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Unity game engine with C# scripting for core mechanics</li>
                <li>Custom API middleware for LLM integration and prompt management</li>
                <li>7 NPCs with context-aware dialogue systems</li>
                <li>21 unique combat abilities with particle system integration</li>
                <li>37 total animations, 3 combat encounters, and 3 original world maps</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <Link 
              href="https://github.com/ogreowl/llm_unity_game"
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
              href="https://bobbybecker2001.com/large-language-model-enhanced-video-game/"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read More
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
}// This is a test comment
