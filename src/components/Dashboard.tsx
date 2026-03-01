import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import RecentSolved from './RecentSolved';

export interface LeetCodeData {
    profile: any;
    solved: any;
    recent: any[];
    calendar: any;
}

const USERNAME = 'Khushi112004';
// Use a generic CORS proxy since LeetCode blocks browser requests
// Alternative if cors-anywhere is blocked: we can try another wrapper, but alfa is rate limited.
// A better robust wrapper is leetcode-stats-api which we can try again, or just use another proxy.
const BACKUP_API = 'https://leetcode-api-faisalshohag.vercel.app/Khushi112004';

const MOCK_DATA: LeetCodeData = {
    profile: {
        username: 'Khushi112004',
        ranking: 154200,
    },
    solved: {
        solvedProblem: 215,
        easySolved: 90,
        mediumSolved: 110,
        hardSolved: 15,
        totalQuestions: 3000
    },
    recent: [
        { title: 'Two Sum', id: '1' },
        { title: 'Add Two Numbers', id: '2' },
        { title: 'Longest Substring Without Repeating Characters', id: '3' },
        { title: 'Median of Two Sorted Arrays', id: '4' },
        { title: 'Longest Palindromic Substring', id: '5' }
    ],
    calendar: {
        submissionCalendar: JSON.stringify({
            "1709251200": 2, "1709337600": 5, "1709424000": 1,
            "1710000000": 3, "1710500000": 4, "1711000000": 2,
            "1712000000": 6, "1713000000": 1, "1714000000": 3
        })
    }
};

const Dashboard = () => {
    const [data, setData] = useState<LeetCodeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMock, setIsMock] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Try a different stable wrapper API since alfa is down
                const res = await fetch(BACKUP_API);
                if (!res.ok) throw new Error("Backup API failed");
                const apiData = await res.json();

                // Note: Faisal is another wrapper, its structure is slightly different. Let's map it:
                const formattedData: LeetCodeData = {
                    profile: {
                        username: USERNAME,
                        ranking: apiData.ranking || 0
                    },
                    solved: {
                        solvedProblem: apiData.totalSolved || 0,
                        easySolved: apiData.easySolved || 0,
                        mediumSolved: apiData.mediumSolved || 0,
                        hardSolved: apiData.hardSolved || 0,
                        totalQuestions: apiData.totalQuestions || 3000
                    },
                    recent: apiData.recentSubmissions ? apiData.recentSubmissions.map((s: any) => ({
                        title: s.title,
                        id: s.timestamp
                    })) : [],
                    calendar: { submissionCalendar: apiData.submissionCalendar || "{}" }
                };

                setData(formattedData);
            } catch (error) {
                console.error("Error fetching LeetCode api, falling back to mock data", error);
                setData(MOCK_DATA);
                setIsMock(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="lg:col-span-12 clean-card p-12 flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-zinc-500 animate-pulse font-medium tracking-wide">Syncing with LeetCode...</p>
            </div>
        );
    }

    if (!data) return <div className="text-red-500 glass-card p-8">Failed to load data.</div>;

    return (
        <>
            {isMock && (
                <div className="lg:col-span-12 mb-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm flex items-center gap-2">
                    <span>⚠️ <strong>Notice:</strong> The live LeetCode API is currently rate limiting requests (HTTP 429). Displaying fallback mock data for demonstration.</span>
                </div>
            )}
            <div className="lg:col-span-5 flex flex-col gap-6">
                <ProfileCard profile={data.profile} solved={data.solved} calendar={data.calendar} />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
                <RecentSolved recent={data.recent} />
            </div>
        </>
    );
};

export default Dashboard;
