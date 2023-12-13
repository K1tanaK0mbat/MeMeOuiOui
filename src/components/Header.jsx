import React from 'react';

function NavHeader({ currentPage, handlePageChange }) {
    return (
        <div>
        <h1> Kitana Kearney </h1>
      <ul >
        <li>
          <a href="#AboutMe"
            onClick={() => handlePageChange('About Me')}
            className={currentPage === 'About Me' ? 'active' : ''}
          > About Me </a>
        </li>
        <li>
          <a href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'active' : ''}
          > Portfolio </a>
        </li>
        <li>
          <a href="#Resume"
            onClick={() => handlePageChange('Resume')}
           className={currentPage === 'Resume' ? 'active' :''}
          > Resume </a>
        </li>
        <li>
          <a href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'active' :'' }
          > Contact </a>
        </li>
      </ul>
      </div>
    );
  }
  
  export default NavHeader;