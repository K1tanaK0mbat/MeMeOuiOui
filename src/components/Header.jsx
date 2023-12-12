
function NavHeader({ currentPage, handlePageChange }) {
    return (
        <div>
        <h1> Kitana Kearney </h2>
      <ul >
        <li>
          <a href="#AboutMe"
            onClick={() => handlePageChange('About Me')}
            //className={currentPage === 'About Me' ?  : }
          > About Me </a>
        </li>
        <li>
          <a href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            //className={currentPage === 'Portfolio' ?  : }
          > Portfolio </a>
        </li>
        <li>
          <a href="#Resume"
            onClick={() => handlePageChange('Resume')}
           // className={currentPage === 'Resume' ?  :}
          > Resume </a>
        </li>
        <li>
          <a href="#contact"
            onClick={() => handlePageChange('Contact')}
            //className={currentPage === 'Contact' ?  : }
          > Contact </a>
        </li>
      </ul>
      </div>
    );
  }
  
  export default NavHeader;