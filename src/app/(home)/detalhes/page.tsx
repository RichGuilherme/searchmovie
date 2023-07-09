"use client"
import { Details } from "@/components/details/Index"
import { useParams, useSearchParams } from "next/navigation"

export default function MoreInfor () {
    // const params = useParams()
      
    const detailsMovieParams = useSearchParams()
    const movieTypeParams = detailsMovieParams?.get('movieType')
    const idParams = detailsMovieParams?.get('id')


  return (
        <Details movieTypeParams={movieTypeParams} idParams={idParams}/>
  )
}
