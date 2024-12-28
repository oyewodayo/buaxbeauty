import { Geist, Geist_Mono } from "next/font/google";
import { EB_Garamond } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamond = EB_Garamond({ 
  variable: "--font-garamond",
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: "Buaxbeauty, a premier beauty brand.",
  description: "Buaxbeauty, a premier beauty brand dedicated to enhancing natural beauty through innovative and high-quality services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${garamond.variable} antialiased font-garamond`}
      >
        {children}
      </body>
    </html>
  );
}