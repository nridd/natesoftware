export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-lg font-bold">Brand</div>
      <div className="space-x-4 hidden md:flex">
        <a className="text-sm">About</a>
        <a className="text-sm">Contact</a>
      </div>
    </nav>
  )
}
