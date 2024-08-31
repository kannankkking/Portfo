import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";


const App = () => {
  return (
    <div className='header'>

      <div className="navbar">
        <nav>
          <ul>
            <a href="#home">  <li>Home</li></a>
            <a href="#education"> <li>Education</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#certification"><li>Certification</li></a>
            <a href="#contact"><li>Contact</li></a>

          </ul>
        </nav>
      </div>


      
      <div className="tittle" id="home">
      <div className="home-imge">
        <img src="./src/images/photo.png" />
      </div>
        <div className="home-content">
          <h1>Hi,it's <span>KANNAN</span></h1>
          <h3 class="text-animation">I'm a <span></span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/>Accusamus deserunt tempore qui reiciendis officia quos consequuntur ipsam ipsa dolorem quod.</p>
          
          <div className="btn-group">
        <a href="#" className="btn">Hire</a>
        <a href="#contact" className="btn">Contact</a>
      </div>
      <button><a href="./src/images/photo.png"download={""}></a>Download CV</button>
      
        </div>
      </div>


     


      {/* 
education */}


      <section className="education" id="education">
        <h2 class="heading">Education</h2>

        <div className="timeline-item">
          <div className="timeline-dot">
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>MCA Pursing</h3>
              <p>JJ College of arts and science</p>

            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Internship</h3>
              <p>NxWEB Company (Software Developer) Intern</p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>(B.sc CS) JJ College of arts and science Pudukottai</p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot">
            <div className="timeline-date">2019</div>
            <div className="timeline-content">
              <h3>High school</h3>
              <p>Government higher secondary school Melaisivapuri</p>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="skills" id="skills">
        <h2 className="heading">Skills</h2>
        <div className="container">
          <div className="row" id="skillscontainer">
            <div className="bar">
              <div className="info">
                <img src="./src/images/html.png" />
                <span>HTML</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/css.jpeg" />
                <span>Css</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/js.png" />
                <span>JavaScript</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/react.png" />
                <span>React Js</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/sql.jpeg" />
                <span>Sql</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/mongodb.png" />
                <span>Mongodb</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/ph.png" />
                <span>Photoshop</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src='./src/images/framer.jpeg' />
                <span>Framer</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/ph.png" />
                <span>Photoshop</span>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="./src/images/ph.png" />
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* certification */}
      <div className="cert">
        <h2>Certification</h2>
        <div className="certificate">
          <div className="conten1">
            <h3>Python Programming</h3>
            <span>Conducted By JJC</span>
          </div>

          <div className="conten1">
            <h3>Cloud Computing</h3>
            <span>Conducted By JJC</span>
          </div>

          <div className="conten1">
            <h3>SQL And DataBase Management</h3>
            <span>Participated in Geekstar</span>
          </div>

          <div className="conten1">
            <h3>Front-end Development</h3>
            <span>Great Learning</span>
          </div>

          <div className="conten1">
            <h3>Full Stack Development</h3>
            <span>Nxweb</span>
          </div>

          <div className="conten1">
            <h3>Front-end Development</h3>
            <span>Great Learning</span>
          </div>


          <div className="conten1">
            <h3>Front-end Development</h3>
            <span>Great Learning</span>
          </div>

          
        </div>

      </div>

      {/* projects */}

      <div className="cert">
        <h2>Projects</h2>
        <div className="projects">
          <div className="conten">
            <h3>Password Manager</h3>
          </div>

          <div className="conten">
            <h3>E-Commerce Website</h3>
          </div>

          <div className="conten">
            <h3>Next Web Web Application</h3>
          </div>

          <div className="conten">
            <h3>MovieFlix-Clone</h3>
          </div>

          <div className="conten">
            <h3>ShopZone Web Application</h3>
          </div>
        </div>

      </div>

      <section className="contact" id="contact">
        <h2 >Contact <span>Me</span></h2>
        <form action="">
            <div className="input-group">
                <div class="input-box">
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Phone Number" />
                    <input type="text" placeholder="Subject"/>
                </div>
            </div>

            <div className="input-group">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="send Message" class="btn"/>
            </div>


        </form>

    </section>

 {/* footer */}
 <div className="social">
            <a href="https://x.com/kannan__006?t=u7uA3ftscoHm0S-RnfaDrA&s=09" target='blank'><LuTwitter className='icons'/></a>
            <a href="https://github.com/kannankkking" target='blank'><FaGithub className='icons'/></a>
            <a href="https://www.linkedin.com/in/kannan-kk-78809b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><CiLinkedin className='icons'/></a>
            <a href="#"><FaWhatsapp className='icons' /></a>
        </div>
 <footer className="footer">
       
        <ul className="list">
            <li>
                <a href="#">Home</a>
            </li>

            <li>
                <a href="#education">Education</a>
            </li>

            <li>
                <a href="#skills">Skills</a>
                
            </li>

             <li>
                <a href="#cert">Certification</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </footer>















    </div>
  )
}
export default App;