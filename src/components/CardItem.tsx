/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from "next/navigation"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"

import { CarouselLoading } from "./CarouselLoading"
import { DataResults } from "@/@types/apiInformation"

export const CardItem = ({ dataResults, loading, mediaType}: DataResults) => {
    const router = useRouter()

    return (
        <>
            {!loading ? (
                <>
                    {dataResults?.map((data, index) => (
                        index < 20 && (
  
                            <div
                                key={data.id}
                                className="bg-fullSize min-w-[267px] h-full bg-center bg-no-repeat rounded-[13px] 
                                hover:scale-95 transition cursor-pointer relative">

                                {data?.poster_path && data?.poster_path !== "" ? (
                                    <img
                                        onClick={() => router.push(`/detalhes?mediaType=${data.media_type || mediaType}&id=${data.id}`)}
                                        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                                        alt="poster"
                                        style={{
                                            objectFit: 'cover',
                                            width: "100%",
                                            maxHeight: "360px",
                                            borderRadius: "12px"
                                        }}>
                                    </img>
                                ) : (
                                    <img
                                        src="/image/no-poster.jpg"
                                        alt="poster"
                                        style={{
                                            objectFit: 'cover',
                                            width: "100%",
                                            maxHeight: "360px",
                                            borderRadius: "12px"
                                        }}
                                    >
                                    </img>
                                )}
                                
                                {/* icone de coração no topo da imagem */}
                                <span className="absolute top-1 right-3">
                                    <AiOutlineHeart
                                        size={29}
                                        className="hover:text-red-700 cursor-pointer" />
                                </span>

                                {/* informações a baixo da imagem */}
                                <div className="block mt-2">
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

                    ))}
                </>
            ) :
                (
                    <>
                        <CarouselLoading />
                        <CarouselLoading />
                        <CarouselLoading />
                        <CarouselLoading />
                        <CarouselLoading />

                    </>
                )}
        </>
    )
}
