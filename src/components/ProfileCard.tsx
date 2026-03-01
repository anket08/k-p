import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';
import Heatmap from './Heatmap';

interface ProfileCardProps {
    profile: any;
    solved: any;
    calendar: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, solved, calendar }) => {
    const totalSolved = solved.solvedProblem;
    const totalQuestions = solved.totalQuestions; // might not exist in all wrappers, fallback to 3000
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
            className="glass-card p-6 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500"
        >
            {/* Top Header */}
            <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                            boxShadow: [
                                "0 0 0px rgba(59,130,246,0)",
                                "0 0 15px rgba(59,130,246,0.3)",
                                "0 0 0px rgba(59,130,246,0)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 text-primary"
                    >
                        <Trophy size={24} />
                    </motion.div>
                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-primary transition-colors">{profile.username}</h2>
                        <p className="text-sm text-gray-400 font-medium tracking-wide">Rank {profile.ranking.toLocaleString()}</p>
                    </div>
                </div>
                <a
                    href={`https://leetcode.com/${profile.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center border border-white/10 hover:border-primary/50"
                >
                    <ExternalLink size={18} />
                </a>
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
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(255,192,30,0.03)] border-b-[#ffc01e]/20">
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
