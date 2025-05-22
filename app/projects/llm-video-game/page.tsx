'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LLMVideoGame() {
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
                LLM-Enhanced Fantasy Adventure Video Game
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                For my computer science capstone project, I worked with two other Tulane seniors to develop a fantasy adventure video game that incorporates Large Language Models to enhance the dialogue of non-playable characters. Our final product was developed in the Unity platform using C# and included the following features:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>12 unique characters models</li>
                <li>37 total animations</li>
                <li>3 turn-based combat encounters</li>
                <li>16 particle effects</li>
                <li>3 original world maps (designed by us)</li>
                <li>7 AI-Driven NPCs</li>
                <li>21 unique attacks</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                The game follows three fantasy characters—a druid, witch, and thief—who are free to roam around an open map under the player&apos;s control:
              </p>

              <div className="my-8 flex justify-center">
                <Image
                  src="/images/control.png"
                  width={500}
                  height={200}
                  alt="Game Characters"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                They encounter NPCs throughout their journey, who prompt the player to ask whatever question they want. That information is then given to an LLM alongside other pieces of context, such as relevant information about the lore of the game and the NPC character&apos;s backstory. The NPC then gives an appropriate response that&apos;s also designed to guide the players toward their next objective:
              </p>

              <div className="my-8 flex justify-center">
                <Image
                  src="/images/dialogue.png"
                  width={500}
                  height={200}
                  alt="NPC Dialogue"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                At 3 points throughout the game, the player encounters various enemies, which they automatically engage in Pokemon-style turn-based combat encounters. In these encounters, the player chooses one of four spells to cast from each of their three characters, making strategic decisions to manage their character&apos;s health &amp; stamina to defeat the enemy:
              </p>

              <div className="my-8 flex justify-center">
                <Image
                  src="/images/encounter.png"
                  width={500}  
                  height={200}
                  alt="Combat Encounter"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                After every attack, the LLM then generates a unique piece of flavor text to narrate the battle. We were quite impressed with the quality of text generated here:
              </p>

              <div className="my-8 flex justify-center">
                <Image
                  src="/images/combat.png"
                  width={500}
                  height={200}
                  alt="Battle Narration"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                We also integrated many free visual effects from the Unity Asset store, which were all visually stunning:
              </p>

              <div className="my-8 flex justify-center">
                <Image
                  src="/images/effects.png"
                  width={500}
                  height={200}
                  alt="Visual Effects"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Finally, we designed a poster and presented this project at the 2024 Engineering Expo event, where we presented our game to professors and students in the Tulane community. We also developed ethical guidelines on how to use AI to enhance human-written narratives rather than replace human writers:
              </p>

              <div className="my-8 flex justify-center">
                <Image
                  src="/images/presentation.png"
                  width={500}
                  height={200}
                  alt="Expo Poster"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our final product focused on creating a great overall gameplay experience to showcase how LLMs can enhance video games. In simpler programming languages, we also developed prototypes of more advanced ways to integrate LLMs into video games. These include a RAG (Retrieval Augmented Generation) system to search through a larger database of lore for the video game, and an option for a player to write out their own ideas for spells which various NLP/LLMs algorithms analyze to determine the spell&apos;s damage/effects.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Huge thank you to my team members, Luke Gulson and Ben Russell, as well as our advisors for this project, Professor Aaron Maus and Alireza Shirvani.
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }