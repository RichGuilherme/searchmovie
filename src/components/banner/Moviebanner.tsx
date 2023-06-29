
import { useImagens } from "@/data/hooks/useImagens"
import { useMovieInTheater } from "@/data/hooks/useMovieInTheaters"
import { ImageUrl } from "@/data/types/ImageUrl"
import { useEffect, useState } from "react"


export const MovieBanner = ({urlvalue}:ImageUrl) => {
    const [image, setImage] = useState<string>("")

    const {moviesIdImages} = useMovieInTheater()
    const arrayUrlMovie = moviesIdImages[3]

    const urlImages = useImagens({ IdImage: arrayUrlMovie });

    useEffect(() => {
        if (urlImages !== "https://image.tmdb.org/t/p/original/undefined") {
            setImage(urlImages)
        }
    }, [urlImages]);


    return (
        <div className="relative">
            <div className="bg-black overflow-hidden">
                <div 
                style={{backgroundImage: `url(${image})`}}
                className="flex bg-[cover] blur-[30px] w-full h-[500px]"/>
            </div>

            <div 
            style={{backgroundImage: `url(${image})`}}
            className="flex w-5/6 h-[520px] bg-center bg-[cover] bg-no-repeat absolute mx-auto
             my-0 left-2/4 top-[52.9%] -translate-x-2/4 -translate-y-2/4 brightness-[80%] z-10"
            />
        </div>
    )
}
