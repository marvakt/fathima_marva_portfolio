import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Contributors', href: '#contributors' },
        { name: 'About me', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-2xl font-black text-[#1a1a1b] tracking-tighter">
                    MARVA<span className="text-[#ef6d58]">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-[#1a1a1b] hover:text-[#ef6d58] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Action Button */}
                <div className="hidden lg:block">

                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-[#1a1a1b]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-black text-[#1a1a1b] hover:text-[#ef6d58]"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#projects"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#1a1a1b] text-white px-10 py-4 rounded-md font-black text-xl"
                    >
                        Portfolio Here
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
