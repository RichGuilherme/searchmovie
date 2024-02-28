import React from 'react'
import { Banner } from './banner'
import { Trending } from './trending'
import { WhatIsPopular } from './WhatIsPopular.tsx'
import { TopRated } from './topRated'

export const Main = () => {
    return (
        <main className='relative text-textColors-200'>
            <Banner />
            <Trending />
            <WhatIsPopular />
            <TopRated />
        </main>
    )
}
