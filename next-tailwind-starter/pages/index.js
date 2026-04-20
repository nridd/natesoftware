import Nav from '../components/Nav'
import { useRef, useEffect, useState } from 'react'

const PIVOT = { x: 720, y: -10 }
const LEFT_ATTACH = { x: 470, y: 490 }
const RIGHT_ATTACH = { x: 970, y: 490 }

export default function Home() {
  const [openWhatIDoItem, setOpenWhatIDoItem] = useState(0)
  const angleRef = useRef(0)
  const velocityRef = useRef(0)
  const rafRef = useRef(null)
  const leftRopeRef = useRef(null)
  const rightRopeRef = useRef(null)
  const swingGroupRef = useRef(null)
  const canSwingRef = useRef(true)
  const leaveTimerRef = useRef(null)
  const lastMouseXRef = useRef(null)
  const mouseSpeedRef = useRef(0)
  const idleRafRef = useRef(null)

  function updateSwing(angle) {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const lDx = LEFT_ATTACH.x - PIVOT.x
    const lDy = LEFT_ATTACH.y - PIVOT.y
    const rDx = RIGHT_ATTACH.x - PIVOT.x
    const rDy = RIGHT_ATTACH.y - PIVOT.y
    const lb = { x: PIVOT.x + lDx * cos - lDy * sin, y: PIVOT.y + lDx * sin + lDy * cos }
    const rb = { x: PIVOT.x + rDx * cos - rDy * sin, y: PIVOT.y + rDx * sin + rDy * cos }
    if (leftRopeRef.current) {
      leftRopeRef.current.setAttribute('x2', lb.x)
      leftRopeRef.current.setAttribute('y2', lb.y)
    }
    if (rightRopeRef.current) {
      rightRopeRef.current.setAttribute('x2', rb.x)
      rightRopeRef.current.setAttribute('y2', rb.y)
    }
    if (swingGroupRef.current) {
      swingGroupRef.current.setAttribute('transform', `rotate(${angle * 180 / Math.PI}, ${PIVOT.x}, ${PIVOT.y})`)
    }
  }

  function startIdle() {
    let start = null
    function idleLoop(ts) {
      if (!start) start = ts
      updateSwing(0.02 * Math.sin((ts - start) / (4000 / (2 * Math.PI))))
      idleRafRef.current = requestAnimationFrame(idleLoop)
    }
    idleRafRef.current = requestAnimationFrame(idleLoop)
  }

  function animate() {
    velocityRef.current += -0.003 * angleRef.current
    velocityRef.current *= 0.992
    angleRef.current += velocityRef.current
    updateSwing(angleRef.current)
    if (Math.abs(velocityRef.current) > 0.0002 || Math.abs(angleRef.current) > 0.001) {
      rafRef.current = requestAnimationFrame(animate)
    } else {
      angleRef.current = 0
      velocityRef.current = 0
      startIdle()
    }
  }

  function handleMouseEnter(e) {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    if (!canSwingRef.current) return
    canSwingRef.current = false
    if (idleRafRef.current) cancelAnimationFrame(idleRafRef.current)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const dir = (lastMouseXRef.current !== null && e.clientX > lastMouseXRef.current) ? -1 : 1
    const speed = Math.min(Math.abs(mouseSpeedRef.current), 60)
    const strength = 0.02 + (speed / 60) * 0.08
    velocityRef.current = strength * dir
    angleRef.current = 0
    rafRef.current = requestAnimationFrame(animate)
  }

  function handleMouseLeave() {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    leaveTimerRef.current = setTimeout(() => {
      canSwingRef.current = true
    }, 500)
  }

  useEffect(() => {
    const trackMouse = (e) => {
      mouseSpeedRef.current = e.movementX
      lastMouseXRef.current = e.clientX
    }
    window.addEventListener('mousemove', trackMouse)
    startIdle()
    return () => {
      window.removeEventListener('mousemove', trackMouse)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (idleRafRef.current) cancelAnimationFrame(idleRafRef.current)
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    }
  }, [])

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-ink text-center px-6 overflow-hidden">
        {/* Porch illustration */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Sky — space */}
          <style>{`
            @keyframes shoot1 { 0%,100%{opacity:0;transform:translate(0,0)} 1%{opacity:1} 5%{opacity:0;transform:translate(280px,130px)} }
            @keyframes shoot2 { 0%,100%{opacity:0;transform:translate(0,0)} 1%{opacity:1} 5%{opacity:0;transform:translate(200px,180px)} }
            @keyframes shoot3 { 0%,100%{opacity:0;transform:translate(0,0)} 1%{opacity:1} 5%{opacity:0;transform:translate(350px,100px)} }
            @keyframes shoot4 { 0%,100%{opacity:0;transform:translate(0,0)} 1%{opacity:1} 5%{opacity:0;transform:translate(160px,200px)} }
            @keyframes shoot5 { 0%,100%{opacity:0;transform:translate(0,0)} 1%{opacity:1} 5%{opacity:0;transform:translate(300px,160px)} }
            @keyframes shoot6 { 0%,100%{opacity:0;transform:translate(0,0)} 1%{opacity:1} 5%{opacity:0;transform:translate(240px,140px)} }
            .ss1 { animation: shoot1 24s linear infinite; animation-delay: 60s; opacity: 0; }
            .ss2 { animation: shoot2 24s linear infinite; animation-delay: 4s; opacity: 0; }
            .ss3 { animation: shoot3 24s linear infinite; animation-delay: 8s; opacity: 0; }
            .ss4 { animation: shoot4 24s linear infinite; animation-delay: 12s; opacity: 0; }
            .ss5 { animation: shoot5 24s linear infinite; animation-delay: 16s; opacity: 0; }
            .ss6 { animation: shoot6 24s linear infinite; animation-delay: 20s; opacity: 0; }
            @keyframes ufo-fly {
              0%      { transform: translate(-200px, 300px); opacity: 0; }
              5%      { transform: translate(-200px, 300px); opacity: 0; animation-timing-function: linear; }
              5.125%  { transform: translate(-100px, 285px); opacity: 1; animation-timing-function: linear; }
              5.5%    { transform: translate(350px, 230px); animation-timing-function: linear; }
              5.875%  { transform: translate(500px, 140px); animation-timing-function: linear; }
              6.25%   { transform: translate(650px, 230px); animation-timing-function: linear; }
              6.625%  { transform: translate(500px, 320px); animation-timing-function: linear; }
              7%      { transform: translate(350px, 230px); animation-timing-function: linear; }
              8.5%    { transform: translate(1200px, 400px); animation-timing-function: linear; }
              10.5%   { transform: translate(1200px, 400px); animation-timing-function: linear; }
              10.875% { transform: translate(650px, 240px); animation-timing-function: linear; }
              11.25%  { transform: translate(500px, 320px); animation-timing-function: linear; }
              11.625% { transform: translate(350px, 230px); animation-timing-function: linear; }
              12%     { transform: translate(500px, 140px); animation-timing-function: linear; }
              12.25%  { transform: translate(-100px, 285px); opacity: 1; animation-timing-function: linear; }
              12.5%   { transform: translate(-200px, 300px); opacity: 0; }
              100%    { transform: translate(-200px, 300px); opacity: 0; }
            }
            .ufo-group { transform-box: view-box; animation: ufo-fly 120s linear infinite; animation-delay: 120s; opacity: 0; }

            @keyframes mouse-run {
              /* Run in from right, go to center, run back — all before UFO enters */
              0%     { transform: translate(1650px, 610px) scale(-2.5, 2.5); opacity: 0; }
              0.25%  { transform: translate(1500px, 610px) scale(-2.5, 2.5); opacity: 1; }
              1%     { transform: translate(1200px, 610px) scale(-2.5, 2.5); }
              2%     { transform: translate(900px, 610px) scale(-2.5, 2.5); }
              2.95%  { transform: translate(900px, 610px) scale(-2.5, 2.5); }
              3%     { transform: translate(900px, 610px) scale(2.5, 2.5); }
              4%     { transform: translate(1200px, 610px) scale(2.5, 2.5); }
              5%     { transform: translate(1200px, 610px) scale(2.5, 2.5); opacity: 1; }
              8.75%  { transform: translate(1200px, 610px) scale(2.5, 2.5); opacity: 1; }
              9.75%  { transform: translate(1200px, 520px) scale(2.5, 2.5); opacity: 1; }
              10.25% { transform: translate(1200px, 440px) scale(2.5, 2.5); opacity: 0.3; }
              10.5%  { transform: translate(1200px, 430px) scale(2.5, 2.5); opacity: 0; }
              100%   { transform: translate(1650px, 610px) scale(-2.5, 2.5); opacity: 0; }
            }
            .mouse-group { transform-box: view-box; animation: mouse-run 120s linear infinite; animation-delay: 120s; opacity: 0; }

            @keyframes beam-anim {
              0%, 8.75% { opacity: 0; }
              9.25%     { opacity: 0.6; }
              10.25%    { opacity: 0.6; }
              10.5%     { opacity: 0; }
              100%      { opacity: 0; }
            }
            .ufo-beam { animation: beam-anim 120s linear infinite; animation-delay: 120s; opacity: 0; }
          `}</style>
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#020408" />
              <stop offset="60%" stopColor="#0a0e1a" />
              <stop offset="100%" stopColor="#111828" />
            </linearGradient>
            <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#44ffcc" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#44ffcc" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="nebulaA" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3a1a6b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3a1a6b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="nebulaB" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1a3a6b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1a3a6b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbe8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fffbe8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="700" fill="url(#skyGrad)" />
          {/* Nebula clouds */}
          <ellipse cx="300" cy="180" rx="280" ry="160" fill="url(#nebulaA)" />
          <ellipse cx="1100" cy="120" rx="220" ry="130" fill="url(#nebulaB)" />
          <ellipse cx="720" cy="280" rx="340" ry="140" fill="url(#nebulaA)" />
          {/* Shooting stars */}
          <line className="ss1" x1="150"  y1="50"  x2="210" y2="80"  stroke="white" strokeWidth="1.5" />
          <line className="ss2" x1="850"  y1="20"  x2="900" y2="55"  stroke="white" strokeWidth="1.5" />
          <line className="ss3" x1="1100" y1="70"  x2="1150" y2="100" stroke="white" strokeWidth="1.5" />
          <line className="ss4" x1="450"  y1="35"  x2="490" y2="75"  stroke="white" strokeWidth="1.5" />
          <line className="ss5" x1="680"  y1="15"  x2="730" y2="50"  stroke="white" strokeWidth="1.5" />
          <line className="ss6" x1="1300" y1="45"  x2="1350" y2="80" stroke="white" strokeWidth="1.5" />
          {/* Stars */}
          {[
            [120,30],[245,18],[380,55],[510,22],[640,40],[770,12],[900,48],[1030,25],[1160,38],[1300,15],[1420,42],
            [60,80],[190,95],[320,70],[450,88],[580,62],[710,90],[840,75],[970,85],[1100,68],[1230,92],[1380,78],
            [150,130],[280,115],[410,140],[540,122],[670,135],[800,118],[930,145],[1060,128],[1190,142],[1320,110],
            [80,170],[210,185],[340,165],[470,178],[600,162],[730,188],[860,172],[990,182],[1120,168],[1250,190],[1400,160],
            [35,220],[165,235],[295,215],[425,228],[555,212],[685,238],[815,222],[945,232],[1075,218],[1205,240],[1355,225],
            [100,270],[230,255],[360,268],[490,245],[620,272],[750,258],[880,265],[1010,248],[1140,275],[1270,252],[1410,268],
            [55,320],[185,308],[315,325],[445,312],[575,330],[705,315],[835,322],[965,310],[1095,328],[1225,305],[1375,318],
            [130,370],[260,358],[390,375],[520,362],[650,380],[780,365],[910,372],[1040,360],[1170,378],[1310,355],[1430,368],
            [45,420],[175,408],[305,425],[435,412],[565,430],[695,415],[825,422],[955,410],[1085,428],[1215,405],[1385,418],
            [110,465],[240,452],[370,468],[500,455],[630,472],[760,458],[890,465],[1020,453],[1150,470],[1280,450],[1420,462],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.8 : i % 3 === 0 ? 1.2 : 0.8} fill="white" opacity={i % 5 === 0 ? 0.9 : i % 3 === 0 ? 0.6 : 0.4} />
          ))}

          {/* Porch floor */}
          <rect x="0" y="580" width="1440" height="120" fill="#141828" />
          {[585, 595, 605, 615, 625, 635, 645, 655, 665, 675].map(y => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#0f1220" strokeWidth="1.5" opacity="0.6" />
          ))}

          {/* Columns, rails, balusters — grouped so opacity doesn't compound */}
          <g opacity="0.65">
            {/* Porch columns */}
            {[300, 1140].map(x => (
              <g key={x}>
                <rect x={x - 14} y="0" width="28" height="590" rx="3" fill="#d0cfc8" />
                <rect x={x + 10} y="0" width="5" height="590" rx="2" fill="#00000020" />
              </g>
            ))}
            {/* Top rail */}
            <rect x="0" y="475" width="1440" height="10" rx="2" fill="#d0cfc8" />
            {/* Bottom rail */}
            <rect x="0" y="578" width="1440" height="10" rx="2" fill="#d0cfc8" />
            {/* Vertical balusters */}
            {Array.from({ length: 36 }, (_, i) => (
              <rect key={i} x={i * 40 + 4} y="480" width="10" height="100" rx="3" fill="#d0cfc8" />
            ))}
          </g>


          {/* Porch swing */}
          {/* Ropes — tops disappear above SVG, bottoms track swing rotation */}
          <line ref={leftRopeRef} x1="500" y1="-10" x2="470" y2="490" stroke="#a09060" strokeWidth="4" />
          <line ref={rightRopeRef} x1="940" y1="-10" x2="970" y2="490" stroke="#a09060" strokeWidth="4" />
          {/* Swing body — rotates around pivot */}
          <g ref={swingGroupRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: 'pointer' }}>
          <rect x="455" y="390" width="530" height="16" rx="6" fill="#7a5530" />
          {[470, 510, 550, 590, 630, 670, 710, 750, 790, 830, 870, 910, 950].map(x => (
            <rect key={x} x={x} y="406" width="28" height="80" rx="3" fill="#8b6a3a" />
          ))}
          <rect x="455" y="485" width="530" height="22" rx="6" fill="#7a5530" />
          {[460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940].map(x => (
            <rect key={x} x={x} y="490" width="28" height="16" rx="3" fill="#8b6a3a" />
          ))}
          <rect x="455" y="506" width="530" height="10" rx="4" fill="#7a5530" />
          <rect x="450" y="430" width="16" height="80" rx="4" fill="#7a5530" />
          <rect x="435" y="426" width="46" height="12" rx="4" fill="#8b6a3a" />
          <rect x="974" y="430" width="16" height="80" rx="4" fill="#7a5530" />
          <rect x="959" y="426" width="46" height="12" rx="4" fill="#8b6a3a" />
          </g>

          {/* Mouse */}
          <g className="mouse-group">
            <ellipse cx="-3" cy="0" rx="9" ry="5.5" fill="#c0b8a8" />
            <circle cx="8" cy="-1" r="5.5" fill="#c0b8a8" />
            <circle cx="6" cy="-6.5" r="3" fill="#c0b8a8" />
            <circle cx="12" cy="-6" r="2.8" fill="#c0b8a8" />
            <circle cx="6" cy="-6.5" r="1.8" fill="#e8a0b0" opacity="0.8" />
            <circle cx="12" cy="-6" r="1.6" fill="#e8a0b0" opacity="0.8" />
            <circle cx="11" cy="-2" r="1" fill="#111" />
            <circle cx="14" cy="0.5" r="0.7" fill="#e8a0b0" />
            <path d="M-12,1 Q-20,-5 -17,7" stroke="#c0b8a8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </g>

          {/* Abduction beam */}
          <polygon className="ufo-beam" points="1200,418 1155,620 1245,620" fill="url(#beamGrad)" />

          {/* UFO */}
          <g className="ufo-group">
            <ellipse cx="0" cy="8" rx="38" ry="10" fill="#44ffaa" opacity="0.12" />
            <ellipse cx="0" cy="2" rx="24" ry="8" fill="#b0c8e0" />
            <ellipse cx="0" cy="-2" rx="24" ry="4" fill="#c8d8ec" opacity="0.6" />
            <ellipse cx="0" cy="-7" rx="11" ry="8" fill="#7aaacc" opacity="0.95" />
            <circle cx="-13" cy="2" r="2.5" fill="#fef3b0" opacity="0.9" />
            <circle cx="0"   cy="5" r="2.5" fill="#fef3b0" opacity="0.9" />
            <circle cx="13"  cy="2" r="2.5" fill="#fef3b0" opacity="0.9" />
            <polygon points="0,10 -18,35 18,35" fill="#44ffaa" opacity="0.08" />
          </g>
        </svg>

        <div className="relative z-10 flex flex-col items-center max-w-3xl -mt-48">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight" style={{color: '#d4d4d4', WebkitTextStroke: '6px #496b92', paintOrder: 'stroke fill'}}>
            Porch Swing Software
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-c1 max-w-xl leading-relaxed" style={{WebkitTextStroke: '4px #496b92', paintOrder: 'stroke fill'}}>
            Life's a breeze with the right software.
          </p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10">
          <a href="/book" className="bg-taupe text-ink font-bold px-8 py-4 rounded-full text-lg hover:bg-primary hover:text-ink transition-all shadow-lg">
            Book a free consultation
          </a>
          <a href="#what-i-do" className="border border-primary/40 text-primary font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary/10 transition-all">
            See what we do
          </a>
        </div>
      </section>


      {/* Who I help */}
      <section id="what-i-do" className="bg-ink py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-taupe mb-10">Sound familiar?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              { icon: '🌐', title: 'You need to be found online.', bullets: ['Landing pages, portfolios, full product sites', 'Shows up when someone Googles you', 'Fast turnaround, mobile-friendly, actually looks good'] },
              { icon: '⚙️', title: 'Your tools almost work.', bullets: ["Familiar software with frustrating gaps", "We fill them — custom features, integrations, and fixes", "Built on top of what you already use"] },
              { icon: '🔁', title: "You're drowning in repetition.", bullets: ['Copy-pasting, re-entering data, sending the same emails', 'Weekly reports, invoice follow-ups, scheduling', "If you can describe it, we can automate it"] },
              { icon: '🏗️', title: 'Available systems don\'t fit.', bullets: ['Off-the-shelf software wasn\'t built for your business', "We learn exactly how you operate", "Then build something that works"] },
            ].map(({ icon, title, bullets }) => (
              <div key={title} className="flex flex-col gap-3 bg-ink/20 rounded-2xl p-6 border border-taupe/30 hover:border-taupe/60 transition-all">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-taupe font-bold text-lg">{title}</h3>
                <ul className="text-primary/70 text-sm leading-relaxed space-y-1">
                  {bullets.map(b => <li key={b} className="flex items-start gap-2"><span className="text-taupe/50 mt-0.5">—</span>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <a href="/book" className="mt-10 inline-block bg-taupe text-ink font-bold px-8 py-4 rounded-full text-lg hover:bg-primary transition-colors">
            Solve the problem
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-28 px-6 overflow-hidden" style={{background: 'linear-gradient(to bottom, #060d18 0%, #1a3a5c 40%, #7a3a1e 70%, #9e5030 100%)'}}>
        {/* Stars */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {[
            [80,40],[200,25],[350,60],[500,30],[650,50],[800,20],[950,45],[1100,30],[1250,55],[1400,25],
            [130,100],[280,85],[430,110],[580,90],[730,105],[880,80],[1030,100],[1180,88],[1330,108],
            [50,160],[190,145],[340,170],[490,150],[640,165],[790,140],[940,160],[1090,148],[1240,168],[1390,145],
            [100,220],[250,205],[400,225],[550,210],[700,220],[850,200],[1000,218],[1150,208],[1300,222],[1420,205],
            [70,280],[220,265],[370,282],[520,268],[670,278],[820,262],[970,275],[1120,268],[1270,280],[1410,265],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.5 : i % 3 === 0 ? 1 : 0.6} fill="white" opacity={i % 5 === 0 ? 0.8 : i % 3 === 0 ? 0.5 : 0.3} />
          ))}
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-4">How It Works</h2>
          <p className="text-primary/70 mb-16 text-lg">Just four simple steps.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { step: '1', icon: '📡', title: 'Book a Call', desc: 'Tell us your problem in a free 30-minute consultation.' },
              { step: '2', icon: '🗺️', title: 'Make a Plan', desc: "We'll outline exactly what needs to be built and what it'll cost." },
              { step: '3', icon: '🔄', title: 'We Iterate', desc: "We go back and forth until it's exactly what you need." },
              { step: '4', icon: '🚀', title: 'Problem Solved', desc: 'You stop having the problem. Simple.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="flex items-start gap-5 border border-primary/20 rounded-2xl p-8 bg-white/5 text-left">
                <div className="text-4xl mt-1 shrink-0">{icon}</div>
                <div>
                  <div className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-1">Step {step}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                  <p className="text-primary/80 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-4">Ready to solve your problems?</h2>
        <p className="text-primary/70 mb-10 text-lg max-w-lg mx-auto">Book a free 30-minute call. No commitment, no nonsense.</p>
        <a href="/book" className="inline-block bg-taupe text-ink font-bold px-10 py-5 rounded-full text-lg hover:bg-primary transition-colors shadow-xl">
          Book now — it's free
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-ink border-t border-olive/20 py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">© {new Date().getFullYear()} Porch Swing Software</p>
        <div className="flex items-center gap-6">
          <a href="/" className="text-sm text-muted hover:text-primary transition-colors">Home</a>
          <a href="/about" className="text-sm text-muted hover:text-primary transition-colors">About</a>
          <a href="/contact" className="text-sm text-muted hover:text-primary transition-colors">Contact</a>
          <a href="/book" className="text-sm text-muted hover:text-primary transition-colors">Book a call</a>
        </div>
      </footer>
    </>
  )
}
