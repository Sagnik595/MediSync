// import {Routes, Route} from 'react-router-dom'
// import Home from './pages/Home'
// import About from "./pages/About"
// import Login from "./pages/Login"
// import Doctors from "./pages/Doctors"
// import Profile from "./pages/Profile"
// import Contact from "./pages/Contact"
// import MyAppointments from "./pages/MyAppointments"
// import Appointments from './pages/Appointments'
// import { ToastContainer, toast } from 'react-toastify';

// const App = () => {
//   return (
//     <>
//       <ToastContainer />
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/doctors' element={<Doctors/>}/>
//         <Route path='/doctors/:speciality' element={<Doctors/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/myappointments' element={<MyAppointments/>}/>
//         <Route path='/myprofile' element={<Profile/>}/>
//         <Route path='/doctors/:speciality/appointments/:docID' element={<Appointments/>}/>
//       </Routes>
//     </>
//   )
// }

// export default App




import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About"
import Login from "./pages/Login"
import Doctors from "./pages/Doctors"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import MyAppointments from "./pages/MyAppointments"
import Appointments from './pages/Appointments'
import { ToastContainer } from 'react-toastify';

const STATUS_MESSAGES = [
  "Initializing secure connection...",
  "Loading your health profile...",
  "Syncing appointment data...",
  "Connecting to doctors...",
  "Almost there...",
]

