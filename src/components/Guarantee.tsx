'use client';

import Link from 'next/link';
import { Zap, CheckCircle, Star } from 'lucide-react';

export default function Guarantee() {
    return (
        <section id="apply" className="relative bg-[#0a0a0a] py-20 md:py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF00]/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF00] rounded-full mb-8">
                    <Zap className="w-4 h-4 text-black" />
                    <span className="text-black font-bold text-sm uppercase tracking-wider">Limited Spots Available</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Ready To Start Your{' '}
                    <span className="text-[#00FF00]">Funded Trading Journey?</span>
                </h2>

                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Apply now and get access to our complete trading system, strategies, coaching, and a funded account to trade with.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-[#111] border border-[#00FF00]/20 rounded-xl p-4">
                        <p className="text-2xl md:text-3xl font-black text-[#00FF00]">$200M+</p>
                        <p className="text-gray-500 text-xs">Total Funding</p>
                    </div>
                    <div className="bg-[#111] border border-[#00FF00]/20 rounded-xl p-4">
                        <p className="text-2xl md:text-3xl font-black text-[#00FF00]">2,500+</p>
                        <p className="text-gray-500 text-xs">Active Traders</p>
                    </div>
                    <div className="bg-[#111] border border-[#00FF00]/20 rounded-xl p-4">
                        <p className="text-2xl md:text-3xl font-black text-[#00FF00]">$54M+</p>
                        <p className="text-gray-500 text-xs">Challenges Passed</p>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href="#"
                    className="inline-flex items-center gap-3 bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-black px-12 py-5 rounded-full text-xl uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,0,0.4)] mb-6"
                >
                    I Need To Apply Now
                    <Zap className="w-6 h-6" />
                </Link>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00FF00]" />
                        <span>2-minute application</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00FF00]" />
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00FF00]" />
                        <span>Instant decision</span>
                    </div>
                </div>

                {/* Trustpilot */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                                <Star className="w-3 h-3 text-white fill-white" />
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm">
                        Rated 4.8/5 on Trustpilot
                    </p>
                </div>
            </div>
        </section>
    );
}
