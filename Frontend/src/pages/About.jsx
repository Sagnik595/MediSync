import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { assets } from '../assets/assets_frontend/assets'

/* ── Injected styles for custom animations & fonts ── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm      { font-family: 'DM Sans', sans-serif; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.93); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes lineGrow {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.12; transform: scale(1); }
      50%       { opacity: 0.22; transform: scale(1.08); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .anim-fadeUp    { animation: fadeUp    0.75s ease forwards; }
    .anim-slideR    { animation: slideRight 0.75s ease forwards; }
    .anim-slideL    { animation: slideLeft  0.75s ease forwards; }
    .anim-scaleIn   { animation: scaleIn   0.70s ease forwards; }
    .anim-lineGrow  { animation: lineGrow  0.90s ease forwards; }
    .anim-pulseSlow { animation: pulse-slow 5s ease-in-out infinite; }

    .opacity-init { opacity: 0; }

    .shimmer-text {
      background: linear-gradient(90deg, #1bc5b5 0%, #ffffff 40%, #1bc5b5 80%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }

    .clip-right { clip-path: polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%); }

    .card-lift {
      transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease;
      position: relative;
      overflow: hidden;
    }
    .card-lift:hover {
      transform: translateY(-10px);
      box-shadow: 0 28px 64px rgba(13,31,60,0.12);
    }
    .card-lift::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, #0f9b8e, #1bc5b5);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
      border-radius: 0 0 20px 20px;
    }
    .card-lift:hover::after { transform: scaleX(1); }

    .img-reveal {
      clip-path: inset(100% 0 0 0);
      animation: imgReveal 0.9s cubic-bezier(.22,1,.36,1) forwards;
    }
    @keyframes imgReveal {
      to { clip-path: inset(0% 0 0 0); }
    }
  `}</style>
)

/* ── useInView hook ── */
function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.15, ...opts })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

/* ── Animated counter ── */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const [ref, inView] = useInView()
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1400, 1)
      setVal(Math.floor(p * to))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ═══════════════════════════════════════ */
