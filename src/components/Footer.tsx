'use client';

import Link from 'next/link';
import { Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#050505] py-12 border-t border-[#00FF00]/10">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-black text-white tracking-tight">
                                P<span className="text-[#00FF00]">O</span>W
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm mb-4">
                            Progress - Overcome - Win<br />
                            Algorithmic trading for serious forex traders.
                        </p>
                        <p className="text-gray-600 text-xs">
                            &copy; {new Date().getFullYear()} POW Trading. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="#" className="text-gray-500 hover:text-[#00FF00] transition-colors text-sm">
                                Features
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-[#00FF00] transition-colors text-sm">
                                How It Works
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-[#00FF00] transition-colors text-sm">
                                Results
                            </Link>
                            <Link href="#apply" className="text-gray-500 hover:text-[#00FF00] transition-colors text-sm">
                                Apply Now
                            </Link>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Connect With Us</h4>
                        <div className="flex items-center gap-3 mb-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#111] border border-[#00FF00]/20 flex items-center justify-center text-gray-500 hover:text-[#00FF00] hover:border-[#00FF00]/50 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#111] border border-[#00FF00]/20 flex items-center justify-center text-gray-500 hover:text-[#00FF00] hover:border-[#00FF00]/50 transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#111] border border-[#00FF00]/20 flex items-center justify-center text-gray-500 hover:text-[#00FF00] hover:border-[#00FF00]/50 transition-all"
                            >
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#111] border border-[#00FF00]/20 flex items-center justify-center text-gray-500 hover:text-[#00FF00] hover:border-[#00FF00]/50 transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </Link>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Join our community of 2,500+ successful traders
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-[#00FF00]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-[#00FF00] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#00FF00] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#00FF00] transition-colors">Disclaimer</Link>
                    </div>
                    <p className="flex items-center gap-1">
                        Built for traders who demand <span className="text-[#00FF00] font-bold">excellence</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
