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
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-32 pb-20">
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
                        <h1 className="hero-fade text-6xl md:text-8xl font-black text-[#1a1a1b] leading-[1.1] tracking-tight">
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

                {/* Right Image/Shape */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Organic Shape */}
                    <div className="hero-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ef6d58] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] z-0"></div>

                    {/* Profile Image (specifically shifted left) */}
                    <div className="relative z-10 w-full max-w-md aspect-[4/5] overflow-hidden lg:-translate-x-12 transition-transform duration-500">
                        <img
                            src="/marva.jpg"
                            alt="Fathima Marva"
                            className="w-full h-full object-cover grayscale brightness-110 contrast-125"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />
                    </div>

                    {/* Dotted path SVG decoration with loop-de-loop */}
                    <svg className="absolute -left-40 -bottom-40 w-[180%] h-[180%] pointer-events-none z-20" viewBox="0 0 1000 1000">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#ef6d58" opacity="0.6" />
                            </marker>
                        </defs>
                        <path
                            className="dotted-path"
                            d="M 50 850 C 250 850 350 600 500 600 C 650 600 650 900 520 900 C 400 900 400 650 600 500 C 800 350 950 400 920 250"
                            fill="none"
                            stroke="#ef6d58"
                            strokeWidth="3"
                            strokeDasharray="12 12"
                            opacity="0.4"
                            markerEnd="url(#arrowhead)"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
