import Nav from '../components/Nav'

export default function About() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-ink px-6 py-20">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-xl sm:text-2xl font-bold text-taupe mb-12">
            The Whos, the Whats, the Wheres, the Whys, and the Hows.
          </h1>

          <p className="text-primary/80 text-lg leading-relaxed mb-6">
            Hey there! My name is Nate Riddering. I am a student athlete competing in track and field and cross country. I am finishing my bachelor's degree in computer science and starting a master's in artificial intelligence. My professional experience has included building tools to track production in a manufacturing plant and building a website to automate manual data entry tasks.
          </p>
          <p className="text-primary/80 text-lg leading-relaxed mb-6">
            I'm starting this company to gain experience and take control of my time. Balancing training, school, and everything else has taught me how valuable time really is. Having a job as a student athlete is hard. Any job I have during the school year would have to be flexible. Instead of working around a schedule that does not fit, I want to build something that does. Nothing is more flexible than being your own boss.
          </p>
          <p className="text-primary/80 text-lg leading-relaxed mb-6">
            Every summer since the beginning of high school, I have had a summer project, where I spend the summer learning and building something that I can use. I like making wacky looking things. I think that good engineering is SEXY. I've built drones, desks, computers, knives, and most recently a porch swing. I've decided this is my summer project — entrepreneurship.
          </p>
          <p className="text-primary/80 text-lg leading-relaxed mb-6">
            Thank you for listening to my ramblings. Have a great day!
          </p>
          <p className="text-primary/80 text-lg leading-relaxed">
            Thank you for your patience. The mouse's name is Iain.
          </p>


        </div>
      </main>
    </>
  )
}