const About = () => {
  const [heroReady, setHeroReady] = useState(false)
  const [whyRef,     whyInView]     = useInView()
  const [missionRef, missionInView] = useInView()
  const [cardsRef,   cardsInView]   = useInView()

  useEffect(() => { setTimeout(() => setHeroReady(true), 80) }, [])

  const cards = [
    { icon: '⚡', num: '01', title: 'Efficiency',       iconBg: 'bg-teal-50',  body: 'Streamlined appointment scheduling that adapts to your calendar. Spend less time waiting and more time living your healthiest life.' },
    { icon: '🤝', num: '02', title: 'Convenience',      iconBg: 'bg-red-50',   body: 'Access a curated network of trusted healthcare professionals in your area — specialists, GPs, and therapists, all in one place.' },
    { icon: '✦',  num: '03', title: 'Personalization',  iconBg: 'bg-slate-100', body: 'Intelligent reminders and tailored insights that actually understand your health history, habits, and future goals.' },
  ]

  return (
    <>
      <GlobalStyles />
      <Nav />

      <div className="mt-25 font-dm bg-[#fdfcfa] overflow-x-hidden">

        {/* ══════════════════════════════
            HERO — SPLIT PANEL
        ══════════════════════════════ */}
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">

          {/* glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 70% at 30% 50%, rgba(15,155,142,0.08) 0%, transparent 70%)' }} />

          {/* LEFT */}
          <div className="flex flex-col justify-center px-10 md:px-20 py-24 relative z-10">

            <div className={`flex items-center gap-3 mb-7 opacity-init ${heroReady ? 'anim-slideR' : ''}`}
              style={{ animationDelay: '0.1s' }}>
              <span className="w-8 h-px bg-teal-500 block" />
              <span className="text-teal-600 text-xs font-medium tracking-[0.25em] uppercase">About MediSync</span>
            </div>

            <h1 className={`font-playfair text-[clamp(42px,5.5vw,76px)] leading-[1.04] text-[#0d1f3c] mb-8 opacity-init ${heroReady ? 'anim-fadeUp' : ''}`}
              style={{ animationDelay: '0.25s' }}>
              Healthcare,<br />
              <em className="text-teal-500 italic">finally</em> in<br />
              sync<span className="text-[#e8533a]">.</span>
            </h1>

            <p className={`text-[#4a5870] text-base leading-[1.85] max-w-md mb-12 opacity-init ${heroReady ? 'anim-fadeUp' : ''}`}
              style={{ animationDelay: '0.4s' }}>
              MediSync was born from a simple belief — that navigating your health
              shouldn't feel like navigating a maze. We've built a platform that puts
              clarity, speed, and compassion at the center of every interaction.
            </p>

            {/* about image */}
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl max-w-sm opacity-init ${heroReady ? 'anim-scaleIn' : ''}`}
              style={{ animationDelay: '0.55s' }}>
              <img
                src={assets.about_image}
                alt="About MediSync"
                className="w-full h-64 object-contain shadow-[0_0_20px_1px] shadow-black"
              />
              {/* founder badge over image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-[#0d1f3c] flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair text-white text-base font-bold">S</span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-[0.18em] uppercase text-slate-400">Founded by</span>
                  <strong className="text-[#0d1f3c] text-sm font-medium">Sagnik</strong>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — dark panel */}
          <div className="relative overflow-hidden min-h-[480px] lg:min-h-0">
            <div className="clip-right absolute inset-0 bg-gradient-to-br from-[#0d1f3c] to-[#173560]">

              {/* blobs */}
              <div className="anim-pulseSlow absolute w-72 h-72 rounded-full bg-teal-400 -top-10 -right-10 blur-[80px] opacity-15" />
              <div className="anim-pulseSlow absolute w-48 h-48 rounded-full bg-[#e8533a] bottom-16 left-16 blur-[60px] opacity-10"
                style={{ animationDelay: '2s' }} />

              <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-20 py-20">

                <div className={`text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5 opacity-init ${heroReady ? 'anim-fadeUp' : ''}`}
                  style={{ animationDelay: '0.3s' }}>Our Vision</div>

                <blockquote className={`font-playfair italic text-white text-[clamp(20px,2.4vw,32px)] leading-[1.45] mb-8 opacity-init ${heroReady ? 'anim-fadeUp' : ''}`}
                  style={{ animationDelay: '0.5s' }}>
                  "Bridging the gap between patients and providers — one seamless moment at a time."
                </blockquote>

                <p className={`text-white/55 text-sm leading-[1.9] mb-12 max-w-sm opacity-init ${heroReady ? 'anim-fadeUp' : ''}`}
                  style={{ animationDelay: '0.65s' }}>
                  At MediSync, we imagine a world where booking a doctor feels as effortless
                  as ordering coffee. Where your health records travel with you, not against you.
                  Where technology bends to the human — not the other way around.
                </p>

                {/* stats */}
                <div className={`flex gap-10 opacity-init ${heroReady ? 'anim-fadeUp' : ''}`}
                  style={{ animationDelay: '0.8s' }}>
                  {[
                    { to: 10,  suffix: 'k+', label: 'Patients Served' },
                    { to: 500, suffix: '+',  label: 'Verified Doctors' },
                    { to: 98,  suffix: '%',  label: 'Satisfaction' },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="font-playfair text-4xl leading-none shimmer-text">
                        <Counter to={s.to} suffix={s.suffix} />
                      </div>
                      <div className="text-[10px] tracking-[0.12em] uppercase text-white/35 mt-1.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════ */}
        <section ref={whyRef} className="relative px-10 md:px-20 py-28 bg-[#f7f4ef] overflow-hidden">

          {/* ghost watermark */}
          <div className="absolute font-playfair font-bold text-[#0d1f3c]/[0.04] select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(100px,18vw,220px)', top: -20, left: -10 }}>WHY</div>

          {/* header */}
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 opacity-init ${whyInView ? 'anim-fadeUp' : ''}`}>
            <h2 className="font-playfair text-[clamp(32px,4vw,58px)] text-[#0d1f3c] leading-[1.1]">
              Why <em className="italic text-teal-500">choose</em><br />MediSync?
            </h2>
            <p className="text-sm text-slate-400 max-w-xs md:text-right leading-[1.75]">
              Three pillars that make us different — and the reason Sagnik built this from the ground up.
            </p>
          </div>

          {/* cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <div key={c.title}
                className={`bg-white rounded-[20px] p-10 card-lift opacity-init ${cardsInView ? 'anim-scaleIn' : ''}`}
                style={{ animationDelay: `${0.1 + i * 0.15}s` }}>

                <span className="absolute top-6 right-6 font-playfair text-[70px] font-bold text-[#0d1f3c]/[0.04] leading-none select-none">
                  {c.num}
                </span>
                <div className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center text-2xl mb-7`}>
                  {c.icon}
                </div>
                <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#0d1f3c] mb-3">{c.title}</div>
                <p className="text-[15px] leading-[1.8] text-slate-500">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            FOUNDER NOTE STRIP
        ══════════════════════════════ */}
        <section ref={missionRef}
          className="bg-[#0d1f3c] px-10 md:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className={`opacity-init ${missionInView ? 'anim-slideR' : ''}`}>
            <div className="text-[10px] tracking-[0.3em] uppercase text-teal-300 mb-5">Our Commitment</div>
            <h3 className="font-playfair text-[clamp(28px,3vw,46px)] text-white leading-[1.2]">
              Built with purpose.<br />
              Driven by <em className="italic text-teal-300">people.</em>
            </h3>
            <div className={`mt-6 h-px bg-gradient-to-r from-teal-400 to-transparent origin-left opacity-init ${missionInView ? 'anim-lineGrow' : ''}`}
              style={{ animationDelay: '0.4s' }} />
          </div>

          <div className={`border-l border-white/10 pl-12 opacity-init ${missionInView ? 'anim-slideL' : ''}`}
            style={{ animationDelay: '0.2s' }}>
            <strong className="block text-white text-[17px] font-medium mb-4">
              A note from Sagnik, Founder of MediSync
            </strong>
            <p className="text-white/55 text-[15px] leading-[1.9]">
              Hey, I am Sagnik, and I built MediSync because it was fun and I was just craving really good projects for my CV. Now you might think this desinging is done my AI, partly correct but believe me the first design I got from claude was really shitty, I had to edit it for like a thousands time and that too <span className='font-bold'>MANUALLY</span>, and the assets are taken from my tutor, and lastly I just want to say if u still have something to say then f*** off!!
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-[#173560] flex items-center justify-center">
                <span className="font-playfair text-white font-bold">S</span>
              </div>
              <div>
                <div className="text-white text-sm font-medium">Sagnik</div>
                <div className="text-white/35 text-xs tracking-wider">Founder & CEO, MediSync</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default About