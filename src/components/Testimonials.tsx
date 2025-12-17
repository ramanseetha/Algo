'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const testimonials = [
    {
        name: "Faisal A.",
        location: "Abu Dhabi",
        verified: true,
        title: "Finally removed my emotional bias",
        content: "After 12 years of trading manually, this is the first system that actually removed my emotional bias. The automation is clean, the drawdowns stay controlled, and the month-on-month growth is genuinely consistent."
    },
    {
        name: "Vishnu R.",
        location: "Dubai",
        verified: true,
        title: "Live dashboard convinced me",
        content: "I was skeptical at first, but the live dashboard access convinced me. I've been using Quantum Algo for 7 months now. Withdrawals are smooth, and the team always helps me adjust risk whenever markets turn volatile."
    },
    {
        name: "Omar H.",
        location: "Sharjah",
        verified: true,
        title: "Perfect stability for large accounts",
        content: "The best part is the stability. No wild swings, no crazy gambling strategies. Just steady, predictable returns. Perfect for someone like me managing a larger account."
    },
    {
        name: "Nitin K.",
        location: "Dubai Marina",
        verified: true,
        title: "Support team is actually responsive",
        content: "Their support team is actually responsive… not like other EA sellers. When I shifted from a $20k to a $75k account, they helped me restructure my risk and scale properly. That made a huge difference."
    },
    {
        name: "Sarah M.",
        location: "Dubai",
        verified: true,
        title: "Got my time back",
        content: "Quantum Algo gave me back my time. I barely spend 30-40 minutes a week on my portfolio now. The AI handles everything, and I just monitor performance and schedule withdrawals."
    },
    {
        name: "Imran S.",
        location: "Abu Dhabi",
        verified: true,
        title: "Adjusts to market behavior",
        content: "I've used so many bots over the years that failed after a few weeks. This one didn't. It adjusts to market behaviour, and you feel the difference in how stable the equity curve stays."
    },
    {
        name: "Anand P.",
        location: "JLT Dubai",
        verified: true,
        title: "Proper onboarding and education",
        content: "They actually teach you how to use the system properly. Not just a download link. The onboarding alone helped me understand why I was losing money before."
    },
    {
        name: "Mohammed R.",
        location: "Business Bay",
        verified: true,
        title: "Passed funding challenge and scaled",
        content: "I passed a $50k funding evaluation using their strategy suite, then scaled to a $100k account. The risk control is the secret…. no reckless over-leveraging."
    },
    {
        name: "Elias D.",
        location: "Dubai Hills",
        verified: true,
        title: "Most reliable automated system",
        content: "This is the most reliable automated system I've used. Drawdowns stay low, profits compound, and it doesn't require me to sit in front of screens all day. Worth every dirham."
    }
];

export default function Testimonials({ openPopup }: { openPopup: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Responsive cards per view: 1 on mobile, 2 on tablet, 5 on desktop
    const getCardsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1;
            if (window.innerWidth < 1024) return 2;
            return 5;
        }
        return 5;
    };
    const [cardsPerView, setCardsPerView] = useState(5);

    // Update cards per view on resize
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCardsPerView(getCardsPerView());
            const handleResize = () => setCardsPerView(getCardsPerView());
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const totalSlides = Math.ceil(testimonials.length / cardsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const visibleTestimonials = testimonials.slice(
        currentIndex * cardsPerView,
        currentIndex * cardsPerView + cardsPerView
    );

    return (
        <section className="bg-[#2B2265] pt-20 md:pt-24 pb-16 md:pb-20">
            <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-2xl md:text-3xl font-black text-white text-center mb-4"
                        style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic' }}
                    >
                        <em>See What Our UAE Traders Say…</em>
                    </h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Real, Unfiltered Results From Real Professionals.
                    </p>
                </ScrollAnimate>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 sm:px-8">
                        {visibleTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 shadow-lg"
                            >
                                {/* Stars */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className="w-5 h-5 bg-[#A60D60] flex items-center justify-center">
                                                <Star className="w-3 h-3 text-white fill-white" />
                                            </div>
                                        ))}
                                    </div>
                                    {testimonial.verified && (
                                        <span className="text-gray-500 text-xs flex items-center gap-1">
                                            <svg className="w-3 h-3 text-[#A60D60]" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Verified
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-1">
                                    {testimonial.title}
                                </h3>

                                {/* Content */}
                                <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-4">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <p className="text-gray-900 text-xs">
                                    <span className="font-bold">— {testimonial.name}</span>, {testimonial.location}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-10">
                    <button
                        onClick={openPopup}
                        className="inline-block bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 px-12 rounded-full text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] cursor-pointer"
                    >
                        Join Traders Getting These Results
                    </button>
                    <p className="text-sky-400 font-bold text-sm mt-4">
                        HURRY! Only 4 onboarding slots left until December 2025.
                    </p>
                </div>

                {/* Rating Footer */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        Rated <span className="text-white font-bold">4.7</span> / 5 by <span className="text-white underline">1,150+ UAE traders</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Quantum Algo has earned top marks for reliability, trust and performance.
                    </p>
                </div>
            </div>
        </section>
    );
}
