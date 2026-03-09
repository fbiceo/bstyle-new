"use client";

import { motion } from "framer-motion";
import { Network, KeyRound, Clock, Blocks } from "lucide-react";

export default function CoreTechnologySection() {
    const technologies = [
        {
            icon: <Network className="text-[var(--color-brand-green)]" size={32} />,
            title: "去中心化點對點網路 (P2P Network)",
            desc: "正如中本聰白皮書所述，我們建構純粹的點對點網路，允許線上支付直接從一方發送到另一方，無需通過任何金融機構或第三方中介介入，消除了單點故障的風險。"
        },
        {
            icon: <KeyRound className="text-[var(--color-brand-green)]" size={32} />,
            title: "密碼學證明取代信任 (Cryptographic Proof)",
            desc: "傳統體系依賴「信任」，而區塊鏈以數位簽署與非對稱加密技術取而代之。所有交易皆具備嚴格的密碼學驗證，確保資產轉移的真實性且無法被偽造。"
        },
        {
            icon: <Clock className="text-[var(--color-brand-blue)]" size={32} />,
            title: "分散式時間戳伺服器 (Timestamp Server)",
            desc: "運用將區塊數據進行雜湊 (Hash) 並廣播的機制，每一次的更新都會包含前一個時間戳的紀錄，形成一條隨時間不斷延長、不可篡改的證據鏈 (Chain)。"
        },
        {
            icon: <Blocks className="text-[var(--color-brand-blue)]" size={32} />,
            title: "共識機制與防範雙花 (Consensus & Anti-Double Spending)",
            desc: "源自白皮書中的「工作量證明 (Proof-of-Work)」概念，我們藉由演算法讓全網節點共同見證與驗證交易順序，從根本上解決了數位資產被重複花費的難題。"
        }
    ];

    return (
        <section id="technology" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
            {/* 科技感背景裝飾 */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-green)]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        回歸本源的<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-green)]">純粹技術架構</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl leading-relaxed text-lg">
                        百思達科技的核心技術底蘊，深植於中本聰 (Satoshi Nakamoto) 發表的《比特幣：一種對等式的電子現金系統》白皮書。我們傳承這份改變世界的密碼學藍圖，將其轉化為符合現代企業需求的高效能區塊鏈底層架構。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[var(--color-brand-green)]/30 transition-all overflow-hidden"
                        >
                            {/* 卡片 Hover 光暈背景 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="mb-6 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-brand-green)]/10 group-hover:border-[var(--color-brand-green)]/30 transition-all glow-effect">
                                    {tech.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{tech.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {tech.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
