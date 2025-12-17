'use client';

import Link from 'next/link';
import { ArrowRight, X, Check } from 'lucide-react';

export default function CapitalComparison() {
    return (
        <section className="bg-[#050505] py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-4">
                    Stop Trading With Your 'Lunch Money' And Start Making{' '}
                    <span className="text-[#00FF00]">Life-changing Trades</span> With Prop Funding
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    See the difference between trading with a small account vs a properly funded account.
                </p>

                {/* Comparison Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Small Account */}
                    <div className="bg-[#111] border border-red-500/30 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <X className="w-6 h-6 text-red-500" />
                            <h3 className="text-xl font-bold text-white">Small Account</h3>
                        </div>
                        <div className="text-center py-8">
                            <p className="text-gray-500 text-sm mb-2">Monthly Withdrawal</p>
                            <p className="text-4xl font-black text-red-500">$200</p>
                            <p className="text-gray-500 text-xs mt-2">Trading with $5,000</p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <X className="w-4 h-4 text-red-500" />
                                Limited growth potential
                            </li>
                            <li className="flex items-center gap-2">
                                <X className="w-4 h-4 text-red-500" />
                                Your capital at risk
                            </li>
                            <li className="flex items-center gap-2">
                                <X className="w-4 h-4 text-red-500" />
                                Emotional trading decisions
                            </li>
                        </ul>
                    </div>

                    {/* Funded Account */}
                    <div className="bg-[#111] border-2 border-[#00FF00] rounded-2xl p-6 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00FF00] text-black text-xs font-bold px-4 py-1 rounded-full">
                            RECOMMENDED
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <Check className="w-6 h-6 text-[#00FF00]" />
                            <h3 className="text-xl font-bold text-white">Funded Account</h3>
                        </div>
                        <div className="text-center py-8">
                            <p className="text-gray-500 text-sm mb-2">Monthly Withdrawal</p>
                            <p className="text-4xl font-black text-[#00FF00]">$18,000</p>
                            <p className="text-gray-500 text-xs mt-2">Trading with $600,000</p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#00FF00]" />
                                Massive growth potential
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#00FF00]" />
                                No personal capital at risk
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#00FF00]" />
                                Trade without emotion
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Explanation */}
                <div className="bg-[#0a0a0a] border border-[#00FF00]/20 rounded-xl p-6 text-center mb-8">
                    <p className="text-gray-400 leading-relaxed">
                        With <span className="text-[#00FF00] font-bold">$600k</span> in prop firm capital at{' '}
                        <span className="text-[#00FF00] font-bold">4% monthly</span> withdrawal, traders can earn approximately{' '}
                        <span className="text-[#00FF00] font-bold">$18,000/month</span> after profit splits.
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="#apply"
                        className="inline-flex items-center gap-2 bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-black px-10 py-4 rounded-full text-lg uppercase tracking-wider transition-all hover:scale-105"
                    >
                        Get Funded Now
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
