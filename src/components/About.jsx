const About = () => {
    return (
        <section id="about" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <div className="max-w-3xl space-y-12">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1a1a1b]">
                        About me<span className="text-[#ef6d58]">.</span>
                    </h2>

                    <div className="space-y-8 text-gray-500 text-xl leading-relaxed">
                        <p className="font-bold text-[#1a1a1b]">
                            Python Full Stack Developer with a Bachelor’s degree in Computer Science. I focus on building secure, scalable web applications with experience across backend architecture, frontend integration, real-time features, and cloud deployment.
                        </p>
                        <p>
                            I care about clean system design and production-ready code. My approach combines technical expertise with a creative mindset to solve complex problems and deliver exceptional user experiences.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;
