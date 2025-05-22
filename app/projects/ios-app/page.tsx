'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Highlight, themes } from 'prism-react-renderer'
import { useState, useEffect } from 'react'

export default function IOSApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/app1.jpg',
    '/images/app2.jpg',
    '/images/app3.jpg',
    '/images/app4.jpg',
    '/images/app5.jpg',
    '/images/app6.jpg',
    '/images/app7.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
              Self Help AI - iOS Mobile App
            </h1>
            <a 
              href="https://apps.apple.com/us/app/selfhelp-ai/id6742257217" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
            >
              View on App Store →
            </a>
          </div>

          {/* Project Overview */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              I developed the full software stack for Self Help AI, an iOS mobile app that integrates user data, 
              function calling &amp; personalization settings to create a ChatBot experience for the purpose of self-help. 
              The end product uses ~30k lines of code across 24 files, and has amassed over 200 App Store downloads since launch.
            </p>

            {/* Slideshow */}
            <div className="relative w-full h-[500px] mb-12 rounded-lg overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={slide}
                    alt={`App screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Core Features</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Notification System</h3>
                <p className="text-gray-700 mb-4">
                  Integrated LLM function calls which allows the LLM to set reminders for the user on request:
                </p>
                <Highlight
                  theme={themes.github}
                  code={`const AVAILABLE_FUNCTIONS = {
  scheduleNotification: {
    name: "scheduleNotification",
    description: "Schedule a notification for the user",
    parameters: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "The title of the notification"
        },
        body: {
          type: "string",
          description: "The body text of the notification"
        },
        timestamp: {
          type: "string",
          description: "The ISO timestamp when the notification should be sent"
        }
      },
      required: ["title", "body", "timestamp"]
    }
  }
};`}
                  language="typescript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrated User Data</h3>
                <p className="text-gray-700 mb-4">
                  Developed a secure local storage system that collects and manages user data from the 
                  onboarding survey to create personalized chat sessions: 
                </p>
                <Highlight
                  theme={themes.github}
                  code={`// AIManager.ts
export const constructSystemPrompt = (
  values: Record<string, any>, 
  baseSystemPrompt: string
) => {
  const name = values['First Name'] || 'there';
  const age = values['Age'] || 'unknown age';
  const gender = values['Gender'] || 'person';
  const growthAreas = values['growth_areas'] || [];
  const badHabits = values['bad_habits'] || [];
  const relationshipStatus = values['relationship_status'] || 'unspecified';
  const employmentStatus = values['employment_status'] || 'unspecified';
  
  let motivationStylePrompt = 'Maintain a balanced coaching approach';
  if (values['motivation_style']) {
    const selectedStyle = MOTIVATION_STYLE_OPTIONS.find(
      option => option.display === values['motivation_style']
    );
    
    if (selectedStyle) {
      motivationStylePrompt = selectedStyle.systemPrompt;
    }
  }

  return \`You are a personal AI assistant focused on helping users 
  with their personal growth and development.

  Here's information about the user:
  Name: \${name}
  Age: \${age}
  Gender: \${gender}
  Relationship Status: \${relationshipStatus}
  Employment: \${employmentStatus}
  Focus areas: \${growthAreas.join(', ')}
  Bad habits to work on: \${badHabits.join(', ')}

  Coaching Style Instructions: \${motivationStylePrompt}\`;`}
                  language="typescript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Guided Exercises & Lessons</h3>
                <p className="text-gray-700 mb-4">
                Custom chats for the purpose of achieving specific goals:
                </p>
                <Highlight
                  theme={themes.github}
                  code={`const EXERCISE_OPTIONS: Exercise[] = [
  {
    id: '  ',
    title: 'Improve Focus',
    description: 'Develop techniques to enhance concentration and mental clarity',
    icon: 'brain',
  },
  {
    id: 'procrastination',
    title: 'Stop Procrastinating',
    description: 'Break free from delay patterns and build productive habits',
    icon: 'clock-time-four-outline',
  },
  {
    id: 'stress',
    title: 'Reduce Stress',
    description: 'Learn effective strategies to manage and minimize stress',
    icon: 'meditation',
  },
  {
    id: 'relationships',
    title: 'Navigate Relationships',
    description: 'Improve communication and strengthen connections',
    icon: 'account-group-outline',
  },
  {
    id: 'recipes',
    title: 'Meal Planning',
    description: 'Get personalized healthy recipe suggestions and meal plans',
    icon: 'food-variant',
  },
  {
    id: 'workout',
    title: 'Work Out Plan',
    description: 'Create a customized fitness routine for your goals',
    icon: 'dumbbell',
  },
];`}
                  language="typescript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalization Settings</h3>
                <p className="text-gray-700 mb-4">
                  Managed data flow from the survey within personalization settings, allowing users to customize their experience:
                </p>
                <Highlight
                  theme={themes.github}
                  code={`export const handleSettingsUpdate = (
  editableSettings: Record<string, any>,
  setLocalSelectedValues: (values: Record<string, any>) => void,
  setCurrentSystemPrompt: (prompt: string) => void,
  setIsEditing: (value: boolean) => void,
  setIsSettingsOpen: (value: boolean) => void,
  systemPrompt: string
) => {
  try {
    const updatedSettings = {
      ...editableSettings,
      'First Name': editableSettings['First Name'],
      'Gender': editableSettings['Gender'],
      'Age': editableSettings['Age'],
      'growth_areas': editableSettings['growth_areas'] || [],
      'relationship_status': editableSettings['relationship_status'],
      'employment_status': editableSettings['employment_status'],
      'bad_habits': editableSettings['bad_habits'] || []
    };
    
    updateSurveyResponses({
      'First Name': updatedSettings['First Name'],
      'Gender': updatedSettings['Gender'],
      'Age': updatedSettings['Age'],
      'growth_areas': updatedSettings['growth_areas'],
      'relationship_status': updatedSettings['relationship_status'],
      'employment_status': updatedSettings['employment_status'],
      'bad_habits': updatedSettings['bad_habits']
    });
    
    setLocalSelectedValues(updatedSettings);
    const newSystemPrompt = AIManager.constructSystemPrompt(updatedSettings, systemPrompt);
    setCurrentSystemPrompt(newSystemPrompt);
    
    setIsEditing(false);
    setIsSettingsOpen(false);
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};`}
                  language="typescript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Animations & UI</h3>
                <p className="text-gray-700 mb-4">
                Custom animations &amp; advanced styling techniques to present with a professional, polished user-interface:
                </p>
                <Highlight
                  theme={themes.github}
                  code={`// Transition effect
useEffect(() => {
  if (isTransitioningOut) {
    // Stop all floating animations
    animationRefs.current.forEach(anim => anim.stop());
    animationRefs.current = [];

    // Start transition animations
    backgroundDots.forEach(dot => {
      const randomAngle = Math.random() * Math.PI * 2;
      const distance = Math.max(width, height) * 1.5;
      const targetX = Math.cos(randomAngle) * distance;
      const targetY = Math.sin(randomAngle) * distance;
      
      const transitionAnimation = Animated.parallel([
        Animated.timing(dot.x, {
          toValue: targetX,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.easeOut,
        }),
        Animated.timing(dot.y, {
          toValue: targetY,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.easeOut,
        }),
        Animated.timing(dot.opacity, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        })
      ]);

      animationRefs.current.push(transitionAnimation);
      transitionAnimation.start();
    });
  }
}, [isTransitioningOut]);`}
                  language="typescript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
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
        </div>
      </main>
    </div>
  )
}
