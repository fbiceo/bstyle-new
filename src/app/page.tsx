import HeroSection from "./components/HeroSection";
import CoreTechnologySection from "./components/CoreTechnologySection";
import ServicesSection from "./components/ServicesSection";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 首頁主視覺區塊 */}
      <HeroSection />

      {/* 中本聰白皮書技術核心 展演區塊 */}
      <CoreTechnologySection />

      {/* 區塊鏈應用與企業方案 展示區塊 */}
      <ServicesSection />

      {/* 關於我們區塊 */}
      <section id="about" className="py-24 bg-gradient-to-b from-transparent to-white/5 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">從開創者到<br /><span className="text-[var(--color-brand-green)]">底層技術引路人</span></h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg pb-8">
              <p>百思達科技 (<span className="font-mono animate-logo-color font-black">₿</span>STYLE) 從早期參與加密資產市場，深刻體會到行業的痛點與信任危機。我們決定褪去表面的浮華，將重心轉向<strong className="text-white font-medium">區塊鏈核心技術的研發與合規落地</strong>。</p>
              <p>現在的 <span className="font-mono animate-logo-color font-black">₿</span>STYLE，是一群由資深密碼學專家、智能合約審計師與企業架構師組成的團隊。我們致力於將 Web3 的透明、安全與高效，導入現代企業營運，成為台灣最穩健的區塊鏈技術後盾。</p>
            </div>
            <a
              href="#institutional"
              className="inline-flex items-center gap-2 text-[var(--color-brand-blue)] font-medium hover:text-[var(--color-brand-green)] transition-colors"
            >
              了解我們的企業方案 →
            </a>
          </div>

          {/* 右側：動態數據與技術實力展示區塊 */}
          <div className="relative h-[400px] rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 flex flex-col justify-between group overflow-hidden">
            {/* 科技感點綴圖示/動畫背景 */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--color-brand-blue)]/5 rounded-full blur-[60px] group-hover:bg-[var(--color-brand-green)]/10 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)] animate-pulse"></span>
                SYSTEM STATUS: ACTIVE
              </div>

              {/* 關鍵數據指標 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-1 flex items-baseline gap-1">
                    99.9<span className="text-2xl text-[var(--color-brand-blue)]">%</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">節點穩定運行率 (SLA)</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1 flex items-baseline gap-1">
                    +50<span className="text-2xl text-[var(--color-brand-green)]">M</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">通過審計之智能合約資產</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1 flex items-baseline gap-1">
                    24<span className="text-2xl text-purple-500">/7</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">全天候自動化監控預警</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1 flex items-baseline gap-1">
                    0<span className="text-2xl text-orange-500">Day</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">漏洞響應與修補時間</div>
                </div>
              </div>
            </div>

            {/* 底部裝飾條與 Logo */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-white/30 font-mono text-[10px] tracking-widest">INFRASTRUCTURE SECURED BY</p>
                <p className="text-white/70 font-mono text-sm tracking-widest">BSTYLE TECHNOLOGY INC.</p>
              </div>

              {/* 模擬技術堆疊小方塊 */}
              <div className="flex gap-1.5 opacity-50">
                <div className="w-6 h-6 rounded bg-blue-500/20 border border-blue-500/30"></div>
                <div className="w-6 h-6 rounded bg-green-500/20 border border-green-500/30"></div>
                <div className="w-6 h-6 rounded bg-purple-500/20 border border-purple-500/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡我們區塊 */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[var(--color-brand-blue)]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">啟動您的 Web3 轉型</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            無論是企業級資產管理、區塊鏈節點部署，或是有 DApp 開發與合約審計需求，歡迎隨時與我們的技術顧問團隊聯繫。
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <a href="tel:04-3702-8588" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-brand-green)]/50 transition-colors group flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[var(--color-brand-green)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-[var(--color-brand-green)]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">企業諮詢專線</h4>
              <p className="text-gray-400 text-sm">(04) 3702-8588</p>
            </a>

            <a href="mailto:info@bstyle.com" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-brand-blue)]/50 transition-colors group flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[var(--color-brand-blue)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-[var(--color-brand-blue)]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">客服信箱</h4>
              <p className="text-gray-400 text-sm">info@bstyle.com</p>
            </a>

            <a
              href="https://www.google.com/maps/search/百思達科技股份有限公司"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">研發總部</h4>
              <p className="text-gray-400 text-sm">臺中市北區臺灣大道二段360號23樓之2</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
