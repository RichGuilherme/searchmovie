
import { useFetch } from "@/data/hooks/useFeatch"
import { useEffect, useState } from "react"


export const MovieBanner = () => {
    const [numbRandom, setNumbRandom] = useState<number>(0)

    const {data} = useFetch("https://api.themoviedb.org/3/movie/now_playing") 

    const arrayUrlMovie = data?.results[numbRandom]?.backdrop_path


    useEffect(() => {
        const numb = Math.floor(Math.random() * 10)
        
        setNumbRandom(numb)
    }, [])

    return (
        <div className="relative">
            <div className="bg-black overflow-hidden">
                <div 
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${arrayUrlMovie})`}}
                className="flex bg-[cover] blur-[30px] w-full h-[500px]"/>
            </div>

            <div 
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${arrayUrlMovie})`}}
            className="flex w-5/6 h-[520px] bg-center bg-[cover] bg-no-repeat absolute mx-auto
             my-0 left-2/4 top-[52.9%] -translate-x-2/4 -translate-y-2/4 brightness-[80%] z-10"
            />
        </div>
    )
}
