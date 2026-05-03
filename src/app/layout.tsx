import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '0x Engine Labs',
  description: 'Engineering Systems That Scale Without Failure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-lime min-h-screen overflow-x-hidden selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
