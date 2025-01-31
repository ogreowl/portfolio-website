'use client'

import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [isResearchOpen, setIsResearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white relative flex flex-col">
      <nav className="fixed w-full top-0 bg-[#1a1a1a]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">
              Bobby Becker
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              <a href="#" className="hover:text-blue-400 transition">About</a>
              <div className="relative">
                <button 
                  className="hover:text-blue-400 transition flex items-center"
                  onMouseEnter={() => setIsResearchOpen(true)}
                  onMouseLeave={() => setIsResearchOpen(false)}
                >
                  Research
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {isResearchOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1a1a1a] ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        <Link 
                          href="/research/philosophy" 
                          className="block px-4 py-2 text-sm hover:bg-gray-800 transition"
                        >
                          Philosophy & NLP
                        </Link>
                        <Link 
                          href="/research/protein" 
                          className="block px-4 py-2 text-sm hover:bg-gray-800 transition"
                        >
                          Protein Analysis
                        </Link>
                        <Link 
                          href="/research/chess" 
                          className="block px-4 py-2 text-sm hover:bg-gray-800 transition"
                        >
                          Chess Analytics
                        </Link>
                      </div>
                    </div>
                  )}
                </button>
              </div>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#contemporary" className="hover:text-blue-400 transition">The College Contemporary</a>
              <a href="#other" className="hover:text-blue-400 transition">Other</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-24">
        <div className="text-green-400 mb-8">
          <TypeAnimation
            sequence={[
              '// About Me',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono text-2xl"
          />
        </div>
        
        <div className="relative">
          <p className="text-gray-300 mb-4">
          Hello Visitors!
          </p>
          <p className="text-gray-300 mb-4">
            Welcome to my portfolio! I&apos;m currently a graduate student at Tulane University studying computer science and am looking for opportunities in AI research, development, and engineering. This website aims to give some background on my experiences.
          </p>
          <p className="text-gray-300 mb-4">
            I currently serve as a software engineer for Advice Company, a public benefit corporation which provides legal resources. Most recently, I created a <a href="https://www.expertpages.com/ai-expert-finder" className="text-blue-400 hover:text-blue-300 transition">BERT-based semantic search engine</a> that helps attorneys find expert witnesses. I programmed the engine&apos;s backend in Python with Huggingface, deployed it through Dockerfile & Google Cloud, and integrated it with Javascript & HTML.
          </p>
          <p className="text-gray-300 mb-4">
            I am also working with Professor Aron Culotta in applying natural language processing to analyze philosophical texts. This last semester, I created an <a href="https://ogreowl.github.io/PhilBERT/" className="text-blue-400 hover:text-blue-300 transition">interactive tool to visualize the reference networks</a> across over 1,076 texts, employing transformer-based embeddings to classify references by topic. In previous semesters, I have worked on visualizing philosophical concepts in embedding space and designing RAG systems around Plato&apos;s works.
          </p>
          <p className="text-gray-300 mb-2">
            I also developed several other projects involving machine learning, AI, and data science throughout my Master&apos;s program. These include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
            <li><a href="https://bobbybecker2001.com/b-factor-prediction/" className="text-blue-400 hover:text-blue-300 transition">Using Deep Learning to Predict Amino Acid B-Factors Via Protein Sequences</a></li>
            <li><a href="https://bobbybecker2001.com/ml-chess-analysis/" className="text-blue-400 hover:text-blue-300 transition">Conducting a Machine Learning Analysis of Over 40,000 Chess Games</a></li>
            <li><a href="https://bobbybecker2001.com/large-language-model-enhanced-video-game/" className="text-blue-400 hover:text-blue-300 transition">Creating a 3D Turn-Based Combat Unity Game that Integrates LLMs</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              In addition, since the Fall of 2022, I founded and have served as the president & editor for <a href="https://collegecontemporary.com/" className="text-blue-400 hover:text-blue-300 transition">The College Contemporary</a>, an intercollegiate magazine which publishes perspectives on society, philosophy, and technology. We&apos;ve published 80+ essays from contributors from over 40 different colleges, including graduate writers from top programs and former editors from leading student newspapers. Through Google Ad Grants, SEO, and digital marketing campaigns, we&apos;ve reached over <a href="https://bobbybecker2001.com/the-college-contemporary/" className="text-blue-400 hover:text-blue-300 transition">200,000 unique website visitors</a> since our founding.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-400">Technical Proficiencies</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>AI/ML: Architecture design, model training, feature engineering, deployment, RAG</li>
              <li>Data Science: visualization, analysis, machine learning, natural language processing</li>
              <li>Languages: Python, C++, C, JavaScript, Java, CSS, HTML, PHP, SQL</li>
              <li>Web Development: Full-stack integration, UI/UX design, SEO</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-400">Additional Skills</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Communication: technical writing, presentations, long-form writing & editing</li>
              <li>Research: literature review, experimental design, analysis, documentation</li>
              <li>Leadership: team recruitment, coordination, timeline planning</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-400">Areas of Interest</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Development & deployment of AI-tools for research or consumer use</li>
              <li>Data science, visualization, machine learning statistical analysis</li>
              <li>Post-training of generative models: reinforcement learning, RAG, AI-Agents, chain-of-thought</li>
              <li>AI Ethics: bias, privacy, intellectual property, interpretability, alignment</li>
            </ul>
          </div>

          <div className="flex justify-center space-x-6 pt-8 text-gray-300">
            <a href="mailto:bobbybeckerdev@gmail.com" className="hover:text-blue-400 transition">bobbybeckerdev@gmail.com</a>
            <span>|</span>
            <span>1-312-292-6644</span>
            <span>|</span>
            <a href="https://github.com/yourusername" className="hover:text-blue-400 transition">GitHub</a>
            <span>|</span>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
      </main>

      <footer className="py-8 mt-auto border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex justify-center">
            <ul className="flex items-center gap-6">
              <li>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}