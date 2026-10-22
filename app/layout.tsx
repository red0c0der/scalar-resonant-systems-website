import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StealthFooter from "./components/StealthFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scalar Resonant Systems",
  description: "Toroidal photonic architecture infrastructure.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const s = localStorage.getItem('SRS_ACTIVE_STYLE');
                if (s) document.body.setAttribute('data-style', s);
              } catch (e) {}
            `,
          }}
        />
        {children}
        <StealthFooter />
      </body>
    </html>
  );
}
