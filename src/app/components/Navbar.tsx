"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BStyleLogo from "./BStyleLogo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "首頁", href: "/" },
        { name: "區塊鏈應用", href: "#crypto-services" },
        { name: "企業方案", href: "#institutional" },
        { name: "關於我們", href: "#about" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo 區塊 */}
                    <Link href="/" className="cursor-pointer" onClick={(e) => {
                        if (window.location.pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}>
                        <BStyleLogo />
                    </Link>

                    {/* 桌機選單 */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.href === "/" && window.location.pathname === "/") {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                                className="text-sm font-medium text-gray-300 hover:text-[var(--color-brand-green)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2 rounded-full border border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white transition-all duration-300 text-sm font-medium ml-4 glow-effect"
                        >
                            聯繫專員
                        </a>
                    </div>

                    {/* 手機版漢堡選單按鈕 */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 手機版彈出選單下拉 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0A0A0A]/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 pt-4 pb-6 space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        if (link.href === "/" && window.location.pathname === "/") {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }
                                        setIsOpen(false);
                                    }}
                                    className="block text-base font-medium text-gray-300 hover:text-[var(--color-brand-green)]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-5 py-3 rounded-md bg-[var(--color-brand-blue)] text-white font-medium my-2"
                                >
                                    聯繫專員
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
