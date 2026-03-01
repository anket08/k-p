import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, MapPin, Mail } from 'lucide-react';
import ContactModal from './ContactModal';

const Hero = () => {
    const [isContactOpen, setIsContactOpen] = React.useState(false);

    return (
        <section className="min-h-[60vh] flex flex-col justify-center py-20 relative z-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    onClick={() => setIsContactOpen(true)}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 cursor-pointer hover:bg-green-500/20 hover:scale-105 transition-all shadow-[0_0_15px_rgba(34,197,94,0.15)] group"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="group-hover:text-green-300 transition-colors">Open to Work</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-[length:200%_auto] animate-gradient-xy bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">KHUSHI.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-tight mb-8 max-w-2xl">
                    I'm a software developer passionate about building scalable web applications and solving complex problems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm font-medium mb-10">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        Nangal, Punjab
                    </div>
                    <a href="mailto:khushiirana01@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
                        khushiirana01@gmail.com
                    </a>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/khushiirana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass-card px-6 py-3 font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all group"
                    >
                        <Github size={20} className="group-hover:text-primary transition-colors" />
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/khushi-thakur-b27b79373/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass-card px-6 py-3 font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all group"
                    >
                        <Linkedin size={20} className="group-hover:text-primary transition-colors" />
                        LinkedIn
                    </a>
                    <a
                        href="https://leetcode.com/u/Khushi112004/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass-card px-6 py-3 font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all group"
                    >
                        <Code2 size={20} className="group-hover:text-primary transition-colors" />
                        LeetCode
                    </a>
                </div>
            </motion.div>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </section>
    );
};

export default Hero;