const MediSyncLoader = () => {
  const [msgIndex, setMsgIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setMsgIndex(i => (i + 1) % STATUS_MESSAGES.length)
        setFade(true)
      }, 300)
    }, 700)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.root}>
      {/* Background grid */}
      <div style={styles.bgGrid} />
      <div style={styles.bgGlowTL} />
      <div style={styles.bgGlowBR} />

      {/* Logo area */}
      <div style={styles.logoArea}>
        <svg style={styles.ringSvg} viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-outer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c8ff" />
              <stop offset="50%" stopColor="#00ffaa" />
              <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad-inner" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00ffaa" />
              <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <style>{`
            @keyframes spin-ring { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -502; } }
            @keyframes spin-ring2 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 502; } }
            @keyframes ripple-ring { 0% { transform: scale(0.85); opacity: 0.7; } 100% { transform: scale(2.1); opacity: 0; } }
            @keyframes star-twinkle { 0%,100%{opacity:0;transform:scale(0.5);} 50%{opacity:1;transform:scale(1);} }
            .ring-outer { animation: spin-ring 2.8s linear infinite; transform-origin: 80px 80px; }
            .ring-inner { animation: spin-ring2 3.6s linear infinite; transform-origin: 80px 80px; }
            .ripple { animation: ripple-ring 2.8s ease-out infinite; transform-origin: 80px 80px; }
            .star1 { animation: star-twinkle 2s ease-in-out infinite; transform-origin: 30px 28px; }
            .star2 { animation: star-twinkle 2s ease-in-out 0.7s infinite; transform-origin: 128px 40px; }
            .star3 { animation: star-twinkle 2s ease-in-out 1.4s infinite; transform-origin: 22px 120px; }
          `}</style>
          <circle className="ripple" cx="80" cy="80" r="74" fill="none" stroke="rgba(0,200,255,0.2)" strokeWidth="1" />
          <circle cx="80" cy="80" r="76" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
          <circle className="ring-outer" cx="80" cy="80" r="76" fill="none" stroke="url(#grad-outer)" strokeWidth="2.5" strokeDasharray="502" strokeDashoffset="126" strokeLinecap="round" />
          <circle cx="80" cy="80" r="57" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
          <circle className="ring-inner" cx="80" cy="80" r="57" fill="none" stroke="url(#grad-inner)" strokeWidth="1.5" strokeDasharray="376" strokeDashoffset="94" strokeLinecap="round" />
          <g className="star1">
            <line x1="30" y1="22" x2="30" y2="34" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24" y1="28" x2="36" y2="28" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g className="star2">
            <line x1="128" y1="35" x2="128" y2="45" stroke="#00ffaa" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="123" y1="40" x2="133" y2="40" stroke="#00ffaa" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g className="star3">
            <line x1="22" y1="115" x2="22" y2="125" stroke="#00c8ff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="17" y1="120" x2="27" y2="120" stroke="#00c8ff" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>

        <div style={styles.logoWrap}>
          <img src="/logo2.png" alt="MediSync" style={styles.logoImg} />
        </div>
      </div>

      {/* Brand */}
      <div style={styles.brandBlock}>
        <div style={styles.brandName}>MediSync</div>
        <div style={styles.brandTag}>Healthcare · Simplified</div>
      </div>

      {/* Status */}
      <div style={{ ...styles.statusText, opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease' }}>
        {STATUS_MESSAGES[msgIndex]}
      </div>

      {/* Progress bar */}
      <div style={styles.progressTrack}>
        <div style={styles.progressBar} />
      </div>

      {/* Dots */}
      <div style={styles.dots}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ ...styles.dot, animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>

      {/* Pills */}
      <div style={styles.pillRow}>
        {['Secure', 'Reliable', '24 / 7'].map(label => (
          <span key={label} style={styles.pill}>{label}</span>
        ))}
      </div>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }
        @keyframes pulse-logo { 0%,100%{opacity:0.85;transform:scale(1);} 50%{opacity:1;transform:scale(1.06);} }
        @keyframes progress-fill { from{width:0%} to{width:100%} }
        @keyframes dot-bounce { 0%,80%,100%{transform:translateY(0);opacity:0.4;} 40%{transform:translateY(-8px);opacity:1;} }
        @keyframes fade-up { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200px 0} 100%{background-position:200px 0} }
        .ms-logo-wrap { animation: pulse-logo 2.4s ease-in-out infinite; }
        .ms-logo-area { animation: float 3.5s ease-in-out infinite; }
        .ms-brand { animation: fade-up 0.7s ease-out both; }
        .ms-pills { animation: fade-up 1s ease-out 0.3s both; }
        .ms-dot { animation: dot-bounce 1.2s ease-in-out infinite; }
        .ms-bar { animation: progress-fill 3.2s cubic-bezier(0.4,0,0.2,1) both; }
        .ms-bar::after {
          content:''; position:absolute; top:0; right:0; bottom:0; width:60px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5));
          animation: shimmer 1.2s linear infinite;
        }
      `}</style>
    </div>
  )
}

const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#050c18',
    position: 'relative',
    overflow: 'hidden',
    padding: '48px 32px 40px',
  },
  bgGrid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(0,180,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,255,0.04) 1px,transparent 1px)',
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  },
  bgGlowTL: {
    position: 'absolute', top: -80, left: -80,
    width: 360, height: 360,
    background: 'radial-gradient(circle,rgba(0,160,255,0.12) 0%,transparent 70%)',
    pointerEvents: 'none',
  },
  bgGlowBR: {
    position: 'absolute', bottom: -80, right: -60,
    width: 300, height: 300,
    background: 'radial-gradient(circle,rgba(0,220,100,0.10) 0%,transparent 70%)',
    pointerEvents: 'none',
  },
  logoArea: {
    position: 'relative',
    width: 160, height: 160,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 32,
    animation: 'float 3.5s ease-in-out infinite',
  },
  ringSvg: {
    position: 'absolute', top: 0, left: 0,
    width: 160, height: 160,
  },
  logoWrap: {
    position: 'relative', zIndex: 2,
    width: 108, height: 108,
    animation: 'pulse-logo 2.4s ease-in-out infinite',
  },
  logoImg: {
    width: '100%', height: '100%', objectFit: 'contain',
    filter: 'drop-shadow(0 0 18px rgba(0,200,255,0.45)) drop-shadow(0 0 6px rgba(0,255,120,0.3))',
  },
  brandBlock: {
    textAlign: 'center',
    marginBottom: 28,
    animation: 'fade-up 0.7s ease-out both',
  },
  brandName: {
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: '-0.5px',
    background: 'linear-gradient(135deg, #00c8ff 0%, #00ffaa 50%, #4af4ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1,
  },
  brandTag: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)',
    marginTop: 6,
  },
  statusText: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 13,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: 18,
    letterSpacing: '0.3px',
    minHeight: 18,
  },
  progressTrack: {
    width: 220, height: 3,
    background: 'rgba(255,255,255,0.08)',
    borderRadius: 99,
    overflow: 'hidden',
    marginBottom: 28,
  },
  progressBar: {
    height: '100%',
    borderRadius: 99,
    background: 'linear-gradient(90deg,#00c8ff,#00ffaa)',
    animation: 'progress-fill 3.2s cubic-bezier(0.4,0,0.2,1) both',
    position: 'relative',
  },
  dots: {
    display: 'flex', gap: 7, alignItems: 'center',
  },
  dot: {
    width: 5, height: 5,
    borderRadius: '50%',
    background: 'rgba(0,200,255,0.7)',
    animation: 'dot-bounce 1.2s ease-in-out infinite',
  },
  pillRow: {
    display: 'flex', gap: 8, marginTop: 26,
    animation: 'fade-up 1s ease-out 0.3s both',
  },
  pill: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 10,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: 99,
    border: '0.5px solid rgba(255,255,255,0.12)',
    color: 'rgba(255,255,255,0.3)',
    fontWeight: 500,
  },
}

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Adjust this delay to match your actual app init time
    const timer = setTimeout(() => setLoading(false), 4500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <MediSyncLoader />

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/myprofile' element={<Profile />} />
        <Route path='/doctors/:speciality/appointments/:docID' element={<Appointments />} />
      </Routes>
    </>
  )
}

export default App