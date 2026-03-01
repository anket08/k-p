import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/portfolio/Hero';
import EducationSkills from './components/portfolio/EducationSkills';
import Projects from './components/portfolio/Projects';
import Achievements from './components/portfolio/Achievements';
import Dashboard from './components/Dashboard';

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number }[] = [];
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const numParticles = Math.floor((canvas.width * canvas.height) / 10000);
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    alpha: Math.random(),
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha += (Math.random() - 0.5) * 0.05;

                if (p.alpha < 0) p.alpha = 0;
                if (p.alpha > 1) p.alpha = 1;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.6})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-50"
        />
    );
};

const MouseGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            animate={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.12), transparent 80%)`
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        />
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-black text-white relative selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden">
            <MouseGlow />
            {/* Global Vignette/Glow Effect */}
            <div className="fixed inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(29,78,216,0.15)]" />

            {/* Dynamic Starfield */}
            <Starfield />

            {/* Main Content */}
            <div className="relative z-20 container mx-auto px-4 py-8 max-w-6xl">
                <Hero />

                <EducationSkills />

                <Projects />

                <Achievements />

                {/* LeetCode Dashboard Section */}
                <section className="py-20 relative z-20 mt-10 border-t border-white/10">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter bg-gradient-to-br from-blue-400 via-purple-500 to-white bg-clip-text text-transparent mb-4">
                            LeetCode Dash
                        </h2>
                        <p className="text-gray-400 font-medium">Live programming statistics & daily consistency</p>
                    </div>

                    <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 w-full">
                        <Dashboard />
                    </main>
                </section>
            </div>
        </div>
    );
};

export default App;
