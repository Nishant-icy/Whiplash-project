import { Play, Zap } from 'lucide-react';

/* Inline SVG instruments */

const DrumKit = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {/* Bass drum */}
    <ellipse cx="60" cy="85" rx="42" ry="22" fill="#f5c518" stroke="#1a1200" strokeWidth="3.5"/>
    <ellipse cx="60" cy="85" rx="34" ry="14" fill="#fff9d6" stroke="#1a1200" strokeWidth="2.5"/>
    <ellipse cx="60" cy="85" rx="18" ry="7" fill="#ffab00" stroke="#1a1200" strokeWidth="2"/>
    {/* Snare */}
    <ellipse cx="60" cy="58" rx="28" ry="10" fill="#ff8c00" stroke="#1a1200" strokeWidth="3"/>
    <ellipse cx="60" cy="58" rx="22" ry="6" fill="#fff9d6" stroke="#1a1200" strokeWidth="2"/>
    {/* Legs */}
    <line x1="28" y1="98" x2="20" y2="118" stroke="#1a1200" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="92" y1="98" x2="100" y2="118" stroke="#1a1200" strokeWidth="3.5" strokeLinecap="round"/>
    {/* Cymbal left */}
    <ellipse cx="25" cy="38" rx="18" ry="5" fill="#f5c518" stroke="#1a1200" strokeWidth="3"/>
    <line x1="25" y1="43" x2="30" y2="62" stroke="#1a1200" strokeWidth="3" strokeLinecap="round"/>
    {/* Cymbal right */}
    <ellipse cx="95" cy="32" rx="18" ry="5" fill="#f5c518" stroke="#1a1200" strokeWidth="3"/>
    <line x1="95" y1="37" x2="88" y2="60" stroke="#1a1200" strokeWidth="3" strokeLinecap="round"/>
    {/* Hi-hat stand */}
    <line x1="60" y1="68" x2="60" y2="110" stroke="#1a1200" strokeWidth="3" strokeLinecap="round"/>
    {/* Drumsticks */}
    <line x1="38" y1="28" x2="58" y2="56" stroke="#d4a800" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="37" cy="26" r="4" fill="#ffab00" stroke="#1a1200" strokeWidth="2"/>
    <line x1="82" y1="28" x2="62" y2="56" stroke="#d4a800" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="83" cy="26" r="4" fill="#ffab00" stroke="#1a1200" strokeWidth="2"/>
  </svg>
);

