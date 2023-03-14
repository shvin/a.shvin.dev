
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-semibold">
          welcome to <a className="font-light">a.shvin.dev</a>
        </h1>

        <p className="mt-3 text-2xl font-serif">
          a portfolio blog about software development, technology, and other things.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/posts"
            className="hover:bg-blue-500 text-white font-semibold font-mono hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded-md"
          >
            <h3>Posts &rarr;</h3>
            <p>Learn more about my recent projects.</p>
          </a>
        </div>
      </main>
      <br />
      <div className="pt-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="group border-2 border-slate-400 p-4 rounded-md ">
          <h2 className="text-2xl font-semibold border-b">About</h2>
          <p className="mt-3 text-lg">
            I'm a 2nd year Computer Science student at the <a className="text-blue-500">University of Ottawa</a>. I'm interested in <a className="text-blue-500">bash/lua</a> scripting, <a className="text-blue-500">fullstack</a> development, and <a className="text-blue-500">IoT</a> devices. Located in <a className="text-blue-500">Atlanta, USA</a> & <a className="text-blue-500">Ottawa, Canada</a>.
          </p>
        </div>
        <div className="group border-2 border-slate-400 p-4 rounded-md">
          <h2 className="text-2xl font-semibold border-b">Contact</h2>
          <p className="mt-3 text-lg">
            &rarr; Email: <a href="mailto:a@shvin.dev" className="font-mono hover:underline text-blue-500">a@shvin.dev
            </a>
          </p>
          <p className="mt-3 text-lg">
            &rarr; <a href="https://github.com/shvin/" className="font-mono hover:underline text-blue-500">Github</a>
          </p>
          <p className="mt-3 text-lg">
            &rarr; <a href="https://www.linkedin.com/in/ashvinr03/" className="font-mono hover:underline text-blue-500">LinkedIn</a>
          </p>
        </div>
        <div className="group border-2 border-slate-400 p-4 rounded-md">
          <h2 className="text-2xl font-semibold border-b border-spacing-5">Work</h2>
          <p className="mt-3 text-md">
            &rarr; [Apr 2022 - Nov 2022] <a href="https://buildspace.so" className="font-mono hover:underline text-blue-500 text-lg">Buildspace</a><a className="text-lg"> / Teaching Assistant</a>
          </p>
          <p className="mt-3 text-md">
            &rarr; [Oct 2020 - May 2021] <a href="https://7factor.io" className="font-mono hover:underline text-blue-500 text-lg">7Factor</a><a className="text-lg"> / Junior Programmer</a>
          </p>
        </div>
      </div>
    </div>
  )
}
