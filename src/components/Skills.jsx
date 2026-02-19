import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = ".tagcloud";
        const texts = [
            "Python", "Django", "FastAPI", "React.js", "Redux",
            "Tailwind", "PostgreSQL", "MongoDB", "WebSockets", "Docker",
            "AWS", "Nginx", "Git", "Redis", "Celery",
            "RabbitMQ", "Microservices", "REST API", "GraphQL", "RAG",
            "LangChain", "Vector Search", "CI/CD", "Linux", "Postman"
        ];

        const options = {
            radius: 300,
            maxSpeed: "normal",
            initSpeed: "normal",
            direction: 135,
            keep: true,
        };

        if (containerRef.current) {
            containerRef.current.innerHTML = "";
            TagCloud(container, texts, options);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <section id="skills" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1a1a1b]">
                        Skills<span className="text-[#ef6d58]">.</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-4">Technical expertise and toolkit</p>
                </div>

                <div className="flex items-center justify-center relative min-h-[500px] md:min-h-[600px] bg-[#f9f9f9] rounded-3xl border border-gray-100">
                    {/* Subtle Salmon Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ef6d58]/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="tagcloud-wrapper relative z-20 hover:scale-105 transition-transform duration-500 ease-out cursor-default">
                        <span className="tagcloud text-[#ef6d58] font-black text-xl md:text-3xl tracking-tight" ref={containerRef}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;