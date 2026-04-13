import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-ink text-center px-6 overflow-hidden">
        {/* Porch illustration */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Sky — blue fading to green */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#496b92" />
              <stop offset="100%" stopColor="#3a6b4a" />
            </linearGradient>
          </defs>
          <rect width="1440" height="700" fill="url(#skyGrad)" />

          {/* Porch floor */}
          <rect x="0" y="580" width="1440" height="120" fill="#141828" />
          {[585, 595, 605, 615, 625, 635, 645, 655, 665, 675].map(y => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#0f1220" strokeWidth="1.5" opacity="0.6" />
          ))}

          {/* Vertical railings — white */}
          {Array.from({ length: 72 }, (_, i) => (
            <rect key={i} x={i * 20 + 4} y="480" width="6" height="100" rx="3" fill="#ffffff" opacity="0.9" />
          ))}

          {/* Top rail — white */}
          <rect x="0" y="475" width="1440" height="10" rx="2" fill="#ffffff" opacity="0.95" />
          {/* Bottom rail — white */}
          <rect x="0" y="578" width="1440" height="10" rx="2" fill="#ffffff" opacity="0.95" />

          {/* Porch columns — white */}
          {[80, 400, 720, 1040, 1360].map(x => (
            <g key={x}>
              <rect x={x - 14} y="0" width="28" height="590" rx="3" fill="#ffffff" opacity="0.95" />
              <rect x={x + 10} y="0" width="5" height="590" rx="2" fill="#00000015" />
            </g>
          ))}

          {/* Dark bar behind lights with board lines */}
          <rect x="0" y="0" width="1440" height="150" fill="#141828" />
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140].map(y => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#0f1220" strokeWidth="1.5" opacity="0.6" />
          ))}

          {/* String light wire */}
          <path d="M0,80 Q120,110 240,85 Q360,60 480,90 Q600,115 720,85 Q840,60 960,90 Q1080,115 1200,85 Q1320,60 1440,80" stroke="#a09060" strokeWidth="2" fill="none" />

          {/* Light bulbs — positioned exactly on the wire */}
          {[
            { x: 60,   y: 92 },
            { x: 180,  y: 94 },
            { x: 300,  y: 76 },
            { x: 420,  y: 78 },
            { x: 540,  y: 99 },
            { x: 660,  y: 97 },
            { x: 780,  y: 76 },
            { x: 900,  y: 78 },
            { x: 1020, y: 99 },
            { x: 1140, y: 97 },
            { x: 1260, y: 75 },
            { x: 1380, y: 73 },
          ].map(({ x, y }) => (
            <g key={x}>
              <ellipse cx={x} cy={y + 14} rx="10" ry="14" fill="#fef3b0" opacity="0.95" />
              <ellipse cx={x} cy={y + 14} rx="20" ry="22" fill="#fef3b0" opacity="0.2" />
              <ellipse cx={x} cy={y + 14} rx="40" ry="36" fill="#ffcc00" opacity="0.08" />
              <rect x={x - 4} y={y} width="8" height="6" rx="2" fill="#8b7340" />
            </g>
          ))}

          {/* Porch swing */}
          {/* Ropes */}
          <line x1="500" y1="148" x2="470" y2="490" stroke="#a09060" strokeWidth="4" />
          <line x1="940" y1="148" x2="970" y2="490" stroke="#a09060" strokeWidth="4" />
          {/* Rope attachments */}
          <circle cx="500" cy="148" r="7" fill="#a09060" />
          <circle cx="940" cy="148" r="7" fill="#a09060" />
          {/* Back rest top rail */}
          <rect x="455" y="390" width="530" height="16" rx="6" fill="#7a5530" />
          {/* Back rest planks */}
          {[470, 510, 550, 590, 630, 670, 710, 750, 790, 830, 870, 910, 950].map(x => (
            <rect key={x} x={x} y="406" width="28" height="80" rx="3" fill="#8b6a3a" />
          ))}
          {/* Seat frame */}
          <rect x="455" y="485" width="530" height="22" rx="6" fill="#7a5530" />
          {/* Seat planks */}
          {[460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940].map(x => (
            <rect key={x} x={x} y="490" width="28" height="16" rx="3" fill="#8b6a3a" />
          ))}
          {/* Bottom seat rail */}
          <rect x="455" y="506" width="530" height="10" rx="4" fill="#7a5530" />
          {/* Left armrest */}
          <rect x="450" y="430" width="16" height="80" rx="4" fill="#7a5530" />
          <rect x="435" y="426" width="46" height="12" rx="4" fill="#8b6a3a" />
          {/* Right armrest */}
          <rect x="974" y="430" width="16" height="80" rx="4" fill="#7a5530" />
          <rect x="959" y="426" width="46" height="12" rx="4" fill="#8b6a3a" />
        </svg>

        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight" style={{WebkitTextStroke: '6px #496b92', paintOrder: 'stroke fill'}}>
            Porch Swing Software
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-c1 max-w-xl leading-relaxed" style={{WebkitTextStroke: '4px #496b92', paintOrder: 'stroke fill'}}>
            Life's easier with the right software.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-taupe text-ink font-bold px-8 py-4 rounded-full text-lg hover:bg-primary hover:text-ink transition-all shadow-lg">
              Book a free consultation
            </a>
            <a href="#what-i-do" className="border border-primary/40 text-primary font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary/10 transition-all">
              See what I do
            </a>
          </div>
        </div>
      </section>


      {/* What I do */}
      <section id="what-i-do" className="bg-ink py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-primary">What I Do</h2>
            <p className="text-muted mt-4 text-lg max-w-xl mx-auto">Fast, clean software built around your specific problem — not a template.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🌐', title: 'Web Apps', desc: 'Full-stack applications built to scale with your business.' },
              { icon: '⚙️', title: 'Automation', desc: 'Eliminate repetitive work with custom scripts and workflows.' },
              { icon: '🧠', title: 'Consulting', desc: "Not sure what you need? Let's figure out the right solution together." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-ink rounded-2xl p-8 border border-c4/30 hover:border-c2/60 transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-c2 mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-ink mb-4">How It Works</h2>
          <p className="text-ink mb-16 text-lg opacity-70">Three steps. No fluff.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { step: '01', title: 'Book a Call', desc: 'Tell me your problem in a free 30-minute consultation.' },
              { step: '02', title: 'Get a Plan', desc: "I'll outline exactly what needs to be built and what it'll cost." },
              { step: '03', title: 'Problem Solved', desc: 'I build it. You stop having the problem. Simple.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-olive/40 mb-4">{step}</div>
                <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{desc}</p>
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
        <a href="/book" className="text-sm text-muted hover:text-primary transition-colors">Book a call</a>
      </footer>
    </>
  )
}
