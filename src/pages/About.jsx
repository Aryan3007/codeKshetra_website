/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"


const About = () => {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
          Navigating Boundaries, Crafting Experiences – Welcome to Dark_Buster, Where Digital Innovation Takes Center Stage
          </h2>

          <p className="hidden text-left text-white/90 sm:mt-4 sm:block">
            
Welcome to our innovative digital platform where user experience is not just a journey; it's an intricately crafted adventure. At Dark_Buster, we pride ourselves on pushing the boundaries of design to create an immersive online environment. Our commitment to user engagement goes beyond conventional norms, employing strategic elements to guide and captivate our audience. We believe in a seamless fusion of technology and psychology, tailoring every interaction to ensure optimal outcomes. Join us as we redefine the digital landscape, where every click, every choice, is a step into a meticulously curated user experience. At Dark_Buster, we don't just design websites; we design experiences that leave a lasting imprint.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
            to="/"
        
              className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://imgs.search.brave.com/wiHRmNPkGoy1p17rbebVIt6RIZh59yN-fkFbmQi6-l4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZXRpbWcuY29tL3Ro/dW1iL21zaWQtOTY1/NTEwMTIsd2lkdGgt/NjUwLGhlaWdodC00/ODgsaW1nc2l6ZS0x/NTE5MTA0LHJlc2l6/ZW1vZGUtNzUvZGFy/ay1wYXR0ZXJucy1h/ZHZlcnRpc2luZ19w/YW5pYy1idXlpbmdf/dGh1bWItaW1hZ2Vf/ZXR0ZWNoLmpwZw"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://imgs.search.brave.com/jHzYqknmEDnzhpUax5p155r7TZbiR3ou4lq3OqOYnoo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJlc3NlLWNpdHJv/bi5uZXQvYXBwL3Vw/bG9hZHMvMjAyMi8w/Ny9tZWlsbGV1cmVi/YW5xdWVpbWFnZS5q/cGc"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
