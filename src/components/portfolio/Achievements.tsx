import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        "Solved 200+ problems on LeetCode demonstrating strong problem-solving skills and consistency",
        "Maintained excellent academic performance with 9.27 CGPA in MCA(SEM-1)",
        "Secured 1st place in an intercollege web development hackathon during undergraduate studies",
        "Actively participated in extracurricular activities during school"
    ];

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariant: Variants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-20 relative z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 group hover:shadow-[0_0_40px_rgba(255,192,30,0.1)] transition-all"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc01e]">
                        <Award size={24} />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Achievements</h2>
                </div>

                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {achievements.map((item, index) => (
                        <motion.li
                            variants={itemVariant}
                            key={index}
                            className="flex gap-4 items-start group/item hover:translate-x-1 transition-transform cursor-default"
                        >
                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-primary/50 group-hover/item:bg-primary/10 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-primary/80 group-hover/item:bg-primary transition-colors cursor-default"></div>
                            </div>
                            <p className="text-gray-300 font-medium leading-relaxed tracking-wide group-hover/item:text-white transition-colors">
                                {item}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
};

export default Achievements;
