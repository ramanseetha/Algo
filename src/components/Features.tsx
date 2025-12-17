'use client';

import ScrollAnimate from './ScrollAnimate';

export default function Features({ openPopup }: { openPopup: () => void }) {
    return (
        <section className="bg-white pt-16 md:pt-24 pb-8">

            <div className="max-w-3xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <ScrollAnimate>
                    <div className="text-center mb-12">
                        <p className="text-gray-600 font-semibold tracking-[0.2em] text-sm mb-4">
                            IT'S NOT FOR EVERYONE.
                        </p>
                        <h2
                            className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <strong><em>Why Quantum Algo's Multi-Strategy AI Is The Edge Serious UAE Traders Have Been Waiting For…</em></strong>
                        </h2>
                    </div>
                </ScrollAnimate>

                {/* Content - Left aligned */}
                <div className="text-left">
                    {/* Most EAs Have One Problem */}
                    <div className="mb-8">
                        <h3 className="inline bg-[#E8D4F0] px-1 font-bold text-gray-900 text-xl">
                            Most EAs Have One Problem:
                        </h3>
                        <p className="text-gray-800 font-semibold text-xl leading-relaxed mt-2">
                            They work… until the market does something they weren't built for.
                        </p>
                        <p className="text-gray-800 font-semibold text-xl leading-relaxed mt-2">
                            Then they fall apart.
                        </p>
                    </div>

                    {/* Quantum Algo Was Built For The Opposite */}
                    <div className="mb-8">
                        <h3 className="font-bold text-[#A60D60] text-xl mb-2">
                            Quantum Algo Was Built For The Opposite.
                        </h3>
                        <p className="text-gray-800 font-semibold text-xl leading-relaxed">
                            Instead of relying on one idea, our system reads momentum shifts, volatility changes, and trend behaviour—and adjusts automatically.
                        </p>
                        <p className="text-gray-800 font-bold text-xl leading-relaxed mt-4">
                            No babysitting. No constant tweaking.
                        </p>
                    </div>

                    {/* It Evolves As Markets Change */}
                    <div className="mb-8">
                        <h3 className="inline bg-[#E8D4F0] px-1 font-bold text-gray-900 text-xl">
                            It Evolves As Markets Change.
                        </h3>
                        <p className="text-gray-800 font-semibold mt-2 leading-relaxed text-xl">
                            Walk-forward testing and performance scoring keep the strategies sharp, updated, and in sync with current market conditions—not last month's.
                        </p>
                    </div>

                    {/* Built From Real Trading Work */}
                    <div className="mb-8">
                        <h3 className="inline bg-[#E8D4F0] px-1 font-bold text-gray-900 text-xl">
                            Built From Real Trading Work, Not Theories.
                        </h3>
                        <p className="text-gray-800 font-semibold mt-2 leading-relaxed text-xl">
                            Between me and my team, we've spent years building, breaking, and rebuilding systems through every market phase.
                        </p>
                        <p className="text-gray-800 font-semibold leading-relaxed text-xl mt-2">
                            That experience is baked directly into the automation you run.
                        </p>
                    </div>

                    {/* You Get Automation Without Losing Control */}
                    <div className="mb-8">
                        <h3 className="font-bold text-gray-900 text-xl mb-2">
                            You Get Automation… Without Losing Control.
                        </h3>
                        <p className="text-gray-800 font-semibold leading-relaxed text-xl">
                            The AI handles the entries and timing.
                        </p>
                        <p className="text-gray-800 font-semibold leading-relaxed text-xl">
                            You stay in charge of scaling, risk level, and withdrawals.
                        </p>
                        <p className="text-[#A60D60] font-bold leading-relaxed text-xl mt-2">
                            Clear line of responsibility. Zero chaos.
                        </p>
                    </div>

                    {/* Designed For Traders Aiming To Scale */}
                    <div className="mb-8">
                        <h3 className="inline bg-[#E8D4F0] px-1 font-bold text-gray-900 text-xl">
                            Designed For Traders Aiming To Scale Capital.
                        </h3>
                        <p className="text-gray-800 font-semibold mt-2 leading-relaxed text-xl">
                            Structured, risk-controlled behaviour helps traders qualify for larger capital programs with far more consistency than emotional manual trading.
                        </p>
                    </div>

                    {/* Resilient Through Messy Market Shifts */}
                    <div className="mb-8">
                        <h3 className="font-bold text-gray-900 text-xl mb-2">
                            Resilient Through Messy, Real-World Market Shifts.
                        </h3>
                        <p className="text-gray-800 font-semibold leading-relaxed text-xl">
                            Trends. Ranging days. News spikes.
                        </p>
                        <p className="text-gray-800 font-semibold leading-relaxed text-xl">
                            The strategy mix adapts, so one bad session doesn't destroy your account.
                        </p>
                    </div>

                    {/* Your Setup Is Built Around You */}
                    <div className="mb-8">
                        <h3 className="inline bg-[#E8D4F0] px-1 font-bold text-gray-900 text-xl">
                            And Your Setup Is Built Around You.
                        </h3>
                        <div className="text-gray-800 font-semibold mt-2 leading-relaxed text-xl">
                            <p>Your account size.</p>
                            <p>Your risk profile.</p>
                            <p>Your goals.</p>
                        </div>
                        <p className="text-[#A60D60] font-bold leading-relaxed text-xl mt-2">
                            Our AI configures everything accordingly.
                        </p>
                    </div>

                    {/* Final Message */}
                    <div className="bg-[#2B2265] p-6 rounded-lg mt-10">
                        <p className="text-white text-lg leading-relaxed font-semibold text-center">
                            <span className="font-bold">This Isn't A Shortcut. It's A System.</span>
                        </p>
                        <p className="text-sky-400 font-bold text-lg text-center mt-2">
                            And it's built for traders who want consistency, not chaos.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 text-center">
                        <button
                            onClick={openPopup}
                            className="inline-block w-full sm:w-auto bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 px-12 rounded-full text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] cursor-pointer"
                        >
                            Check If You Qualify - Apply Now
                        </button>
                        <p className="text-sky-400 font-bold text-sm mt-4">
                            HURRY! Only 4 onboarding slots left until December 2025.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
