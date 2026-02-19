import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Mentora",
            description: "A production-oriented mental health platform built with Django, DRF, and React. Enables secure user authentication, role-based workflows, real-time chat/video consultations, and AI-driven specialist matching.",
            tags: ["Django", "FastAPI", "React", "Redux", "PostgreSQL", "MongoDB", "Celery", "Redis", "WebRTC", "LangChain", "Docker", "AWS"],
            image: "/mentora.png",
            links: {
                code: "https://github.com/marvakt/single_project_mentora"
            }
        },
        {
            title: "DecoNest",
            description: "A full-stack e-commerce platform built to manage product listings, user authentication, orders, and online payments. Supports secure checkout, role-based access, and cloud deployment.",
            tags: ["React", "Tailwind CSS", "DRF", "PostgreSQL", "AWS"],
            image: "/deconest.png",
            links: {
                code: "https://github.com/marvakt/deconest_full",
                live: "https://deconest-pearl.vercel.app/"
            }
        },
        {
            title: "Taste Buds",
            description: "A food recipe builder where users input available ingredients to discover various recipes. Designed to reduce food waste and inspire creativity in the kitchen with a simple, intuitive interface.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "/weaslies.png",
            links: {
                code: "https://github.com/marvakt/Weaslies",
                live: "https://weaslies.vercel.app/"
            }
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1a1a1b]">
                        Projects<span className="text-[#ef6d58]">.</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-4">Selected digital experiences</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-[#f9f9f9] shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>

                            <div className="p-8 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                        <span key={idx} className="text-[10px] uppercase font-bold tracking-widest text-[#ef6d58]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-black text-[#1a1a1b] tracking-tight group-hover:text-[#ef6d58] transition-colors">{project.title}</h3>
                                <p className="text-gray-500 text-base line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex gap-6 pt-4">
                                    <a href={project.links.code} target="_blank" className="text-xs font-black text-[#1a1a1b] border-b-2 border-[#1a1a1b] pb-1 hover:text-[#ef6d58] hover:border-[#ef6d58] transition-all flex items-center gap-1">
                                        <Github size={14} /> VIEW CODE
                                    </a>
                                    {project.links.live && (
                                        <a href={project.links.live} target="_blank" className="text-xs font-black text-[#ef6d58] border-b-2 border-[#ef6d58] pb-1 hover:text-[#1a1a1b] hover:border-[#1a1a1b] transition-all flex items-center gap-1">
                                            <ExternalLink size={14} /> LIVE DEMO
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
