"use client"
import { Details } from "@/components/details/Index"
import { useParamsDetails } from "@/context/paramsDetailsContext"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function MoreInfor() {
  const detailsMovieParams = useSearchParams()
  const mediaTypeParams = detailsMovieParams?.get('mediaType')
  const idParams = detailsMovieParams?.get('id')

  const {setIdParams, setMediaTypeParams } = useParamsDetails()
 

  useEffect(() => {
    if (typeof idParams === 'string') {
      setIdParams(idParams)
    }
    if (typeof mediaTypeParams === 'string') {
      setMediaTypeParams(mediaTypeParams)
    }
  }, [idParams, mediaTypeParams, setIdParams, setMediaTypeParams])


  return (
      <Details />
  )
}
