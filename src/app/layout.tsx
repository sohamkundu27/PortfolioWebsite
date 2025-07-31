import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Soham Kundu - Software Engineer & AI/ML Developer',
  description: 'Full Stack Developer focused on AI-powered systems and real-world impact. Computer Engineering + Computer Science @ UW-Madison.',
  keywords: ['Software Engineer', 'AI/ML', 'Full Stack Developer', 'UW-Madison', 'React', 'Next.js', 'Python'],
  authors: [{ name: 'Soham Kundu' }],
  creator: 'Soham Kundu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sohamkundu.com',
    title: 'Soham Kundu - Software Engineer & AI/ML Developer',
    description: 'Full Stack Developer focused on AI-powered systems and real-world impact.',
    siteName: 'Soham Kundu Portfolio',
    images: [
      {
        url: '/assets/sohamheadshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Soham Kundu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soham Kundu - Software Engineer & AI/ML Developer',
    description: 'Full Stack Developer focused on AI-powered systems and real-world impact.',
    images: ['/assets/sohamheadshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
