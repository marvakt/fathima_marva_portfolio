import { ArrowRight, Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Gradient - Subtle top-right glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content - Typography & Buttons */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-medium text-gray-300 tracking-wide">
                            Hi, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
                            Fathima Marva KT
                        </h1>
                        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                            Full Stack Developer
                        </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                        <a
                            href="/resume.pdf"
                            download="Fathima_Marva_Resume.pdf"
                            className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,255,148,0.3)] flex items-center justify-center"
                        >
                            Hire Me
                        </a>

                        <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                            <span>Let's Talk</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Socials - Bottom Left */}
                    <div className="flex gap-6 pt-8 items-center">
                        <a href="https://www.linkedin.com/in/marva-kt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/marvakt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.instagram.com/fathima__marva__/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Instagram size={24} />
                        </a>

                    </div>
                </div>

                {/* Right Content - Blended Image */}
                <div className="relative h-full flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[600px]">
                        {/* The Image */}
                        <img
                            src="/profile.jpg"
                            alt="Fathima Marva KT"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            style={{
                                maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
                            }}
                        />

                        {/* Overlay Gradients for Blending */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-l from-background/20 via-transparent to-transparent"></div>

                        {/* Neon Green Lighting (Soft Shadow/Glow) */}
                        <div className="absolute inset-0 pointer-events-none mix-blend-overlay z-10">
                            {/* Right Side Green Glow (Rim Light) */}
                            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/40 to-transparent blur-[20px]"></div>
                            {/* Top Right Highlight */}
                            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-radial-gradient from-primary/20 to-transparent blur-[30px] opacity-60"></div>
                        </div>

                        {/* Subtle Face Accent - Soft & Blended */}
                        <div className="absolute top-1/4 right-[10%] w-32 h-64 bg-primary/20 blur-[50px] -rotate-12 mix-blend-color-dodge"></div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
