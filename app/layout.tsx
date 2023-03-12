import '../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'a.shvin.dev',
  description: 'dev blog',
}

export default function RootLayout({ 
  children,
 }: {
  children: React.ReactNode;
 }) {
  const header = (
    <header>
      <div className="text-center bg-cyan-700 p-6 my-4 rounded-md">
        <h1 className="text-3xl font-bold text-white mt-2">{metadata.title}</h1>
        <div className="flex justify-center mt-3 gap-3 ">
          <Link href="/">
            <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">Home</button>
          </Link>

          <Link href="/posts">
            <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">Posts</button>
          </Link>
          </div>
      </div>
      <br />
    </header>
  )
  
  const footer = (
    <footer>
      <div className="border-t border-slate-300 mt-6 py-3 text-center border-center text-slate-400">
        <br />
        developed by ashvin. [2023]
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-3xl md:max-w-4xl xl:max-w-5xl px-4">
        {header}
        {children}
        {footer}
        </div>
      </body>
    </html>
  )
}
