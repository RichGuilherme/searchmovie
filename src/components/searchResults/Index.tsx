import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

import useFetch from "@/hooks/useFeatch"
import { CardItem } from "../CardItem"
import { useEffect, useState } from "react"

type searchResultsProps = {
    queryProps: string | null
}
export const SearchResults = ({ queryProps }: searchResultsProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const { data: _data, loading } = useFetch(`https://api.themoviedb.org/3/search/multi?query=${queryProps}&page=${currentPage}`)

    const numberPage = _data?.total_pages || 1
    const data = _data?.results

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


                <section className="w-[83%] mx-auto mt-36  relative  backdrop-blur-[3px] bg-[rgba(0,_0,_0,_.25)]">
                    <h1 className="text-2xl font-medium font-Nunito pl-6 pt-4">
                        Resultados da pesquisa para &ldquo;{`${queryProps}`}&rdquo;
                    </h1>

                    <div className="grid grid-cols-[repeat(auto-fill,267px)] justify-center gap-x-5 gap-y-10 mt-[24px] p-4">
                        <CardItem dataResults={data} loading={loading} />
                    </div>


                    <nav className="flex flex-row items-center gap-5 justify-center mx-auto py-12">
                        {currentPage > 1 &&
                            <SlArrowLeft
                                onClick={() => handlerPage(currentPage - 1)}
                                size={25}
                                className="fill-textColors-100 hover:fill-white cursor-pointer" />
                        }

                        <div className="flex flex-row items-center justify-center gap-2">
                            {numberPage && Array.from({ length: numberPage }).map((_, index) => {
                                if (index === 0) {
                                    return null
                                }

                                return (
                                    <div
                                        onClick={() => handlerPage(index)}
                                        key={index}
                                        className={`flex items-center justify-center w-8 h-8 rounded-full border-[2px] 
                                          ${index === currentPage ? "border-white" : "border-textColors-100"} font-medium
                                         hover:bg-primary hover:border-primary hover:shadow-md hover:shadow-primary cursor-pointer`}
                                    >
                                        {index}
                                    </div>
                                );
                            })}
                        </div>

                        {numberPage > 1 &&
                            <SlArrowRight
                                onClick={() => handlerPage(currentPage + 1)}
                                size={25}
                                className="fill-textColors-100 hover:fill-white  cursor-pointer" />
                        }
                    </nav>
                </section>
            </article>

            <span className="w-full h-48 relative bottom-0 left-0 block bg-[linear-gradient(360deg,_#053ba3_0%,_rgba(0,0,0,0.00)_100%)]"></span>

        </main>
    )
}
