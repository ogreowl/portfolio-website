'use client'
// app/page.tsx
import { ArrowDown, Dna, Crown, Bot } from 'lucide-react'
import { useCallback, useState } from 'react'
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 relative flex flex-col" suppressHydrationWarning>
      <Particles
        className="absolute inset-0 pointer-events-none"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">
              Bobby Becker
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
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
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link href="/research" className="text-gray-600 hover:text-blue-600 transition">Research</Link>
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition">Projects</Link>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md shadow-lg">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/research" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link 
                href="/projects" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">
                <span className="text-blue-600">Bobby Becker</span>
              </h1>
              <h2 className="text-4xl font-light mb-6 text-gray-700">
                AI Research & Full-Stack Engineer
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Graduate student at Tulane University with a focus in AI, Natural Language Processing, and Full-Stack Development. Experienced in managing 
                large teams and applying machine learning to both research & application.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" 
                   className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  Contact Me
                </a>
                <a href="#projects"
                   className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 font-mono rounded-lg shadow-sm">
              <div className="text-green-600 mb-4">
                <TypeAnimation
                  sequence={[
                    '// Technical Skills',
                    1000,
                    '// Product Management',
                    1000,
                    '// Cloud Architecture',
                    1000,
                    '// DevOps & CI/CD',
                    1000,
                    '// System Design',
                    1000,
                  ]}
                  wrapper="span"
                  speed={1}
                  repeat={Infinity}
                  className="font-mono"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">AI/ML: Architecture design, model training, feature engineering, deployment, RAG</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Data Science: visualization, analysis, machine learning, natural language processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Languages: Python, C++, C, JavaScript, Java, CSS, HTML, PHP, SQL</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Web Development: Full-stack integration, UI/UX design, SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Professional Experience</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mb-12"></div>
          
          <div className="space-y-8">
            {/* Software Engineer Card */}
            <div className="bg-white rounded-xl p-8 relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex flex-wrap gap-2 mb-4 sm:absolute sm:top-8 sm:right-8">
                <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Part-Time
                </span>
                <Link href="/projects" className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors">
                  See More
                </Link>
              </div>
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">
                Software Engineer
              </h3>
              <h4 className="text-gray-600 text-lg mb-6">
                Advice Company
              </h4>
              <p className="text-gray-700 mb-4">
                Managed & integrated features across 8 websites which provide legal resources. Most recently, led the development of a BERT-based semantic search engine for legal professionals:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">→</span>
                  <span className="text-gray-700">Implemented backend using Python & Huggingface transformers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">→</span>
                  <span className="text-gray-700">Deployed as API endpoint through Docker & Google Cloud Platform</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">→</span>
                  <span className="text-gray-700">Integrated to Frontend through JavaScript & HTML</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">→</span>
                  <span className="text-gray-700">Launched to 500+ high-paying clients</span>
                </li>
              </ul>
            </div>

            {/* Research Assistant Card */}
            <div className="bg-white rounded-xl p-8 relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex flex-wrap gap-2 mb-4 sm:absolute sm:top-8 sm:right-8">
                <Link href="/research" className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors">
                  See More
                </Link>
              </div>
              <h3 className="text-2xl text-blue-600 font-semibold mb-2">
                Research Assistant
              </h3>
              <h4 className="text-gray-600 text-lg mb-6">
                Tulane University
              </h4>
              <p className="text-gray-700 mb-4">
                Working with Professor Aron Culotta on research publications:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">→</span>
                  <span className="text-gray-700">Developed NLP pipeline to analyze 109,692 references across 1,076 philosophical texts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">→</span>
                  <span className="text-gray-700">Created novel interactive tool to visualize & analyze reference networks between authors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">→</span>
                  <span className="text-gray-700">Employed transformer-based models to classify references by topic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mb-12"></div>

          {/* Single Row - 5 Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Amino Acid Project */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-lg 
                          transition-all duration-300 
                          hover:scale-[1.02] hover:-translate-y-2 
                          hover:shadow-2xl hover:shadow-blue-500/20 
                          cursor-pointer">
              <div className="h-36 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                <Dna className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  Amino Acid Prediction
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Deep learning model for protein B-factors prediction
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">Deep Learning</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-600">Python</span>
                </div>
                <a href="/projects#protein-factors" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Chess Analysis Project */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-lg 
                          transition-all duration-300 
                          hover:scale-[1.02] hover:-translate-y-2 
                          hover:shadow-2xl hover:shadow-green-500/20 
                          cursor-pointer">
              <div className="h-36 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                <Crown className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  Chess Games Analysis
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Machine learning analysis of 40,000+ chess games using advanced analytics
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">Machine Learning</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-600">Data Analysis</span>
                </div>
                <a href="/projects#chess-analysis" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Unity Game Project */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-lg 
                          transition-all duration-300 
                          hover:scale-[1.02] hover:-translate-y-2 
                          hover:shadow-2xl hover:shadow-purple-500/20 
                          cursor-pointer">
              <div className="h-36 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                <Bot className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  3D Combat Game with LLMs
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Unity-based turn-based combat game with integrated language models
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">Unity</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-600">C#</span>
                </div>
                <a href="/projects#unity-game" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* SelfHelp AI */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-lg 
                          transition-all duration-300 
                          hover:scale-[1.02] hover:-translate-y-2 
                          hover:shadow-2xl hover:shadow-pink-500/20 
                          cursor-pointer">
              <div className="h-36 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                <Bot className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  SelfHelp AI
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  iOS app providing personalized AI-powered mental wellness support and journaling
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">Swift</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-600">SwiftUI</span>
                </div>
                <a href="/projects#selfhelp-ai" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Voice-Controlled Robot */}
            <div className="group rounded-xl overflow-hidden bg-white shadow-lg 
                          transition-all duration-300 
                          hover:scale-[1.02] hover:-translate-y-2 
                          hover:shadow-2xl hover:shadow-violet-500/20 
                          cursor-pointer">
              <div className="h-36 bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                <Bot className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors">
                  Voice-Controlled Robot
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Raspberry Pi-powered robot that responds to voice commands using natural language processing
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">Python</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-600">Raspberry Pi</span>
                </div>
                <a href="/projects#voice-robot" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The College Contemporary Section */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">The College Contemporary</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            Founded intercollegiate magazine to publish high-quality original perspectives from college writers across the U.S. Since 2022, I have 
            been serving as the President &amp; Editor, coordinating across editorial &amp; design teams, and leading marketing &amp; fundraising efforts. 
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href="https://collegecontemporary.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              View Website
            </a>
            <a 
              href="https://bobbybecker2001.com/the-college-contemporary/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            >
              Read More
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Stats and Overview */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-gray-600">Published Works</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="text-4xl font-bold text-blue-600 mb-2">250k</div>
                    <div className="text-gray-600">Total Page Views</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Contributors</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$5k</div>
                    <div className="text-gray-600">Funding Awarded</div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Hosted speaker series with 150+ person live audience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Twice Received Alvarez Spark Innovation Award</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Managed 10k monthly advertising budget via Google Ad Grants for Nonprofits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Independently traveled to Ukraine to conduct original reporting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Published work online, through print editions, and Spotify</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Content Categories */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Content Breakdown (by articles published)</h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Society</span>
                      <span>22</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[92%] bg-blue-500 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Philosophy</span>
                      <span>14</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[58%] bg-purple-500 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Technology</span>
                      <span>15</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[63%] bg-green-500 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Academia</span>
                      <span>17</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[71%] bg-pink-500 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Politics</span>
                      <span>24</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[100%] bg-yellow-500 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Interviews</span>
                      <span>15</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[63%] bg-red-500 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial Process */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Pretty Good Pieces</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Launched Additional Branch to Focus on Creative Writing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Published 50+ pieces of Fiction, Poetry, and Satire</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Work with 25+ contributors across 15+ colleges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 mt-auto border-t border-gray-200 bg-white">
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