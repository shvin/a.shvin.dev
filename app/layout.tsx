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
      <div className="text-center bg-[#111314] p-6">
        <h1 className="text-3xl font-bold text-white font-mono">{metadata.title}</h1>
        <div className="flex justify-center mt-3 gap-3 ">
          <Link href="/">
            <button className="bg-transparent text-blue-400 hover:bg-blue-400 font-semibold font-mono hover:text-white px-2 rounded">/home</button>
          </Link>

          <Link href="/posts">
            <button className="bg-transparent text-blue-400 hover:bg-blue-400 font-semibold font-mono hover:text-white px-2 rounded">/posts</button>
          </Link>
        </div>
        <div className="flex mx-auto max-w-xl mt-3 border-b border-slate-300"></div>
      </div>
    </header>
  )
  
  const footer = (
    <footer>
      <div className="mt-10 py-1 text-center text-slate-400">
        <div className="pt-2 flex mx-auto max-w-xl border-t border-slate-300"></div>
        developed by&nbsp;
        <a className="hover:underline" href="https://github.com/shvin">ashvin</a>
        &nbsp;•&nbsp;[2023]
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body className="bg-[#111314] text-white">
        <div className="mx-auto max-w-full px-10">
        {header}
        {children}
        {footer}
        </div>
      </body>
    </html>
  )
}
