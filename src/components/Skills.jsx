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

        // Cleanup previous instance if any (though TagCloud appends)
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
        <section id="skills" className="py-20 bg-background/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    Technical Skills
                </h2>

                {/* 3D Tag Cloud */}
                <div className="flex items-center justify-center relative h-[450px]">
                    {/* Holographic Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

                    <span className="tagcloud text-primary font-bold text-lg md:text-xl tracking-wide cursor-pointer relative z-20" ref={containerRef}></span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
