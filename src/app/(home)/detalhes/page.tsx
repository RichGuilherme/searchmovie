"use client"
import { Details } from "@/components/details/Index"
import { useParamsDetails } from "@/context/paramsDetailsContext"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function MoreInfor() {
  const detailsMovieParams = useSearchParams()
  const mediaType = detailsMovieParams?.get('mediaType')
  const id = detailsMovieParams?.get('id')

  const { setIdParams, setMediaTypeParams, idParams, mediaTypeParams } = useParamsDetails()


  useEffect(() => {
    if (typeof id === 'string') {
      setIdParams(id)
    }
    if (typeof mediaType === 'string') {
      setMediaTypeParams(mediaType)
    }
  }, [id, mediaType, setIdParams, setMediaTypeParams])


  if (idParams === "" || mediaTypeParams === "") { // a primeira execução está retornando string "", assim com esse if evitar de ocorre erro nos useFetch
    return (
      <div className="flex items-center justify-center w-full h-screen relative text-primary font-OpenSans">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="absolute m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span >
        </div>
      </div>

    )
  }

  return (
    <Details />
  )
}
