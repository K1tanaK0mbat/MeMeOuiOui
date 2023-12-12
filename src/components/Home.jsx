import React, { useState } from 'react';
import NavHeader from './Header'; 
import AboutMe from '../pages/AboutMe';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Footer from './Footer'; 

export default function Home() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    switch(currentPage) {
      case 'About Me': return <AboutMe />;
      case 'Portfolio': return <Portfolio />;
      case 'Resume': return <Resume />;
      case 'Contact': return <Contact />;
      default: return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavHeader currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}


