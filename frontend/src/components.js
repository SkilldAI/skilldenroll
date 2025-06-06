import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
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
                src="https://images.unsplash.com/photo-1636829147637-6b88c84fb6e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMGFzc2lzdGFudHxlbnwwfHx8Ymx1ZXwxNzQ5MTkxNTY3fDA&ixlib=rb-4.1.0&q=85"
                alt="Voice AI Technology"
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

// Waitlist Form Component
const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    institutionName: '',
    role: '',
    studentCount: ''
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
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.workEmail,
            institution: formData.institutionName,
            role: formData.role,
            student_count: formData.studentCount
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        setError('There was an error submitting your information. Please try again.');
      } else {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          workEmail: '',
          institutionName: '',
          role: '',
          studentCount: ''
        });
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
              <label htmlFor="studentCount" className="block text-sm font-medium text-gray-700 mb-2">
                Student Count *
              </label>
              <select
                id="studentCount"
                name="studentCount"
                required
                value={formData.studentCount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
              >
                <option value="">Select student count</option>
                <option value="Under 1,000">Under 1,000</option>
                <option value="1,000 - 5,000">1,000 - 5,000</option>
                <option value="5,000 - 10,000">5,000 - 10,000</option>
                <option value="10,000 - 20,000">10,000 - 20,000</option>
                <option value="Over 20,000">Over 20,000</option>
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
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
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
      <WaitlistForm />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default SkilldEnrollApp;