import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "百思達科技 - BSTYLE | 區塊鏈技術研發專家",
  description: "百思達科技 (BSTYLE) 專注於區塊鏈底層技術研發、企業級區塊鏈解決方案與 Web3 應用開發，為您構築信任、連結未來的底層技術。",
  keywords: "區塊鏈, 百思達, BSTYLE, Web3, 智能合約, 企業級區塊鏈, Crypto Treasuries, Staking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-[var(--color-brand-text)] bg-[var(--color-brand-dark)] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Footer 區塊全站共用 */}
        <footer className="w-full border-t border-white/10 mt-auto py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[var(--color-brand-text-muted)] text-sm space-y-4 md:space-y-0">
            <div>&copy; {new Date().getFullYear()} 百思達科技股份有限公司 (BSTYLE). All rights reserved.</div>
            <div className="flex gap-6">
              <a href="mailto:info@bstyle.com" className="hover:text-[var(--color-brand-green)] transition-colors">info@bstyle.com</a>
              <a href="tel:04-3702-8588" className="hover:text-[var(--color-brand-green)] transition-colors">(04) 3702-8588</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
