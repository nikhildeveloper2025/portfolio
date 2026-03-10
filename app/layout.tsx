import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description:
    'Modern portfolio website for a Senior Frontend Developer with 11+ years of experience in React, Next.js, and TypeScript.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'Frontend Developer Portfolio',
    description:
      'Senior Frontend Developer portfolio showcasing projects, skills, and experience.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
