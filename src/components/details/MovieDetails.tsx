import {  useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { CiPlay1 } from "react-icons/ci"

import { topCastProps } from "@/@types/apiInformation"
import { HoursAndMinutes } from "@/utils/hoursAndMinutes"
import { VideoPopUp } from "../VideoPopUp"
import { formatDate } from "@/utils/formatData"
import { useParamsDetails } from "@/context/paramsDetailsContext"
import axiosInstancia from "@/data/service/axios"
import { useAxios } from "@/hooks/useAxios"


export const MovieDetails = ({ crew, loadingCrew }: topCastProps) => {
    const { idParams, mediaTypeParams } = useParamsDetails()

    const [videoKey, setVideoKey] = useState<string>("")
    const [videoShow, setVideoShow] = useState<boolean>(false)

    const { data, loading } = useAxios({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `${mediaTypeParams}/${idParams}`,
        requestConfig: {
           params: {
             language: 'pt-BR', 
           },
        }
     })

    const { data: videoData, loading: videoLoading } = useAxios({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `${mediaTypeParams}/${idParams}/videos`,
        requestConfig: {
            params: {
              language: 'pt-BR', 
            },
         }
     })
    

    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );

    const _videoKey = videoData?.results[0]?.key

    const arrayGenres = data?.genres
    

    return (
        <section>
            {/* Banner  */}
            <div className="absolute w-full h-screen -z-30">
                {data?.backdrop_path && data?.backdrop_path !== "" && (

                    <div
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`
                        }}
                        className="w-full h-full absolute top-0 bg-no-repeat bg-[cover] opacity-10 " >
                    </div>
                )}
                <div className="w-full h-48 absolute bottom-0 left-0 bg-[linear-gradient(360deg,_#020D18_0%,_rgba(0,0,0,0.00)_100%)] "></div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start
             gap-12 w-full max-w-[1200px] h-full mx-auto pt-[126px] ">
 
                <div className="min-w-[403px] max-w-[403px] w-full h-[502px] sm:px-0 px-6">
                    {!loading && data?.backdrop_path && data?.backdrop_path ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                            alt="poster"
                            style={{
                                objectFit: 'cover',
                                width: "100%",
                                height: "100%",
                                borderRadius: "12px"
                            }}
                        >
                        </img>
                    ) : (
                        <div className="max-w-[403px] min-w-[403px] w-2/4 h-[502px] rounded-xl bg-[rgba(255,255,255,0.25)]"></div>
                    )}

                </div>

               {/* Informações sobre o filme */}
                <div className="max-lg:mx-4">
                    <div className="flex justify-between sm:flex-row flex-col">
                        <h1 className="text-4xl font-extrabold font-Nunito">
                            {data?.title === undefined ? data?.name : data?.title}&nbsp;

                            <span className="font-extralight">
                                ({data?.release_date === undefined ? data?.first_air_date.slice(0, 4) : data?.release_date.slice(0, 4)})
                            </span>
                        </h1>

                        <div className="flex items-center gap-8">
                            <span className="bg-primary p-[5px] font-medium text-2xl">{data?.vote_average.toFixed(1)}</span>

                            <AiOutlineHeart
                                size={35}
                                className="hover:fill-red-700 cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <p className="text-xl text-textColors-100 font-light mt-1">{data?.tagline}</p>
                        <div className="flex gap-[14px] flex-wrap mt-2">

                            {arrayGenres?.map((genre, i) => (
                                <div
                                    key={i}
                                    className="px-5 py-1 rounded-full border-[1px] border-white text-xs text-center font-semibold"
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
                        className="flex items-center gap-2 my-6 cursor-pointer group">

                        <CiPlay1
                            size={30}
                            className="group-hover:stroke-primary stroke-1" />

                        <span className="text-2xl font-semibold group-hover:text-primary">Assistir Trailer</span>
                    </div>

                    <h2 className="text-3xl font-medium font-Nunito">Sinopse</h2>

                    <p className="text-textColors-100 font-normal text-base pr-3 sm:pr-36 mt-1">
                        {data?.overview}
                    </p>

                    <div className="flex flex-col pr-3 sm:pr-36">
                        <div className="flex justify-start gap-3 max-w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                            <p >
                                Situação:
                                <span className="text-textColors-100 "> {data?.status}</span>
                            </p>

                            <p>
                                {data?.release_date === undefined ? "Data do primeiro ep: " : "Lançamento: "}

                                <span className="text-textColors-100 whitespace-nowrap">
                                    {data?.release_date === undefined ? formatDate((data?.first_air_date) || "") : formatDate(data?.release_date)}
                                </span>
                            </p>

                            <p>
                                {data?.runtime === undefined ? "Tempo de um ep: " : "Quantidade de tempo: "}
                                <span className="text-textColors-100 whitespace-nowrap">
                                    {HoursAndMinutes((data?.runtime === undefined ? data?.episode_run_time : data?.runtime) || 0)}
                                </span>
                            </p>
                        </div>

                        {/* Caso o mediaType for tvShow ele vai esse código vai adicionar informações a mais */}
                        {mediaTypeParams === "tv" && (
                            <div className="flex justify-start gap-3  max-w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
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

                        {director && director?.length > 0 && (
                            <div className="flex justify-start max-w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                                <p>Diretor:{" "}
                                    {director?.map((d, i) => (
                                        <span
                                            className="text-textColors-100"
                                            key={i}>
                                            {d.name}
                                            {director.length -
                                                1 !==
                                                i && ", "}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        )}

                        {writer && writer?.length > 0 && (
                            <div className="flex justify-start max-w-[775px] mt-8 pb-3 border-b border-[rgba(255,_255,_255,_.20)]">
                                <p>Escritor: {" "}
                                    {writer?.map((d, i) => (
                                        <span
                                            className="text-textColors-100"
                                            key={i}>
                                            {d.name}
                                            {writer.length -
                                                1 !==
                                                i && ", "}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        )}
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
