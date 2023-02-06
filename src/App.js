import './App.css';
import About from './components/about';
import Navbar from './components/navbar/index.js';
import Projects from './components/projects/projects';
import Skills from './components/skills';

import './index.css'

function App() {
  return (
    <div className='bg-zinc-800 pl-[10%] pr-[10%]'>
      <div>
     <Navbar />
     <section id='about'>
     <About />
     </section>
     <section id='skills'>
     <Skills />
     </section>
     <section id='projects'>
     <Projects />
     </section>
     </div>
    </div>
  );
}

export default App;
