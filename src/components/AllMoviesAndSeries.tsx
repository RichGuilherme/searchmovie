"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

import { CarouselLoading } from "./CarouselLoading";
import { useDataAllMediaType } from "@/hooks/useDataAllMediaType";



type AllMoviesAndSeriesProps = {
  mediaType: string
  filter: string
}
export const AllMoviesAndSeries = ({ mediaType, filter }: AllMoviesAndSeriesProps) => {
  const elementRef = useRef<HTMLDivElement>(null)

  const [isLoadingElementObserve, setIsLoadingElementObserve] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const { dataApi, loading } = useDataAllMediaType({ filter, mediaType, newCurrentPage: currentPage })


  // Esse useEffect serve para obeserva quando o usuário chega no final da página, assim adicionando mais um page.Cada page representa um array com 
  // 20 objetos com os dados dos sobre os filmes e series.
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting) && !isLoadingElementObserve) {
        setIsLoadingElementObserve(true)

        setCurrentPage(currentValue => currentValue + 1)
      }
    })

    if (elementRef.current) {
      intersectionObserver.observe(elementRef.current)
    }

    return () => intersectionObserver.disconnect()
  }, [isLoadingElementObserve])


  useEffect(() => {
    setIsLoadingElementObserve(false)
  }, [dataApi])

  const router = useRouter()
  const renderedIds = new Set() // Armazena todos os id de filme e series para depois evitar duplicatas.


  return (
    <section className="w-full pt-36 relative overflow-hidden ">

      <h1 className="text-2xl font-medium font-Nunito relative ml-10 max-lg:ml-2">
        Todos os {`${mediaType === "movie" ? "Filmes" : "Series"}`}
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,267px)] max-sm:grid-cols-[repeat(2,minmax(0px,1fr))] justify-center gap-x-5 gap-y-[89px] 
           mt-[24px] max-sm:mx-3">

        {!loading ? (
          <>
            {dataApi?.map((data) => {

              if (renderedIds.has(data.id)) {
                return null // Dados repertidos são excluidos
              }

              renderedIds.add(data.id)

              return (

                <div
                  key={data.id}
                  onClick={() => router.push(`/detalhes?mediaType=${data.media_type === undefined ? mediaType : data.media_type}&id=${data.id}`)}
                  className="bg-fullSize min-w-[267px] h-[360px] max-sm:min-w-0 max-sm:h-auto bg-center bg-no-repeat rounded-[13px]
                             relative cursor-pointer">

                  {data?.poster_path && data?.poster_path !== "" ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                      alt="poster"
                      width={403}
                      height={502}
                      priority={true}
                      style={{
                        objectFit: 'cover',
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px"
                      }}
                    >
                    </Image>
                  ) : (
                    <Image
                      src="/image/no-poster.jpg"
                      alt="poster"
                      width={403}
                      height={502}
                      priority={true}
                      style={{
                        objectFit: 'cover',
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px"
                      }}
                    >
                    </Image>
                  )}


                  {/* icone de coração no topo da imagem */}
                  <span className="absolute top-1 right-3">
                    <AiOutlineHeart
                      size={29}
                      className="hover:text-red-700 cursor-pointer" />
                  </span>

                  {/* informações a baixo da imagem */}                  
                  <div className="block top-0 left-0 mt-2">
                    <div className="flex flex-col items-start relative font-bold text-lg">
                      <h3 className="text-[18px] font-semibold truncate pr-2 w-[79%] h-6 font-Righteous">
                        {data.title === undefined ? data.name : data.title}
                      </h3>

                      <div className="flex items-center relative font-bold text-lg gap-1">
                        <AiFillStar size={19} className="fill-yellow-600" />
                        {data?.vote_average?.toFixed(1)}
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          </>

        ) : (
          <>
            <CarouselLoading />
            <CarouselLoading />
            <CarouselLoading />
            <CarouselLoading />
            <CarouselLoading />
          </>
        )
        }
      </div>

      <div
        className="w-full h-8 relative"
        ref={elementRef}>
      </div>

    </section>
  )
}
