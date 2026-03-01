import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Link, Trophy, Award } from 'lucide-react';
import Heatmap from './Heatmap';

interface ProfileCardProps {
    profile: any;
    solved: any;
    calendar: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, solved, calendar }) => {
    const [isTrophyHovered, setIsTrophyHovered] = useState(false);
    const [isLinkHovered, setIsLinkHovered] = useState(false);

    const totalSolved = solved.solvedProblem;
    const easy = solved.easySolved;
    const medium = solved.mediumSolved;
    const hard = solved.hardSolved;

    const percentage = Math.min((totalSolved / 3000) * 100, 100);
    // Let's create a cool circular progress chart using SVG
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="clean-card p-6 md:p-8 relative overflow-hidden group"
        >
            {/* Top Header */}
            <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                    <motion.div
                        onMouseEnter={() => setIsTrophyHovered(true)}
                        onMouseLeave={() => setIsTrophyHovered(false)}
                        animate={{
                            y: [0, -4, 0],
                            boxShadow: [
                                "0 0 0px rgba(59,130,246,0)",
                                "0 0 15px rgba(59,130,246,0.3)",
                                "0 0 0px rgba(59,130,246,0)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 text-primary cursor-pointer relative"
                    >
                        <AnimatePresence mode="wait">
                            {isTrophyHovered ? (
                                <motion.div
                                    key="hover"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute"
                                >
                                    <Award size={24} />
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
                                    <Trophy size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-primary transition-colors">{profile.username}</h2>
                        <p className="text-sm text-gray-400 font-medium tracking-wide">Rank {profile.ranking.toLocaleString()}</p>
                    </div>
                </div>
                <motion.a
                    onMouseEnter={() => setIsLinkHovered(true)}
                    onMouseLeave={() => setIsLinkHovered(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://leetcode.com/${profile.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 transition-colors flex items-center justify-center border border-white/10 hover:border-primary/50 relative cursor-pointer"
                >
                    <AnimatePresence mode="wait">
                        {isLinkHovered ? (
                            <motion.div
                                key="hover"
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute"
                            >
                                <Link size={18} />
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
                                <ExternalLink size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.a>
            </div>

            {/* Circular Progress */}
            <div className="flex justify-center items-center mb-8 relative">
                <div className="relative flex items-center justify-center w-[150px] h-[150px]">
                    {/* Background Track */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="75"
                            cy="75"
                            r={radius}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="10"
                            fill="transparent"
                        />
                        {/* Animated Progress */}
                        <motion.circle
                            cx="75"
                            cy="75"
                            r={radius}
                            stroke="url(#gradient)"
                            strokeWidth="10"
                            fill="transparent"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: strokeDashoffset }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-white">{totalSolved}</span>
                        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase mt-1">Solved</span>
                    </div>
                </div>
            </div>

            {/* Stats Breakdown */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-[#00b8a3] mb-1">{easy}</span>
                    <span className="text-xs font-medium text-gray-500 uppercase">Easy</span>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-[#ffc01e] mb-1">{medium}</span>
                    <span className="text-xs font-medium text-gray-500 uppercase">Med</span>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-[#ef4743] mb-1">{hard}</span>
                    <span className="text-xs font-medium text-gray-500 uppercase">Hard</span>
                </div>
            </div>

            {/* Heatmap Area */}
            <div className="mt-6 pt-6 border-t border-white/[0.05]">
                <Heatmap calendar={calendar} />
            </div>
        </motion.div>
    );
};

export default ProfileCard;
