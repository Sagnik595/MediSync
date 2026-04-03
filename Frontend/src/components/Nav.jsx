import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "HOME", href: "/" },
    { name: "ALL DOCTORS", href: "/doctors" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <header>
        <nav
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-17.5 transition-all duration-500
            ${
              scrolled
                ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(6,182,212,0.08)] border-b border-cyan-100"
                : "bg-white/70 backdrop-blur-md border-b border-white/40"
            }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(6,182,212,0.4)] group-hover:shadow-[0_4px_20px_rgba(6,182,212,0.55)] transition-shadow duration-300">
              <img src="/logo2.png" alt="MediSync Logo" className="w-full h-full object-cover" />
            </div>
            <span
              className="text-[1.6rem] font-bold tracking-tight text-cyan-950 leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Medi<span className="text-cyan-500">Sync</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${
                      isActive(link.href)
                        ? "text-cyan-600 bg-cyan-50"
                        : "text-slate-500 hover:text-cyan-600 hover:bg-cyan-50/60"
                    }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-cyan-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          {token ? (
            <div className="hidden md:flex items-center gap-2 cursor-pointer group relative">
              <img
                src={assets.profile_pic}
                alt="Profile"
                className="w-15 h-15 rounded-full object-cover border-2 border-cyan-100 group-hover:border-cyan-300 transition-all duration-200"
              />
              <img
                src={assets.dropdown_icon}
                alt="Dropdown"
                className="w-2.5 opacity-50 group-hover:opacity-80 transition-opacity duration-200"
              />

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-3 w-48 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-[-6px] transition-all duration-200 z-50">
                <div className="p-2 flex flex-col gap-0.5">
                  <button
                    onClick={() => navigate("/myprofile")}
                    className="cursor-pointer text-left w-full px-3 py-2.5 text-sm text-slate-600 font-medium rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => navigate("/myappointments")}
                    className="cursor-pointer text-left w-full px-3 py-2.5 text-sm text-slate-600 font-medium rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150"
                  >
                    My Appointments
                  </button>
                  <div className="h-px bg-slate-100 my-1" />
                  <button
                    onClick={() => setToken(false)}
                    className="cursor-pointer text-left w-full px-3 py-2.5 text-sm text-red-400 font-medium rounded-xl hover:bg-red-50 transition-colors duration-150"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="cursor-pointer text-sm font-semibold text-white px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-[0_3px_14px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Create Account
              </button>
            </div>
          )}

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-[70px] left-0 right-0 z-40 md:hidden bg-white/97 backdrop-blur-xl border-b border-cyan-100 shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <ul className="flex flex-col px-5 py-4 gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${
                      isActive(link.href)
                        ? "text-cyan-600 bg-cyan-50 font-semibold"
                        : "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50/60"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2 px-5 pb-4">
            <button
              onClick={() => { navigate("/login"); setMenuOpen(false); }}
              className="text-sm font-semibold text-white py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-[0_3px_14px_rgba(6,182,212,0.35)] text-center"
            >
              Create Account
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;