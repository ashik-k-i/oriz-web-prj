import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SyllabusCoverage from './components/SyllabusCoverage';
import WhyChoose from './components/WhyChoose';
import Programs from './components/Programs';
import CoursesSubjects from './components/CoursesSubjects';
import Leadership from './components/Leadership';
import Mentors from './components/Mentors';
import Reviews from './components/Reviews';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MediaGallery from './components/mediaGallery';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MediaGallery />
      <About />
      <SyllabusCoverage />
      <WhyChoose />
      <Programs />
      <CoursesSubjects />
      <Leadership />
      <Mentors />
      <Reviews />
      <Admission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;