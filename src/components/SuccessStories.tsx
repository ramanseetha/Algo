'use client';

import ScrollAnimate from './ScrollAnimate';

export default function SuccessStories() {
    return (
        <section className="bg-white pt-16 pb-0">

            <div className="relative max-w-4xl mx-auto px-4 md:px-6">
                {/* Title at top */}
                <ScrollAnimate>
                    <div className="text-center mb-8 sm:mb-12">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <strong><em>Real Payouts and Success Stories</em></strong>
                        </h2>
                        <p className="text-[#A60D60] font-bold text-lg md:text-xl">
                            Direct From Our UAE Traders
                        </p>
                        <p className="text-gray-600 font-semibold mt-4 max-w-2xl mx-auto">
                            See for yourself: Quantum Algo members routinely share withdrawal proofs, profit splits, and real-time funded account updates inside our secure investor chat.
                        </p>
                    </div>
                </ScrollAnimate>

                {/* Success Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
                    {/* Bryce A Story */}
                    <ScrollAnimate delay={100} className="h-full">
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src="/avatar2.jpeg"
                                    alt="Bryce A."
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">Bryce A.</h3>
                                    <p className="text-sm text-gray-500">Verified Trader</p>
                                </div>
                            </div>
                            <p className="text-gray-800 font-semibold leading-relaxed">
                                "Good end to the week—Profit Split received! <span className="text-[#A60D60] font-bold">$1,574.03</span> auto-traded by Quantum Algo."
                            </p>
                        </div>
                    </ScrollAnimate>

                    {/* Daniel S Story */}
                    <ScrollAnimate delay={200} className="h-full">
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src="/avatar3.jpeg"
                                    alt="Daniel S."
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">Daniel S.</h3>
                                    <p className="text-sm text-gray-500">Verified Trader</p>
                                </div>
                            </div>
                            <p className="text-gray-800 font-semibold leading-relaxed">
                                "Passed the funding challenge using the EA. <span className="text-[#A60D60] font-bold">$364.36</span> profit this round—on to the next."
                            </p>
                        </div>
                    </ScrollAnimate>

                    {/* Matthew F Story */}
                    <ScrollAnimate delay={300} className="h-full">
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src="/avatar4.jpeg"
                                    alt="Matthew F."
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">Matthew F.</h3>
                                    <p className="text-sm text-gray-500">Verified Trader</p>
                                </div>
                            </div>
                            <p className="text-gray-800 font-semibold leading-relaxed">
                                "$50K secured away with Quantum Algo AI. <span className="text-[#A60D60] font-bold">$50,800.00</span> now sitting funded."
                            </p>
                        </div>
                    </ScrollAnimate>

                    {/* Imran S Story */}
                    <ScrollAnimate delay={400} className="h-full">
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src="/avatar5.jpeg"
                                    alt="Imran S."
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">Imran S.</h3>
                                    <p className="text-sm text-gray-500">Verified Trader</p>
                                </div>
                            </div>
                            <p className="text-gray-800 font-semibold leading-relaxed">
                                "Quarterly profit split, hands-free withdrawals and verified payments, every time."
                            </p>
                        </div>
                    </ScrollAnimate>
                </div>

                {/* Bottom Text */}
                <ScrollAnimate delay={500}>
                    <div className="text-center mb-12">
                        <p className="text-gray-800 font-semibold text-lg leading-relaxed max-w-2xl mx-auto">
                            Swipe through dozens of verified payout, certificate, and account images from the UAE's top trading community.
                        </p>
                        <p className="text-[#A60D60] font-bold text-lg mt-4">
                            No more hypothetical claims, marketing hype, or cherry-picked results.
                        </p>
                        <p className="text-gray-900 font-black text-xl mt-2">
                            Just real traders, real profits, real certificates.
                        </p>
                    </div>
                </ScrollAnimate>
            </div>

            {/* Marquee Section */}
            <div className="bg-[#A60D60] border-y-4 border-[#A60D60] py-3 sm:py-4 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center shrink-0">
                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0 brightness-0 invert" />
                            <span className="text-white font-bold text-sm sm:text-xl whitespace-nowrap">DIGITAL JOURNAL</span>

                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0 brightness-0 invert" />
                            <span className="text-white font-bold text-sm sm:text-xl whitespace-nowrap">$54M Funded</span>

                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0 brightness-0 invert" />
                            <span className="text-white font-bold text-sm sm:text-xl whitespace-nowrap">MarketWatch</span>

                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0 brightness-0 invert" />
                            <span className="text-white font-bold text-sm sm:text-xl whitespace-nowrap">1-5% Drawdowns Low Risk</span>

                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0 brightness-0 invert" />
                            <span className="text-white font-bold text-sm sm:text-xl whitespace-nowrap">FOX 28</span>

                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0 brightness-0 invert" />
                            <span className="text-white font-bold text-sm sm:text-xl whitespace-nowrap">100% Of Profits, No Profit Share To Us</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
