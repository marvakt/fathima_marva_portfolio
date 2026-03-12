import { useRef } from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-fade", {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1
        });

        tl.from(".hero-shape", {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)"
        }, "-=1");

        tl.from(".dotted-path", {
            strokeDashoffset: 1000,
            duration: 2
        }, "-=1.5");

    }, { scope: containerRef });

    return (
        <section id="home" ref={containerRef} className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-32 pb-20">
            {/* Image mixed into background */}
            <div className="hero-shape absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/marva_oilpaint.png"
                    alt=""
                    className="absolute right-0 top-0 h-full w-[60%] object-cover object-top"
                    style={{
                        opacity: 0.6,
                        maskImage: 'linear-gradient(to left, black 40%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'destination-in',
                    }}
                />
            </div>

            {/* Background Large Text (Watermark) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
                <h1 className="text-[20vw] font-black text-[#ef6d58]/5 leading-none">
                    MARVA
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <p className="hero-fade text-[#ef6d58] font-bold text-lg md:text-xl">Hola! I'm</p>
                        <h2 className="hero-fade text-[#ef6d58] font-bold text-3xl md:text-4xl">Python Developer</h2>
                        <h1 className="hero-fade text-6xl md:text-8xl font-black text-[#1a1a1b] leading-[1.1] tracking-tighter">
                            Fathima Marva<span className="text-[#ef6d58]">.</span>
                        </h1>
                    </div>

                    <p className="hero-fade text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
                        As a Python developer, I focus on building robust backend systems, scalable APIs, and clean, efficient codebases.
                    </p>

                    <div className="hero-fade flex items-center gap-6">
                        <a href="https://github.com/marvakt" target="_blank" className="text-[#1a1a1b] hover:text-[#ef6d58] transition-colors"><Github size={24} /></a>
                        <a href="https://www.instagram.com/fathima__marva__/" target="_blank" className="text-[#1a1a1b] hover:text-[#ef6d58] transition-colors"><Instagram size={24} /></a>
                        <a href="https://www.linkedin.com/in/marva-kt" target="_blank" className="text-[#1a1a1b] hover:text-[#ef6d58] transition-colors"><Linkedin size={24} /></a>
                    </div>

                    <div className="hero-fade pt-4">
                        <a
                            href="/resume.pdf"
                            className="inline-block bg-[#ef6d58] text-white px-10 py-5 rounded-md font-bold text-sm uppercase tracking-widest shadow-xl shadow-[#ef6d58]/30 hover:bg-[#d95d48] transition-all transform hover:-translate-y-1 relative z-10"
                        >
                            CV Here
                        </a>
                    </div>
                </div>

                {/* Empty right column to maintain layout balance */}
                <div></div>
            </div>
        </section>
    );
};

export default Hero;
