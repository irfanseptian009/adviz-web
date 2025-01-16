
import './App.css';
import {
  Navbar,
  Herro,
  Hilight,
  About,
  OurServices,
  Testimonial,
  Blog,
  ContactUs,
  Footer,
  AdvizAnimation,
 
} from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { CareerPage, ConsultantInquiry, FeedBack, OurTeam, Projects, Support } from './pages';

function Home() {
  return (
    <div>
      {/* <Herro /> */}
      <div style={{ height: "600px" }}>
        <AdvizAnimation />
      </div>
      <Hilight />
      <About />
      <OurServices />
      <div className="bg-center">
        <Testimonial />
      </div>
      <div className="mx-40">
        <Blog />
      </div>
      <div>
        <ContactUs />
      </div>
     
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career/current-openings" element={<CareerPage/>} />
          <Route path="/ourteam" element={<OurTeam/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/sales" element={<ConsultantInquiry/>}/>
          <Route path="/feedback" element={<FeedBack/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
