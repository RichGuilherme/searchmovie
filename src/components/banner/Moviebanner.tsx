"use client"
import useFetch from "@/hooks/useFeatch"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export const MovieBanner = () => {
    const [numbRandom, setNumbRandom] = useState<number>(0)
    const router = useRouter()

    const { data  } = useFetch("https://api.themoviedb.org/3/movie/now_playing")

    const UrlMovie = data?.results[numbRandom]?.backdrop_path 


    useEffect(() => {
        const numb = Math.floor(Math.random() * 10)

        setNumbRandom(numb)
    }, [])

    return (
        <div className="relative">
                <>

                    {/* imagem de fundo do banner com blur */}
                    <div className="bg-black overflow-hidden">
                        <div
                            style={{    
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${UrlMovie})` 
                            }}
                            className="flex bg-[cover] blur-[30px] w-full h-[500px]" />
                    </div>
                    
                    <div
                        onClick={() => router.push(`/detalhes?mediaType=movie&id=${data?.results[numbRandom]?.id}`)}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${UrlMovie})`

                        }}
                        className="flex w-5/6 h-[520px] bg-center bg-[cover] bg-no-repeat absolute mx-auto
                          my-0 left-2/4 top-[52.9%] -translate-x-2/4 -translate-y-2/4 brightness-[80%] z-10 cursor-pointer"
                    />
                </>
            
        </div>
    )
}
