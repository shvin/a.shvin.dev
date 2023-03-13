
export default function Home() {
  // create a simple styled home page that features general information about me and my blog using tailwindcss
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-semibold">
          welcome to <a href="https://a.shvin.dev" className="font-light">a.shvin.dev</a>
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
    </div>
  )
}
