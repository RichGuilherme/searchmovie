"use client"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import useFetch from "@/hooks/useFeatch"
import { useEffect, useState } from "react"
import Image from "next/image"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { useRouter } from "next/navigation"
import { CarouselLoading } from "../CarouselLoading"

type searchResultsProps = {
    queryProps: string | null
}
export const SearchResults = ({ queryProps }: searchResultsProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const { data: _data, loading } = useFetch(`https://api.themoviedb.org/3/search/multi?query=${queryProps}&page=${currentPage}`)

    const numberPage = _data?.total_pages
    const data = _data?.results

    const router = useRouter()

    const handlerPage = (numb: number) => {
        if (numb > 0)

            setCurrentPage(numb)

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [queryProps])

    return (
        <main >
            <article className="w-full font-OpenSans text-textColors-200 mb-16">

                <div className="absolute top-0 w-full h-screen ">
                    <div className="w-full h-full absolute top-0 bg-no-repeat bg-[cover] opacity-20 bg-[url(/image/movie-poster.jpg)]"></div>
                    <div className="w-full h-48 absolute bottom-0 left-0 bg-[linear-gradient(360deg,_#020D18_0%,_rgba(0,0,0,0.00)_100%)] "></div>
                </div>


                <section className="w-[83%] max-sm:w-full mx-auto mt-36  relative  backdrop-blur-[3px] bg-[rgba(0,_0,_0,_.25)]">
                    <h1 className="text-2xl font-medium font-Nunito pl-6 pt-4">
                        Resultados da pesquisa para &ldquo;{`${queryProps}`}&rdquo;
                    </h1>

                    <div className="grid grid-cols-[repeat(auto-fill,267px)] max-sm:grid-cols-[repeat(2,minmax(0px,1fr))] justify-center
                         gap-x-5 gap-y-[89px] mt-[24px] mb-8 p-4">
                        {!loading ? (
                            <>
                                {data?.map((data) => {
                                    return (

                                        <div
                                            key={data.id}
                                            className="bg-fullSize min-w-[267px] h-[360px] max-sm:min-w-0 max-sm:h-auto bg-center bg-no-repeat rounded-[13px]
                             relative cursor-pointer">

                                            {data?.poster_path && data?.poster_path !== "" ? (
                                                <Image
                                                    onClick={() => router.push(`/detalhes?mediaType=${data.media_type}&id=${data.id}`)}
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

                    {/* botões para alterar o conteúdo da página */}
                    <nav className="flex flex-row items-center gap-5 justify-center mx-auto py-12">
                        {currentPage > 1 &&
                            <SlArrowLeft
                                onClick={() => handlerPage(currentPage - 1)}
                                size={25}
                                className="fill-textColors-100 hover:fill-white cursor-pointer" />
                        }

                        <div className="max-sm:w-56 max-sm:overflow-auto">
                            <div className="flex flex-row items-center max-sm:justify-start justify-center gap-2 w-[430px] py-2 overflow-auto">
                                {numberPage && Array.from({ length: numberPage }, (_, index) => index + 1).map((index) => {
                                    if (index === 0 || index >= 11) {
                                        return null
                                    }
                                    return (
                                        <div
                                            onClick={() => handlerPage(index)}
                                            key={index}
                                            className={`flex items-center justify-center w-8 h-8 rounded-full border-[2px]
                                          ${index === currentPage ? "border-white" : "border-textColors-100"} font-medium
                                         hover:bg-primary hover:border-primary hover:shadow-md hover:shadow-primary cursor-pointer
                                          `}
                                        >
                                            {index}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {(numberPage && numberPage > 1) && (numberPage !== currentPage) &&
                            <SlArrowRight
                                onClick={() => handlerPage(numberPage === currentPage ? 0 : currentPage + 1)}
                                size={25}
                                className="fill-textColors-100 hover:fill-white  cursor-pointer" />
                        }
                    </nav>
                </section>
            </article>

            {/* Efeito smoke */}
            <span className="w-full h-48 relative bottom-0 left-0 block bg-[linear-gradient(360deg,_#053ba3_0%,_rgba(0,0,0,0.00)_100%)]"></span>

        </main>
    )
}
