import Nav from '../components/Nav'
import Script from 'next/script'

const stars = [
  [120,30],[245,18],[380,55],[510,22],[640,40],[770,12],[900,48],[1030,25],[1160,38],[1300,15],[1420,42],
  [60,80],[190,95],[320,70],[450,88],[580,62],[710,90],[840,75],[970,85],[1100,68],[1230,92],[1380,78],
  [150,130],[280,115],[410,140],[540,122],[670,135],[800,118],[930,145],[1060,128],[1190,142],[1320,110],
  [80,170],[210,185],[340,165],[470,178],[600,162],[730,188],[860,172],[990,182],[1120,168],[1250,190],[1400,160],
]

export default function Book() {
  return (
    <>
      <Nav />
      <main className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #060d18 0%, #1a3a5c 40%, #7a3a1e 70%, #9e5030 100%)'}}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900">
          {stars.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.8 : i % 3 === 0 ? 1.2 : 0.8} fill="white" opacity={i % 5 === 0 ? 0.9 : i % 3 === 0 ? 0.6 : 0.4} />
          ))}
        </svg>
        <div className="relative z-10 text-center py-10 px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-taupe" style={{WebkitTextStroke: '4px #496b92', paintOrder: 'stroke fill'}}>Book a free consultation</h1>
          <p className="mt-4 text-lg sm:text-xl text-taupe">Let's figure out what you need.</p>
        </div>
        <div className="relative z-10" style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-30min" />
        <Script id="cal-embed" strategy="afterInteractive">{`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "30min", {origin:"https://app.cal.com"});
          Cal.ns["30min"]("inline", {
            elementOrSelector:"#my-cal-inline-30min",
            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
            calLink: "nate-riddering/30min",
          });
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view","theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#496b92","cal-bg":"#1a2430","cal-bg-emphasis":"#1a2430","cal-border":"#496b92"}}});
        `}</Script>
      </main>
    </>
  )
}
