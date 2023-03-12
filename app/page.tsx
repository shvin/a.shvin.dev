import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

export default function Home() {
  // create a simple styled home page that features general information about me and my blog using tailwindcss
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          welcome to <a href="https://a.shvin.dev">a.shvin.dev</a>
        </h1>

        <p className="mt-3 text-2xl">
          a portfolio blog about software development, technology, and other things.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3>Posts &rarr;</h3>
            <p>Find in-depth information about software development.</p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3>About &rarr;</h3>
            <p>Learn more about me and my blog.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
