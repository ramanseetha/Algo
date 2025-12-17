'use client';

const partners = [
    "FTMO",
    "The Funded Trader",
    "The5ers",
    "E8",
    "Bespoke Funding",
    "Blue Guardian",
    "MyForexFunds",
    "True Forex Funds"
];

export default function PropPartners() {
    return (
        <section className="bg-[#0a0a0a] py-16 md:py-20 border-t border-[#00FF00]/10">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-4">
                    Our EA Has Secured <span className="text-[#00FF00]">$54,000,000+</span> In Funding From The World's Top Prop Firms
                </h2>
                <p className="text-gray-400 text-center mb-12">
                    We work with all major prop firms to get you funded faster.
                </p>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-[#111] border border-[#222] rounded-xl p-6 flex items-center justify-center hover:border-[#00FF00]/30 transition-colors"
                        >
                            <span className="text-white font-bold text-sm text-center">{partner}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
