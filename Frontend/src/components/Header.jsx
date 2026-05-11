import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col md:flex-row items-center justify-between w-full pt-25 px-8 md:px-14 py-14 overflow-hidden min-h-85 md:min-h-95"
      style={{
        background: "linear-gradient(135deg, #1a73e8 0%, #0d47a1 55%, #0a2e6e 100%)",
        // boxShadow: "0 30px 80px rgba(13, 71, 161, 0.45), 0 8px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* Animated gradient spotlight following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 55% 55% at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.07) 0%, transparent 70%)`,
        }}
      />

      {/* Background decorative circles */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10 animate-pulse"
        style={{ background: "radial-gradient(circle, #60a5fa, transparent 70%)", animationDuration: "4s" }}
      />
      <div
        className="absolute -bottom-24 right-1/3 w-80 h-80 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #93c5fd, transparent 70%)",
          animation: "float 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 -right-16 w-64 h-64 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #bfdbfe, transparent 70%)",
          animation: "float 5s ease-in-out infinite reverse",
        }}
      />

      {/* Floating particle dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${4 + (i % 4) * 3}px`,
            height: `${4 + (i % 4) * 3}px`,
            top: `${10 + i * 11}%`,
            left: `${5 + i * 10}%`,
            animation: `floatDot ${3 + i * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ------ Left Side ------- */}
      <div
        className="flex flex-col gap-6 z-10 max-w-lg"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Badge */}
        <div
          className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.1)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.7s 0.15s ease, transform 0.7s 0.15s ease",
          }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 text-xs font-medium tracking-wide uppercase">
            Trusted Healthcare Platform
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-extrabold leading-tight"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.2)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s 0.25s ease, transform 0.8s 0.25s ease",
          }}
        >
          Book Appointment <br />
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(90deg, #93c5fd, #bae6fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            With Trusted Doctors
          </span>
        </h1>

        {/* Profiles + Tagline */}
        <div
          className="flex items-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s 0.4s ease, transform 0.8s 0.4s ease",
          }}
        >
          <div className="relative shrink-0">
            <div
              className="absolute inset-0 rounded-full blur-md opacity-50"
              style={{ background: "linear-gradient(135deg, #60a5fa, #3b82f6)" }}
            />
            <img
              src={assets.group_profiles}
              alt="Trusted doctors"
              className="relative w-24 h-auto rounded-full ring-2 ring-white/30"
            />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white/70 text-xs ml-1">4.9/5</span>
            </div>
            <p className="text-white/80 text-sm leading-snug max-w-xs">
              Browse our extensive list of trusted doctors and schedule your appointment hassle-free.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s 0.55s ease, transform 0.8s 0.55s ease",
          }}
        >
          {[
            { value: "500+", label: "Doctors" },
            { value: "20k+", label: "Patients" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-white font-bold text-lg leading-none">{stat.value}</span>
              <span className="text-white/55 text-xs mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s 0.65s ease, transform 0.8s 0.65s ease",
          }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2.5 font-semibold text-sm px-7 py-3.5 rounded-full overflow-hidden w-fit"
            style={{
              background: "white",
              color: "#1a73e8",
              boxShadow: "0 8px 30px rgba(255,255,255,0.25), 0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 14px 40px rgba(255,255,255,0.35), 0 4px 12px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.25), 0 2px 8px rgba(0,0,0,0.1)";
            }}
          >
            {/* Shimmer effect */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(26,115,232,0.08), transparent)",
              }}
            />
            <span className="relative">Book appointment</span>
            <span
              className="relative flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-200 group-hover:translate-x-1"
              style={{ background: "rgba(26,115,232,0.1)" }}
            >
              <img src={assets.arrow_icon} alt="" className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>

      {/* ------ Right Side ------- */}
      <div
        className="mt-10 md:mt-0 flex items-end justify-end self-end z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Glow base under image */}
        <div
          className="absolute bottom-0 right-10 w-72 h-32 blur-3xl opacity-30 rounded-full pointer-events-none"
          style={{ background: "linear-gradient(135deg, #93c5fd, #3b82f6)" }}
        />

        <div
          style={{ animation: "floatImage 6s ease-in-out infinite" }}
          className="relative"
        >
          {/* Decorative ring behind image */}
          <div
            className="absolute -inset-4 rounded-full opacity-20 blur-xl"
            style={{ background: "radial-gradient(circle, #bfdbfe, transparent 70%)" }}
          />
          <img
            src={assets.header_img}
            alt="Trusted doctors"
            className="relative w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35)) drop-shadow(0 4px 12px rgba(13,71,161,0.4))",
            }}
          />
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 0.45; }
        }
        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Header;
