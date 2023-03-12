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
      <div className="text-center bg-slate-400 p-6 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white mt-4">{metadata.title}</h1>
        </Link>
        <p className="text-slate-300">{metadata.description}</p>
      </div>
      <br />
    </header>
  )
  
  const footer = (
    <footer>
      <div className="border-t border-slate-00 mt-6 py-3 text-center text-slate-400">
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
