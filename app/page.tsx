import { Mail, GitHub, Linkedin } from 'react-feather'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <h1 className="text-6xl font-semibold">
          welcome to <a className="font-light text-blue-400">a.shvin.dev</a>
        </h1>

        <p className="mt-3 text-2xl font-serif">
          a portfolio blog about software development, technology, and other things.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full pb-5">
          <a
            href="/posts"
            className="hover:bg-blue-400 text-white font-semibold font-mono hover:text-white py-1 px-3 border border-blue-400 hover:border-transparent rounded-md"
          >
            <h3>/posts</h3>
            <p>my recent activity</p>
          </a>
        </div>
      </main>
      <br />
      <div className="pt-2 grid grid-cols-1 gap-6 px-10">
        <div className="group border-2 border-blue-400 p-4 rounded-md ">
          <h2 className="text-2xl font-semibold">/about</h2>
          <p className="mt-3 text-lg">
            3rd year Computer Science student at <a className="text-blue-400">University of Ottawa</a>. Interested in <a className="text-blue-400">bash</a>/<a className="text-blue-400">lua</a> scripting, <a className="text-blue-400">fullstack</a> development, and <a className="text-blue-400">IoT</a> devices. Located in <a className="text-blue-400">Atlanta, USA</a> | <a className="text-blue-400">Ottawa, Canada</a>. My hobbies include <a className="text-blue-400">Gaming</a>, <a className="text-blue-400">Mechanical Keyboards</a>, and <a className="text-blue-400">Hiking</a>.
          </p>
        </div>
        <div className="group border-2 border-white p-4 rounded-md">
          <h2 className="text-2xl font-semibold">/contact</h2>
          <p className="mt-3 text-lg">
            &nbsp;•&nbsp;<a href="mailto:a@shvin.dev" className="font-mono hover:underline text-blue-400">
              <Mail className="inline-block text-white mr-1" size={18} />a@shvin.dev
            </a>
          </p>
          <p className="mt-3 text-lg">
            &nbsp;•&nbsp;<a href="https://github.com/shvin/" className="font-mono hover:underline text-blue-400">
              <GitHub className="inline-block text-white mr-1" size={18} />GitHub
            </a>
          </p>
          <p className="mt-3 text-lg">
            &nbsp;•&nbsp;<a href="https://www.linkedin.com/in/ashvinr03/" className="font-mono hover:underline text-blue-400">
              <Linkedin className="inline-block text-white mr-1" size={18} />LinkedIn
            </a>
          </p>
        </div>
        <div className="group border-2 border-blue-400 p-4 rounded-md">
          <h2 className="text-2xl font-semibold">/work</h2>
          <p className="mt-3 font-mono text-sm">
            &nbsp;•&nbsp;[may'23-current]&nbsp;
            <a href="https://flipstone.com/" className="italic hover:underline text-blue-400 text-lg">Flipstone</a>
            <a className="text-base font-sans"> | Development Intern</a>
          </p>
          <p className="mt-3 font-mono text-sm">
            &nbsp;•&nbsp;[may'23-current]&nbsp;
            <a href="https://hackthehill.com/" className="italic hover:underline text-blue-400 text-lg">Hack the Hill</a>
            <a className="text-base font-sans"> | Developer</a>
          </p>
          <p className="mt-3 font-mono text-sm">
            &nbsp;•&nbsp;[apr'22-nov'22]&nbsp;
            <a href="https://buildspace.so" className="italic hover:underline text-blue-400 text-lg">Buildspace</a>
            <a className="text-base font-sans"> | Teaching Assistant</a>
          </p>
          <p className="mt-3 font-mono text-sm">
            &nbsp;•&nbsp;[oct'20-may'21]&nbsp;
            <a href="https://7factor.io" className="italic hover:underline text-blue-400 text-lg">7Factor</a>
            <a className="text-base font-sans"> | Junior Programmer</a>
          </p>
        </div>
      </div>
    </div>
  )
}
