import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Nate Riddering</h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-600">I will solve your problems with software.</p>
          <p className="mt-2 text-sm text-gray-400">This is a threat.</p>
          <a href="/book" className="mt-6 inline-block text-blue-600 font-semibold hover:underline">Book now</a>
        </div>
      </main>
    </>
  )
}
