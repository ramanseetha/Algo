'use client';

import ScrollAnimate from './ScrollAnimate';

export default function NotForEveryone({ openPopup }: { openPopup: () => void }) {
    return (
        <section className="bg-white pt-12 md:pt-16 pb-16 md:pb-24">
            <div className="max-w-[90rem] mx-auto px-4 md:px-6">
                {/* Partner Logos */}
                <ScrollAnimate>
                    <p className="text-sky-400 font-bold text-xl text-center mb-10">
                        Quantum Algo is built exactly for this market.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                        <img src="/FAV!100%25%20Profits.png" alt="Prop Firm Partners" className="w-full max-w-[85rem] h-auto" />
                    </div>
                </ScrollAnimate>

                {/* Section Header */}
                <ScrollAnimate>
                    <div className="text-center mb-12">
                        <h2
                            className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <em>For Serious UAE Traders Only</em>
                        </h2>
                    </div>
                </ScrollAnimate>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* NOT For */}
                    <ScrollAnimate delay={100}>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <h3 className="text-xl font-black text-gray-900 mb-6">
                                Quantum Algo is <span className="text-red-600">NOT</span> for:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold text-xl">✗</span>
                                    <span className="text-gray-700 font-semibold">Beginners</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold text-xl">✗</span>
                                    <span className="text-gray-700 font-semibold">People expecting overnight riches</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold text-xl">✗</span>
                                    <span className="text-gray-700 font-semibold">Zero-risk seekers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold text-xl">✗</span>
                                    <span className="text-gray-700 font-semibold">Anyone who refuses to follow risk parameters</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold text-xl">✗</span>
                                    <span className="text-gray-700 font-semibold">Traders who manually override strategy rules</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimate>

                    {/* IS For */}
                    <ScrollAnimate delay={200}>
                        <div className="bg-[#E8D4F0] rounded-2xl p-8">
                            <h3 className="text-xl font-black text-gray-900 mb-6">
                                Quantum Algo <span className="text-[#A60D60]">IS</span> built for:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#A60D60] font-bold text-xl">✓</span>
                                    <span className="text-gray-700 font-semibold">Experienced traders</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#A60D60] font-bold text-xl">✓</span>
                                    <span className="text-gray-700 font-semibold">Traders with 5-figure or 6-figure accounts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#A60D60] font-bold text-xl">✓</span>
                                    <span className="text-gray-700 font-semibold">UAE residents looking for consistent income</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#A60D60] font-bold text-xl">✓</span>
                                    <span className="text-gray-700 font-semibold">Professionals wanting to scale</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#A60D60] font-bold text-xl">✓</span>
                                    <span className="text-gray-700 font-semibold">Indians in UAE who moved for legal forex access</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#A60D60] font-bold text-xl">✓</span>
                                    <span className="text-gray-700 font-semibold">Traders who value automation + transparency</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimate>
                </div>

                {/* Bottom CTA */}
                <ScrollAnimate delay={300}>
                    <div className="text-center mt-12">
                        <p className="text-gray-900 font-bold text-xl mb-6">
                            This is a premium, high-performance system — not a toy.
                        </p>
                        <button
                            onClick={openPopup}
                            className="inline-block bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 px-12 rounded-full text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)]"
                        >
                            Apply If You're Serious
                        </button>
                        <p className="text-sky-400 font-bold text-sm mt-4">
                            HURRY! Only 4 onboarding slots left until December 2025.
                        </p>
                    </div>
                </ScrollAnimate>
            </div>
        </section>
    );
}
