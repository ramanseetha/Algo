'use client';

import { Target, TrendingUp, Users, Award, Zap } from 'lucide-react';

const stats = [
    { icon: <Users className="w-6 h-6" />, value: "2,500+", label: "Active Traders" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "2-4%", label: "Monthly Returns" },
    { icon: <Award className="w-6 h-6" />, value: "$200M+", label: "Funding Accessed" },
    { icon: <Target className="w-6 h-6" />, value: "95%", label: "Success Rate" }
];

const fundingPartners = [
    "FTMO", "The5ers", "E8 Funding", "The Funded Trader", "Bespoke Funding", "Blue Guardian"
];

export default function About() {
    return (
        <section id="about" className="relative py-20 md:py-32 bg-[#111] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF00]/10 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF00]/30 bg-[#00FF00]/5 backdrop-blur-sm mb-6">
                        <Zap className="w-4 h-4 text-[#00FF00]" />
                        <span className="text-sm font-bold text-[#00FF00] tracking-wide uppercase">
                            About POW
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Built for{' '}
                        <span className="text-[#00FF00] text-glow">
                            Serious Traders
                        </span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            POW is designed for traders who <span className="text-[#00FF00] font-bold">refuse to stare at charts all day</span>. We analyse macro trends, price action, and liquidity flows in real time, allowing you to deploy disciplined strategies with precision.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Whether you are a funded trader or managing a prop desk, our <span className="text-[#00FF00] font-bold">adaptive trade engine</span> and layered algorithms help you scale consistent, low-drawdown accounts by reacting to volatility in milliseconds.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#00FF00]/10 rounded-3xl blur-xl" />
                        <div className="relative bg-[#0a0a0a] border border-[#00FF00]/30 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Key Advantages</h3>
                            <ul className="space-y-4">
                                {[
                                    "Multi-strategy algo portfolios",
                                    "2-4% monthly returns target",
                                    "Guaranteed $50K-$200K funding",
                                    "No technical analysis required",
                                    "24/7 community support",
                                    "Prop firm challenge specialists"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-[#00FF00]" />
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#0a0a0a] border border-[#00FF00]/20 rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#00FF00] flex items-center justify-center text-black shadow-lg group-hover:shadow-[#00FF00]/30 transition-shadow">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-[#00FF00]">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Funding Partners */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Trusted by traders at leading prop firms</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {fundingPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-[#0a0a0a] border border-[#00FF00]/20 rounded-lg text-gray-400 font-semibold hover:border-[#00FF00]/50 hover:text-[#00FF00] transition-all"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
