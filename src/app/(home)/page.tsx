"use client"

import { Banner } from "@/components/banner/Index"
import { Trending } from "@/components/trending/Index"


export default function Home() {
  return (
    <main className='relative h-screen text-textColors-200'>
         <Banner /> 
       <Trending /> 
    </main>
  )
}