const Saxophone = () => (
  <svg viewBox="0 0 100 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <path d="M55 10 Q70 10 72 30 L68 90 Q68 115 50 120 Q32 125 28 110 Q24 95 40 90 L44 88 L48 30 Q48 10 55 10Z"
      fill="#f5c518" stroke="#1a1200" strokeWidth="3.5" strokeLinejoin="round"/>
    {/* Bell */}
    <ellipse cx="42" cy="118" rx="16" ry="8" fill="#ffab00" stroke="#1a1200" strokeWidth="3"/>
    {/* Keys */}
    {[38, 48, 58, 68, 78].map((y, i) => (
      <circle key={i} cx={64 - i * 1.5} cy={y} r="5" fill="#fff9d6" stroke="#1a1200" strokeWidth="2.5"/>
    ))}
    {/* Mouthpiece */}
    <path d="M48 12 Q52 4 60 6 L58 14 Q54 12 50 16Z" fill="#ff8c00" stroke="#1a1200" strokeWidth="2.5"/>
    {/* Neck strap */}
    <path d="M55 18 Q80 30 78 50" fill="none" stroke="#d4a800" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round"/>
    {/* Highlights */}
    <path d="M54 30 Q58 40 56 60" fill="none" stroke="#fff9d6" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const Violin = () => (
  <svg viewBox="0 0 90 150" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {/* Body lower bout */}
    <ellipse cx="45" cy="110" rx="30" ry="32" fill="#d4a800" stroke="#1a1200" strokeWidth="3.5"/>
    {/* Waist */}
    <rect x="33" y="82" width="24" height="18" rx="4" fill="#d4a800" stroke="#1a1200" strokeWidth="3.5"/>
    {/* Body upper bout */}
    <ellipse cx="45" cy="78" rx="24" ry="24" fill="#d4a800" stroke="#1a1200" strokeWidth="3.5"/>
    {/* Sound holes f-holes */}
    <path d="M35 90 Q32 95 34 102" stroke="#1a1200" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M55 90 Q58 95 56 102" stroke="#1a1200" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Neck */}
    <rect x="41" y="30" width="8" height="52" rx="3" fill="#f5c518" stroke="#1a1200" strokeWidth="3"/>
    {/* Scroll */}
    <path d="M39 30 Q35 20 40 12 Q46 6 50 14 Q52 22 45 28" fill="#ffab00" stroke="#1a1200" strokeWidth="2.5"/>
    {/* Strings */}
    {[-4, -1, 2, 5].map((x, i) => (
      <line key={i} x1={45 + x} y1="28" x2={45 + x * 0.4} y2="130" stroke="#1a1200" strokeWidth="1.2"/>
    ))}
    {/* Bridge */}
    <path d="M35 108 L40 104 L50 104 L55 108" stroke="#1a1200" strokeWidth="2.5" fill="none"/>
    {/* Chin rest */}
    <ellipse cx="50" cy="130" rx="12" ry="7" fill="#ff8c00" stroke="#1a1200" strokeWidth="2.5"/>
    {/* Bow */}
    <line x1="70" y1="20" x2="82" y2="140" stroke="#d4a800" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="71" y1="22" x2="80" y2="136" stroke="#fff9d6" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <rect x="67" y="14" width="8" height="10" rx="2" fill="#f5c518" stroke="#1a1200" strokeWidth="2"/>
  </svg>
);

const Microphone = () => (
  <svg viewBox="0 0 80 150" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {/* Stand base */}
    <ellipse cx="40" cy="142" rx="28" ry="7" fill="#d4a800" stroke="#1a1200" strokeWidth="3"/>
    {/* Stand legs */}
    <line x1="40" y1="135" x2="16" y2="142" stroke="#1a1200" strokeWidth="3" strokeLinecap="round"/>
    <line x1="40" y1="135" x2="64" y2="142" stroke="#1a1200" strokeWidth="3" strokeLinecap="round"/>
    <line x1="40" y1="135" x2="40" y2="142" stroke="#1a1200" strokeWidth="3" strokeLinecap="round"/>
    {/* Stand pole */}
    <rect x="37" y="80" width="6" height="58" rx="3" fill="#f5c518" stroke="#1a1200" strokeWidth="2.5"/>
    {/* Boom arm */}
    <line x1="40" y1="95" x2="62" y2="78" stroke="#1a1200" strokeWidth="3.5" strokeLinecap="round"/>
    {/* Mic body */}
    <rect x="28" y="24" width="24" height="54" rx="12" fill="#ff8c00" stroke="#1a1200" strokeWidth="3.5"/>
    {/* Mic grille (top dome) */}
    <ellipse cx="40" cy="28" rx="12" ry="10" fill="#f5c518" stroke="#1a1200" strokeWidth="3"/>
    {/* Grille mesh lines */}
    {[20, 26, 32, 38, 44].map((y, i) => (
      <line key={i} x1="30" y1={y} x2="50" y2={y} stroke="#1a1200" strokeWidth="1.5" opacity="0.5"/>
    ))}
    {/* Grille vertical */}
    {[33, 37, 41, 45, 49].map((x, i) => (
      <line key={i} x1={x} y1="18" x2={x} y2="50" stroke="#1a1200" strokeWidth="1.5" opacity="0.4"/>
    ))}
    {/* Cable */}
    <path d="M40 78 Q48 88 42 100 Q36 110 44 118" fill="none" stroke="#1a1200" strokeWidth="3" strokeLinecap="round"/>
    {/* Band / ring */}
    <rect x="27" y="58" width="26" height="8" rx="3" fill="#ffab00" stroke="#1a1200" strokeWidth="2.5"/>
    {/* Highlight */}
    <path d="M34 26 Q32 38 34 50" stroke="#fff9d6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

/* Floating instrument wrapper */
const InstrumentFloat = ({ children, style, rotate = 0, size = 160, animDelay = '0s', label }) => (
  <div
    style={{
      position: 'absolute',
      width: size,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.45rem',
      animation: `floatInstrument 4s ease-in-out infinite`,
      animationDelay: animDelay,
      zIndex: 1,
      ...style,
    }}
  >
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '1.25rem',
        border: '3.5px solid #1a1200',
        background: 'linear-gradient(135deg, #fff9d6 60%, #fff3a8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `5px 5px 0 #1a1200`,
        padding: '1rem',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </div>
    {label && (
      <span
        style={{
          background: 'var(--primary)',
          border: '2px solid var(--primary-dark)',
          color: '#fff',
          fontSize: '0.72rem',
          fontWeight: 700,
          padding: '0.15rem 0.65rem',
          borderRadius: '999px',
          boxShadow: '2px 2px 0 var(--primary-dark)',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          transform: `rotate(${-rotate}deg)`,
          display: 'inline-block',
        }}
      >
        {label}
      </span>
    )}
  </div>
);

/* Floating music note */
const Note = ({ char, style, rotate = 0, size = 26, color = 'var(--primary-dark)', delay = '0s' }) => (
  <span
    style={{
      position: 'absolute',
      fontSize: size,
      color,
      fontWeight: 900,
      transform: `rotate(${rotate}deg)`,
      lineHeight: 1,
      pointerEvents: 'none',
      userSelect: 'none',
      animation: `floatInstrument 3.5s ease-in-out infinite`,
      animationDelay: delay,
      zIndex: 0,
      ...style,
    }}
  >
    {char}
  </span>
);

/* Hero component */
const Hero = () => (
  <section className="hero hero-scattered">

    {/* Instrument images in the four corners */}
    <InstrumentFloat size={170} rotate={-10} animDelay="0s"   label="Drums"    style={{ top: '10%', left: '1%' }}>
      <DrumKit />
    </InstrumentFloat>

    <InstrumentFloat size={155} rotate={8}   animDelay="1.1s" label="Sax"      style={{ top: '8%', right: '2%' }}>
      <Saxophone />
    </InstrumentFloat>

    <InstrumentFloat size={160} rotate={-7}  animDelay="0.6s" label="Violin"   style={{ bottom: '8%', left: '2%' }}>
      <Violin />
    </InstrumentFloat>

    <InstrumentFloat size={150} rotate={9}   animDelay="1.7s" label="Mic"      style={{ bottom: '10%', right: '1%' }}>
      <Microphone />
    </InstrumentFloat>

    {/* Floating notes */}
    <Note char="♩" style={{ top: '28%', left: '20%' }}   rotate={-15} size={30} delay="0s" />
    <Note char="♪" style={{ top: '22%', right: '21%' }}  rotate={12}  size={22} color="var(--accent)" delay="0.8s" />
    <Note char="♫" style={{ bottom: '32%', left: '20%' }} rotate={-8} size={34} color="var(--primary)" delay="1.4s" />
    <Note char="♬" style={{ bottom: '28%', right: '20%' }} rotate={18} size={28} delay="0.4s" />
    <Note char="⚡" style={{ top: '52%', left: '14%' }}  rotate={-5}  size={22} color="var(--accent)" delay="1s" />
    <Note char="🎵" style={{ top: '56%', right: '14%' }} rotate={10}  size={22} delay="0.2s" />

    {/* Centered text */}
    <div className="container hero-center">
      <div className="hero-content-center">
        <span className="hero-tag">✦ New Collection 2026</span>

        <h1 className="hero-title">
          Unleash Your{' '}
          <span className="text-gradient">Identity</span>
        </h1>

        <p className="hero-desc">
          Premium instruments and studio-grade audio gear for the modern creator.
          Elevate your sound with Whiplash.
        </p>

        <div className="hero-btns-center">
          <button className="btn btn-primary">
            <Zap size={18} fill="currentColor" />
            Shop Now
          </button>
          <button className="btn btn-outline">
            <Play size={18} fill="currentColor" />
            Watch Demo
          </button>
        </div>

        <div className="hero-stats-center">
          {[
            { value: '500+', label: 'Products' },
            { value: '12K+', label: 'Customers' },
            { value: '4.9★', label: 'Rating' },
          ].map(s => (
            <div className="hero-stat-pill" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
