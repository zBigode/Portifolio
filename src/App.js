import './App.css';
import Home from './components/home';
import Navbar from './components/navbar/index.js';
import Projects from './components/projects/projects';
import Skills from './components/skills';

import './index.css'

function App() {
  return (
    <div className='bg-zinc-800 '>
      <div>
     <Navbar />
     <section id='home'>
     <Home />
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
