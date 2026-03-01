import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code } from 'lucide-react';

const EducationSkills = () => {
    return (
        <section className="py-20 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 group hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                            <GraduationCap size={24} />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-white">Education</h2>
                    </div>

                    <div className="space-y-8">
                        <div className="relative pl-6 border-l-2 border-white/10">
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 border-2 border-black"></div>
                            <h3 className="text-lg font-bold text-white tracking-tight">Vellore Institute of Technology</h3>
                            <p className="text-gray-400 font-medium">Master of Computer Applications (MCA)</p>
                            <div className="flex justify-between items-center mt-2 text-sm">
                                <span className="text-primary font-semibold">CGPA: 9.27/10</span>
                                <span className="text-gray-500">Expected 2027</span>
                            </div>
                        </div>

                        <div className="relative pl-6 border-l-2 border-white/10">
                            <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-1 border-2 border-black"></div>
                            <h3 className="text-lg font-bold text-white tracking-tight">Panjab University</h3>
                            <p className="text-gray-400 font-medium">Bachelor of Computer Applications (BCA)</p>
                            <div className="flex justify-between items-center mt-2 text-sm">
                                <span className="text-secondary font-semibold">Percentage: 80.25%</span>
                                <span className="text-gray-500">2025</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-8 group hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                            <Code size={24} />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-white">Skills</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-3">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Java', 'Python', 'C++', 'JavaScript'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Spring Boot', 'React.js', 'Node.js', 'HTML/CSS', 'MySQL', 'NoSQL'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-3">Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Git', 'GitHub', 'VS Code', 'Postman'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Relevant Coursework (Things I Know) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="glass-card p-8 group hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all md:col-span-2"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Things I Know (Relevant Coursework)</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {['Operating Systems', 'System Design', 'DBMS', 'Software Engineering', 'Computer Organization and Architecture', 'Machine Learning', 'Discrete Mathematics', 'Cloud Computing'].map((course) => (
                            <span key={course} className="px-4 py-2 bg-blue-500/5 border border-blue-500/20 text-blue-100 rounded-lg text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/40 hover:-translate-y-0.5 transition-all cursor-default shadow-[inset_0_0_10px_rgba(59,130,246,0.05)]">
                                {course}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default EducationSkills;
