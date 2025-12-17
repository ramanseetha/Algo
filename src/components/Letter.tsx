'use client';

import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

export default function Letter({ openPopup }: { openPopup: () => void }) {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
                {/* Section Title */}
                <ScrollAnimate>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 text-center mb-2">
                        The Smarter Way Professionals Trade With AI
                    </h2>
                    <p className="text-[#A60D60] font-bold text-lg md:text-xl text-center mb-10">
                        How I Help UAE Traders Create Consistent, Automated Forex Returns
                    </p>
                </ScrollAnimate>

                {/* Letter Card */}
                <div className="p-6 md:p-8 text-gray-800">
                    <p className="text-[#A60D60] font-bold mb-4 text-lg">Dear Trader,</p>

                    <p className="mb-4 leading-relaxed font-semibold">
                        Want to finally trade with confidence—funded, emotion-free, and focused on compounding real profits month after month?
                    </p>

                    <p className="mb-4 leading-relaxed font-semibold">
                        No more endless chart study, sleepless market stress, or blown accounts.
                    </p>

                    <p className="mb-6 leading-relaxed font-semibold">
                        Quantum Algo lets you skip "the fear phase" and step into reliable income using AI trade automation and capital scaling using prop-firms.
                    </p>

                    <p className="text-[#A60D60] font-bold mb-4 text-lg">Here's the simple process I guide every approved trader through…</p>

                    <div className="space-y-4 mb-6">
                        <p className="leading-relaxed font-semibold">
                            <span className="font-bold">1:</span> Buy a $100,000 funded capital. Clear Phase 1 & Phase 2 with QA PropPass EA.
                        </p>

                        <p className="leading-relaxed font-semibold">
                            <span className="font-bold">2:</span> Get set up with Quantum Algo's diversified, AI-optimized portfolio targeting a steady 3-4% monthly yield (no technical skills needed, we configure everything)
                        </p>

                        <p className="leading-relaxed font-semibold">
                            <span className="font-bold">3:</span> Roll profits into your personal live account and use the same AI strategies to scale to 6%+ monthly. Adjust risk as you wish—the system adapts to you.
                        </p>
                    </div>

                    <div className="bg-[#E8D4F0] p-4 rounded-lg mb-6">
                        <p className="text-gray-900 font-bold leading-relaxed">
                            Your job? Monitor performance, refine risk, schedule withdrawals.
                        </p>
                        <p className="text-gray-900 font-semibold leading-relaxed mt-2">
                            Scale with professional-grade AI, not hype.
                        </p>
                    </div>

                    <p className="text-[#A60D60] font-bold leading-relaxed mb-4">
                        Think it's too good to be true? Perfect—you're the kind of trader I want.
                    </p>

                    <p className="font-semibold leading-relaxed">
                        Apply, get approved, and I'll show you live investor dashboards so you can verify every metric yourself.
                    </p>

                    <p className="font-bold leading-relaxed mt-4">
                        Real accounts. Real withdrawals. Real data.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                    <button
                        onClick={openPopup}
                        className="block w-full bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-extrabold py-5 rounded-full text-lg md:text-xl uppercase tracking-wide text-center transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] cursor-pointer"
                    >
                        Apply Now For Access
                    </button>
                </div>

                {/* Urgency Text */}
                <p className="text-sky-400 font-bold text-sm text-center mt-4">
                    HURRY! Only 4 onboarding slots left until December 2025.
                </p>

                {/* Chart Image with Verified Results Overlay */}
                <div className="mt-10 relative mx-0 md:-mx-20 lg:-mx-32">
                    <div className="overflow-hidden bg-white p-2">
                        <img
                            src="https://quantumalgo.pro/1-year-backtest.jpg"
                            alt="1 Year Backtest - Verified Results"
                            className="w-full h-auto border border-white"
                        />
                    </div>

                    {/* Verified Results Overlay - Mobile: Static, Desktop: Absolute */}
                    <div className="relative md:absolute md:-bottom-20 md:left-1/2 md:-translate-x-1/2 w-full md:w-[90%] md:max-w-2xl mt-4 md:mt-0">
                        <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                                <img
                                    src="/bagde%20logo.svg"
                                    alt="Verified Badge"
                                    className="w-10 h-10 md:w-14 md:h-14"
                                />
                            </div>
                            <div>
                                <p className="text-[#A60D60] font-black text-xl sm:text-2xl md:text-3xl italic mb-2">^ Verified Results...</p>
                                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                                    <span className="font-semibold">Still think it's BS? I even give out investor account access, just to silence the haters</span> <span className="font-bold">(you'll get this after you apply)</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer for overlay - Only on desktop */}
                <div className="h-0 md:h-28"></div>
            </div>
        </section>
    );
}
