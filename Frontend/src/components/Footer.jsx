import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 008.36 22.93c.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.48.11-3.08 0 0 .96-.31 3.15 1.18a10.8 10.8 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.6.23 2.79.11 3.08.73.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.42-5.28 5.71.41.35.77 1.04.77 2.1v3.12c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.49 2.49 0 100 4.98 2.49 2.49 0 000-4.98zM3 8.98h3.96V21H3V8.98zM9.54 8.98h3.79v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.08V21h-3.96v-5.63c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9.54V8.98z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3.01a9.45 9.45 0 01-2.71.74A4.74 4.74 0 0022.36 1a9.47 9.47 0 01-3 1.15 4.73 4.73 0 00-8.06 4.31A13.43 13.43 0 011.64 1.9a4.73 4.73 0 001.46 6.31A4.7 4.7 0 01.96 7.6v.06a4.73 4.73 0 003.79 4.63 4.74 4.74 0 01-2.13.08 4.74 4.74 0 004.42 3.28A9.5 9.5 0 010 19.54a13.39 13.39 0 007.29 2.14c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.02-.61A9.66 9.66 0 0023 3.01z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative mt-0 overflow-hidden bg-linear-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-md h-112 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 left-1/3 w-lg h-128 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-60 rounded-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-7 h-7 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Medi
                  <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Sync
                  </span>
                </h2>
                <p className="text-sm text-blue-200/70">
                  Smart Healthcare Platform
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-xl text-sm md:text-base">
              MediSync connects patients with verified doctors through a seamless,
              secure, and intelligent healthcare platform. Book appointments,
              access expert care, and manage your health with confidence.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-white mb-3">
                Stay updated with healthcare insights
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 transition"
                />
                <button className="px-6 py-3 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>

            <div className="space-y-4 text-slate-300">
              <p>+91 98765 43210</p>
              <p>support@medisync.com</p>
              <p>Kolkata, West Bengal, India</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © 2026 MediSync. All rights reserved.
          </p>

          <p className="text-sm text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Crafted with precision by{' '}
            <span className="font-semibold bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Sagnik
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer