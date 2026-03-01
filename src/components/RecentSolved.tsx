import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

interface RecentSolvedProps {
    recent: any[];
}

const RecentSolved: React.FC<RecentSolvedProps> = ({ recent }) => {
    // Take top 7 recent submissions to fit nicely
    const displayRecent = recent.slice(0, 7);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="glass-card p-6 flex-1 flex flex-col"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Activity size={20} />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-white">Recent Solved</h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar"
            >
                {displayRecent.map((item, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={item.id || index}
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 transition-all cursor-pointer"
                    >
                        <div className="font-semibold text-gray-200 group-hover:text-white transition-colors truncate pr-4">
                            {item.title}
                        </div>
                        <div className="text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full whitespace-nowrap border border-green-400/20">
                            Accepted
                        </div>
                    </motion.div>
                ))}
                {displayRecent.length === 0 && (
                    <div className="text-gray-500 text-sm p-4 text-center">No recent solutions found.</div>
                )}
            </motion.div>

            <div className="mt-6 pt-6 border-t border-white/[0.05] flex justify-between items-center text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span> Max Streak Active
                </div>
                <div className="flex items-center gap-2">
                    Active Days synced
                </div>
            </div>
        </motion.div>
    );
};

export default RecentSolved;
