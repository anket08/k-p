import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';

const projects = [
    {
        title: "CodXp - Online Coding Platform",
        tech: ["Spring Boot", "React", "MySQL", "JWT"],
        description: "Developed Teacher Module enabling assignment creation, MCQs, and test case management. Designed secure REST APIs with JWT authentication. Used isolated execution with test case validation.",
        color: "from-blue-500/20 to-blue-500/0",
        github: "https://github.com/khushiirana" // Placeholder github link, can be replaced by specific repo
    },
    {
        title: "MINIT - Hyperlocal Campus Delivery",
        tech: ["React.js", "Kafka", "Redis"],
        description: "Built a role-based SPA for Students, Vendors, Delivery Partners, and Admin. Implemented cart system and order tracking. Integrated Kafka for event-driven processing and Redis for caching.",
        color: "from-purple-500/20 to-purple-500/0",
        github: "https://github.com/khushiirana"
    },
    {
        title: "NoteSync - Real-Time Note Sharing",
        tech: ["Spring Boot", "MySQL", "WebSocket"],
        description: "Developed a backend-focused note management system. Implemented WebSocket-based real-time synchronization for instant note updates across sessions.",
        color: "from-green-500/20 to-green-500/0",
        github: "https://github.com/khushiirana"
    },
    {
        title: "Inferring Emotional Cues from Logo Style",
        tech: ["Research", "Machine Learning"],
        description: "Conducting computational study analyzing the relationship between color, typography, and emotional perception. Exploring machine learning approaches for emotion classification.",
        color: "from-amber-500/20 to-amber-500/0",
        github: "https://github.com/khushiirana"
    }
];

const Projects = () => {
    return (
        <section className="py-20 relative z-20">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <FolderGit2 size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors flex justify-between items-start">
                                {project.title}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors ml-2"
                                    >
                                        <FolderGit2 size={18} />
                                    </a>
                                )}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
