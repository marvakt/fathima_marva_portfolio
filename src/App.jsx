import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-gray-600 text-sm border-t border-white/10">
        © 2024 Orion Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
