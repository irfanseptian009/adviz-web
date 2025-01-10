import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const token = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;

  const mapConfig = {
    longitude: 106.83902712917678,
    latitude: -6.193666433316111,
    zoom: 15,
    markers: [
      {
        longitude: 106.83902712917678,
        latitude: -6.193666433316111,
        title: 'Gedung Arva Cikini',
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Our Location",
      content: (
        <>
          Arva Building, 4th floor, Cikini Raya Street No. 60,<br />
          Jakarta Pusat, Provinsi DKI Jakarta
        </>
      )
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone Number",
      content: "+62 21 1234 5678"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Address",
      content: "marketing@adviz.id"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      content: (
        <>
          Monday - Friday: 9:00 AM - 5:00 PM<br />
          Saturday - Sunday: Closed
        </>
      )
    }
  ];

  return (
    <div className=' min-h-screen p-8'>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto  backdrop-blur-md  rounded-3xl p-8"
        style={{   boxShadow: "45px 35px 220px -45px blue", }}
      >
        {/* Company Profile Section */}
        <motion.section 
          variants={itemVariants}
          className="relative text-white py-12"
        >
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Contact Us
              </motion.h1>
              <motion.p 
                className="text-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Building Tomorrow&apos;s Solutions Today
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div 
                variants={containerVariants}
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
                    We&apos;d love to hear from you. Please fill out the form or contact us using the information below.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-start space-x-4"
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100/50 backdrop-blur-sm flex items-center justify-center border border-blue-200/30"
                        whileHover={{ 
                          rotate: 360,
                          backgroundColor: "white",
                          color: "white",
                          transition: { duration: 0.5 }
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">{item.title}</h3>
                        <p className="text-white-300">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Map Section */}
              <motion.div 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="h-96 w-full rounded-lg overflow-hidden shadow-md border border-white/10 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Map
                  mapboxAccessToken={token}
                  initialViewState={{
                    longitude: mapConfig.longitude,
                    latitude: mapConfig.latitude,
                    zoom: mapConfig.zoom,
                  }}
                  style={{ width: '100%', height: '100%' }}
                  mapStyle="mapbox://styles/mapbox/streets-v12"
                >
                  {mapConfig.markers.map((marker, index) => (
                    <Marker
                      key={index}
                      longitude={marker.longitude}
                      latitude={marker.latitude}
                      anchor="bottom"
                    >
                      <motion.div 
                        className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <MapPin className="w-4 h-4 text-white" />
                      </motion.div>
                    </Marker>
                  ))}
                </Map>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ContactUs;
