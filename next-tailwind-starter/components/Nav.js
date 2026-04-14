export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-ink sticky top-0 z-10 shadow-md border-b border-olive/20">
      <div className="text-xl font-extrabold text-primary tracking-wide">Porch Swing Software</div>
      <div className="space-x-6 hidden md:flex items-center">
        <a href="/" className="text-sm font-medium text-muted hover:text-primary transition-colors">Home</a>
        <a href="/about" className="text-sm font-medium text-muted hover:text-primary transition-colors">About</a>
        <a href="/book" className="text-sm font-bold bg-taupe text-ink px-5 py-2 rounded-full hover:bg-primary transition-colors">Book a call</a>
      </div>
    </nav>
  )
}
