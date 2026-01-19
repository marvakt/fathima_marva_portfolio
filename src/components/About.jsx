const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-background/50 relative overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Bio */}
                <div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">
                        About Me
                    </h2>

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Python Full Stack Developer with a Bachelor’s degree in Computer Science. I focus on building secure, scalable web applications with experience across backend architecture, frontend integration, real-time features, and cloud deployment.
                        </p>
                        <p>
                            I care about clean system design and production-ready code. My approach combines technical expertise with a creative mindset to solve complex problems and deliver exceptional user experiences.
                        </p>
                    </div>
                </div>

                {/* Right Column - Highlights Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative group hover:border-primary/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        Key Highlights
                    </h3>

                    <div className="space-y-4 relative z-10">
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="text-primary mt-1">🎓</div>
                            <div>
                                <h4 className="font-bold text-white">Computer Science</h4>
                                <p className="text-sm text-gray-400">Bachelor’s Degree in CS</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="text-primary mt-1">🚀</div>
                            <div>
                                <h4 className="font-bold text-white">Full Stack Python</h4>
                                <p className="text-sm text-gray-400">Django, FastAPI, React Integration</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="text-primary mt-1">🛡️</div>
                            <div>
                                <h4 className="font-bold text-white">Secure Systems</h4>
                                <p className="text-sm text-gray-400">Scalable Architecture & Cloud Deployment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
