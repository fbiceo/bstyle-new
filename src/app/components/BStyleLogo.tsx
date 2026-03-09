"use client";

export default function BStyleLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 group ${className} cursor-pointer`}>


            {/* 文字 Logo 區塊 */}
            <div className="flex items-center text-white tracking-widest relative">
                {/* 字母 ₿ 自動切換顏色發光 */}
                <span className="text-2xl font-black font-mono animate-logo-color relative z-10">
                    ₿
                </span>
                <span className="text-xl font-bold ml-1 tracking-[0.2em] text-gray-100">
                    STYLE
                </span>
            </div>
        </div>
    );
}
