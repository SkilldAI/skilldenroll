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
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">Skilld Enroll</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
            <a href="#integrations" className="text-gray-600 hover:text-gray-900 font-medium">Integrations</a>
            <a href="#waitlist" className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">Get Started</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Redefine Student 
              <br />
              Recruitment for 
              <br />
              Higher Education 
              <br />
              <span className="text-gray-900">Using Voice AI Agents</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Conversational voice AI agents designed specifically for 
              universities and colleges to streamline student recruitment, 
              answer inquiries 24/7, and create personalized engagement at 
              scale.
            </p>
            <a 
              href="#waitlist" 
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Join Waitlist
            </a>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
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

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      title: "24/7 Voice Assistance",
      description: "Answer prospective student questions anytime with natural voice conversations.",
      icon: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHx2b2ljZSUyMGFzc2lzdGFudHxlbnwwfHx8Ymx1ZXwxNzQ5MTkxNTY3fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Multilingual Support",
      description: "Engage international students in their native languages with fluent voice agents.",
      icon: "https://img.icons8.com/fluency/96/language.png"
    },
    {
      title: "Personalized Outreach",
      description: "Conduct personalized voice outreach campaigns that sound natural and engaging.",
      icon: "https://images.pexels.com/photos/32213306/pexels-photo-32213306.jpeg"
    },
    {
      title: "Conversation Analytics",
      description: "Gain insights from every voice interaction to improve recruitment strategies.",
      icon: "https://img.icons8.com/fluency/96/analytics.png"
    }
  ];

  return (
    <section id="features" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
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
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
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
      // Check if Supabase is available
      if (!supabaseUrl || !supabaseKey) {
        setError('Configuration error: Supabase credentials not found. Please check environment variables.');
        return;
      }

      // Use direct REST API call instead of Supabase client
      const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.workEmail,
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
                placeholder="Enter your work email"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
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
                Call Centre Agents *
              </label>
              <select
                id="callCentreAgents"
                name="callCentreAgents"
                required
                value={formData.callCentreAgents}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
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
              className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">Skilld Enroll</div>
            <p className="text-gray-400 mb-4">
              Transforming student recruitment with AI-powered voice agents for higher education institutions.
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
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#waitlist" className="hover:text-white transition-colors">About Us</a></li>
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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <WaitlistForm />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default SkilldEnrollApp;