import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, FolderGit2, FolderOpen } from 'lucide-react';

const projects = [
    {
        title: "Virtual Teacher Module",
        tech: ["Spring Boot", "React", "MySQL", "JWT"],
        description: "Developed Teacher Module enabling assignment creation, MCQs, and test case management. Designed secure REST APIs with JWT authentication. Used isolated execution with test case validation.",
        github: "https://github.com/khushiirana"
    },
    {
        title: "MINIT - Hyperlocal Delivery",
        tech: ["React.js", "Node.js", "Microservices", "Kafka", "Redis"],
        description: "Built a role-based SPA for Students, Vendors, Delivery Partners, and Admin. Integrated Kafka for event-driven logic and Redis caching.",
        github: "https://github.com/khushiirana"
    },
    {
        title: "NoteSync - Real-Time",
        tech: ["Spring Boot", "WebSocket", "JWT", "Bcrypt"],
        description: "Backend-focused role management system. WebSocket real-time synchronization.",
        github: "https://github.com/khushiirana"
    },
    {
        title: "Inferring Emotional Cues",
        tech: ["Machine Learning", "Python", "Scikit-Learn", "Research"],
        description: "Computational study analyzing the relationship between color, typography, and emotional perception using machine learning algorithms.",
        github: "https://github.com/khushiirana"
    }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const [isFolderHovered, setIsFolderHovered] = React.useState(false);
    const [isLinkHovered, setIsLinkHovered] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="clean-card p-8 flex flex-col group relative"
        >
            <div className="flex justify-between items-start mb-6">
                <div
                    onMouseEnter={() => setIsFolderHovered(true)}
                    onMouseLeave={() => setIsFolderHovered(false)}
                    className="relative w-6 h-6 text-zinc-400 transition-colors cursor-pointer"
                >
                    <AnimatePresence mode="wait">
                        {isFolderHovered ? (
                            <motion.div
                                key="open"
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0"
                            >
                                <FolderOpen size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="closed"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0"
                            >
                                <FolderGit2 size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {project.github && (
                    <a
                        onMouseEnter={() => setIsLinkHovered(true)}
                        onMouseLeave={() => setIsLinkHovered(false)}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-colors relative w-5 h-5 flex items-center justify-center"
                    >
                        <AnimatePresence mode="wait">
                            {isLinkHovered ? (
                                <motion.div
                                    key="hover"
                                    initial={{ opacity: 0, scale: 0.8, x: -2 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 2 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute"
                                >
                                    <ArrowRight size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute"
                                >
                                    <ArrowUpRight size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </a>
                )}
            </div>

            <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                {project.title}
            </h3>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t: string) => (
                    <span key={t} className="pill-badge">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="py-10 relative z-20">
            <div className="flex flex-col mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Projects</h2>
                <p className="text-zinc-400">Featured work and technical explorations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
