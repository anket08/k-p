import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Code2, Code, MapPin, Map, Mail, MailOpen } from 'lucide-react';
import ContactModal from './ContactModal';

const Hero = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMailHovered, setIsMailHovered] = useState(false);
    const [isMapHovered, setIsMapHovered] = useState(false);
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
    const [isLeetcodeHovered, setIsLeetcodeHovered] = useState(false);

    return (
        <section className="flex flex-col justify-center pt-10 pb-16 md:pt-20 md:pb-24 relative z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <div
                    onClick={() => setIsContactOpen(true)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-zinc-300 text-sm font-medium mb-8 cursor-pointer hover:bg-surface-hover hover:border-zinc-700 transition-all group"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="group-hover:text-white transition-colors">Available for new opportunities</span>
                </div>

                <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tighter mb-6 text-white leading-[1.1]">
                    Backend developer building<br className="hidden md:block" /> <span className="text-zinc-500">scalable architectures.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 font-normal tracking-tight mb-10 max-w-2xl leading-relaxed">
                    Hi, I'm KHUSHI. I specialize in Spring Boot backends, competitive problem solving, crisp UI design, and architecting scalable systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-zinc-400 text-sm font-medium mb-12">
                    <motion.div
                        onMouseEnter={() => setIsMapHovered(true)}
                        onMouseLeave={() => setIsMapHovered(false)}
                        className="flex items-center gap-2 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative w-4 h-4 text-zinc-500 transition-colors">
                            <AnimatePresence mode="wait">
                                {isMapHovered ? (
                                    <motion.div
                                        key="hover"
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Map size={16} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <MapPin size={16} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <span className="group-hover:text-white transition-colors">Nangal, Punjab</span>
                    </motion.div>

                    <div className="hidden sm:block text-zinc-700">•</div>

                    <motion.a
                        href="mailto:khushiirana01@gmail.com"
                        onMouseEnter={() => setIsMailHovered(true)}
                        onMouseLeave={() => setIsMailHovered(false)}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                    >
                        <div className="relative w-4 h-4 text-zinc-500 transition-colors">
                            <AnimatePresence mode="wait">
                                {isMailHovered ? (
                                    <motion.div
                                        key="open"
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <MailOpen size={16} />
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
                                        <Mail size={16} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        khushiirana01@gmail.com
                    </motion.a>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <motion.a
                        onMouseEnter={() => setIsGithubHovered(true)}
                        onMouseLeave={() => setIsGithubHovered(false)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://github.com/khushiirana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition-colors group"
                    >
                        <div className="relative w-[18px] h-[18px]">
                            <AnimatePresence mode="wait">
                                {isGithubHovered ? (
                                    <motion.div
                                        key="hover"
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Github size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Github size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        GitHub
                    </motion.a>

                    <motion.a
                        onMouseEnter={() => setIsLinkedinHovered(true)}
                        onMouseLeave={() => setIsLinkedinHovered(false)}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        href="https://linkedin.com/in/khushi-thakur-b27b79373/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clean-card flex items-center justify-center gap-2 px-6 py-3 font-medium text-zinc-300 hover:text-white group"
                    >
                        <div className="relative w-[18px] h-[18px]">
                            <AnimatePresence mode="wait">
                                {isLinkedinHovered ? (
                                    <motion.div
                                        key="hover"
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Linkedin size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Linkedin size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        LinkedIn
                    </motion.a>

                    <motion.a
                        onMouseEnter={() => setIsLeetcodeHovered(true)}
                        onMouseLeave={() => setIsLeetcodeHovered(false)}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        href="https://leetcode.com/u/Khushi112004/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clean-card flex items-center justify-center gap-2 px-6 py-3 font-medium text-zinc-300 hover:text-white group"
                    >
                        <div className="relative w-[18px] h-[18px]">
                            <AnimatePresence mode="wait">
                                {isLeetcodeHovered ? (
                                    <motion.div
                                        key="hover"
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Code size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Code2 size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        LeetCode
                    </motion.a>
                </div>
            </motion.div>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </section>
    );
};

export default Hero;
