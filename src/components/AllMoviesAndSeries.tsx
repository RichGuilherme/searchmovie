"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

import { MovieData } from "@/@types/apiInformation";
import { CarouselLoading } from "./CarouselLoading";
import { useGenres } from "@/context/genresContext";


type AllMoviesAndSeriesProps = {
  mediaType: string
  filter: string
}
export const AllMoviesAndSeries = ({ mediaType, filter }: AllMoviesAndSeriesProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterPrevious, setFilterPrevious] = useState("popularity.desc")

  const [loading, setLoading] = useState(true)
  const [dataApi, setDataApi] = useState<MovieData[]>([])
  const [isLoadingElementObserve, setIsLoadingElementObserve] = useState(false)

  const { push } = useRouter()
  const renderedIds = new Set() // Armazena todos os id de filme e series para depois evitar duplicatas.


  const { selectedGenres } = useGenres()
  const genresQueryString = selectedGenres.length > 0 ? selectedGenres.join('%2C') : ''

  const elementRef = useRef<HTMLDivElement>(null)
  const Key = process.env.NEXT_PUBLIC_API_URL
  const urlBase = "https://api.themoviedb.org/3/discover/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${Key}`
          }
        }
        const params = `${mediaType}?include_adult=false&language=pt-BR&page=${filterPrevious === filter ? currentPage : 1}&sort_by=${filter}&vote_count.gte=500&with_genres=${genresQueryString}`
        const response = await fetch(`${urlBase}${params}`, options)
        const data = await response.json()


        if (currentPage === 1 && filterPrevious === filter) {
          setDataApi(data.results)
          setFilterPrevious(filter)
          setLoading(false)

        } else {
          setDataApi(prevData => [...prevData, ...data.results])
          setFilterPrevious(filter)
          setLoading(false)
        }

      } catch (error) {
        console.error(error)

      } finally {
        setIsLoadingElementObserve(false)
      }
    };

    fetchData();
  }, [currentPage, filter, selectedGenres, mediaType, Key, filterPrevious, genresQueryString])

  useEffect(() => {
    setCurrentPage(1); // Resetar a página ao mudar o filtro ou os gêneros selecionados
    setDataApi([]); // Limpar os dados anteriores ao mudar o filtro ou os gêneros selecionados
  }, [filter, genresQueryString])


  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting) && !isLoadingElementObserve) {
        setIsLoadingElementObserve(true);
        setCurrentPage(currentValue => currentValue + 1)
      }
    })

    if (elementRef.current) {
      intersectionObserver.observe(elementRef.current)
    }

    return () => intersectionObserver.disconnect()
  }, [isLoadingElementObserve])


  return (
    <section className="w-full pt-36 relative ">

      <h1 className="text-2xl font-medium font-Nunito relative ml-10">Todos os Filmes</h1>

      <div className="grid grid-cols-[repeat(auto-fill,267px)] justify-center gap-x-5 gap-y-10 mt-[24px] w-full">

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
                  className="bg-fullSize min-w-[267px] h-[379px] bg-center bg-no-repeat rounded-[13px]
                                            group relative ">

                  {data?.poster_path && data?.poster_path !== "" && (
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
                  )}


                  <div className="hidden absolute h-[107px] w-full backdrop-blur-[4px] bg-[rgba(0,0,0,0.45)] pl-2 pr-2.5 pt-2
                                       pb-3.5 bottom-0 group-hover:block">
                    <div className="flex justify-between relative" >
                      <h3 className="text-[18px] font-semibold truncate pr-2 w-[79%] h-6 font-Righteous">
                        {data.title === undefined ? data.name : data.title}
                      </h3>


                      <AiOutlineHeart
                        size={29}
                        className="hover:text-red-700 cursor-pointer" />
                    </div>

                    <div className="flex items-center relative font-bold text-lg">
                      {data?.vote_average?.toFixed(1)}

                      &nbsp;<AiFillStar size={19} className="fill-yellow-600" />
                    </div>

                    <button
                      onClick={() => push(`/detalhes?mediaType=${data.media_type === undefined ? mediaType : data.media_type}&id=${data.id}`)}
                      className="w-[109px] h-7 bg-primary rounded-[30px] border-[none] float-right
                                         text-textColors-200 text-[13px] text-center font-semibold cursor-pointer 
                                           relative hover:bg-white hover:text-primary"
                    >Mais info</button>
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
