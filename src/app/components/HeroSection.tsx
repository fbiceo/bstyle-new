"use client";

import { motion } from "framer-motion";
import { ArrowRight, Fingerprint, LockKeyhole, Layers, CodeSquare } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

            {/* 科技感背景裝飾 */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
                <div className="absolute w-[600px] h-[600px] bg-[var(--color-brand-blue)] rounded-full blur-[120px] -top-20 -left-20 mix-blend-screen"></div>
                <div className="absolute w-[500px] h-[500px] bg-[var(--color-brand-green)] rounded-full blur-[100px] top-40 -right-20 mix-blend-screen opacity-50"></div>
                {/* 網格背景 */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* 左側文案區 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left space-y-8"
                >


                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
                        構築未來信任的 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-green)] glow-text">
                            底層星火
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                        百思達科技專注於企業級區塊鏈解決方案、去中心化應用與高頻資產安全。我們提供穩健、合規與極致效能的技術後盾。
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-lg bg-white/5 text-white font-semibold hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm"
                        >
                            聯繫專員
                        </a>
                    </div>
                </motion.div>

                {/* 右側視覺區：動態漂浮卡片 (核心技術) */}
                <div id="technology" className="mt-16 lg:mt-0 grid sm:grid-cols-2 gap-6 relative pb-16">
                    {/* 卡片 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex flex-col items-start gap-4 transform translate-y-12 shadow-2xl"
                    >
                        <div className="p-3 bg-blue-500/20 rounded-xl">
                            <Fingerprint className="text-[var(--color-brand-blue)]" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white">零知識證明 (ZKP)</h3>
                        <p className="text-sm text-gray-400">整合 zk-SNARKs/STARKs 技術，在不洩露原始數據情況下完成鏈上驗證，滿足企業級隱私與金融合規需求。</p>
                    </motion.div>

                    {/* 卡片 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex flex-col items-start gap-4 shadow-2xl relative glow-effect"
                    >
                        <div className="p-3 bg-green-500/20 rounded-xl">
                            <LockKeyhole className="text-[var(--color-brand-green)]" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white">多方安全計算 (MPC)</h3>
                        <p className="text-sm text-gray-400">摒棄單點私鑰風險，採用 TSS 技術將私鑰碎片化儲存於分散節點，打造去中心化的機構級資產防禦網路。</p>
                    </motion.div>

                    {/* 卡片 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex flex-col items-start gap-4 transform translate-y-12 shadow-2xl"
                    >
                        <div className="p-3 bg-purple-500/20 rounded-xl">
                            <Layers className="text-purple-400" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Layer 2 擴容方案</h3>
                        <p className="text-sm text-gray-400">專精於 Optimistic 與 ZK Rollups 應用鏈底層架構定制，為高頻交易場景提供極低 Gas 消耗與高吞吐量 (TPS)。</p>
                    </motion.div>

                    {/* 卡片 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex flex-col items-start gap-4 shadow-2xl relative"
                    >
                        <div className="p-3 bg-orange-500/20 rounded-xl">
                            <CodeSquare className="text-orange-400" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white">合約形式化驗證</h3>
                        <p className="text-sm text-gray-400">結合數學模型進行圖靈完備環境下的邏輯漏洞與邊界條件窮舉測試，徹底杜絕溢出與重入攻擊 (Reentrancy)。</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
