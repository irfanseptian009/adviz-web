import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send,
  Briefcase,
  Users,
  Target,
  BarChart2,
  Globe,
  CheckCircle,
  Phone,
  Mail,
  Building2
} from 'lucide-react';
import { Footer } from '../components';

const ConsultantInquiry = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [selectedServices, setSelectedServices] = useState([]);

  const consultingServices = [
    {
      id: 'strategy',
      icon: <Target className="w-6 h-6" />,
      title: 'Strategy & Planning',
      description: 'Developing business strategies and long-term planning'
    },
    {
      id: 'operations',
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Operational Optimization',
      description: 'Enhancing efficiency and effectiveness of business processes'
    },
    {
      id: 'transformation',
      icon: <Globe className="w-6 h-6" />,
      title: 'Digital Transformation',
      description: 'Implementing technology and digital transformation'
    },
    {
      id: 'management',
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Change Management',
      description: 'Managing organizational changes and company culture'
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br to-slate-900 via-black from-orange-900">
      {/* Hero Section */}
      <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-10 mb-6">
              Transform Your Business with Professional Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Our team of experienced consultants is ready to help develop and 
              optimize your business towards success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-xl p-8" style={{   boxShadow: "0px 20px 60px -20px orange", }}
          >
            <h2 className="text-2xl font-semibold text-white mb-8">Free Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="CEO / Director"
                  />
                </div>
              </div>

              {/* Company Info */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" >
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Example Corp Indonesia"
                />
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4" >
                  Required Services
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {consultingServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all
                        ${selectedServices.includes(service.id)
                          ? 'border-orange-500 bg-slate-700'
                          : 'border-gray-600 hover:border-orange-300'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${
                          selectedServices.includes(service.id)
                            ? 'text-orange-500'
                            : 'text-gray-400'
                        }`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{service.title}</h4>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" >
                  Project Description
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Describe the business challenges you are facing..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus !== 'idle'}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 
                  ${formStatus === 'idle' ? 'bg-orange-600 hover:bg-orange-700' : 
                    formStatus === 'submitting' ? 'bg-orange-400' : 'bg-green-500'} 
                  transition-colors`}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Consultation Request</span>
                  </>
                )}
                {formStatus === 'submitting' && (
                  <span>Sending...</span>
                )}
                {formStatus === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Successfully Sent</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 " 
          >
            {/* Why Choose Us */}
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-xl p-8"  style={{   boxShadow: "0px 20px 60px -20px orange", }}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Expert Team</h4>
                    <p className="text-gray-400">Experienced consultants with a track record of success across various industries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Measurable Solutions</h4>
                    <p className="text-gray-400">Data-driven approaches with tangible, measurable results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Global Network</h4>
                    <p className="text-gray-400">Access to a global network of partners and resources for optimal solutions.</p>
                  </div>
                </div>
              </div>
            </div>

          

            {/* Contact Info */}
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-xl p-8"  style={{   boxShadow: "0px 20px 60px -20px orange", }}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span>+62 21 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <span>marketing@adviz.id</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Building2 className="w-5 h-5 text-orange-600" />
                  <span> Arva Building, 4th floor, Cikini Raya Street No. 60,<br />
                  Jakarta Pusat, Provinsi DKI Jakarta</span>
                </div>
              </div>
            </div>
          </motion.div>
        
        </div>
    
      </div>
      <Footer/>
    </div>
  );
};

export default ConsultantInquiry;
