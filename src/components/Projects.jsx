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
        <section id="projects" className="min-h-screen flex items-center justify-center bg-background/50 relative overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary text-center">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:-translate-y-2">
                            {/* Image Overlay */}
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-primary hover:text-black backdrop-blur-md border border-white/20 rounded-full transition-all duration-300">
                                        <Github size={20} />
                                    </a>
                                    {project.links.live && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-primary hover:text-black backdrop-blur-md border border-white/20 rounded-full transition-all duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                            {tag}
                                        </span>
                                    ))}
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
