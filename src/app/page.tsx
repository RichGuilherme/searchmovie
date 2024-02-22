"use client"
import { WhatIsPopular } from "@/components/WhatIsPopular.tsx/Index"
import { Banner } from "@/components/banner/Index"
import { TopRated } from "@/components/topRated/Index"
import { Trending } from "@/components/trending/Index"
import { Header } from "@/components/header/Index"
import { Footer } from '@/components/footer/Index'

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative text-textColors-200'>
        <Banner />
        <Trending />
        <WhatIsPopular />
        <TopRated />
      </main>
      <Footer />
    </>
  )
}

