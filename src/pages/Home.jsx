import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import { coursesSection } from '../data/CoursesSection'
import { tutorsSection } from '../data/TutorsSection'
import Tutors from '../components/Tutors'
import {partnersSection} from '../data/PartnersSection'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

import parse from 'html-react-parser'
import '../styles/Home.css'
function Home() {
  return (
   <>
        <Navbar/>
        <div className='wrapper'>
          {/* Home */}
          <section id="home">
            <img src={homeSection.image} />
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        { /* oline courses */ }
        <section id="courses">
            <div className="kolom">
                {parse(coursesSection.content)}
            </div>
            <img src={coursesSection.image} />
        </section>
        {/* tutors */}
        <section id="tutors">
            <div class="tengah">
                <div class="kolom">
                  {parse(tutorsSection.content)}
                </div>
        <Tutors/>
            </div>
        </section>
        {/* partners */}
         <section id="partners">
            <div class="tengah">
                <div class="kolom">
                    {parse(partnersSection.content)}
                </div>
          <Partners/>
            </div>
        </section>
        {/* Contact */}
        <Contact/>
        </div>
        <Footer/>
   </>
  )
}

export default Home;
