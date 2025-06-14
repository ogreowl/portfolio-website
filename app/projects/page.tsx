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
        {/* iOS App Project */}
        <div id="ios-app" className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Self Help AI - iOS Mobile App</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React Native</span>
            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">LLMs</span>
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">iOS</span>
            <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">API Design</span>
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">UI/UX</span>
            <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Mobile Dev</span>
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">TypeScript</span>
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">JavaScript</span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I developed the full software stack for Self Help AI, an iOS mobile app that integrates user data, 
              function calling & personalization settings to create a ChatBot experience for the purpose of self-help. 
              The end product uses ~30k lines of code across 24 files, and has amassed over 200 App Store downloads since launch.
            </p>
          </div>

          <div className="flex gap-4 mb-16">
            <Link
              href="/projects/ios-app"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link 
              href="https://apps.apple.com/us/app/selfhelp-ai/id6742257217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View on App Store
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>

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
              href="/projects/semantic-search-engine/"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              Read More
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
              href="projects/llm-video-game/"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
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
          </div>
        </div>

        {/* Raspberry Pi Robot Project */}
        <div id="raspberry-pi-robot" className="mt-16">
          <h2 className="text-4xl font-bold mb-4">Multimodal Voice-Controlled Robot</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">Raspberry Pi</span>
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Computer Vision</span>
            <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">OpenCV</span>
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Robotics</span>
            <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">GPIO</span>
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">PID Control</span>
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Linux</span>
          </div>

          <div className="prose max-w-none mb-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I developed a multimodal robot with Rasberry Pi that can interpret voice commands, control 
              movements, analyze its surroundings, and respond with emotionally expressive speech. This involved
              integrating three seperate AI models (Speech-to-Text, a Multimodal LLM, and Text-to-Speech) with
              a Rasberry Pi, controller board, motors, camera, microphone, and speaker. 
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="projects/agentic-robot/"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
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
