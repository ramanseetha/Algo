'use client';

import { useState, useRef } from 'react';
import ScrollAnimate from './ScrollAnimate';

export default function PropFunding({ openPopup }: { openPopup: () => void }) {
    const images = ['/fav1.png', '/fav2.png', '/fav3.png', '/fav4.png', '/fav5.webp', '/fav6.webp', '/fav7.webp'];
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Testimonials data
    const testimonials = [
        {
            name: "Saeed",
            title: "Hear Saeed's Story With Quantum Algo…",
            video: "",
            text1: "After switching to Quantum Algo, I finally stopped second-guessing every decision. The AI does the work, and my withdrawals are consistent month after month.",
            text2: "Best of all, the onboarding was quick and the team genuinely cares about your results. 5 stars."
        },
        {
            name: "Fatima",
            location: "Dubai",
            title: "Hear Fatima's Story With Quantum Algo…",
            video: "",
            text1: "I was tired of losing money to emotional trades. Quantum Algo changed everything for me.",
            text2: "Now I have consistent returns and I barely spend any time monitoring charts."
        },
        {
            name: "Rajeev",
            location: "Abu Dhabi",
            title: "Hear Rajeev's Story With Quantum Algo…",
            video: "",
            text1: "As someone who moved to UAE for better trading opportunities, this system was exactly what I needed.",
            text2: "Professional-grade automation with real support from real people."
        }
    ];

    const scrollToSlide = (index: number) => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            const slides = container.children;
            if (slides[index]) {
                const slide = slides[index] as HTMLElement;
                const containerWidth = container.offsetWidth;
                const slideLeft = slide.offsetLeft;
                const slideWidth = slide.offsetWidth;
                const scrollPosition = slideLeft - (containerWidth / 2) + (slideWidth / 2);

                container.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
                setActiveSlide(index);
            }
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            const containerWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            const centerPosition = scrollLeft + containerWidth / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            Array.from(container.children).forEach((child, index) => {
                const slide = child as HTMLElement;
                const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
                const distance = Math.abs(centerPosition - slideCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveSlide(closestIndex);
        }
    };

    return (
        <section>
            {/* Stop Trading Like a Hobbyist Section */}
            <div className="bg-[#2B2265] py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                    <ScrollAnimate>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#A60D60] mb-4"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <strong><em>Stop Trading Like a Hobbyist.</em></strong>
                        </h2>
                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-10"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <strong><em>Start Scaling Like a Funded Trader.</em></strong>
                        </h3>
                    </ScrollAnimate>

                    <div className="space-y-6 max-w-3xl mx-auto text-left">
                        <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                            Let's be real… you can't grow a meaningful trading account with whatever's left after bills and a tired 9-5.
                        </p>

                        <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                            That's snack money. <span className="text-sky-400 font-bold">Not scaling money.</span>
                        </p>

                        <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                            Even when you nail the right trade, a tiny account keeps you stuck, frustrated, and going in circles.
                        </p>

                        <div className="bg-[#3A2B82] rounded-lg py-4 px-6 my-8">
                            <p className="text-white font-bold text-lg md:text-xl leading-relaxed">
                                Quantum Algo fixes that.
                            </p>
                        </div>

                        <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                            With disciplined automation, proper risk rules, and a system built for larger, structured capital, traders finally stop guessing and start compounding.
                        </p>

                        <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                            Because when you trade with structure, even a steady <span className="bg-[#1a1a1a] text-white font-bold px-2 py-1">1-3% monthly</span> move actually means something.
                        </p>

                        <p className="text-sky-400 font-bold text-lg md:text-xl leading-relaxed">
                            Not magic… just professional-grade behaviour.
                        </p>
                    </div>

                    {/* The Reality Box */}
                    <div className="mt-10 max-w-2xl mx-auto">
                        <div className="bg-white/10 rounded-xl p-6">
                            <h4 className="text-white font-black text-xl mb-4">The Reality:</h4>
                            <div className="space-y-4">
                                <p className="text-gray-300 font-semibold">
                                    <span className="text-sky-400">✗</span> 2-3% on a tiny manual account? → <span className="text-sky-400">Pocket change.</span>
                                </p>
                                <p className="text-white font-semibold">
                                    <span className="text-sky-400">✓</span> The same disciplined trading on a bigger, structured capital base? → <span className="text-sky-400 font-bold">Results that actually matter.</span>
                                </p>
                            </div>
                            <p className="text-white font-bold text-lg mt-6">
                                That's the gap Quantum Algo helps you close:
                            </p>
                            <p className="text-sky-400 font-black text-xl mt-2">
                                Consistency + Capital + Discipline = Real Growth.
                            </p>
                            <p className="text-gray-300 font-semibold mt-4">
                                No hype. No lottery trades. Just structured trading that works.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-12 px-4">
                    <button
  onClick={openPopup}
  className="inline-flex items-center justify-center bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 sm:py-5 px-8 sm:px-20 rounded-full text-base sm:text-lg md:text-xl uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] cursor-pointer"
>
  Trade Like a Professional - Apply Now
</button>

                        <p className="text-sky-400 font-bold text-sm mt-4">
                            HURRY! Only 4 onboarding slots left until December 2025.
                        </p>
                    </div>
                </div>
            </div>

            {/* Guaranteed $100K Section */}
            <div className="bg-white py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <ScrollAnimate>
                        <div className="text-center mb-10">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
                                style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 900 }}
                            >
                                Clear your <span className="text-[#A60D60]">$100K Funded Account</span>
                            </h2>
                        </div>
                    </ScrollAnimate>

                    <div className="space-y-6 max-w-3xl mx-auto">
                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            I will help to give you your time back and let you compound serious wealth compared to exhausting manual charting and emotional day trading.
                        </p>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            With Quantum Algo's AI strategies, you're on your way to get funded.
                        </p>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            Start running our automated algo on your live account and see steady withdrawals month after month.
                        </p>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            Just <span className="bg-[#E8D4F0] px-1 font-bold">2-3 hours a week</span> is enough. That's hundreds of hours saved per year, invest your time smarter, not harder.
                        </p>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            I'll set up all the tools, dashboards, and coaching you need to succeed, just like our most profitable members.
                        </p>

                        <div className="bg-[#E8D4F0] p-6 rounded-lg mt-8">
                            <p className="text-gray-900 text-lg leading-relaxed font-bold">
                                I will help you with your $100K funded account within 30 days of approval and start making real withdrawals using professional AI strategies built for sophisticated UAE traders, not one-size-fits-all bots.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-10">
                        <button
                             onClick={openPopup}
                            className="inline-block bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 px-12 rounded-full text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)]"
                        >
                            Show Me How This Works
                        </button>
                    </div>
                </div>
            </div>

            {/* Testimonial Video Section */}
            <div className="bg-gray-50 py-12 sm:py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    {/* Magenta Arrow Indicator */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="flex items-center gap-1">
                            <div className="w-8 sm:w-12 h-0.5 bg-[#A60D60]" />
                            <div className="w-2 h-2 rounded-full bg-[#A60D60]" />
                        </div>
                    </div>

                    {/* Section Title */}
                    <ScrollAnimate>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-8 sm:mb-12 leading-tight px-4">
                            Join Traders Achieving Consistent 4, 5, Even 6-Figure Months With Quantum Algo…
                        </h2>
                    </ScrollAnimate>

                    {/* Testimonial Card - Centered */}
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">
                            {testimonials[activeTestimonial].title}
                        </h3>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-[#A60D60]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Testimonial Text Box */}
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                                "{testimonials[activeTestimonial].text1}"
                            </p>
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                                "{testimonials[activeTestimonial].text2}"
                            </p>
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-8 sm:mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`transition-all ${
                                    index === activeTestimonial
                                        ? 'w-6 sm:w-8 h-2 bg-[#A60D60]'
                                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                } rounded-full`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-10">
                        <button
                            onClick={openPopup}
                            className="inline-block bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 px-12 rounded-full text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] cursor-pointer"
                        >
                            Apply To Start Your Own
                        </button>
                        <p className="text-sky-400 font-bold text-sm mt-4">
                            HURRY! Only 4 onboarding slots left until December 2025.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white py-8 sm:py-12 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
                    {/* QA Logo */}
                    <div className="mb-4 sm:mb-6 flex justify-center">
                        <img
                            src="/QA%20logo.png"
                            alt="Quantum Algo"
                            className="h-12 sm:h-16 md:h-20 w-auto"
                        />
                    </div>

                    {/* Copyright Text */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold">
                        Copyright © [2025]. All Rights Reserved. |{' '}
                        <a href="#terms" className="text-blue-600 hover:text-blue-800 underline">
                            Terms & Conditions
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
