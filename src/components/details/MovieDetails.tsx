import Image from "next/image"
import { Heart } from "../icons/heart "
import { Play } from "../icons/play"
import { useFetch } from "@/data/hooks/useFeatch"
import { DetailsProps } from "@/data/types/apiInformation"


export const MovieDetails = ({ movieType, id }: DetailsProps) => {
    const { data, loading } = useFetch(`https://api.themoviedb.org/3/${movieType}/${id}`)
    console.log(data)


    const arrayGenres = data?.genres

    const releaseDate = data?.release_date === undefined ? data?.first_air_date : data?.release_date
    const year = releaseDate?.slice(0, 4)

    const voteAverage = data?.vote_average
    const note = voteAverage?.toFixed(1)

    const HoursAndMinutes = (totalMinutes: any) => {

        const hours = Math.floor(totalMinutes / 60)
        const minutes = totalMinutes % 60

        if (hours === 0){
            return `${minutes > 0 ? ` ${minutes}m` : ""}`
        } else{
            return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`
        }
    }


    return (
        <>
            <div
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})` }}
                className="w-full h-full absolute top-0 bg-no-repeat bg-[cover] opacity-10 
        -z-30" />
            <div className="w-full max-w-[1370px] h-full flex justify-center items-start gap-12 mx-auto pt-[126px]">

                <div 
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.poster_path})`}}
                className="min-w-[403px] w-2/4 min-h-[502px]  bg-no-repeat bg-[cover] rounded-xl">
                </div>
 
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-extrabold font-Nunito">
                            {data?.title === undefined ? data?.name : data?.title}
                            <span className="font-extralight"> ({year})</span>
                        </h1>

                        <div className="flex items-center gap-8">
                            <span className="bg-primary p-[5px] font-medium text-2xl">{note}</span>
                            <Heart />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl text-textColors-100 font-light mt-1">{data?.tagline}</h2>
                        <div className="flex gap-[14px] mt-2">

                            {arrayGenres?.map((genre, i) => (
                                <div
                                    key={i}
                                    className="px-5 py-1 rounded-full border-[1px] border-white text-xs font-semibold"
                                >
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 my-6 cursor-pointer">
                        <Play />
                        <span className="text-2xl font-semibold">Assistir Trailer</span>
                    </div>

                    <h3 className="text-3xl font-medium font-Nunito">Sinopse</h3>
                    <p
                        className="text-textColors-100 font-normal text-base pr-36 mt-1">
                       {data?.overview} 
                    </p>

                    <div className="flex flex-col pr-36">
                        <div className="flex justify-start gap-3 mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                            <p >
                                Situação:
                                <span className="text-textColors-100"> {data?.status}</span>
                            </p>

                            <p> 
                                {data?.release_date === undefined ? "Data do primeiro ep: " : "Lançamento: "}

                                <span className="text-textColors-100"> 
                                 {data?.release_date === undefined ? data?.first_air_date : data?.release_date}
                                </span>
                            </p>

                            <p>
                                {data?.runtime === undefined ? "Tempo de um ep: " : "Quantidade de tempo: " }
                                <span className="text-textColors-100"> 
                                {HoursAndMinutes(data?.runtime === undefined ? data?.episode_run_time : data?.runtime )}
                                </span>
                            </p>
                        </div>

                        <div className="flex justify-start mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                            <p>Director: <span className="text-textColors-100"> Joaquim Dos Santos, Justin K. Thompson, Kemp Powers</span></p>
                        </div>

                        <div className="flex justify-start mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                            <p>Writer: <span className="text-textColors-100"> Dave Callaham, Phil Lord, Christopher Miller</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
