import React from 'react';
import { motion } from 'framer-motion';

const EducationSkills = () => {
    return (
        <div className="py-10 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Education Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Experience & Education</h2>
                        <p className="text-zinc-400">My academic journey.</p>
                    </div>

                    <div className="space-y-8 pl-4 border-l border-border relative">
                        <div className="relative">
                            <div className="absolute w-2 h-2 rounded-full bg-white -left-[21px] top-2" />
                            <span className="text-zinc-500 text-sm font-medium tracking-wide uppercase mb-1 block">Expected 2027</span>
                            <h3 className="text-xl font-medium text-white tracking-tight mb-1">Vellore Institute of Technology</h3>
                            <p className="text-zinc-400 text-sm mb-2">Master of Computer Applications (MCA)</p>
                            <p className="text-zinc-300 text-sm font-medium">CGPA: 9.27/10</p>
                        </div>

                        <div className="relative">
                            <div className="absolute w-2 h-2 rounded-full bg-zinc-600 -left-[21px] top-2" />
                            <span className="text-zinc-500 text-sm font-medium tracking-wide uppercase mb-1 block">Graduated 2025</span>
                            <h3 className="text-xl font-medium text-white tracking-tight mb-1">Panjab University</h3>
                            <p className="text-zinc-400 text-sm mb-2">Bachelor of Computer Applications (BCA)</p>
                            <p className="text-zinc-300 text-sm font-medium">Score: 80.25%</p>
                        </div>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Tech Stack</h2>
                        <p className="text-zinc-400">Tools and languages I use.</p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-zinc-500 font-medium mb-4">Core Focus</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Backend Development', 'Spring Boot', 'System Design Architect', 'UI Design', 'Problem Solving'].map((skill) => (
                                    <span key={skill} className="pill-badge bg-white/5 border-white/10 text-white">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-zinc-500 font-medium mb-4">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Java', 'Python', 'C++', 'JavaScript'].map((skill) => (
                                    <span key={skill} className="pill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-zinc-500 font-medium mb-4">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {['MySQL', 'NoSQL', 'Figma', 'React.js', 'Node.js', 'Git & GitHub', 'Postman'].map((skill) => (
                                    <span key={skill} className="pill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EducationSkills;
