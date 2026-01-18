import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 relative flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-primary/50 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00FF94]"></div>
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-300">
                        Marva<span className="text-primary">.</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#" className="hover:text-primary transition-colors">Home</a>
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </div>



                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 absolute top-20 left-0 w-full p-6 flex flex-col gap-6 border-b border-white/10">
                    <a href="#" className="text-xl hover:text-primary">Home</a>
                    <a href="#about" className="text-xl hover:text-primary">About</a>
                    <a href="#skills" className="text-xl hover:text-primary">Skills</a>
                    <a href="#projects" className="text-xl hover:text-primary">Projects</a>
                    <a href="#contact" className="text-xl hover:text-primary">Contact</a>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
