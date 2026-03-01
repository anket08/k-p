import React from 'react';
import Hero from './components/portfolio/Hero';
import EducationSkills from './components/portfolio/EducationSkills';
import Projects from './components/portfolio/Projects';
import Achievements from './components/portfolio/Achievements';
import Dashboard from './components/Dashboard';

// stars background
const StarsBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <svg className="absolute w-[200%] h-[200%] animate-drift" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="starsPattern" width="200" height="200" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="50" r="1" fill="white" opacity="0.6" />
                    <circle cx="150" cy="80" r="1.5" fill="white" opacity="0.4" />
                    <circle cx="80" cy="180" r="0.8" fill="white" opacity="0.7" />
                    <circle cx="180" cy="20" r="1" fill="white" opacity="0.3" />
                    <circle cx="100" cy="100" r="1.2" fill="white" opacity="0.5" />
                    <circle cx="40" cy="150" r="0.5" fill="white" opacity="0.2" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#starsPattern)" />
        </svg>
    </div>
);

const App = () => {
    return (
        <div className="bg-black text-white relative selection:bg-white/20 selection:text-white font-sans overflow-x-hidden">
            <StarsBackground />

            {/* Top Navigation - Clean & Minimal */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-5xl">
                    <span className="font-bold tracking-tighter text-lg text-white">KHUSHI.</span>
                    <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-400 overflow-x-auto no-scrollbar">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#education" className="hover:text-white transition-colors">Education</a>
                        <a href="#projects" className="hover:text-white transition-colors">Work</a>
                        <a href="#stats" className="hover:text-white transition-colors">Stats</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-20 container mx-auto px-6 pb-20 pt-20 max-w-5xl space-y-24">
                <section id="about">
                    <Hero />
                </section>

                <section id="education">
                    <EducationSkills />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section>
                    <Achievements />
                </section>

                {/* Dashboard Section */}
                <section id="stats" className="pt-10 border-t border-border">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Metrics</h2>
                        <p className="text-zinc-400">Live programming statistics & daily consistency</p>
                    </div>
                    <Dashboard />
                </section>
            </div>

            {/* Minimal Footer */}
            <footer className="py-8 border-t border-border mt-auto text-center text-zinc-500 text-sm">
                <p>© {new Date().getFullYear()} Khushi Thakur. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
