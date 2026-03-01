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

    // Generate last 1 year of data (52 weeks * 7 days = 364 days)
    const grid = useMemo(() => {
        const today = new Date();
        const numDays = 52 * 7;
        let days = [];

        for (let i = numDays - 1; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const timestamp = Math.floor(d.getTime() / 1000);

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

        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return weeks;
    }, [submissionData]);

    const getColor = (count: number) => {
        if (count === 0) return 'bg-[#161b22] border-[#ffffff05]';
        if (count <= 2) return 'bg-[#0e4429] border-[#00000000]';
        if (count <= 4) return 'bg-[#006d32] border-[#00000000]';
        if (count <= 6) return 'bg-[#26a641] border-[#00000000]';
        return 'bg-[#39d353] border-[#00000000]';
    };

    return (
        <div className="w-full relative flex flex-col">
            <div className="flex justify-between items-center text-xs text-zinc-500 mb-4 font-medium">
                <span>Submissions (Last 1 Year)</span>
                <span className="hidden sm:inline opacity-50 text-[10px]">Scroll horizontally &#8594;</span>
            </div>

            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                <div className="flex gap-[3px] min-w-max pr-1" dir="ltr">
                    {grid.map((week, wIndex) => (
                        <div key={wIndex} className="flex flex-col gap-[3px]">
                            {week.map((day, dIndex) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: wIndex * 0.005 + dIndex * 0.01 }}
                                    key={dIndex}
                                    className={`w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] border ${getColor(day.count)} transition-colors hover:border-white/50 cursor-pointer`}
                                    title={`${day.count} submissions on ${day.date.toDateString()}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Heatmap;
