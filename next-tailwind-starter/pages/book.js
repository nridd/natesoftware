import Nav from '../components/Nav'
import Script from 'next/script'

export default function Book() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{background: 'linear-gradient(to bottom, #496b92, #3a6b4a)'}}>
        <div className="text-center py-10 px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-taupe" style={{WebkitTextStroke: '4px #496b92', paintOrder: 'stroke fill'}}>Book a free consultation</h1>
          <p className="mt-4 text-lg sm:text-xl text-taupe">and watch your worries go away</p>
        </div>
        <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-30min" />
        <Script id="cal-embed" strategy="afterInteractive">{`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "30min", {origin:"https://app.cal.com"});
          Cal.ns["30min"]("inline", {
            elementOrSelector:"#my-cal-inline-30min",
            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
            calLink: "nate-riddering/30min",
          });
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}</Script>
      </main>
    </>
  )
}
