// a href is website link
import React from 'react';
import Project from './Project';
const Portfolio = () => {
  const projects = [
    {
      title: 'Code Chronicles',
      imageUrl: 'src/assets/Culture_Matrix_Code_corridor1.jpg',
      projectUrl: 'https://codechronicles2.onrender.com/',
      repoUrl: 'https://github.com/Misachka/CodeChronicles.git',
    },
    {
      title: 'Bookworm Corner',
      imageUrl: 'src/assets/reading.jpg',
      projectUrl: 'https://bookworm-corner-8f20cb894ad7.herokuapp.com/',
      repoUrl: 'https://github.com/Misachka/Bookworm-corner.git',
    },
    {
      title: 'Social Media Api',
      imageUrl: 'src/assets/Braindance.png',
      projectUrl: 'https://drive.google.com/',
      repoUrl: 'https://github.com/K1tanaK0mbat/BrainDance.git'
    },
    {
      title: 'Social Network API',
      imageUrl: 'src/assets/comp-peps.jpg',
      projectUrl: 'https.//drive.google.com/',
      repoUrl: 'https://github.com/K1tanaK0mbat/MonkSee.git',
    },
    {
      title: 'Ecommerece Project',
      imageUrl: 'src/assets/shopping.jpg',
      projectUrl: 'https://drive.google.com/file/d/1jtM-WgsdP0_q1U3bi0NzVto__csGcDPR/view',
      repoUrl: 'https://github.com/K1tanaK0mbat/4theloveofMoney.git',
    }
  ];
  return (
    <main>

      <h1 id="Project">My Projects</h1>
      <section className="projRows">
      {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </main>
  );
};
        {/* <figure className="projCard">
          <a href="https://codechronicles2.onrender.com/">
            <img src="src\assets\Culture_Matrix_Code_corridor1.jpg"/>
          </a>
          <div id="projMini">
            <h2>Code Chronicles</h2>
            <a href="https://github.com/Misachka/CodeChronicles.git">Github Repo</a>
          </div>
        </figure>
        
        <figure className="projCard">
        <a href="https://bookworm-corner-8f20cb894ad7.herokuapp.com/">
   <img src="src\assets\reading.jpg"/>
  </a>
   <div className="projMini">
   <div>
     <h2>Bookworm Corner</h2>
  <a href="https://github.com/Misachka/Bookworm-corner.git">Github Repo</a>
  </div>
   </div>
  </figure>

  <figure className="projCard">
        <a href="">
   <img src="src\assets\Braindance.png"/>
  </a>
   <div className="projMini">
   <div>
     <h2>Social Media Api</h2>
  <a href="https://github.com/K1tanaK0mbat/BrainDance.git">Repo link</a>
  </div>
   </div>
  </figure>

  <figure className="projCard">
   <img src="src\assets\comp-peps.jpg"/>
   <div className="projMini">
   <div>
     <h2>Social Network API</h2>
  <a href="https://github.com/K1tanaK0mbat/MonkSee.git"> Github Repo</a>
  </div>
   </div>
  </figure>

  <figure className="projCard">
   <img src="src\assets\shopping.jpg"/>
   <div className="projMini">
   <div>
     <h2>Ecommerece Project: <a href="https://drive.google.com/file/d/1jtM-WgsdP0_q1U3bi0NzVto__csGcDPR/view"> Walkthroug
     </a>
     </h2>
  <a href="https://github.com/K1tanaK0mbat/4theloveofMoney.git">Github Repo</a>
  </div>
   </div>
  </figure> */}

  export default Portfolio;


