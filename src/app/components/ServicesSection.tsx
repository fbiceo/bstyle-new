"use client";

import { motion } from "framer-motion";
import {
    Wallet, RefreshCw, Send, Landmark, Pickaxe, Vault, ShieldCheck, Box, Gem,
    ArrowUpDown, Lock, Globe, Building2, Server, Route, Fingerprint, Eye,
    Cpu, Zap, Database, Layers, FileCheck, Gamepad2, BarChart3, Shuffle,
    Blocks, Binary, Shield, Coins, Vote, HardDrive, Search, Sparkles
} from "lucide-react";

export default function ServicesSection() {

    // ═══════════ 分組：區塊鏈核心技術陣列 ═══════════
    const techGroups = [
        {
            groupTitle: "密碼學與隱私",
            groupTag: "Cryptography & Privacy",
            groupColor: "purple",
            items: [
                { title: "全同態加密 (FHE)", desc: "在加密狀態下直接運算資料，連運算節點都看不到明文，實現極致的資料隱私保護。", icon: <Binary className="text-purple-400" size={28} /> },
                { title: "隱私保護 (Confidential Tx)", desc: "使用 Bulletproofs 與零知識證明隱藏交易金額與地址，兼顧合規與隱私。", icon: <Eye className="text-purple-400" size={28} /> },
                { title: "遞歸零知識證明 (Recursive ZKP)", desc: "證明的證明，大幅壓縮驗證成本，是 zkVM 與可擴展隱私計算的核心技術。", icon: <Layers className="text-purple-400" size={28} /> },
                { title: "多方安全計算 (MPC/TSS)", desc: "摒棄單點私鑰風險，將私鑰碎片化儲存於分散節點，打造機構級資產防禦網路。", icon: <Shield className="text-purple-400" size={28} /> },
            ]
        },
        {
            groupTitle: "擴容與效能",
            groupTag: "Scaling & Performance",
            groupColor: "blue",
            items: [
                { title: "模組化區塊鏈 (Modular Blockchain)", desc: "將共識、執行與資料可用性層分離，打造可客製化的 AppChain 基礎設施。", icon: <Blocks className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "分片與 Rollup 聚合", desc: "結合分片與聚合 Rollup，實現每秒數千筆交易的高吞吐量與低成本。", icon: <RefreshCw className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "狀態通道 (State Channels)", desc: "把高頻交易搬到鏈下，只在最後結算上鏈，達到近乎即時的交易確認。", icon: <Zap className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "資料可用性抽樣 (DAS)", desc: "輕節點不用下載全部資料就能驗證區塊完整性，大幅降低節點運行門檻。", icon: <Database className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "Layer 0 基礎設施", desc: "提供跨鏈底層網路與安全共享，讓多條公鏈在同一層上互通互聯。", icon: <Server className="text-[var(--color-brand-blue)]" size={28} /> },
            ]
        },
        {
            groupTitle: "DeFi 與金融創新",
            groupTag: "DeFi & Financial Innovation",
            groupColor: "green",
            items: [
                { title: "去中心化做市商 (AMM/DEX)", desc: "不需掛單簿的自動化做市機制，為交易對提供即時流動性與價格發現。", icon: <Shuffle className="text-[var(--color-brand-green)]" size={28} /> },
                { title: "閃電貸 (Flash Loans)", desc: "在同一筆交易內完成借貸與還款，零擔保的原子化套利工具。", icon: <Zap className="text-[var(--color-brand-green)]" size={28} /> },
                { title: "流動性質押衍生品 (LSD)", desc: "質押 ETH 同時獲得流動性代幣（如 stETH），邊質押邊參與 DeFi 生態。", icon: <Coins className="text-[var(--color-brand-green)]" size={28} /> },
                { title: "再質押 (Restaking)", desc: "將已質押的 ETH 再度抵押以保護其他協議，放大資本效率與收益。", icon: <Layers className="text-[var(--color-brand-green)]" size={28} /> },
                { title: "MEV 防護 (MEV Protection)", desc: "防止驗證者搶跑交易與三明治攻擊，保障用戶交易執行的公平性。", icon: <ShieldCheck className="text-[var(--color-brand-green)]" size={28} /> },
            ]
        },
        {
            groupTitle: "身份與治理",
            groupTag: "Identity & Governance",
            groupColor: "cyan",
            items: [
                { title: "去中心化身分 (DID)", desc: "為企業及個人提供高隱私的去中心化數位身分，兼顧資料授權與 AML/KYC 合規。", icon: <Fingerprint className="text-cyan-400" size={28} /> },
                { title: "靈魂綁定代幣 (SBT)", desc: "不可轉讓的鏈上身份憑證，用於學歷、資格認證與信用紀錄的永久記載。", icon: <Sparkles className="text-cyan-400" size={28} /> },
                { title: "鏈上治理 (On‑chain Governance)", desc: "支援 DAO 提案、投票與協議升級機制，讓社群直接參與去中心化治理。", icon: <Vote className="text-cyan-400" size={28} /> },
                { title: "帳戶抽象化 (Account Abstraction)", desc: "智能合約錢包與無密碼登入，無感代付手續費與社交恢復功能。", icon: <Lock className="text-cyan-400" size={28} /> },
                { title: "代幣經濟設計 (Tokenomics)", desc: "從供應模型到治理代幣，完整設計激勵機制與通脹控制策略。", icon: <Gem className="text-cyan-400" size={28} /> },
            ]
        },
        {
            groupTitle: "互操作與基礎設施",
            groupTag: "Interoperability & Infrastructure",
            groupColor: "orange",
            items: [
                { title: "跨鏈互操作 (Cross‑Chain)", desc: "利用去中心化橋接與訊息層，實現不同公鏈之間資產與資料的無縫傳輸。", icon: <Globe className="text-orange-400" size={28} /> },
                { title: "去中心化預言機 (Oracles)", desc: "安全可靠的鏈下資料供應，支援 DeFi 與跨鏈應用的真實世界資訊餵價。", icon: <Cpu className="text-orange-400" size={28} /> },
                { title: "去中心化儲存 (IPFS/Arweave)", desc: "永久且抗審查的分散式資料儲存方案，擺脫中心化雲端的單點風險。", icon: <HardDrive className="text-orange-400" size={28} /> },
                { title: "意圖驅動交易 (Intent-based)", desc: "用戶只需表達目標，由 Solver 網路自動尋找最佳執行路徑完成交易。", icon: <Sparkles className="text-orange-400" size={28} /> },
                { title: "鏈上隨機數 (VRF)", desc: "使用可驗證隨機函數產生公平隨機數，支援抽獎與去中心化遊戲場景。", icon: <Gamepad2 className="text-orange-400" size={28} /> },
            ]
        },
        {
            groupTitle: "實體應用與合規",
            groupTag: "Real-world Applications & Compliance",
            groupColor: "blue",
            items: [
                { title: "RWA 真實資產代幣化", desc: "將房地產、債券、藝術品等實體資產轉化為鏈上代幣，實現分割產權與全球流動性。", icon: <Building2 className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "DePIN 實體基礎設施", desc: "結合物聯網 (IoT) 與通證激勵模型，打造去中心化的算力與能源共享網路。", icon: <Server className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "跨國供應鏈溯源", desc: "利用區塊鏈不可篡改特性，建立全網點對點的透明追蹤系統。", icon: <Route className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "RegTech 合規技術", desc: "自動生成 AML/KYC 報表與審計追蹤，協助企業快速符合監管要求。", icon: <FileCheck className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "鏈上數據分析與鑑識", desc: "追蹤資金流向、識別可疑錢包地址，為合規與執法提供完整證據鏈。", icon: <Search className="text-[var(--color-brand-blue)]" size={28} /> },
                { title: "NFT & Metaverse 基礎建設", desc: "支援 ERC‑721/1155 標準、跨鏈 NFT 橋接與虛擬世界資產互動。", icon: <Sparkles className="text-[var(--color-brand-blue)]" size={28} /> },
            ]
        },
        {
            groupTitle: "AI 與前沿科技",
            groupTag: "AI & Frontier Technology",
            groupColor: "pink",
            items: [
                { title: "去中心化 AI (Decentralized AI)", desc: "結合 zkML 與分散算力網路，提供隱私保護的 AI 推論與模型訓練服務。", icon: <Cpu className="text-pink-400" size={28} /> },
                { title: "合約形式化驗證", desc: "結合數學模型進行邏輯漏洞與邊界條件窮舉測試，徹底杜絕重入攻擊。", icon: <FileCheck className="text-pink-400" size={28} /> },
            ]
        },
    ];

    // 顏色對應表
    const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
        purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", glow: "shadow-[0_0_15px_rgba(168,85,247,0.2)]" },
        blue: { border: "border-[var(--color-brand-blue)]/30", bg: "bg-[var(--color-brand-blue)]/10", text: "text-[var(--color-brand-blue)]", glow: "shadow-[0_0_15px_rgba(0,136,255,0.2)]" },
        green: { border: "border-[var(--color-brand-green)]/30", bg: "bg-[var(--color-brand-green)]/10", text: "text-[var(--color-brand-green)]", glow: "shadow-[0_0_15px_rgba(0,255,204,0.2)]" },
        cyan: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400", glow: "shadow-[0_0_15px_rgba(6,182,212,0.2)]" },
        orange: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400", glow: "shadow-[0_0_15px_rgba(249,115,22,0.2)]" },
        pink: { border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-400", glow: "shadow-[0_0_15px_rgba(236,72,153,0.2)]" },
    };

    // ═══════════ Personal & Institutional 服務陣列（保留原有的）═══════════
    const personalServices = [
        { title: "Deposit (資產入金)", desc: "安全地將數位資產連結或存入去中心化錢包系統。", icon: <Wallet className="text-[#00FFCC]" /> },
        { title: "Buy / Sell (買賣交易)", desc: "數位資產與法定貨幣之間的雙向兌換通道。", icon: <ArrowUpDown className="text-[#00FFCC]" /> },
        { title: "Swap (即時兌換)", desc: "透過智能合約，在不同鏈上進行去中心化的極速兌換。", icon: <RefreshCw className="text-[#00FFCC]" /> },
        { title: "Send (跨國傳輸)", desc: "利用 P2P 特性，實現低手續費、高效率的全球價值轉移。", icon: <Send className="text-[#00FFCC]" /> },
        { title: "Earn / Stake (理財質押)", desc: "投入生息協議或鎖定於公鏈節點，協助維護網路並獲取獎勵。", icon: <Landmark className="text-[#00FFCC]" /> },
        { title: "HODL (長期持有)", desc: "對區塊鏈技術發展的堅定信仰與長期投資佈局。", icon: <Vault className="text-[#00FFCC]" /> },
        { title: "DeFi (去中心化金融)", desc: "不需銀行中介，即可進行去中心化借貸、交易等活動。", icon: <Globe className="text-[#00FFCC]" /> },
        { title: "App (DApp 應用)", desc: "Web3 的入口，體驗建立在區塊鏈上的多樣化服務。", icon: <Box className="text-[#00FFCC]" /> },
        { title: "VIP / June", desc: "為頂級客戶或特定專案設計的定製化區塊鏈方案。", icon: <Gem className="text-[#00FFCC]" /> },
    ];

    const institutionalServices = [
        { title: "Crypto Treasuries", desc: "企業加密資產國庫管理，安全透明地管理資金儲備與配置。", icon: <ShieldCheck className="text-[#0088FF]" /> },
        { title: "OTC Trading", desc: "專屬場外大額交易引導，高隱私性且避免影響公開市場價格。", icon: <ArrowUpDown className="text-[#0088FF]" /> },
        { title: "Liquidity Provision", desc: "流動性提供與做市商機制，為去中心化交易所導入演算法深度。", icon: <RefreshCw className="text-[#0088FF]" /> },
        { title: "Token Distribution", desc: "代幣經濟學設計、智能合割合規發行到分發的一站式架構。", icon: <Box className="text-[#0088FF]" /> },
        { title: "Secure Custody", desc: "軍規級多重簽名與冷熱隔離技術，提供最高級別數位資產防護。", icon: <Lock className="text-[#0088FF]" /> },
        { title: "Staking Node", desc: "企業級節點質押驗證服務，參與底層公鏈建設並獲取穩定收益。", icon: <Pickaxe className="text-[#0088FF]" /> },
    ];

    return (
        <section id="crypto-services" className="py-24 relative bg-[#0a0a0a]">
            {/* 裝飾背景 */}
            <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-[var(--color-brand-blue)]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* 區塊標題 */}
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">區塊鏈應用與核心佈局</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        以市場實際應用場景為核心，整合從終端用戶體驗到機構等級基礎設施的完整 Web3 生態系。
                    </p>
                </div>

                {/* ═══════════ 分組技術展示區塊 ═══════════ */}
                <div className="space-y-20 mb-24">
                    {techGroups.map((group, groupIdx) => {
                        const colors = colorMap[group.groupColor] || colorMap.blue;
                        return (
                            <motion.div
                                key={group.groupTitle}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: groupIdx * 0.05 }}
                            >
                                {/* 群組標題 */}
                                <div className={`flex flex-wrap items-center gap-4 mb-8 pb-4 border-b ${colors.border}`}>
                                    <div className={`p-2 rounded-lg ${colors.bg} ${colors.glow} shrink-0`}>
                                        <BarChart3 className={colors.text} size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white flex flex-wrap items-center gap-3">
                                        {group.groupTitle}
                                        <span className={`text-xs ${colors.text} font-semibold tracking-widest ${colors.border} border ${colors.bg} px-3 py-1 rounded-full whitespace-nowrap`}>
                                            {group.groupTag}
                                        </span>
                                    </h3>
                                </div>

                                {/* 群組卡片 */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {group.items.map((item, idx) => (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.06, duration: 0.4 }}
                                            key={item.title}
                                            className={`p-5 rounded-xl bg-[#111] border border-white/10 hover:${colors.border} hover:${colors.glow} transition-all group relative overflow-hidden`}
                                        >
                                            <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-full blur-[30px] opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                                            <div className="flex items-start gap-4 relative z-10">
                                                <div className={`shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:${colors.border} group-hover:${colors.bg} transition-colors duration-300`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ═══════════ 原有 Personal / Institutional 佈局 ═══════════ */}
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Personal Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                            <div className="p-2 rounded-lg bg-[var(--color-brand-green)]/20">
                                <Wallet className="text-[var(--color-brand-green)]" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Personal <span className="text-sm text-gray-500 font-normal ml-2">個人終端支援</span></h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {personalServices.map((service, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={service.title}
                                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--color-brand-green)]/50 transition-colors group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors">{service.title}</h4>
                                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{service.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Institutional Section */}
                    <div id="institutional">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                            <div className="p-2 rounded-lg bg-[var(--color-brand-blue)]/20">
                                <ShieldCheck className="text-[var(--color-brand-blue)]" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Institutional <span className="text-sm text-gray-500 font-normal ml-2">機構級基礎設施</span></h3>
                        </div>

                        <div className="grid gap-4">
                            {institutionalServices.map((service, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={service.title}
                                    className="p-5 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-[var(--color-brand-blue)] hover:shadow-[0_0_15px_rgba(0,136,255,0.1)] transition-all flex items-start gap-4 group"
                                >
                                    <div className="p-3 rounded-lg bg-black/50 border border-white/5 group-hover:border-[var(--color-brand-blue)]/30 transition-colors">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-[var(--color-brand-blue)] transition-colors">{service.title}</h4>
                                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">{service.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
