"use client"
import { Details } from "@/components/details/Index"
import { useParams, useSearchParams } from "next/navigation"

export default function MoreInfor () {
    const detailsMovieParams = useSearchParams()
    const mediaTypeParams = detailsMovieParams?.get('mediaType')
    const idParams = detailsMovieParams?.get('id')


  return (
        <Details mediaTypeParams={mediaTypeParams} idParams={idParams}/>
  )
}
