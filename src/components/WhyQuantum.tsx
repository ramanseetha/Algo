'use client';

import { Bot, Layers, TrendingUp, Moon, Shield, Briefcase, Settings, BarChart3, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const benefits = [
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Multi-Strategy 'Swiss Army Knife'",
        description: "Unlike single-strategy EAs that fail when markets change, POW adapts. Trending or ranging, high-impact news - we dominate in ALL market conditions.",
        badge: "Adaptive"
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: "The NEW Way To Trade With Algos",
        description: "Most EAs stop working after weeks because markets change. We show you how to overcome this with systematic optimization and portfolio diversification.",
        badge: "Revolutionary"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "20+ Years Combined Experience",
        description: "Don't get ghosted by 'gurus' – get 24/7 support from pro traders. Avoid beginner mistakes that could cost thousands with our proven guidance.",
        badge: "Expert Support"
    },
    {
        icon: <Moon className="w-8 h-8" />,
        title: "Trade On Autopilot While You Sleep",
        description: "Wake up rested with profitable trades made automatically. No chart staring, no sleepless nights - just consistent algorithmic execution.",
        badge: "Automated"
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Get Funded Account - Guaranteed",
        description: "Don't waste $1,000s on failed prop challenges or risk your money first. We pass it for you with a $50K-$200K funded account.",
        badge: "Guaranteed"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Stay Ahead Of Changing Markets",
        description: "Cover all market conditions simultaneously. Diversify strategies to adapt as markets evolve, moving systematically with optimization.",
        badge: "Dynamic"
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Proprietary Portfolio Builder",
        description: "Our exclusive software helps review data for better decision-making. Set up diversified portfolios backed by data, not guesswork.",
        badge: "Exclusive"
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Low-Risk, High Consistency",
        description: "Achieve 2-4% monthly returns with 1-8% drawdowns. Risk management built-in to protect capital while maximizing steady growth.",
        badge: "Proven"
    }
];

export default function WhyQuantum() {
    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00FF00]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00FF00]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF00]/30 bg-[#00FF00]/5 backdrop-blur-sm mb-6">
                        <Bot className="w-4 h-4 text-[#00FF00]" />
                        <span className="text-sm font-bold text-[#00FF00] tracking-wide uppercase">
                            Complete Trading System
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Why This Forex{' '}
                        <span className="text-[#00FF00] text-glow">
                            'Swiss Army Knife'
                        </span>
                        {' '}Is The ONLY System You'll Ever Need
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        So many traders try algo trading with EAs and fail... That's because EAs are not 'set and forget'.
                        Markets change, and we must move with them.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#111] border border-[#00FF00]/20 rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)]"
                        >
                            {/* Badge */}
                            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-[#00FF00] text-xs font-black text-black shadow-lg">
                                {benefit.badge}
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-[#00FF00]/20 border border-[#00FF00]/30 flex items-center justify-center text-[#00FF00] mb-4 group-hover:bg-[#00FF00] group-hover:text-black transition-all">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00FF00] transition-all">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call-out Box */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-[#111] border-2 border-[#00FF00]/30 rounded-3xl p-8 md:p-12">
                        <div className="absolute inset-0 bg-[#00FF00]/5 rounded-3xl blur-2xl" />

                        <div className="relative text-center">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                                POW is an incredibly powerful tool...
                            </h3>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                But only if you know how to use it. Having a tool is one thing - <span className="text-[#00FF00] font-bold">having the skills is another</span>.
                            </p>
                            <p className="text-lg text-gray-400 mb-8">
                                We give you industry-leading guidance, support, and training materials to master the markets
                                and become a wildly successful trader. Not just the algo - the complete education.
                            </p>

                            <Link
                                href="#apply"
                                className="inline-flex items-center gap-3 px-10 py-5 text-xl font-black text-black rounded-full bg-[#00FF00] hover:scale-105 transition-all hover:shadow-[0_0_40px_rgba(0,255,0,0.5)]"
                            >
                                <span>GET STARTED NOW</span>
                                <TrendingUp className="w-6 h-6" />
                            </Link>

                            {/* Mini Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#00FF00]/20">
                                <div>
                                    <div className="text-3xl font-black text-[#00FF00] mb-2">
                                        $200M+
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium">Funding Secured</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-[#00FF00] mb-2">
                                        2-4%
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium">Monthly Returns</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-[#00FF00] mb-2">
                                        1-8%
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium">Max Drawdown</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
