
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

/* ─── Animated Counter Hook ─────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─── Floating Particle ──────────────────────────────────────────── */
function Particle({ style }) {
  return <div className="medisync-particle" style={style} />;
}

/* ─── Main Banner ────────────────────────────────────────────────── */
const Banner = () => {
  const navigate = useNavigate();

  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const doctors = useCounter(100, 1600, visible);
  const patients = useCounter(50000, 2000, visible);
  const rating = useCounter(49, 1400, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    key: i,
    style: {
      left: `${5 + ((i * 37) % 90)}%`,
      top: `${10 + ((i * 53) % 80)}%`,
      width: `${4 + (i % 4) * 3}px`,
      height: `${4 + (i % 4) * 3}px`,
      animationDelay: `${(i * 0.4) % 4}s`,
      animationDuration: `${5 + (i % 5)}s`,
      opacity: 0.12 + (i % 5) * 0.04,
    },
  }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        /* In the .medisync-banner class, replace this: */
        .medisync-banner {
          position: relative;
          width: 100%;
          border-radius: 0;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            #1a73e8 0%,
            #0d47a1 55%,
            #0a2e6e 100%
          );
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.08) inset,
            0 1px 0 rgba(255,255,255,0.15) inset;
          font-family: 'DM Sans', sans-serif;
        }
          box-shadow:
            0 40px 80px -20px rgba(59, 74, 205, 0.55),
            0 0 0 1px rgba(255,255,255,0.08) inset,
            0 1px 0 rgba(255,255,255,0.15) inset;
          font-family: 'DM Sans', sans-serif;
        }

        @media (max-width: 768px) {
          .medisync-banner { margin-left: 1rem; margin-right: 1rem; }
        }

        /* Layered mesh background */
        .medisync-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(122, 139, 255, 0.22) 0%, transparent 60%),
            radial-gradient(ellipse 40% 80% at 10% 80%, rgba(60, 100, 255, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(180, 190, 255, 0.12) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Animated scan line */
        .medisync-banner::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.025) 50%, transparent);
          animation: scanLine 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes scanLine {
          0%, 100% { top: -60%; }
          50% { top: 120%; }
        }

        /* Grid texture */
        .medisync-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* Floating particles */
        .medisync-particle {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: floatParticle var(--dur, 6s) ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-14px) scale(1.1); }
          66% { transform: translateY(6px) scale(0.9); }
        }

        /* Left glow orb */
        .medisync-orb-left {
          position: absolute;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(120,140,255,0.25), transparent 70%);
          top: 50%; left: -80px;
          transform: translateY(-50%);
          pointer-events: none;
          animation: orbPulse 6s ease-in-out infinite;
        }
        .medisync-orb-right {
          position: absolute;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(100,120,255,0.15), transparent 70%);
          bottom: -120px; right: -80px;
          pointer-events: none;
          animation: orbPulse 8s ease-in-out infinite reverse;
        }
        @keyframes orbPulse {
          0%, 100% { transform: translateY(-50%) scale(1); opacity: 1; }
          50% { transform: translateY(-50%) scale(1.15); opacity: 0.7; }
        }
        .medisync-orb-right { transform: none; }
        @keyframes orbPulseR {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.75; }
        }

        /* Content layout */
        .medisync-inner {
          position: relative;
          display: flex;
          align-items: center;
          padding: 3.5rem 4rem;
          gap: 2rem;
          z-index: 2;
        }
        @media (max-width: 900px) {
          .medisync-inner { padding: 2.5rem 2rem; flex-direction: column; }
        }

        /* ── Left content ── */
        .medisync-left { flex: 1; }

        /* Pill badge */
        .medisync-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          padding: 6px 16px 6px 8px;
          margin-bottom: 1.6rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .medisync-badge.in { opacity: 1; transform: translateY(0); }

        .medisync-badge-dot {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6ee7b7, #3b82f6);
          display: flex; align-items: center; justify-content: center;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(110,231,183,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(110,231,183,0); }
        }
        .medisync-badge-dot svg { width: 14px; height: 14px; }

        .medisync-badge-text {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.9);
          text-transform: uppercase;
        }

        /* Heading */
        .medisync-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 800;
          line-height: 1.08;
          color: white;
          margin: 0 0 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
        }
        .medisync-heading.in { opacity: 1; transform: translateY(0); }

        .medisync-heading-gradient {
          background: linear-gradient(90deg, #c7d3ff 0%, #ffffff 40%, #a5f3d0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }

        /* Sub text */
        .medisync-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          max-width: 380px;
          line-height: 1.7;
          margin: 0 0 2rem;
          font-weight: 300;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.28s, transform 0.6s ease 0.28s;
        }
        .medisync-sub.in { opacity: 1; transform: translateY(0); }

        /* CTA button */
        .medisync-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #2d3494;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.02em;
          padding: 14px 28px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          opacity: 0;
          transform: translateY(16px);
          animation: none;
          text-decoration: none;
        }
        .medisync-cta.in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s, box-shadow 0.3s ease;
        }
        .medisync-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #eef0ff, #ffffff);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .medisync-cta:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 16px 48px rgba(0,0,0,0.3); }
        .medisync-cta:hover::before { opacity: 1; }
        .medisync-cta:active { transform: scale(0.98); }
        .medisync-cta-arrow {
          width: 24px; height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b4acd, #5f6fff);
          display: flex; align-items: center; justify-content: center;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .medisync-cta:hover .medisync-cta-arrow { transform: translateX(3px); }
        .medisync-cta-label { position: relative; z-index: 1; }

        /* Stats row */
        .medisync-stats {
          display: flex;
          align-items: center;
          gap: 0;
          margin-top: 2.4rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s;
        }
        .medisync-stats.in { opacity: 1; transform: translateY(0); }

        .medisync-stat {
          display: flex;
          flex-direction: column;
          padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .medisync-stat:first-child { padding-left: 0; }
        .medisync-stat:last-child { border-right: none; }

        .medisync-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }
        .medisync-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
          font-weight: 400;
        }

        /* ── Right image side ── */
        .medisync-right {
          position: relative;
          width: 420px;
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        @media (max-width: 900px) { .medisync-right { display: none; } }

        /* Decorative ring behind image */
        .medisync-ring {
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: ringExpand 3s ease-out forwards;
        }
        .medisync-ring:nth-child(2) { width: 280px; height: 280px; animation-delay: 0.3s; border-color: rgba(255,255,255,0.07); }
        .medisync-ring:nth-child(3) { width: 400px; height: 400px; animation-delay: 0.6s; border-color: rgba(255,255,255,0.05); }
        @keyframes ringExpand {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.7); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        /* Floating doctor cards */
        .medisync-float-card {
          position: absolute;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          opacity: 0;
          animation: cardSlideIn 0.7s ease forwards;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        }
        .medisync-float-card.card-1 { top: 18%; left: -60px; animation-delay: 1.0s; }
        .medisync-float-card.card-2 { bottom: 22%; right: -30px; animation-delay: 1.3s; }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateX(-16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .card-2 { animation-name: cardSlideInRight !important; }
        @keyframes cardSlideInRight {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .medisync-card-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .medisync-card-icon.green { background: rgba(110,231,183,0.25); }
        .medisync-card-icon.yellow { background: rgba(250,200,100,0.25); }
        .medisync-card-value {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: white;
          line-height: 1.1;
        }
        .medisync-card-label {
          font-size: 10px;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* Doctor image */
        .medisync-img {
          position: relative;
          width: 100%;
          max-height: 420px;
          object-fit: contain;
          object-position: bottom;
          filter: drop-shadow(0 20px 60px rgba(0,0,0,0.4));
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
          z-index: 2;
        }
        .medisync-img.in {
          opacity: 1;
          transform: translateY(0);
          animation: gentleFloat 5s ease-in-out 1.3s infinite;
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Bottom shimmer strip */
        .medisync-shimmer {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(160,200,255,0.6), rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmerSlide 3s linear infinite;
        }
        @keyframes shimmerSlide {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        /* Trust pill chips */
        .medisync-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 1.2rem;
          opacity: 0;
          transition: opacity 0.6s ease 0.65s;
        }
        .medisync-chips.in { opacity: 1; }
        .medisync-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 11.5px;
          color: rgba(255,255,255,0.75);
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        .medisync-chip-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>

      <div className="medisync-banner" ref={bannerRef}>
        {/* Texture & atmosphere layers */}
        <div className="medisync-grid" />
        <div className="medisync-orb-left" />
        <div className="medisync-orb-right" />

        {/* Floating particles */}
        {particles.map((p) => (
          <Particle
            key={p.key}
            style={{ ...p.style, "--dur": p.style.animationDuration }}
          />
        ))}

        {/* Bottom shimmer */}
        <div className="medisync-shimmer" />

        <div className="medisync-inner">
          {/* ── LEFT ── */}
          <div className="medisync-left">
            {/* Badge */}
            <div className={`medisync-badge ${visible ? "in" : ""}`}>
              <div className="medisync-badge-dot">
                <svg viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="medisync-badge-text">
                MediSync — Healthcare Platform
              </span>
            </div>

            {/* Heading */}
            <h2 className={`medisync-heading ${visible ? "in" : ""}`}>
              Book Appointment
              <span className="medisync-heading-gradient">
                With 100+ Trusted Doctors
              </span>
            </h2>

            {/* Sub */}
            <p className={`medisync-sub ${visible ? "in" : ""}`}>
              Join thousands of satisfied patients who trust our healthcare
              professionals for seamless, expert medical care — anytime,
              anywhere.
            </p>

            {/* CTA */}
            <a onClick={()=>{
              window.scrollTo(0, 0)
              navigate('/doctors')}} 
              className={`medisync-cta ${visible ? "in" : ""}`}>
              <span className="medisync-cta-label">Book Appointment Now</span>
              <span className="medisync-cta-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6h7M6 2.5 9.5 6 6 9.5"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* Trust chips */}
            <div className={`medisync-chips ${visible ? "in" : ""}`}>
              {[
                { color: "#6ee7b7", label: "HIPAA Compliant" },
                { color: "#93c5fd", label: "Board Certified" },
                { color: "#fcd34d", label: "4.9★ Rated" },
                { color: "#f9a8d4", label: "24/7 Support" },
              ].map((chip) => (
                <span className="medisync-chip" key={chip.label}>
                  <span
                    className="medisync-chip-dot"
                    style={{ background: chip.color }}
                  />
                  {chip.label}
                </span>
              ))}
            </div>

            {/* Animated stats */}
            <div className={`medisync-stats ${visible ? "in" : ""}`}>
              <div className="medisync-stat">
                <span className="medisync-stat-value">{doctors}+</span>
                <span className="medisync-stat-label">Doctors</span>
              </div>
              <div className="medisync-stat">
                <span className="medisync-stat-value">
                  {(patients / 1000).toFixed(0)}K+
                </span>
                <span className="medisync-stat-label">Patients Served</span>
              </div>
              <div className="medisync-stat">
                <span className="medisync-stat-value">
                  {(rating / 10).toFixed(1)}
                </span>
                <span className="medisync-stat-label">Avg Rating</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="medisync-right">
            {/* Concentric rings */}
            <div className="medisync-ring" />
            <div className="medisync-ring" />
            <div className="medisync-ring" />

            {/* Floating stat card: top-left */}
            <div className="medisync-float-card card-1">
              <div className="medisync-card-icon green">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2v14M2 9h14"
                    stroke="#6ee7b7"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="medisync-card-value">Instant Booking</div>
                <div className="medisync-card-label">Avg. 3 min to confirm</div>
              </div>
            </div>

            {/* Floating stat card: bottom-right */}
            <div className="medisync-float-card card-2">
              <div className="medisync-card-icon yellow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1l2.2 5.5H17l-4.6 3.3 1.7 5.4L9 12.3l-5.1 2.9 1.7-5.4L1 6.5h5.8L9 1z"
                    fill="#fcd34d"
                  />
                </svg>
              </div>
              <div>
                <div className="medisync-card-value">4.9 / 5.0</div>
                <div className="medisync-card-label">Patient satisfaction</div>
              </div>
            </div>

            {/* Doctor image */}
            <img
              className={`medisync-img ${visible ? "in" : ""}`}
              src={assets.appointment_img}
              alt="Doctor ready for appointment"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
