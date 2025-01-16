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

 


  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6 text-orange-600" />,
      title: "Our Location",
      content: (
        <>
          Arva Building, 4th floor, Cikini Raya Street No. 60,<br />
          Jakarta Pusat, Provinsi DKI Jakarta
        </>
      )
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-600" />,
      title: "Phone Number",
      content: "+62 21 1234 5678"
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-600" />,
      title: "Email Address",
      content: "marketing@adviz.id"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Business Hours",
      content: (
        <>
          Monday - Friday: 8:30 AM - 5:30 PM<br />
          Saturday - Sunday: Closed
        </>
      )
    }
  ];

  return (
    <div className=' min-h-screen mt-10 p-8'>
      <div 
        className="w-full max-w-7xl mx-auto  backdrop-blur-md  rounded-3xl p-8"
        style={{   boxShadow: "0px 20px 60px -20px blue", }}
      >
        {/* Company Profile Section */}
        <section 
          className="relative text-white py-12"
        >
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-3"
              >
                Contact Us
              </h1>
              <p 
                className="text-xl"
              >
                Building Tomorrow&apos;s Solutions Today
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div 
            
                className="space-y-8"
              >
                <div >
                  <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
                    We&apos;d love to hear from you. Please fill out the form or contact us using the information below.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4"
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 backdrop-blur-sm flex items-center justify-center border border-blue-200/30"
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
                        <p className="text-gray-500">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Section */}
              <div 
              className='p-2 m-5 rounded-lg border-4 border-slate-800'>
                <Map
                  mapboxAccessToken={token}
                  initialViewState={{
                    longitude: mapConfig.longitude,
                    latitude: mapConfig.latitude,
                    zoom: mapConfig.zoom,
                  }}
                  style={{ width: '100%', height: '100%' }}
                  mapStyle="mapbox://styles/mapbox/navigation-night-v1"
                >
                  {mapConfig.markers.map((marker, index) => (
                    <Marker
                      key={index}
                      longitude={marker.longitude}
                      latitude={marker.latitude}
                      anchor="bottom"
                    >
                      <div 
                        className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"
                      >
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </Marker>
                  ))}
                </Map>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
