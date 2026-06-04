"use client";
import { motion } from "framer-motion";

export default function Home() {
  const subtitle = "> Software Developer & Designer";
  
  const projects = [
    {
      title: "2D Magical Running Game In Two Different Versions",
      tech: ["Unity 2D", "C#", "Academic"],
      descEN: "A 2D platformer game developed for a university project, featuring deep parallax background effects and custom physics.",
      descTR: "Üniversite projesi olarak geliştirilen, derinlikli parallax arka plan efektlerine sahip 2D platform oyunu.",
      descIT: "Un gioco platform 2D sviluppato per un progetto universitario, con effetti di sfondo parallasse.",
      color: "border-[#8A9A5B]",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(138,154,91,0.4)]"
    },
    {
      title: "3D Casette Mining mini game",
      tech: ["Unity 3D", "Game Dev", "Academic"],
      descEN: "An immersive 3D game environment built with a strong focus on level design and spatial interactions.",
      descTR: "Bölüm tasarımı ve mekansal etkileşimlere odaklanarak inşa edilmiş 3D oyun ortamı.",
      descIT: "Un ambiente di gioco 3D costruito con un forte focus sul level design e sulle interazioni spaziali.",
      color: "border-[#722F37]",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(114,47,55,0.4)]"
    },
    {
      title: "Aellosanyin * Astrology Website (Private)",
      tech: ["Web Design", "Co-op", "Private"],
      descEN: "An exclusive astrology platform co-developed with my friend. Currently kept private for closed-group usage.",
      descTR: "Arkadaşım ile birlikte geliştirilen özel astroloji platformu. Şu an sadece kapalı grup kullanımı için gizli tutulmaktadır.",
      descIT: "Una piattaforma di astrologia esclusiva sviluppata con la mia amica. Attualmente mantenuta privata.",
      color: "border-[#E8E6D9]",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(232,230,217,0.2)]"
    },
    {
      title: "Aellosanyin * Astrology Android App (Private)",
      tech: ["Android Studio", "XML", "Mobile"],
      descEN: "A mobile application project focusing on clean UI/UX layout design and functional user flow.",
      descTR: "Temiz kullanıcı arayüzü (UI/UX) tasarımına ve işlevsel kullanıcı akışına odaklanan mobil uygulama projesi.",
      descIT: "Un progetto di app mobile incentrato sul design dell'interfaccia utente pulito e sul flusso funzionale.",
      color: "border-[#8A9A5B]",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(138,154,91,0.4)]"
    }
  ];

  return (
    <main className="relative bg-[#1F1A18] text-[#E8E6D9] font-mono z-0 selection:bg-[#8A9A5B] selection:text-[#1F1A18]">
      
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <div className="fixed inset-0 bg-[radial-gradient(#E8E6D9_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none z-10"></div>

      {}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
        <div className="absolute left-4 top-0 bottom-0 hidden md:flex flex-col justify-between py-12 text-[#E8E6D9] opacity-20 text-xs z-10 select-none">
          {[...Array(20)].map((_, i) => (<span key={i}>{String(i + 1).padStart(2, '0')}</span>))}
        </div>

        <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, 90, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[10%] w-[20rem] h-[20rem] bg-[#8A9A5B] rounded-full filter blur-[100px] opacity-30 -z-10" />
        <motion.div animate={{ scale: [1, 2, 1], rotate: [0, -90, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-[#722F37] rounded-full filter blur-[100px] opacity-20 -z-10" />

        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[25%] left-[15%] hidden md:flex items-center gap-2 px-4 py-2 bg-[#2A2421]/80 backdrop-blur-sm border border-[#8A9A5B] text-[#8A9A5B] text-sm tracking-widest shadow-lg">
          <span className="w-2 h-2 bg-[#8A9A5B] rounded-full animate-pulse"></span> UNITY 2D
        </motion.div>
        <motion.div animate={{ y: [0, 25, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[35%] right-[10%] hidden md:flex items-center gap-2 px-4 py-2 bg-[#2A2421]/80 backdrop-blur-sm border border-[#722F37] text-[#722F37] text-sm tracking-widest shadow-lg">
          <span className="w-2 h-2 bg-[#722F37] rounded-full animate-pulse"></span> JAVA
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[35%] left-[8%] hidden md:flex items-center gap-2 px-4 py-2 bg-[#2A2421]/80 backdrop-blur-sm border border-[#E8E6D9] text-[#E8E6D9] text-sm tracking-widest shadow-lg opacity-70">
          ANDROID STUDIO
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[20%] right-[20%] hidden md:flex items-center gap-2 px-4 py-2 bg-[#2A2421]/80 backdrop-blur-sm border border-[#8A9A5B] text-[#8A9A5B] text-sm tracking-widest shadow-lg opacity-80">
          DATA ANALYSIS
        </motion.div>

        <div className="z-20 flex flex-col items-center text-center mt-20">
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-6xl md:text-8xl font-black mb-4 tracking-tighter drop-shadow-2xl">
            Süheyna Karakurt<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-[#8A9A5B]">_</motion.span>
          </motion.h1>
          
          <div className="flex flex-col items-center mb-12 h-14">
            <motion.p className="text-[#8A9A5B] text-xl md:text-2xl tracking-wide font-light">
              {subtitle.split("").map((char, index) => (
                <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.05, delay: index * 0.05 + 0.5 }}>{char}</motion.span>
              ))}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }} className="text-xs md:text-sm text-[#E8E6D9] opacity-40 mt-2 tracking-widest uppercase font-light">
              Yazılım Geliştirici & Tasarımcı <span className="mx-2 text-[#722F37] opacity-60">|</span> Sviluppatrice di Software & Designer
            </motion.p>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 3, ease: "easeOut" }} className="flex gap-6 mt-4">
            <a href="#projects" className="relative group border border-[#8A9A5B] text-[#2A2421] px-8 py-3 bg-[#8A9A5B] hover:bg-transparent hover:text-[#8A9A5B] transition-all duration-300 flex flex-col items-center justify-center">
              <span className="absolute top-2 left-2 w-full h-full bg-[#722F37] -z-10 group-hover:top-1 group-hover:left-1 transition-all duration-300"></span>
              <span className="text-xl font-bold uppercase tracking-widest">Projects</span>
              <span className="text-[0.65rem] font-medium opacity-90 mt-1 tracking-wider uppercase">Projelerim <span className="mx-1 text-[#722F37]">•</span> I Miei Progetti</span>
            </a>
            <a href="#about" className="border border-[#E8E6D9] text-[#E8E6D9] px-8 py-3 hover:bg-[#E8E6D9] hover:text-[#1F1A18] transition-all duration-300 flex flex-col items-center justify-center group">
              <span className="text-xl font-bold uppercase tracking-widest">About Me</span>
              <span className="text-[0.65rem] font-light opacity-60 group-hover:opacity-100 mt-1 tracking-wider uppercase transition-opacity duration-300">Ben Kimim? <span className="mx-1">•</span> Chi Sono?</span>
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, duration: 1 }} className="absolute bottom-6 flex flex-col items-center z-20">
          <span className="text-sm text-[#E8E6D9] tracking-[0.3em] opacity-80 uppercase mb-1">Scroll</span>
          <span className="text-[0.55rem] text-[#E8E6D9] tracking-widest opacity-40 uppercase mb-3">Aşağı Kaydır <span className="mx-1">•</span> Scorri</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-[#8A9A5B] to-transparent" />
        </motion.div>
      </section>

      {}
      <section id="projects" className="relative min-h-screen py-32 px-8 max-w-5xl mx-auto z-20">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">Projects<span className="text-[#8A9A5B]">.</span></h2>
          <p className="text-sm tracking-widest text-[#E8E6D9] opacity-50 uppercase">Projelerim <span className="mx-2 text-[#722F37]">|</span> I Miei Progetti</p>
          <div className="w-full h-px bg-gradient-to-r from-[#8A9A5B] to-transparent mt-6 opacity-30"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.2 }} className={`group relative p-8 bg-[#2A2421]/40 backdrop-blur-sm border border-opacity-30 ${proj.color} hover:bg-[#2A2421]/80 transition-all duration-500 cursor-pointer ${proj.glow}`}>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-[0.65rem] border border-[#E8E6D9]/20 px-2 py-1 tracking-widest opacity-70 group-hover:opacity-100 transition-opacity uppercase">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#E8E6D9] group-hover:text-[#8A9A5B] transition-colors">{proj.title}</h3>
              <div className="space-y-4">
                <p className="text-sm opacity-90 leading-relaxed">{proj.descEN}</p>
                <p className="text-[0.7rem] opacity-50 leading-relaxed text-[#8A9A5B]">{proj.descTR}</p>
                <p className="text-[0.7rem] opacity-40 leading-relaxed italic">{proj.descIT}</p>
              </div>
              <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${proj.color}`}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {}
      <section id="about" className="relative min-h-screen py-32 px-8 max-w-6xl mx-auto z-20 border-t border-[#E8E6D9]/10">
        
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 text-right">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">About Me<span className="text-[#722F37]">.</span></h2>
          <p className="text-sm tracking-widest text-[#E8E6D9] opacity-50 uppercase">Ben Kimim? <span className="mx-2 text-[#8A9A5B]">|</span> Chi Sono?</p>
          <div className="w-full h-px bg-gradient-to-l from-[#722F37] to-transparent mt-6 opacity-30"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 flex flex-col gap-8">
            <div className="text-[#E8E6D9] opacity-90 leading-relaxed font-light text-lg">
              <p className="mb-4">
                I am a 19-year-old Computer Programming student at Yaşar University, with a heavy focus on software engineering, data analysis, and mobile architecture.
              </p>
              <p>
                My expertise lies in blending logical system analysis with creative design. Beyond the screen, I am a multi-instrumentalist and an active board member of the Yaşar Music Community, proving that code and art share the same rhythm. Currently, I am actively preparing for the DGS exam to transition into a full Software Engineering degree.
              </p>
            </div>
            <div className="text-[#8A9A5B] opacity-80 leading-relaxed font-light text-sm border-l border-[#8A9A5B]/30 pl-4">
              <p>
                Yaşar Üniversitesi'nde Bilgisayar Programcılığı okuyan 19 yaşında bir öğrenciyim. Odak noktam yazılım mühendisliği, veri analizi ve mobil mimari. Mantıksal sistem analizi ile yaratıcı tasarımı harmanlamayı seviyorum. Ekrandan uzaklaştığımda bir müzisyen ve Yaşar Müzik Topluluğu Yönetim Kurulu üyesiyim. Şu an Yazılım Mühendisliği'ne geçiş için aktif olarak DGS'ye hazırlanıyorum.
              </p>
            </div>
            <div className="text-[#722F37] opacity-70 leading-relaxed font-light text-xs italic border-l border-[#722F37]/30 pl-4">
              <p>
                Sono una studentessa di 19 anni di Programmazione Informatica all'Università Yaşar. La mia esperienza sta nel fondere l'analisi dei sistemi logici con il design creativo. Oltre allo schermo, sono una polistrumentista e membro del consiglio della Yaşar Music Community. Attualmente mi preparo per l'esame DGS per passare a Ingegneria del Software.
              </p>
            </div>
          </motion.div>

          {}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {}
            <div className="md:col-span-2">
              <h4 className="text-[#8A9A5B] uppercase tracking-widest text-xs mb-4 font-bold border-b border-[#8A9A5B]/30 pb-2">Core Programming & Logic</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#2A2421] border border-[#8A9A5B]/50 text-[0.75rem]">Java</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#8A9A5B]/50 text-[0.75rem]">Python</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#8A9A5B]/50 text-[0.75rem]">C & C++</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#8A9A5B]/50 text-[0.75rem]">C# Scripting</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#E8E6D9]/20 text-[0.75rem] opacity-70">OOP & Algorithms</span>
              </div>
            </div>

            {}
            <div>
              <h4 className="text-[#722F37] uppercase tracking-widest text-xs mb-4 font-bold border-b border-[#722F37]/30 pb-2">Web & Mobile Dev</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#2A2421] border border-[#722F37]/50 text-[0.75rem]">HTML, CSS, JavaScript</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#722F37]/50 text-[0.75rem]">Android Studio / XML</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#E8E6D9]/20 text-[0.75rem] opacity-70">Internet Programming</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#E8E6D9]/20 text-[0.75rem] opacity-70">Visual Programming</span>
              </div>
            </div>

            {}
            <div>
              <h4 className="text-[#8A9A5B] uppercase tracking-widest text-xs mb-4 font-bold border-b border-[#8A9A5B]/30 pb-2">Systems & Data</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#2A2421] border border-[#8A9A5B]/50 text-[0.75rem]">Embedded Systems</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#8A9A5B]/50 text-[0.75rem]">Data Analysis</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#8A9A5B]/50 text-[0.75rem]">SQL & Databases</span>
                <span className="px-3 py-1 bg-[#2A2421] border border-[#E8E6D9]/20 text-[0.75rem] opacity-70">Unity (2D & 3D)</span>
              </div>
            </div>

            {}
            <div>
              <h4 className="text-[#722F37] uppercase tracking-widest text-xs mb-4 font-bold border-b border-[#722F37]/30 pb-2">Leadership & Arts</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#722F37] text-xs">►</span>
                  <p className="text-sm opacity-90">Board Member <br/><span className="text-[0.65rem] opacity-50 uppercase tracking-widest">Yaşar Music Community ('25-'26)</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#722F37] text-xs">►</span>
                  <p className="text-sm opacity-90">Multi-Instrumentalist <br/><span className="text-[0.65rem] opacity-50 uppercase tracking-widest">Piano (10y) • Elec. Guitar (6y) • Bass (4y) • Vocals</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#722F37] text-xs">►</span>
                  <p className="text-sm opacity-90">Visual Arts <br/><span className="text-[0.65rem] opacity-50 uppercase tracking-widest">Canvas Painting • Charcoal Drawing</span></p>
                </div>
              </div>
            </div>

            {}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-[#E8E6D9] uppercase tracking-widest text-xs mb-4 font-bold opacity-80 border-b border-[#E8E6D9]/20 pb-2">Discipline</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-[#E8E6D9]/20 text-[0.75rem] opacity-80">Reformer Pilates</span>
                  <span className="px-3 py-1 border border-[#E8E6D9]/20 text-[0.75rem] opacity-80">Hammock Yoga</span>
                  <span className="px-3 py-1 border border-[#E8E6D9]/20 text-[0.75rem] opacity-80">Fitness</span>
                </div>
              </div>

              <div>
                <h4 className="text-[#E8E6D9] uppercase tracking-widest text-xs mb-4 font-bold opacity-60 border-b border-[#E8E6D9]/10 pb-2">Linguistics</h4>
                <div className="flex flex-col gap-1 text-[0.8rem]">
                  <div className="flex justify-between items-center"><span className="opacity-90">English</span><span className="text-[#8A9A5B] text-[0.65rem] tracking-widest">FLUENT</span></div>
                  <div className="flex justify-between items-center"><span className="opacity-90">Italian</span><span className="text-[#8A9A5B] text-[0.65rem] tracking-widest">B1 / LEVEL 4</span></div>
                  <div className="flex justify-between items-center"><span className="opacity-90">German</span><span className="text-[#722F37] text-[0.65rem] tracking-widest">A2</span></div>
                  <div className="flex justify-between items-center"><span className="opacity-90">Spanish</span><span className="text-[#722F37] text-[0.65rem] tracking-widest">ELEMENTARY</span></div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {}
      <section id="journal" className="relative min-h-[50vh] py-32 px-8 max-w-5xl mx-auto z-20 border-t border-[#E8E6D9]/10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">Journal<span className="text-[#8A9A5B] animate-pulse">_</span></h2>
          <p className="text-sm tracking-widest text-[#E8E6D9] opacity-50 uppercase">Günlük <span className="mx-2 text-[#722F37]">|</span> Diario</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-3xl mx-auto bg-[#1A1514] border border-[#8A9A5B]/30 rounded-md overflow-hidden shadow-2xl">
          <div className="bg-[#2A2421] px-4 py-2 flex items-center gap-2 border-b border-[#8A9A5B]/30">
            <div className="w-3 h-3 rounded-full bg-[#722F37]"></div>
            <div className="w-3 h-3 rounded-full bg-[#8A9A5B] opacity-50"></div>
            <div className="w-3 h-3 rounded-full bg-[#E8E6D9] opacity-20"></div>
            <span className="ml-2 text-[0.65rem] text-[#E8E6D9] opacity-50 tracking-widest uppercase font-mono">system_log.exe</span>
          </div>
          <div className="p-8 font-mono text-sm text-[#8A9A5B] opacity-80 flex flex-col gap-2">
            <p><span className="text-[#E8E6D9] opacity-50">{">"}</span> Connecting to database...</p>
            <p><span className="text-[#E8E6D9] opacity-50">{">"}</span> Fetching latest journal entries...</p>
            <p className="mt-4 text-[#722F37]">Error: The journal is currently empty or encrypted.</p>
            <p className="animate-pulse mt-2"><span className="text-[#E8E6D9] opacity-50">{">"}</span> Awaiting user input _</p>
          </div>
        </motion.div>
      </section>

    </main>
  );
}