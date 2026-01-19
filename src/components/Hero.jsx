import { useRef } from 'react';
import { ArrowRight, Linkedin, Github, Instagram } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Image Fade In
        tl.fromTo(imageRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.5 }
        )
            // Text Stagger
            .fromTo(".hero-text-element",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
                "-=1" // Overlap with image animation
            )
            // Buttons
            .fromTo(".hero-button",
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
                "-=0.5"
            )
            // Socials
            .fromTo(".hero-social",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
                "-=0.3"
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 md:pt-12 pb-10 overflow-hidden bg-background">
            {/* Background Gradient - Subtle central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">

                {/* Left Content - Image */}
                <div ref={imageRef} className="relative h-full flex justify-center md:justify-start order-2 md:order-1 opacity-0 mt-8 md:mt-0">
                    <div className="relative w-full max-w-[350px] md:max-w-md aspect-square md:aspect-auto md:h-[600px]">
                        {/* The Image with Clean Fade */}
                        <img
                            src="/marva.jpg"
                            alt="Fathima Marva KT"
                            className="w-full h-full object-cover transition-all duration-700"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                            }}
                        />

                        {/* Subtle Violet Accent Glow */}
                        <div className="absolute inset-0 pointer-events-none opacity-30">
                            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary/10 to-transparent blur-[30px]"></div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Typography & Buttons */}
                <div ref={textRef} className="space-y-6 order-1 md:order-2 text-right md:text-left pt-0 md:pt-10">
                    <div className="space-y-3">
                        <h2 className="hero-text-element text-lg md:text-xl font-medium text-gray-300 tracking-wide opacity-0">
                            Hi, I'm
                        </h2>
                        <h1 className="hero-text-element text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-tight opacity-0">
                            Fathima Marva KT
                        </h1>
                        <h3 className="hero-text-element text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50 opacity-0">
                            Full Stack Developer
                        </h3>
                    </div>

                    <div className="flex flex-wrap items-center justify-end md:justify-start gap-4 pt-2">
                        <a
                            href="/resume.pdf"
                            download="Fathima_Marva_Resume.pdf"
                            className="hero-button opacity-0 px-6 py-3 md:px-8 md:py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center justify-center hover:scale-105 active:scale-95 text-sm md:text-base"
                        >
                            Hire Me
                        </a>

                        <a href="#contact" className="hero-button opacity-0 px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 text-sm md:text-base">
                            <span>Let's Talk</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-5 pt-4 items-center justify-end md:justify-start">
                        <a href="https://www.linkedin.com/in/marva-kt" target="_blank" rel="noopener noreferrer" className="hero-social opacity-0 text-gray-400 hover:text-primary transition-colors hover:scale-110">
                            <Linkedin size={22} />
                        </a>
                        <a href="https://github.com/marvakt" target="_blank" rel="noopener noreferrer" className="hero-social opacity-0 text-gray-400 hover:text-primary transition-colors hover:scale-110">
                            <Github size={22} />
                        </a>
                        <a href="https://www.instagram.com/fathima__marva__/" target="_blank" rel="noopener noreferrer" className="hero-social opacity-0 text-gray-400 hover:text-primary transition-colors hover:scale-110">
                            <Instagram size={22} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
