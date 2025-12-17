'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#00FF00]/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black text-white tracking-tight">
                            P<span className="text-[#00FF00]">O</span>W
                        </span>
                    </Link>

                    {/* CTA Button */}
                    <Link
                        href="#apply"
                        className="px-6 py-2 bg-transparent border-2 border-[#00FF00] text-[#00FF00] font-bold rounded-full hover:bg-[#00FF00] hover:text-black transition-all text-sm uppercase tracking-wider"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
