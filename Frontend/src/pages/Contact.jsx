import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Nav />

      <div className="relative pt-1 overflow-hidden bg-linear-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-0 w-lg h-128 bg-blue-300/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-md h-112 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/80 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Contact MediSync
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
              We’re Here to
              <span className="block bg-linear-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                Help You Anytime
              </span>
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-white/75 leading-relaxed">
              Have questions about appointments, support, or partnership
              opportunities? Our team is ready to assist you.
            </p>
          </div>

          {/* Main Card */}
          <div className="relative group rounded-4xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.45)] transition-all duration-700">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="grid md:grid-cols-2">
              {/* Left Image Section */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-[#0d47a1]/40 to-transparent z-10" />

                <img
                  src={assets.contact_image}
                  alt="Contact MediSync"
                  className="w-full h-full min-h-105 object-cover group-hover:scale-110 transition-transform duration-2000"
                />

                {/* Floating Info Badge */}
                <div className="absolute bottom-8 left-8 z-20 px-5 py-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-xl animate-float">
                  <p className="text-white font-bold text-lg">24/7 Support</p>
                  <p className="text-white/70 text-sm">
                    Average response time under 24 hours
                  </p>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="p-8 md:p-14 flex flex-col justify-center text-white">
                {/* Office */}
                <div className="mb-10 animate-fadeInUp">
                  <h3 className="text-2xl font-bold mb-4">Our Office</h3>
                  <div className="space-y-2 text-white/75 leading-relaxed">
                    <p>Somewhere Around!!</p>
                    <p>Kolkata, West Bengal, India</p>
                    <p>
                      <span className="font-semibold text-white">Tel:</span>{" "}
                      +91 XXXXX XXXXX
                    </p>
                    <p>
                      <span className="font-semibold text-white">Email:</span>{" "}
                      medisync@gmail.com
                    </p>
                  </div>
                </div>

                {/* Careers */}
                <div className="mb-10 animate-fadeInUp animation-delay-200">
                  <h3 className="text-2xl font-bold mb-4">
                    Careers at MediSync
                  </h3>
                  <p className="text-white/75 leading-relaxed mb-6">
                    We are not actively hiring right now, but we are always open
                    to connecting with talented individuals passionate about
                    healthcare and technology.
                  </p>

                  <button className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-[#0d47a1] font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                    Explore Careers
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Email Us",
                      value: "medisync@gmail.com",
                    },
                    {
                      title: "Call Us",
                      value: "+91 XXXXX XXXXX",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300"
                    >
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center animate-fadeInUp animation-delay-500">
            <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
              Our support team is available Monday to Friday, 9:00 AM – 6:00 PM.
              We typically respond to all inquiries within one business day.
            </p>
          </div>
        </div>

        {/* Custom Animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out both;
          }

          .animate-float {
            animation: float 5s ease-in-out infinite;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default Contact;