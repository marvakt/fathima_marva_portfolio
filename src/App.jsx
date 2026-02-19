import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen text-[#1a1a1b] selection:bg-[#ef6d58] selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">
        <p className="font-bold text-[#1a1a1b] mb-2 uppercase tracking-widest text-xs">Fathima Marva KT</p>
        © 2025 Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
