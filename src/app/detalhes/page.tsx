"use client"
import { Details } from "@/components/details/Index"
import { useParamsDetails } from "@/context/paramsDetailsContext"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function MoreInfor() {
  const detailsMovieParams = useSearchParams()
  const mediaType = detailsMovieParams?.get('mediaType')
  const id = detailsMovieParams?.get('id')

  const {setIdParams, setMediaTypeParams, idParams, mediaTypeParams } = useParamsDetails()
 

  useEffect(() => {
    if (typeof id === 'string') {
      setIdParams(id)
    }
    if (typeof mediaType === 'string') {
      setMediaTypeParams(mediaType)
    }
  }, [id, mediaType, setIdParams, setMediaTypeParams])


  if (idParams === "" || mediaTypeParams === "") { // a primeira execução está retornando string "", assim com esse if evitar de ocorre erro nos useFetch
    return <div>Loading...</div>;
  }

  return (
      <Details />
  )
}
