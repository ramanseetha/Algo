'use client';

import { TrendingUp, DollarSign, Users, Award, ShieldCheck, Zap } from 'lucide-react';

const stats = [
    {
        icon: <DollarSign className="w-10 h-10" />,
        value: "$200M+",
        label: "Total Funding Accessed",
        description: "Across all prop firms"
    },
    {
        icon: <Users className="w-10 h-10" />,
        value: "2,500+",
        label: "Active Traders",
        description: "Using our strategies"
    },
    {
        icon: <TrendingUp className="w-10 h-10" />,
        value: "$54M+",
        label: "Challenges Passed",
        description: "In prop firm challenges"
    },
    {
        icon: <Award className="w-10 h-10" />,
        value: "7-Fig+",
        label: "Total Withdrawals",
        description: "Member profits paid"
    }
];

const proofPoints = [
    {
        title: "Verified Results",
        description: "Every stat is backed by real trading data. We provide investor access to silence doubters.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        title: "Consistent Performance",
        description: "Our algos maintain 2-4% monthly returns with <8% max drawdown across all market conditions.",
        icon: <TrendingUp className="w-6 h-6" />
    },
    {
        title: "Real Withdrawals",
        description: "Members consistently withdraw 4-5 figures monthly from their funded accounts.",
        icon: <DollarSign className="w-6 h-6" />
    }
];

export default function Proof() {
    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00FF00]/10 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF00]/30 bg-[#00FF00]/5 backdrop-blur-sm mb-6">
                        <Zap className="w-4 h-4 text-[#00FF00]" />
                        <span className="text-sm font-bold text-[#00FF00] tracking-wide uppercase">
                            Verified Performance
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        We've Guided Traders to{' '}
                        <span className="text-[#00FF00] text-glow">
                            $200M+ in Funding
                        </span>
                        {' '}& Consistent Withdrawals
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        POW is backed by professional traders with a combined 20+ years of experience in algorithmic trading and prop firm funding.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#111] border-2 border-[#00FF00]/20 rounded-3xl p-8 hover:border-[#00FF00]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-3xl bg-[#00FF00] opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-[#00FF00]/20 border border-[#00FF00]/30 flex items-center justify-center text-[#00FF00] group-hover:bg-[#00FF00] group-hover:text-black transition-all">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-black text-[#00FF00] mb-2">{stat.value}</div>
                                    <div className="text-base font-bold text-white mb-1">{stat.label}</div>
                                    <div className="text-sm text-gray-500">{stat.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proof Points */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {proofPoints.map((point, index) => (
                            <div key={index} className="relative bg-[#111] border border-[#00FF00]/20 rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-[#00FF00] flex items-center justify-center text-black mb-4">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Trust Statement */}
                    <div className="text-center bg-[#111] border border-[#00FF00]/30 rounded-3xl p-8 md:p-12">
                        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
                            Everything we know has gone into this system – responsible for helping traders secure{' '}
                            <span className="text-[#00FF00] text-glow">
                                $200M+ in funding
                            </span>
                            , plus multiple 6-7 figures in withdrawals across member profits.
                        </p>
                        <p className="text-lg text-gray-400 mb-8">
                            We've been through the missed trades, sleepless nights, and drawdowns that most traders face... and emerged successful on the other side.
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00FF00]/10 border border-[#00FF00]/30">
                            <ShieldCheck className="w-5 h-5 text-[#00FF00]" />
                            <span className="text-[#00FF00] font-bold">100% Verified Results</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
