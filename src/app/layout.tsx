import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumalgo.com"),
  title: "Quantum Algo | AI-Driven Forex Trading for UAE Traders",
  description:
    "Unlock consistent AI-driven trading for UAE traders. Get $100K+ funded accounts, automated momentum strategies, and 1-5% drawdowns. Built for serious traders in Dubai, Abu Dhabi & UAE.",
  keywords: [
    "UAE forex trading",
    "Dubai algorithmic trading",
    "AI trading UAE",
    "prop firm funding UAE",
    "automated forex trading",
    "forex algo Dubai",
    "trading strategies UAE",
    "funded trader UAE",
    "forex robots",
    "quantitative trading",
    "Abu Dhabi trading",
    "UAE investors",
  ],
  authors: [{ name: "Quantum Algo" }],
  creator: "Quantum Algo",
  publisher: "Quantum Algo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantumalgo.com",
    siteName: "Quantum Algo",
    title: "Quantum Algo | AI-Driven Forex Trading for UAE Traders",
    description:
      "Unlock consistent AI-driven trading for UAE traders. Get $100K+ funded accounts, automated momentum strategies, and 1-5% drawdowns.",
    images: [
      {
        url: "/QA logo.png",
        width: 1200,
        height: 630,
        alt: "Quantum Algo - Algorithmic Forex Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Algo | AI-Driven Forex Trading for UAE Traders",
    description:
      "Unlock consistent AI-driven trading for UAE traders. Get $100K+ funded accounts, automated momentum strategies, and 1-5% drawdowns.",
    images: ["/QA logo.png"],
    creator: "@quantumalgo",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/QA logo.png", type: "image/png" },
    ],
    apple: [{ url: "/QA logo.png" }],
    shortcut: "/QA logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://quantumalgo.com",
  },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Clash Display Font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />

        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#230859" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/QA logo.png" />
        <link rel="apple-touch-icon" href="/QA logo.png" />
      </head>

      <body className={`${montserrat.className} antialiased`}>
        {/* ===== Meta Pixel Code ===== */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2252849898562075');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2252849898562075&ev=PageView&noscript=1"
          />
        </noscript>
        {/* ===== End Meta Pixel Code ===== */}

        {children}
      </body>
    </html>
  );
}
