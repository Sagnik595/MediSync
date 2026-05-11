import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";
import { AppContext } from "../context/Context.jsx";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { token, setToken, userdata } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/");
  };

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes navGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.15);
          }
        }

        @keyframes floatLogo {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-glow {
          animation: navGlow 6s ease-in-out infinite;
        }

        .logo-float {
          animation: floatLogo 4s ease-in-out infinite;
        }

        .status-dot {
          animation: pulseDot 2s ease-in-out infinite;
        }

        .dropdown-enter {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="nav-glow absolute -top-16 left-1/4 w-72 h-72 bg-cyan-400/15 blur-3xl rounded-full" />
          <div
            className="nav-glow absolute -top-20 right-1/4 w-72 h-72 bg-indigo-500/15 blur-3xl rounded-full"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Navbar */}
        <nav
          className={`relative max-w-7xl mx-auto transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_12px_50px_rgba(15,23,42,0.12)]"
              : "bg-white/65 backdrop-blur-xl border border-white/40 shadow-[0_8px_40px_rgba(15,23,42,0.06)]"
          } rounded-3xl px-5 md:px-8 h-20`}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {/* Top gradient border */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />

          <div className="h-full flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative logo-float">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Logo container */}
                <div className="relative w-12 h-12 rounded-2xl p-px bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src="/logo2.png"
                      alt="MediSync"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col leading-none">
                <span
                  className="text-[1.75rem] font-extrabold tracking-tight text-slate-900"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Medi
                  <span className="bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Sync
                  </span>
                </span>
                <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 mt-0.5">
                  <span className="status-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Trusted Healthcare
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-cyan-700"
                        : "text-slate-600 hover:text-cyan-700"
                    }`}
                  >
                    {/* Active background */}
                    {isActive(link.href) && (
                      <>
                        <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-100" />
                        <span className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-500" />
                      </>
                    )}

                    {/* Hover background */}
                    {!isActive(link.href) && (
                      <span className="absolute inset-0 rounded-2xl bg-slate-50 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    )}

                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {token ? (
                <div className="hidden md:block relative group">
                  {/* Avatar */}
                  <button className="flex items-center gap-3 p-1.5 pr-3 rounded-full bg-white/70 border border-slate-200 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 blur-md opacity-50" />
                      <img
                        src={userdata?.image || assets.profile_pic}
                        alt="Profile"
                        className="relative w-11 h-11 rounded-full object-cover border-2 border-white"
                      />
                    </div>

                    <img
                      src={assets.dropdown_icon}
                      alt=""
                      className="w-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="dropdown-enter absolute top-full right-0 mt-4 w-64 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-100 bg-linear-to-r from-cyan-50 to-blue-50">
                      <p className="text-sm font-bold text-slate-900">
                        {userdata?.name || "Welcome"}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Manage your account
                      </p>
                    </div>

                    <div className="p-2">
                      {[
                        {
                          label: "My Profile",
                          action: () => navigate("/myprofile"),
                        },
                        {
                          label: "My Appointments",
                          action: () => navigate("/myappointments"),
                        },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={item.action}
                          className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-slate-600 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}

                      <div className="my-2 h-px bg-slate-100" />

                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200 cursor-pointer"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="hidden md:inline-flex relative items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm text-white overflow-hidden shadow-[0_12px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_16px_40px_rgba(59,130,246,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600" />
                  <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Create Account</span>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden relative w-11 h-11 rounded-2xl bg-white/70 border border-slate-200 flex items-center justify-center"
                aria-label="Toggle Menu"
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                      menuOpen ? "top-2 rotate-45" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                      menuOpen ? "top-2 -rotate-45" : "top-3"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden max-w-7xl mx-auto mt-3 transition-all duration-400 overflow-hidden ${
            menuOpen
              ? "max-h-150 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] p-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      isActive(link.href)
                        ? "bg-linear-to-r from-cyan-50 to-blue-50 text-cyan-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-slate-100">
              {token ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/myprofile");
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-slate-600 hover:bg-slate-50"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/myappointments");
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-slate-600 hover:bg-slate-50"
                  >
                    My Appointments
                  </button>

                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-2xl text-sm font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-lg"
                >
                  Create Account
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;