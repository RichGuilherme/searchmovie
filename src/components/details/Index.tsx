"use client"

import { MovieDetails } from "./MovieDetails"
import { TopCast } from "./TopCast"
import { Recommendations } from "./Recommendations"
import { useParamsDetails } from "@/context/paramsDetailsContext"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useAxios } from "@/hooks/useAxios"
import axiosInstancia from "@/data/service/axios"


export const Details = () => {
  const detailsMovieParams = useSearchParams()
  const mediaTypeParams = detailsMovieParams?.get('mediaType')
  const idParams = detailsMovieParams?.get('id')

  const {data: creditsData, loading: creditsLoading, error} = useAxios({
     axiosInstance: axiosInstancia,
     method: "GET",
     url: `${mediaTypeParams}/${idParams}/credits`,
     requestConfig: {
        params: {
          language: 'pt-BR', 
        },
     }
  })

  const { setMediaTypeParams, setIdParams} = useParamsDetails()
 

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
   
    setIdParams(idParams)
    setMediaTypeParams(mediaTypeParams)

  }, [idParams, mediaTypeParams]) // move a página para cima ao ser recagada



  if (idParams === "" || mediaTypeParams === "" || creditsLoading === true) { // a primeira execução está retornando string "", assim com esse if evitar de ocorre erro nos useFetch
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
    <main className="w-full relative text-textColors-200 font-OpenSans z-0">
      <MovieDetails crew={creditsData?.crew} loadingCrew={creditsLoading} />
      <TopCast cast={creditsData?.cast} loadingCrew={creditsLoading} />
      <Recommendations />
    </main>
  )
}
