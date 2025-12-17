'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Process() {
    return (
        <section id="process" className="bg-gray-50 py-12 md:py-16">
            <div className="article-content">
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="step-number">2</span>
                    The 3-Step Process to Consistent Profits
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our system is designed to take you from zero to consistently profitable in the shortest time possible. Here's exactly how it works:
                </p>

                {/* Step 1 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                            1
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Prop Firm Capital</h3>
                            <p className="text-gray-600 mb-4">
                                Get funded with a <span className="highlight-green font-semibold">$50,000-$200,000</span> prop firm account. We help you pass the challenge using our proven algorithms—you focus on profits, not risk.
                            </p>

                            {/* Image */}
                            <div className="image-container mb-4">
                                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-5xl mb-3">💼</div>
                                        <p className="text-lg font-semibold">Prop Firm Dashboard</p>
                                    </div>
                                </div>
                                <div className="image-caption">
                                    Example of a funded trading account dashboard
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {["No personal capital at risk", "95%+ pass rate with our system", "Multiple prop firm partnerships"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                            2
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Develop Your Algo Portfolio</h3>
                            <p className="text-gray-600 mb-4">
                                Use our multi-strategy algorithmic portfolio designed to return <span className="highlight-green font-semibold">2-4% monthly</span> with controlled drawdown. The system adapts to all market conditions automatically.
                            </p>

                            {/* Image */}
                            <div className="image-container mb-4">
                                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-5xl mb-3">📊</div>
                                        <p className="text-lg font-semibold">Portfolio Builder Software</p>
                                    </div>
                                </div>
                                <div className="image-caption">
                                    Our proprietary Portfolio Builder interface
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {["Multiple uncorrelated strategies", "Automatic risk management", "Works in trending & ranging markets"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                            3
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Scale & Compound</h3>
                            <p className="text-gray-600 mb-4">
                                Funnel your prop profits into personal capital. Achieve <span className="highlight-green font-semibold">6%+ monthly returns</span> through systematic compounding and consistency.
                            </p>

                            {/* Image */}
                            <div className="image-container mb-4">
                                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-5xl mb-3">🚀</div>
                                        <p className="text-lg font-semibold">Growth Trajectory</p>
                                    </div>
                                </div>
                                <div className="image-caption">
                                    Typical growth curve for POW traders
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {["Compound profits systematically", "Scale across multiple accounts", "Reach $100K+ within 12 months"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Callout */}
                <div className="callout callout-success mb-8">
                    <p className="text-gray-700 mb-0">
                        <strong>The Result:</strong> Repeat steps 1-3 and watch your growth compound to{' '}
                        <span className="highlight-green font-semibold">$100K+ in under 12 months</span> through systematic consistency and sensible risk management.
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="#apply"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-lg transition-all text-lg"
                    >
                        Start Your Journey
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
