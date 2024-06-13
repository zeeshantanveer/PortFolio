import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <>
    
          {/* NAVBAR-SECTION */}
        <header>
            <div className='logo'>
              <span>A</span>reeba.
            </div>
            <ul className='navList'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>


            <div id="menu-icon" className='bx bx-menu'>
            </div>
          </header>

            {/* HOME-SECTION */}

          <section id="home" className="home">
            <div className="home-content">
              <h1>Hi I'm Areeba Farhan</h1>
              <div className="change-text">
                <h3> And I'm &nbsp;</h3>
                <h3>
                  <span className="word">
                 
                  </span>
                </h3>
              </div>

              <p>Product Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ea itaque est? Suscipit placeat architecto est vitae, aperiam tempora delectus quasi, earum, numquam nulla nemo quod? Sed officia in tempore.</p>


              <div className="btn-box">
                <a href="/btn" className="btn">Download CV</a>
                <a href="/btn" className="btn">Hire Me Now!</a>
              </div>


              <div className="social-icons">
                <a href="/facebook" title='facebook'><i class='bx bxl-facebook'></i></a>
                <a href="/instagram"  title='instagram'><i class='bx bxl-instagram' ></i></a>
                <a href="/linkedin"  title='linkedin'><i class='bx bxl-linkedin' ></i></a>
                <a href="/github"  title='github'><i class='bx bxl-github' ></i></a>
              </div>
            </div>

            <div className="home-image">
              <div className="img-box">
                <img src='img/1.png' alt='home'/>
              </div>
            </div>
          </section>

            {/* ABOUT-SECTION */}

          <section id="about" className="about">
            <div className="img-box">

              <img src="/img/12.png" alt="" />

            </div>

            <div className="about-content">
              <span>Let me introduce myself</span>
              <h2>About Me</h2>
              <h3>A story of good</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores adipisci tenetur expedita doloribus, eos dicta officiis quisquam inventore excepturi quidem neque fugit aut voluptates aperiam sed molesti Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit fugiat tempore, eos delectus facilis commodi porro corrupti dolores, non ratione consectetur dignissimos odit! Assumenda reiciendis blanditiis dolor distinctio alias.ae esse reprehenderit.</p>
              
            <div className="btn-box">
              <a href="/" className='btn'>Read More!</a>
            </div>
            </div>

          </section>

            {/* SERVICES-SECTION */}

          <section id="services" className='services'>
            <div className="main-text">
              <span>What i will do for you</span>
              <h2>Our Services</h2>
            </div>

            <div className="section_services">
              <div className="service-box">
                <i class='bx bxs-layer service-icon'></i>
                <h3>React Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores aliquam, excepturi ipsam perferendis totam. Vitae quaerat nostrum enim. Omnis dicta, dolores iusto similique possimus nisi excepturi itaque. Tempore, perferendis! Lorem ipsum dolor.
                </p>
                <div className="btn-box service-btn">
                  <a href="/" className='btn'>Read More!</a>
                </div>

              </div>

              <div className="service-box">
                <i class='bx bx-desktop service-icon'></i>
                <h3>React Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores aliquam, excepturi ipsam perferendis totam. Vitae quaerat nostrum enim. Omnis dicta, dolores iusto similique possimus nisi excepturi itaque. Tempore, perferendis! Lorem ipsum dolor.
                </p>
                <div className="btn-box service-btn">
                  <a href="/" className='btn'>Read More!</a>
                </div>
              
              </div>

              <div className="service-box">
                <i class='bx bx-code-alt service-icon'></i>
                <h3>React Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores aliquam, excepturi ipsam perferendis totam. Vitae quaerat nostrum enim. Omnis dicta, dolores iusto similique possimus nisi excepturi itaque. Tempore, perferendis! Lorem ipsum dolor.
                </p>
                <div className="btn-box service-btn">
                  <a href="/" className='btn'>Read More!</a>
                </div>
              
              </div>

            </div>

          </section>

          {/* SKILLS-SECTION */}

          <section id="skills" className='skills'>
            <div className="main-text">
              <span>Technical and Professional</span>
              <h2>My Skills</h2>
            </div>

            <div className="skill-main">
              <div className="skill-left">
                <h3>Technical Skills</h3>

                <div className="skill-bar">
                  <div className="info">
                    <p>Html</p>
                    <p>85%</p>
                  </div>
                  <div className="bar">
                    <span className='html'></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>CSS</p>
                    <p>62%</p>
                  </div>
                  <div className="bar">
                    <span className='css'></span>
                  </div>
                </div>

                
                <div className="skill-bar">
                  <div className="info">
                    <p>Bootstrap</p>
                    <p>77%</p>
                  </div>
                  <div className="bar">
                    <span className='bootstrap'></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>Figma</p>
                    <p>79%</p>
                  </div>
                  <div className="bar">
                    <span className='figma'></span>
                  </div>
                </div>


                <div className="skill-bar">
                  <div className="info">
                    <p>JavaScript</p>
                    <p>57%</p>
                  </div>
                  <div className="bar">
                    <span className='javascript'></span>
                  </div>
                </div>

                
                <div className="skill-bar">
                  <div className="info">
                    <p>React JS</p>
                    <p>52%</p>
                  </div>
                  <div className="bar">

                    <span className='react-js'></span>
                  </div>
                </div>

              </div>

              <div className="skill-right">
              <h3>Professional Skills</h3>
              <div className="professional">
                <div className="box">
                <div className="circle"  data-dots={"80"} data-percen={"90"}></div>

                  <div className="text">
                    <big>90%</big>
                    <small>Team Work</small>
                  </div>
                </div>

                <div className="box">
                <div className="circle"  data-dots={"80"} data-percen={"90"}></div>

                  <div className="text">
                    <big>90%</big>
                    <small>Team Work</small>
                  </div>
                </div>

                <div className="box">
                <div className="circle"  data-dots={"80"} data-percen={"90"}></div>

                  <div className="text">
                    <big>90%</big>
                    <small>Team Work</small>
                  </div>
                </div>

                <div className="box">
                  <div className="circle" data-dots={"80"} data-percen={"90"}></div>

                  <div className="text">
                    <big>90%</big>
                    <small>Team Work</small>
                  </div>
                </div>

                
              </div>
              </div>
            </div>

          </section>

    </>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
