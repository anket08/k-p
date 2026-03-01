import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';

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
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section className="py-10 relative z-20">
            <div className="clean-card p-10 md:p-12">
                <div className="mb-10 max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Milestones</h2>
                    <p className="text-zinc-400">Key achievements extending beyond code.</p>
                </div>

                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
                >
                    {achievements.map((item, index) => (
                        <motion.li
                            variants={itemVariant}
                            key={index}
                            className="flex items-start gap-4 group"
                        >
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-colors">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">
                                {item}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
};

export default Achievements;
