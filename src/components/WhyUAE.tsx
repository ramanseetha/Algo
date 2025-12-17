'use client';

import ScrollAnimate from './ScrollAnimate';

export default function WhyUAE() {
    return (
        <section className="bg-[#2B2265] pt-16 md:pt-24 pb-0">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <ScrollAnimate>
                    <div className="text-center mb-12">
                        <h2
                            className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <em>Why UAE Traders Love Quantum Algo</em>
                        </h2>
                        <p className="text-gray-300 font-semibold text-lg">
                            Because the UAE trading environment is unique:
                        </p>
                    </div>
                </ScrollAnimate>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <ScrollAnimate delay={100}>
                        <div className="bg-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[#A60D60] text-2xl">✓</span>
                                <h3 className="text-white font-bold text-lg">Legalized forex environment</h3>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={150}>
                        <div className="bg-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[#A60D60] text-2xl">✓</span>
                                <h3 className="text-white font-bold text-lg">Massive $9.4 trillion daily trading volume</h3>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={200}>
                        <div className="bg-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[#A60D60] text-2xl">✓</span>
                                <h3 className="text-white font-bold text-lg">99% of top global forex brokers operate from the UAE</h3>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={250}>
                        <div className="bg-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[#A60D60] text-2xl">✓</span>
                                <h3 className="text-white font-bold text-lg">Indian, Pakistani & Arab traders make up a massive pro-trading community</h3>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={300}>
                        <div className="bg-white/10 rounded-xl p-6 md:col-span-2">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[#A60D60] text-2xl">✓</span>
                                <h3 className="text-white font-bold text-lg">UAE traders value transparency, automation, and steady monthly returns</h3>
                            </div>
                        </div>
                    </ScrollAnimate>
                </div>

            </div>
        </section>
    );
}
