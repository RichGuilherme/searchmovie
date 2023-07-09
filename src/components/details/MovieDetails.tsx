import { useState } from "react"
import useFetch from "@/hooks/useFeatch"

import { Heart } from "../icons/heart "
import { Play } from "../icons/play"

import { DetailsProps } from "@/@types/apiInformation"
import { HoursAndMinutes } from "@/utils/hoursAndMinutes"
import { VideoPopUp } from "../VideoPopUp"
import Image from "next/image"



export const MovieDetails = ({ movieTypeParams, idParams }: DetailsProps) => {
    const [videoKey, setVideoKey] = useState<string>("")
    const [videoShow, setVideoShow] = useState<boolean>(false)

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/${movieTypeParams}/${idParams}`)
    const { data: videoData, loading: videoLoading } = useFetch(`https://api.themoviedb.org/3/${movieTypeParams}/${idParams}/videos`)

    const _videoKey = videoData?.results[0]?.key

    const arrayGenres = data?.genres

    const releaseDate = data?.release_date === undefined ? data?.first_air_date : data?.release_date
    const year = releaseDate?.slice(0, 4)

    const voteAverage = data?.vote_average
    const note = voteAverage?.toFixed(1)

    
    return (
        <section>
            <div className="absolute w-full h-screen -z-30">
                {data?.backdrop_path && data?.backdrop_path !== "" && (

                    <div
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`
                        }}
                        className="w-full h-full absolute top-0 bg-no-repeat bg-[cover] opacity-10 " >
                    </div>
                )}
                <div className="w-full h-48 absolute bottom-0 left-0 bg-[linear-gradient(360deg,_#000_0%,_rgba(0,0,0,0.00)_100%)] "></div>
            </div>

            <div className="flex justify-center items-start gap-12 w-[76%] h-full mx-auto pt-[126px] ">

                <div className="max-w-[403px] min-w-[403px] w-2/4 h-[502px]">
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
                        <p className="text-xl text-textColors-100 font-light mt-1">{data?.tagline}</p>
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

                    <div
                        onClick={() => {
                            setVideoKey(_videoKey || "")
                            setVideoShow(true)
                        }}
                        className="flex items-center gap-2 my-6 cursor-pointer">

                        <Play />
                        <span className="text-2xl font-semibold">Assistir Trailer</span>
                    </div>

                    <h2 className="text-3xl font-medium font-Nunito">Sinopse</h2>

                    <p className="text-textColors-100 font-normal text-base pr-36 mt-1">
                        {data?.overview}
                    </p>

                    <div className="flex flex-col pr-36">
                        <div className="flex justify-start gap-3 w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
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
                                {data?.runtime === undefined ? "Tempo de um ep: " : "Quantidade de tempo: "}
                                <span className="text-textColors-100">
                                    {HoursAndMinutes(data?.runtime === undefined ? data?.episode_run_time : data?.runtime)}
                                </span>
                            </p>
                        </div>

                        {movieTypeParams === "tv" && (
                            <div className="flex justify-start gap-3  w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                                <p>
                                    Número de ep:
                                    <span className="text-textColors-100"> {data?.number_of_episodes}</span>
                                </p>

                                <p>
                                    Número de seasons:
                                    <span className="text-textColors-100"> {data?.number_of_seasons}</span>
                                </p>
                            </div>
                        )}

                        <div className="flex justify-start w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                            <p>Director:
                                <span className="text-textColors-100"> Joaquim Dos Santos, Justin K. Thompson, Kemp Powers</span>
                            </p>
                        </div>

                        <div className="flex justify-start w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                            <p>Writer:
                                <span className="text-textColors-100"> Dave Callaham, Phil Lord, Christopher Miller</span>
                            </p>
                        </div>
                    </div>
                </div>
                <VideoPopUp
                    videoKey={videoKey}
                    show={videoShow}
                    setVideoKey={setVideoKey}
                    setShow={setVideoShow} />
            </div>

        </section>
    )
}
