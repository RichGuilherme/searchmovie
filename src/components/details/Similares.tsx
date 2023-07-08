import React from 'react'

import useFetch from '@/hooks/useFeatch'
import { DetailsProps } from '@/@types/apiInformation'
import { Carousel } from '../Carousel'


export const Similares = ({ movieType, id }: DetailsProps) => {

    const {data: similarData, loading: similarLoading} = useFetch(`https://api.themoviedb.org/3/${movieType}/${id}/similar`)

    return (
        <section className='relative w-[80%] h-[487px] mx-auto mt-20'>
            <h2 className="text-3xl font-medium font-Nunito mb-[18px]">Similares</h2>

            <Carousel data={similarData?.results} loading={similarLoading} movieType={movieType}/>
        </section>
    )
}
