

import { BrowserRouter } from 'react-router'
import './App.css'
import {Navbar,Herro, Hilight, About, OurServices, Testimonial, Blog, ContactUs, Footer, AdvizAnimation, OurTeam} from './components'
import 'normalize.css';


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="">
          <Navbar />
          <Herro />
        </div> 
    
        <Hilight/>
        <div className='h-screen'>
          <OurTeam/>
        </div>
        <About/>
        <OurServices/>
        <div className="bg-center">
          <Testimonial/>
        </div>
        <div className="mx-40">
          <Blog/>
        </div>
        <div className=''>
        <ContactUs />
        </div>
        <div style={{height:"600px"}}>
        <AdvizAnimation />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
