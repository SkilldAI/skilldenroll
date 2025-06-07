import React, { useState } from 'react';

// Voice Agent Infographic Page Component
const VoiceAIArchitecturePage = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const flowSteps = [
    {
      id: 1,
      title: "Speech Input",
      description: "Student speaks into phone or device",
      icon: "🎤",
      color: "from-blue-500 to-blue-600",
      tech: "Audio Capture",
      details: "High-quality audio input processing"
    },
    {
      id: 2,
      title: "Speech-to-Text",
      description: "Convert voice to text using advanced ASR",
      icon: "🗣️",
      color: "from-green-500 to-green-600",
      tech: "ASR Engine",
      details: "Real-time transcription with 99% accuracy"
    },
    {
      id: 3,
      title: "Natural Language Understanding",
      description: "AI understands intent and context",
      icon: "🧠",
      color: "from-purple-500 to-purple-600",
      tech: "NLU Processing",
      details: "Intent recognition & entity extraction"
    },
    {
      id: 4,
      title: "Knowledge Base Query",
      description: "Access institutional data and policies",
      icon: "📚",
      color: "from-orange-500 to-orange-600",
      tech: "Knowledge Graph",
      details: "University-specific information retrieval"
    },
    {
      id: 5,
      title: "Response Generation",
      description: "Generate personalized, contextual response",
      icon: "⚡",
      color: "from-red-500 to-red-600",
      tech: "LLM Processing",
      details: "Context-aware response generation"
    },
    {
      id: 6,
      title: "Text-to-Speech",
      description: "Convert response to natural voice",
      icon: "🔊",
      color: "from-teal-500 to-teal-600",
      tech: "TTS Engine",
      details: "Natural voice synthesis"
    },
    {
      id: 7,
      title: "Voice Output",
      description: "Student hears natural AI response",
      icon: "👂",
      color: "from-indigo-500 to-indigo-600",
      tech: "Audio Output",
      details: "High-fidelity voice delivery"
    }
  ];

  React.useEffect(() => {
    document.title = 'Voice AI Architecture - Skilld Enroll';
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % flowSteps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a 
                href="/" 
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                Skilld Enroll
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-300 hover:text-white font-medium transition-colors">← Back to Home</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-lg">
              Technical Deep Dive
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Voice AI Architecture
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Explore the sophisticated technology stack and real-time processing pipeline that powers our intelligent voice agents for higher education recruitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-gray-700 px-4 py-2 rounded-full">Advanced ASR</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Natural Language Understanding</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Real-time Processing</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Neural TTS</span>
            </div>
          </div>

          {/* Central Processing Unit Visualization */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Spinning Inner Circle */}
                <div className="absolute inset-4 border-4 border-cyan-400 rounded-full animate-spin opacity-50"></div>
                <div className="absolute inset-8 border-2 border-blue-300 rounded-full animate-ping"></div>
                
                {/* Central Brain */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="text-sm font-bold">AI Core</div>
                  <div className="text-xs text-gray-200">Neural Network</div>
                </div>

                {/* Floating Data Particles */}
                <div className="absolute top-4 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="absolute top-8 right-6 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-200"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-300 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-16">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-600 transform -translate-y-1/2 z-0">
                    <div 
                      className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ${
                        activeFlow >= index ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                    {/* Animated Arrow */}
                    {activeFlow >= index && (
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                        <div className="w-0 h-0 border-l-4 border-l-cyan-400 border-t-2 border-t-transparent border-b-2 border-b-transparent animate-pulse"></div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step Card */}
                <div 
                  className={`relative z-10 bg-gray-800 border-2 p-4 rounded-xl transition-all duration-500 transform h-72 flex flex-col ${
                    activeFlow === index 
                      ? 'border-cyan-400 scale-105 shadow-2xl shadow-cyan-400/50' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  {/* Step Icon & Number */}
                  <div className="flex flex-col items-center mb-3">
                    <div 
                      className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold mb-2 transition-all duration-300 ${
                        activeFlow === index ? 'animate-pulse' : ''
                      }`}
                    >
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    <div className="bg-gray-700 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                      {step.tech}
                    </div>
                  </div>

                  {/* Step Content - Flex grow to fill remaining space */}
                  <div className="text-center flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-white leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-xs leading-tight">
                        {step.description}
                      </p>
                    </div>
                    <p className="text-cyan-400 text-xs font-medium mt-2 leading-tight">
                      {step.details}
                    </p>
                  </div>

                  {/* Processing Indicator */}
                  {activeFlow === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;2sec</div>
                <p className="text-gray-300 text-sm">End-to-end response time</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.2%</div>
                <p className="text-gray-300 text-sm">Speech recognition accuracy</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Languages</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                <p className="text-gray-300 text-sm">Supported languages</p>
              </div>
            </div>
          </div>

          {/* Data Flow Visualization */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Real-Time Data Processing</h3>
            
            <div className="flex justify-center items-center space-x-8">
              {/* Input */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <span className="text-3xl">📞</span>
                </div>
                <div className="text-sm text-gray-300">Voice Input</div>
              </div>

              {/* Processing Arrows */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 bg-cyan-400 rounded-full animate-bounce`}
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* AI Processing */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 relative">
                  <span className="text-3xl">🤖</span>
                  <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin opacity-30"></div>
                </div>
                <div className="text-sm text-gray-300">AI Processing</div>
              </div>

              {/* Processing Arrows */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 bg-green-400 rounded-full animate-bounce`}
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <span className="text-3xl">🔊</span>
                </div>
                <div className="text-sm text-gray-300">Voice Response</div>
              </div>
            </div>

            {/* Processing Time Indicator */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-gray-700 px-6 py-3 rounded-full">
                <span className="text-cyan-400 font-bold">Average Processing Time: </span>
                <span className="text-white font-bold">1.8 seconds</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Implement This Technology?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our advanced voice AI architecture is ready to transform your student recruitment process with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#waitlist" 
                className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a 
                href="/" 
                className="inline-block border border-gray-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoiceAIArchitecturePage;