import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with error handling
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.warn('Supabase initialization failed:', error);
  }
}

// Header Component
const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div 
              className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
              onClick={scrollToTop}
            >
              Skilld Enroll
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="#integrations" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Integrations</a>
            <a href="#waitlist" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">Get Started</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-16 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Redefine Student 
              <br />
              Recruitment for 
              <br />
              Higher Education 
              <br />
              <span className="text-yellow-300">Using Voice AI Agents</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Conversational voice AI agents designed specifically for 
              universities and colleges to streamline student recruitment, 
              answer inquiries 24/7, and create personalized engagement at 
              scale.
            </p>
            <a 
              href="#waitlist" 
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-yellow-300 transition-colors text-lg shadow-lg"
            >
              Join Waitlist
            </a>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1485579149621-3123dd979885"
                alt="Professional Voice Technology"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Animation Component
const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Student Inquiry",
      description: "Prospective student calls or messages your institution",
      icon: "👨‍🎓",
      color: "from-blue-500 to-blue-600",
      animation: "bounce"
    },
    {
      id: 2,
      title: "AI Voice Agent Responds",
      description: "Our AI agent answers instantly with natural conversation",
      icon: "🤖",
      color: "from-purple-500 to-purple-600",
      animation: "pulse"
    },
    {
      id: 3,
      title: "Intelligent Processing",
      description: "AI understands context, intent, and provides relevant information",
      icon: "🧠",
      color: "from-green-500 to-green-600",
      animation: "ping"
    },
    {
      id: 4,
      title: "Personalized Response",
      description: "Delivers tailored information about programs, admissions, and next steps",
      icon: "💬",
      color: "from-orange-500 to-orange-600",
      animation: "spin"
    },
    {
      id: 5,
      title: "Lead Qualification",
      description: "AI qualifies the prospect and schedules follow-up actions",
      icon: "✅",
      color: "from-teal-500 to-teal-600",
      animation: "bounce"
    }
  ];

  React.useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-lg">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Voice AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our intelligent voice agents transform student interactions from first contact to enrollment
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative">
          {/* Central Voice Wave Animation */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Animated Voice Waves */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-700 animate-ping"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-800 animate-bounce"></div>
                <div className="relative z-10 text-4xl">🎤</div>
              </div>
              
              {/* Floating Voice Indicators */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -top-4 -right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200"></div>
              <div className="absolute -bottom-8 -left-6 w-5 h-5 bg-green-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -right-6 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>

          {/* Steps Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0">
                    <div 
                      className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ${
                        activeStep >= index ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                )}

                {/* Step Card */}
                <div 
                  className={`relative z-10 bg-white p-6 rounded-xl shadow-lg border-2 transition-all duration-500 transform ${
                    activeStep === index 
                      ? 'border-blue-500 scale-105 shadow-2xl' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center mb-4">
                    <div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mb-2 transition-all duration-300 ${
                        activeStep === index ? `animate-${step.animation}` : ''
                      }`}
                    >
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      Step {step.id}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Active Step Indicator */}
                  {activeStep === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Conversation Bubbles Animation */}
          <div className="mt-16 relative">
            <div className="flex justify-center space-x-8">
              {/* Student Bubble */}
              <div className={`bg-blue-100 p-4 rounded-2xl rounded-bl-none max-w-xs transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-gray-800 text-sm font-medium">
                  "Hi, I'm interested in your computer science program. What are the admission requirements?"
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Prospective Student</span>
                </div>
              </div>

              {/* Voice Wave Between */}
              <div className="flex items-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-8 bg-gradient-to-t from-blue-400 to-purple-600 rounded animate-pulse"></div>
                  <div className="w-2 h-12 bg-gradient-to-t from-blue-500 to-purple-700 rounded animate-pulse delay-100"></div>
                  <div className="w-2 h-6 bg-gradient-to-t from-blue-400 to-purple-600 rounded animate-pulse delay-200"></div>
                  <div className="w-2 h-10 bg-gradient-to-t from-blue-500 to-purple-700 rounded animate-pulse delay-300"></div>
                </div>
              </div>

              {/* AI Response Bubble */}
              <div className={`bg-purple-100 p-4 rounded-2xl rounded-br-none max-w-xs transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-gray-800 text-sm font-medium">
                  "Great choice! For our CS program, you'll need a 3.0 GPA minimum, SAT scores, and completed math prerequisites. I can schedule a virtual tour for you!"
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <span className="text-xs text-gray-600">Skilld AI Agent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">&lt;2s</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Query Resolution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Audio Demo Section Component
const AudioDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = React.useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-lg">
            Live Demo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hear Our Voice AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Listen to a real conversation between a prospective student and our AI voice agent
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Audio Player */}
          <div className="flex flex-col items-center">
            {/* Audio Element */}
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              preload="metadata"
            >
              <source src="/demo-conversation.wav" type="audio/wav" />
              <source src="/demo-conversation.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Visual Waveform Representation */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-1 items-end h-16">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 ${
                      isPlaying 
                        ? `animate-pulse h-${Math.floor(Math.random() * 12) + 4}` 
                        : 'h-4'
                    }`}
                    style={{
                      animationDelay: `${i * 100}ms`,
                      height: isPlaying ? `${Math.random() * 40 + 20}px` : '16px'
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-200 mb-6"
            >
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* Progress Bar */}
            <div className="w-full max-w-md mb-4">
              <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Time Display */}
            <div className="flex justify-between w-full max-w-md text-sm text-gray-500 mb-6">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Conversation Labels */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <div className="text-sm font-medium text-gray-700">Prospective Student</div>
                <div className="text-xs text-gray-500">Asking about programs</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="text-sm font-medium text-gray-700">Skilld AI Agent</div>
                <div className="text-xs text-gray-500">Providing instant help</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Experience natural, intelligent conversations that convert prospects into enrolled students
          </p>
          <a 
            href="#waitlist" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
          >
            Get Your AI Voice Agent
          </a>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      title: "24/7 Voice Assistance",
      description: "Answer prospective student questions anytime with natural voice conversations.",
      icon: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHx2b2ljZSUyMGFzc2lzdGFudHxlbnwwfHx8Ymx1ZXwxNzQ5MTkxNTY3fDA&ixlib=rb-4.1.0&q=85",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Multilingual Support",
      description: "Engage international students in their native languages with fluent voice agents.",
      icon: "https://img.icons8.com/fluency/96/language.png",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Personalized Outreach",
      description: "Conduct personalized voice outreach campaigns that sound natural and engaging.",
      icon: "https://images.pexels.com/photos/32213306/pexels-photo-32213306.jpeg",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Conversation Analytics",
      description: "Gain insights from every voice interaction to improve recruitment strategies.",
      icon: "https://img.icons8.com/fluency/96/analytics.png",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Smart Lead Qualification",
      description: "Automatically qualify prospects based on conversation patterns, academic interests, and enrollment readiness scores.",
      icon: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Automated Appointment Scheduling",
      description: "AI agents schedule campus visits, virtual tours, and counselor meetings directly through voice conversations.",
      icon: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Real-time Escalation",
      description: "Seamlessly transfer complex inquiries to human recruiters while maintaining conversation context and history.",
      icon: "https://images.pexels.com/photos/6667680/pexels-photo-6667680.jpeg",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Custom Voice Training",
      description: "Train AI agents with your institution's specific programs, policies, and brand voice for authentic conversations.",
      icon: "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="features" className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-lg">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Voice AI Recruitment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skilld Enroll combines advanced voice AI technology to help your institution attract, 
            engage, and recruit the right students through natural conversations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-cover rounded" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Integrations Section Component
const IntegrationsSection = () => {
  const integrationCategories = [
    {
      name: "CRM Integrations",
      description: "Connect with your existing CRM to maintain unified student data and streamline your enrollment pipeline.",
      icon: "https://images.unsplash.com/photo-1649429398909-db7ae841c386",
      items: [
        {
          name: "Salesforce",
          status: "Available",
          type: "Enterprise CRM",
          description: "Sync student data and track enrollment pipeline in your existing Salesforce CRM.",
          keyFeatures: ["Lead Management", "Pipeline Tracking", "Custom Fields", "Real-time Sync"]
        },
        {
          name: "HubSpot", 
          status: "Available",
          type: "Marketing CRM",
          description: "Connect with HubSpot to manage leads and automate enrollment marketing campaigns.",
          keyFeatures: ["Contact Management", "Email Automation", "Analytics", "Workflow Integration"]
        },
        {
          name: "Pipedrive",
          status: "Available", 
          type: "Sales CRM",
          description: "Streamline your enrollment sales process with Pipedrive's visual pipeline management.",
          keyFeatures: ["Deal Tracking", "Activity Management", "Custom Pipelines", "Reporting"]
        },
        {
          name: "Zoho CRM",
          status: "Coming Soon",
          type: "Business CRM", 
          description: "Integrate with Zoho's comprehensive CRM suite for complete student lifecycle management.",
          keyFeatures: ["Lead Scoring", "Workflow Automation", "Custom Modules", "Analytics"]
        }
      ]
    },
    {
      name: "University Systems",
      description: "Integrate with your Student Information Systems, Learning Management Systems, and other campus platforms.",
      icon: "https://images.pexels.com/photos/18069083/pexels-photo-18069083.png",
      items: [
        {
          name: "Banner ERP",
          status: "Available",
          type: "Student Information System",
          description: "Seamlessly integrate with Ellucian Banner for student information management.",
          keyFeatures: ["Student Records", "Academic History", "Financial Aid", "Registration"]
        },
        {
          name: "PeopleSoft Campus",
          status: "Available", 
          type: "ERP System",
          description: "Connect with Oracle PeopleSoft for comprehensive campus management integration.",
          keyFeatures: ["Student Administration", "Financial Management", "HR Integration", "Reporting"]
        },
        {
          name: "Workday Student",
          status: "Available",
          type: "Cloud SIS",
          description: "Integrate with Workday's cloud-based student information system.",
          keyFeatures: ["Student Lifecycle", "Academic Planning", "Financial Aid", "Analytics"]
        },
        {
          name: "Blackboard",
          status: "Available",
          type: "Learning Management",
          description: "Connect with Blackboard Learn for academic and enrollment data synchronization.",
          keyFeatures: ["Course Management", "Student Engagement", "Grade Integration", "Analytics"]
        }
      ]
    },
    {
      name: "Communication Channels",
      description: "Reach students where they are with SMS, WhatsApp, email, and team collaboration tools.",
      icon: "https://images.pexels.com/photos/32342292/pexels-photo-32342292.jpeg", 
      items: [
        {
          name: "Twilio SMS",
          status: "Available",
          type: "SMS Platform",
          description: "Send automated SMS notifications and reminders to prospective students.",
          keyFeatures: ["Bulk SMS", "Two-way Messaging", "Delivery Reports", "Global Reach"]
        },
        {
          name: "WhatsApp Business",
          status: "Available",
          type: "Messaging Platform", 
          description: "Engage students through WhatsApp with automated messages and chatbots.",
          keyFeatures: ["Rich Media", "Chatbot Integration", "Broadcast Lists", "Analytics"]
        },
        {
          name: "SendGrid",
          status: "Available",
          type: "Email Platform",
          description: "Deliver transactional and marketing emails with high deliverability rates.",
          keyFeatures: ["Email Templates", "A/B Testing", "Analytics", "Deliverability Tools"]
        },
        {
          name: "Slack",
          status: "Available",
          type: "Team Communication",
          description: "Get real-time notifications and collaborate with your enrollment team.",
          keyFeatures: ["Real-time Alerts", "Team Collaboration", "Custom Workflows", "File Sharing"]
        }
      ]
    },
    {
      name: "Analytics & Reporting",
      description: "Visualize your enrollment data with powerful analytics and business intelligence tools.",
      icon: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
      items: [
        {
          name: "Google Analytics",
          status: "Available",
          type: "Web Analytics",
          description: "Track website engagement and enrollment funnel performance.",
          keyFeatures: ["Web Analytics", "Conversion Tracking", "Custom Events", "Reporting"]
        },
        {
          name: "Tableau",
          status: "Available", 
          type: "Business Intelligence",
          description: "Create powerful visualizations and dashboards for enrollment data.",
          keyFeatures: ["Data Visualization", "Interactive Dashboards", "Custom Reports", "Real-time Data"]
        },
        {
          name: "Power BI",
          status: "Available",
          type: "Business Intelligence", 
          description: "Build comprehensive enrollment analytics with Microsoft Power BI.",
          keyFeatures: ["Data Modeling", "Interactive Reports", "Real-time Dashboards", "Collaboration"]
        }
      ]
    }
  ];

  return (
    <section id="integrations" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            50+ Integrations Available
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Connect Everything
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Skilld Enroll seamlessly integrates with your existing systems, CRMs, communication channels, and university platforms. 
            No disruption to your current workflow—just enhanced capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#waitlist" 
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Request Integration
            </a>
            <a 
              href="#integrations" 
              className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Integrations
            </a>
          </div>
        </div>

        {/* Integration Categories */}
        <div className="space-y-16">
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <img 
                    src={category.icon} 
                    alt={category.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-gray-900">Key Features:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.keyFeatures.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Integration?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see the integration you need? Our team can build custom connections to your existing systems. 
              Contact us to discuss your specific requirements.
            </p>
            <a 
              href="#waitlist" 
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Integration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    institutionName: '',
    role: '',
    callCentreAgents: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Check if Supabase credentials are available
      if (!supabaseUrl || !supabaseKey) {
        console.error('Missing Supabase environment variables:', {
          supabaseUrl: supabaseUrl ? 'Present' : 'Missing',
          supabaseKey: supabaseKey ? 'Present' : 'Missing'
        });
        setError('Configuration error: Supabase credentials not found. Please contact support.');
        return;
      }

      // Use direct REST API call to Supabase
      const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.workEmail,
          phone_number: formData.phoneNumber,
          institution: formData.institutionName,
          role: formData.role,
          student_count: formData.callCentreAgents
        })
      });

      if (response.status === 201) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          workEmail: '',
          phoneNumber: '',
          institutionName: '',
          role: '',
          callCentreAgents: ''
        });
      } else {
        console.error('Supabase error:', await response.text());
        setError('There was an error submitting your information. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">You've been successfully added to our waitlist. We'll be in touch soon!</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Submit Another Entry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-600">
            Be among the first institutions to experience the future of voice AI recruitment. 
            Get early access and exclusive benefits.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                required
                value={formData.workEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your work email"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
                Institution Name *
              </label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                required
                value={formData.institutionName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your institution name"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Your Role *
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                <option value="">Select your role</option>
                <option value="Admissions Director">Admissions Director</option>
                <option value="Marketing Director">Marketing Director</option>
                <option value="Enrollment Manager">Enrollment Manager</option>
                <option value="Recruitment Officer">Recruitment Officer</option>
                <option value="Vice President">Vice President</option>
                <option value="President">President</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="callCentreAgents" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Call Centre Agents *
              </label>
              <select
                id="callCentreAgents"
                name="callCentreAgents"
                required
                value={formData.callCentreAgents}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                <option value="">Select number of call centre agents</option>
                <option value="0-15">0-15</option>
                <option value="16-25">16-25</option>
                <option value="26-50">26-50</option>
                <option value="51-100">51-100</option>
                <option value="101-200">101-200</option>
                <option value="200+">200+</option>
              </select>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-[1.02]"
            >
              {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By joining our waitlist, you agree to receive updates about Skilld Enroll. 
              We respect your privacy and won't spam you.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section Component
const FinalCTASection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to transform your recruitment with voice AI?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join leading universities and colleges that use Enroll's voice agents to 
          streamline recruitment and boost enrollment rates.
        </p>
        <a 
          href="#waitlist" 
          className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors text-lg"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">Skilld Enroll</div>
            <p className="text-gray-400 mb-4">
              Transforming student recruitment with AI-powered voice agents for higher education institutions.
            </p>
            <p className="text-gray-400">
              Learn more about our company at{' '}
              <a 
                href="https://skilld.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                skilld.ai
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#waitlist" className="hover:text-white transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Skilld Enroll. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const SkilldEnrollApp = () => {
  React.useEffect(() => {
    document.title = 'Skilld Enroll - Voice AI Student Recruitment Platform';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <WaitlistForm />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default SkilldEnrollApp;