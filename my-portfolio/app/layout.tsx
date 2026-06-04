import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Süheyna Karakurt | Portfolio",
  description: "Software Developer & Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#1F1A18] text-[#E8E6D9] font-mono">
        
        {}
        <nav className="fixed top-0 w-full z-50 bg-[#1F1A18]/60 backdrop-blur-md border-b border-[#E8E6D9]/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <div className="text-2xl font-black tracking-tighter cursor-pointer drop-shadow-md">
              SK<span className="text-[#8A9A5B] animate-pulse">_</span>
            </div>

            {}
            <div className="hidden md:flex gap-8">
              
              <a href="#projects" className="flex flex-col items-end cursor-pointer group">
                <span className="text-[#E8E6D9] font-bold tracking-widest uppercase group-hover:text-[#8A9A5B] transition-colors duration-300">
                  Projects
                </span>
                <span className="text-[0.55rem] text-[#E8E6D9] opacity-40 uppercase tracking-widest group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  Projeler <span className="text-[#722F37] mx-1">|</span> Progetti
                </span>
              </a>

              {}
              <a href="#about" className="flex flex-col items-end cursor-pointer group">
                <span className="text-[#E8E6D9] font-bold tracking-widest uppercase group-hover:text-[#8A9A5B] transition-colors duration-300">
                  About
                </span>
                <span className="text-[0.55rem] text-[#E8E6D9] opacity-40 uppercase tracking-widest group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  Kimim? <span className="text-[#722F37] mx-1">|</span> Chi Sono?
                </span>
              </a>

              {}
              <a href="#journal" className="flex flex-col items-end cursor-pointer group">
                <span className="text-[#E8E6D9] font-bold tracking-widest uppercase group-hover:text-[#8A9A5B] transition-colors duration-300">
                  Journal
                </span>
                <span className="text-[0.55rem] text-[#E8E6D9] opacity-40 uppercase tracking-widest group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  Günlük <span className="text-[#722F37] mx-1">|</span> Diario
                </span>
              </a>

            </div>
          </div>
        </nav>

        {children}
        
      </body>
    </html>
  );
}