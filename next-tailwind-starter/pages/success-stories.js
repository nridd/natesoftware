import Nav from '../components/Nav'

const stories = [
  {
    tag: 'Automation',
    headline: '20+ hours saved. Per shop. Per week.',
    client: 'Truck Genius',
    url: 'https://www.truckgenius.ai',
    problem: 'Fleet repair shops were drowning in manual data entry — the same information re-keyed into different systems, over and over, every single day. It was slow, error-prone, and eating up time that should have gone to actual repair work.',
    solution: 'Built a suite of web automations to eliminate the manual steps entirely, plus a clean interface that let shop managers set up and control their automations without needing any technical knowledge.',
    result: 'Each shop got back 20+ hours every week. What started as one shop scaled to ten-plus — because the results spoke for themselves.',
  },
  {
    tag: 'Web Presence',
    headline: 'A busy mom needed one less thing to worry about.',
    client: 'Simply Roasted Cafe',
    url: 'https://www.simplyroasted.org',
    problem: "She was opening a new café while running a therapy practice and raising four kids. She had zero web presence — no way for anyone to find her, learn about the café, or know she even existed online.",
    solution: 'Built her a site from scratch so she could stop worrying about it and focus on what she was actually good at: running her café and her practice.',
    result: "She got a professional web presence without spending her own time on it. One less thing on the plate of someone who had way too much on it already.",
  },
  {
    tag: 'Rescue & Rebuild',
    headline: 'Her clients deserved better than half a website.',
    client: 'Simply Restored',
    url: 'https://www.simplyrestored.org',
    problem: 'The same owner had a second business with a website that was half-built and barely functional. Real clients were already using it — or trying to. It was creating a bad impression at exactly the wrong moment.',
    solution: 'Came in, finished what was started, and fixed what was broken. Turned a liability into something she could actually be proud of.',
    result: 'Her clients got a site that worked. She stopped having to apologize for it.',
  },
]

export default function SuccessStories() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-ink px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <p className="text-taupe text-sm font-bold uppercase tracking-widest mb-3">Results</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4 leading-tight">
            Success Stories
          </h1>
          <p className="text-primary/60 text-lg mb-16 max-w-xl">
            Real problems. Real solutions. Here's what we've helped people get done.
          </p>

          <div className="flex flex-col gap-12">
            {stories.map(({ tag, headline, client, url, problem, solution, result }) => (
              <div key={headline} className="border border-taupe/20 rounded-2xl p-8 bg-navy/30 hover:border-taupe/40 transition-colors">
                <span className="inline-block text-xs font-bold text-taupe/70 uppercase tracking-widest border border-taupe/30 rounded-full px-3 py-1 mb-4">
                  {tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-taupe mb-1">{headline}</h2>
                <p className="text-primary/40 text-sm mb-8">
                  {url
                    ? <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-taupe transition-colors">{client} ↗</a>
                    : client}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">The Problem</p>
                    <p className="text-primary/80 text-sm leading-relaxed">{problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">The Solution</p>
                    <p className="text-primary/80 text-sm leading-relaxed">{solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">The Result</p>
                    <p className="text-primary/80 text-sm leading-relaxed">{result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-primary/60 text-lg mb-6">Got a problem worth solving?</p>
            <a href="/book" className="inline-block bg-taupe text-ink font-bold px-10 py-4 rounded-full text-lg hover:bg-primary transition-colors">
              Book a free call
            </a>
          </div>

        </div>
      </main>
    </>
  )
}
