import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4 bg-gray-950">
      <h1 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-6xl">
        Chico Degens Poker Club
      </h1>
      <div className="relative flex h-auto">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/title.png"
          alt="Chico Degens Poker Club"
          width={800}
          height={800}
          priority
        />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link href="/poker" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Login
        </Link>
        <Link href="/poker" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Join the Club
        </Link>
      </div>
    </main>
  )
}
