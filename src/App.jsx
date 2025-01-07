

import { BrowserRouter } from 'react-router'
import './App.css'
import {Navbar,Herro, Hilight, About, OurServices, Testimonial, Blog, ContactUs, Footer} from './components'
import 'normalize.css';


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="bg-hero-pattern ">
          <Navbar />
          <Herro />
          <Hilight/>
        </div>
        <div className="mx-40">
         <About/>
        </div>
        <div className="bg-hero-pattern bg-white bg-cover bg-no-repeat bg-center">
          <OurServices/>
        </div>
        
        <div className="bg-hero-pattern bg-white bg-cover bg-no-repeat bg-center">
          <Testimonial/>
        </div>
         
        <div className="mx-40">
          <Blog/>
        </div>
        <ContactUs />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
