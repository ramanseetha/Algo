'use client';

import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

export default function FundingProof({ openPopup }: { openPopup: () => void }) {
    return (
        <section className="relative bg-[#f5f5f5] pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden">
            {/* Curved background effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] bg-[#eaeaea] rounded-[50%] -translate-y-1/2" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 md:px-6">
                {/* Magenta Arrow Indicator */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-1">
                        <div className="w-8 h-0.5 bg-[#A60D60]" />
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-[#A60D60]" />
                    </div>
                </div>

                {/* Section Header */}
                <ScrollAnimate>
                    <div className="text-center mb-10">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <strong><em>I've Helped UAE Traders<br />
                            Access $30M+ In Capital<br />
                            Using Disciplined, AI-Driven<br />
                            Trading Strategies</em></strong>
                        </h2>
                    </div>
                </ScrollAnimate>

                {/* Content */}
                <div className="max-w-2xl mx-auto mb-8 text-gray-700 font-semibold">
                    <p className="mb-6 text-lg">
                        I've spent years building, breaking, refining, and rebuilding automated systems through every kind of market condition imaginable.
                    </p>

                    <p className="mb-6 text-lg">
                        My team and I engineered Quantum Algo so traders can finally experience:
                    </p>

                    <ul className="mb-6 text-lg space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-[#A60D60] font-bold">•</span>
                            <span>Controlled drawdowns</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#A60D60] font-bold">•</span>
                            <span>Consistent execution</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#A60D60] font-bold">•</span>
                            <span>A stable equity curve that doesn't depend on luck or emotion</span>
                        </li>
                    </ul>

                    <p className="mb-6 text-lg">
                        Together, these systems have helped traders:
                    </p>

                    <ul className="mb-6 text-lg space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-[#A60D60] font-bold">•</span>
                            <span><span className="bg-[#E8D4F0] px-1 font-bold">Manage tens of millions</span> across live and funded accounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#A60D60] font-bold">•</span>
                            <span>Build <span className="bg-[#E8D4F0] px-1 font-bold">six-figure withdrawals</span> over time</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#A60D60] font-bold">•</span>
                            <span>Trade with discipline instead of chaos</span>
                        </li>
                    </ul>

                    <p className="text-lg font-bold text-[#A60D60]">
                        Ready to step up and trade with the confidence of AI-driven precision?
                    </p>
                </div>

                {/* CTA Button - Positioned to overlap next section */}
                <div className="max-w-3xl mx-auto relative z-10 translate-y-1/2">
                    <button 
                        onClick={openPopup}
                        className="block bg-[#A60D60] max-w-3xl px-10 mx-auto hover:bg-[#A60D60]/90 text-white font-extrabold py-5 rounded-full text-lg md:text-xl uppercase tracking-wide text-center transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] cursor-pointer"
                    >
                        Apply Now
                    </button>
                    <p className="text-sky-400 font-bold text-sm text-center mt-4 bg-[#f5f5f5] py-2">
                        HURRY! Only 4 onboarding slots left until December 2025.
                    </p>
                </div>
            </div>
        </section>
    );
}
