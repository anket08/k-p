import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface HeatmapProps {
    calendar: any;
}

const Heatmap: React.FC<HeatmapProps> = ({ calendar }) => {
    // Parse calendar data from stringified JSON if needed
    const submissionData = useMemo(() => {
        try {
            if (!calendar || !calendar.submissionCalendar) return {};
            // Sometimes it's a stringified JSON
            return typeof calendar.submissionCalendar === 'string'
                ? JSON.parse(calendar.submissionCalendar)
                : calendar.submissionCalendar;
        } catch (e) {
            console.error(e);
            return {};
        }
    }, [calendar]);

    // Generate last 6 months of data (26 weeks * 7 days = 182 days) or a full year 52*7 = 364
    // Let's do 24 weeks to fit the card nicely
    const grid = useMemo(() => {
        const today = new Date();
        // Shift to end of week
        const numDays = 24 * 7;
        let days = [];

        for (let i = numDays - 1; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const timestamp = Math.floor(d.getTime() / 1000);

            // Find matching timestamp in data (calendar data is usually daily at 00:00 UTC)
            // We will do a fuzzy match (same day)
            let count = 0;
            for (const [key, val] of Object.entries(submissionData)) {
                const dataDate = new Date(parseInt(key) * 1000);
                if (dataDate.getFullYear() === d.getFullYear() &&
                    dataDate.getMonth() === d.getMonth() &&
                    dataDate.getDate() === d.getDate()) {
                    count += val as number;
                }
            }

            days.push({
                date: d,
                count: count
            });
        }

        // chunk by week, ensuring oldest dates are first
        const weeks = [];
        // The array is already built from i = numDays-1 (oldest) down to i = 0 (newest).
        // Therefore, days[0] is 6 months ago, days[days.length-1] is today.
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return weeks;
    }, [submissionData]);

    // Get color intensity based on count
    const getColor = (count: number) => {
        if (count === 0) return 'bg-[#161b22] border-[#ffffff05]'; // matching github dark mode empty cells
        if (count <= 2) return 'bg-[#0e4429] border-[#00000000]';
        if (count <= 4) return 'bg-[#006d32] border-[#00000000]';
        if (count <= 6) return 'bg-[#26a641] border-[#00000000]';
        return 'bg-[#39d353] border-[#00000000]';
    };

    return (
        <div className="w-full relative">
            <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium">
                <span>Submissions (Last 6 Months)</span>
            </div>
            {/* Changed from RTL to LTR to render chronological order correctly (left to right) */}
            <div className="flex gap-1">
                <div className="flex gap-[3px] ml-auto">
                    {grid.map((week, wIndex) => (
                        <div key={wIndex} className="flex flex-col gap-[3px]">
                            {week.map((day, dIndex) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: wIndex * 0.01 + dIndex * 0.01 }}
                                    key={dIndex}
                                    className={`w-3 h-3 rounded-[2px] border ${getColor(day.count)} transition-colors hover:border-white/50 cursor-pointer group relative`}
                                    // Use native title for default tooltip, disable custom broken tooltip
                                    title={`${day.count} submissions on ${day.date.toDateString()}`}
                                >
                                    {/* The custom CSS tooltip was causing massive overflow and z-index stacking issues 
                                        because 182 relative containers were spawning absolute children heavily overlapping. 
                                        Native title attribute is much more performant and cleaner for this density. */}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Heatmap;
