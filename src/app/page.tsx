"use client";

import { useState } from 'react';
import Hero from '@/components/Hero';
import AsSeenIn from '@/components/AsSeenIn';
import Letter from '@/components/Letter';
import FundingProof from '@/components/FundingProof';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import SuccessStories from '@/components/SuccessStories';
import WhyUAE from '@/components/WhyUAE';
import NotForEveryone from '@/components/NotForEveryone';
import GetStarted from '@/components/GetStarted';
import PropFunding from '@/components/PropFunding';
import PopupModal from "@/components/Popup";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#2B2265]">
      <Hero openPopup={() => setOpen(true)} />
      <AsSeenIn/>
      <Letter openPopup={() => setOpen(true)} />
      <FundingProof openPopup={() => setOpen(true)} />
      <Testimonials openPopup={() => setOpen(true)} />
      <Features openPopup={() => setOpen(true)} />
      <SuccessStories />
      <WhyUAE />
      <NotForEveryone openPopup={() => setOpen(true)} />
      <GetStarted openPopup={() => setOpen(true)} />
      <PropFunding openPopup={() => setOpen(true)} />

      <PopupModal show={open} onClose={() => setOpen(false)} />
    </main>
  );
}
