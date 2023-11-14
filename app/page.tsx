import { NavLinks } from '@/components/nav-links'
import Image from 'next/image'
import { Nav } from '@/components/nav'
import { InfoCard } from '@/components/info-card'
import { LangCard } from '@/components/lang-card'

export default function Home() {
  return (
    <main className="flex flex-col justify-between ">
      <section className="flex flex-row items-center justify-around pt-12 space-x-4">
        <span className='w-60 h-20' >
          <LangCard />

        </span>
        <span className='w-120 h-20' >
          <InfoCard className='' />

        </span>
      </section>
    </main>
  )
}
