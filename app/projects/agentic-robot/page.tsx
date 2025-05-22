'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Highlight, themes } from 'prism-react-renderer'

export default function AgenticRobot() {
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
              Multimodal Voice-Controlled Robot
            </h1>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/robot1.png"
                alt="Robot front view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/robot2.png"
                alt="Robot side view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I developed a multimodal robot with Rasberry Pi that can interpret voice commands, control 
              movements, analyze its surroundings, and respond with emotionally expressive speech. This involved
              integrating three seperate AI models (Speech-to-Text, a Multimodal LLM, and Text-to-Speech) with
              a Rasberry Pi, controller board, motors, camera, microphone, and speaker. 
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Hardware Components</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The main hardware component of our robot is a Raspberry Pi—which is, in essence, a tiny computer with HDMI, USB, audio, and network ports. 
              We connect this piece to a controller board provided by the TurboPi Robot kit, which allows us to run software to directly interface 
              with the other hardware components.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The controller board attaches to three other components provided by the kit:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>7.4V lithium battery pack</li>
              <li>4 TT DC gear motors (and wheels)</li>
              <li>Rasberry Pi Camera Module</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              These are mounted on a frame, and then attached to two 
              additional components:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Mini USB microphone (audio input)</li>
              <li>Mini Speaker (audio output)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Finally, we use an SD card to load an operating system onto the Raspberry Pi, 
              along with a configuration to automatically connect with home WiFi. After connecting, 
              we&apos;re able to access it directly through SSH, allowing us to write our software to directly
             control the hardware components.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Software Implementation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use GPT-4o as our language model, as it provides strong multimodal capabilities 
              (ability to understand images without the need for an addition model) and an easy framework for adding 
              function calls, allowing it to autonomously activate scripts to control the robot:
            </p>

            <div className="my-8 bg-gray-50 rounded-lg overflow-hidden">
              <Highlight
                theme={themes.github}
                code={`assistant = client.beta.assistants.create(
    name="VoiceBot",
    instructions="You are Jarvis, Bobby's fun AI robot.",
    model="gpt-3.5-turbo",
    tools=[
        {
            "type": "function",
            "function": {
                "name": "move_forward",
                "description": "Move forward for a number of seconds.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "t": {
                            "type": "number",
                            "description": "Duration in seconds"
                        }
                    },
                    "required": ["t"]
                }
            }
        },`}
                language="python"
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

            <p className="text-gray-700 leading-relaxed mb-6">
              The main loop combines GPT-4o with two other components: a speech-text model, to convert voice commands to text, 
              and a text-to-speech model from Hume AI, which generates emotionally expressive audio output from GPT-4o responses:
            </p>

            <div className="my-8 bg-gray-50 rounded-lg overflow-hidden">
              <Highlight
                theme={themes.github}
                code={`async def speak_with_hume(text):
    utterance = PostedUtterance(text=text, voice=voice, description="Jarvis voice")
    
    with get_audio_player() as player:
        async for snippet in hume_client.tts.synthesize_json_streaming(
            utterances=[utterance],
            format=FormatPcm(type="pcm"),
        ):
            player.send_audio(base64.b64decode(snippet.audio))

def get_transcript():
    with mic as source:
        recognizer.adjust_for_ambient_noise(source, duration=0.3)
        try:
            audio = recognizer.listen(source, timeout=3, phrase_time_limit=3)
            return recognizer.recognize_google(audio, language="en-US")
        except Exception as e:
            print(f"Error: {e}")
            return None

async def run_conversation():
    while True:
        try:
            transcript = get_transcript()
            if not transcript:
                continue
            print(f"You said: {transcript}")

            client.beta.threads.messages.create(
                thread_id=thread.id, 
                role="user", 
                content=transcript
            )
            run = client.beta.threads.runs.create_and_poll(
                thread_id=thread.id, 
                assistant_id=assistant.id
            )

            if run.required_action:
                for call in run.required_action.submit_tool_outputs.tool_calls:
                    if call.function.name == "move_forward":
                        move_forward(call.function.arguments.t)
                    elif call.function.name == "capture_and_analyze_image":
                        success, description = await capture_and_analyze_image(client)

            new_messages = client.beta.threads.messages.list(
                thread_id=thread.id, 
                order="desc", 
                limit=1
            )
            reply = new_messages.data[0].content[0].text.value.strip()
            await speak_with_hume(reply)

        except KeyboardInterrupt:
            print("\\nShutting down.")
            break`}
                language="python"
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

            <p className="text-gray-700 leading-relaxed mb-6">
              Each loop, GPT-4o can autonomously run Python functions defined with imports, allowing it to move and take pictures. 
              These utilize modified functions from the fast-hiwonder GitHub repository (for movement) and the python OpenCV library 
              (for camera access):
            </p>

            <div className="my-8 bg-gray-50 rounded-lg overflow-hidden">
              <Highlight
                theme={themes.github}
                code={`async def capture_and_analyze_image(client):
    try:
        # Configure camera settings
        subprocess.run(['v4l2-ctl', '-d', '/dev/video0', '--set-fmt-video=width=640,height=480,pixelformat=YUYV'])
        subprocess.run(['v4l2-ctl', '-d', '/dev/video0', '--stream-mmap', '--stream-count=1', '--stream-to=test_image.raw'])
        
        # Convert raw image to jpg
        subprocess.run([
            'ffmpeg', '-f', 'rawvideo',
            '-vcodec', 'rawvideo',
            '-s', '640x480',
            '-pix_fmt', 'yuyv422',
            '-i', 'test_image.raw',
            '-vf', 'hflip,vflip',
            '-f', 'image2',
            '-vcodec', 'mjpeg',
            '-y', 'test_image.jpg'
        ])
        
        # Clean up raw file
        subprocess.run(['rm', 'test_image.raw'])
    
        # Encode image for GPT-4o
        with open('test_image.jpg', "rb") as image_file:
            base64_image = base64.b64encode(image_file.read()).decode('utf-8')`}
                language="python"
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
            <p className="text-gray-700 leading-relaxed mb-6">
            In the future, I will be trying to develop a multi-agent system to allow the AI to interpret and execute 
            higher-level tasks. Instead of directly listening to and responding to a single command at a time (ie, 
            &apos;move forward&apos;), the aim is for it to be able to execute something more abstract (&apos;find the kitchen&apos;) 
            and then execute a series of functions to complete it (involving movement, taking pictures, processing information). 
            As robotics becomes more accessible, all of this NLP stuff is about to get a lot cooler!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
