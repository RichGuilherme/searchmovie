"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"

import { CarouselLoading } from "./CarouselLoading"
import { DataResults } from "@/@types/apiInformation"

export const CardItem = ({ dataResults, loading, mediaType }: DataResults) => {
    const router = useRouter()

    const handlePush = (mediaType: string | null | undefined, id: number) => {
    
        router.push(`/detalhes?mediaType=${mediaType}&id=${id}`)
    }
  
    return (
        <>
            {!loading ? (
                <>
                    {dataResults?.map((data, index) => (
                        index < 20 && (
  

                            <div
                                key={data.id}
                                className="bg-fullSize min-w-[267px] h-full bg-center bg-no-repeat rounded-[13px]
                                           cursor-pointer relative">

                                {data?.poster_path && data?.poster_path !== "" ? (
                                    <Image
                                        onClick={(e) => handlePush(data.media_type === undefined ? mediaType : data.media_type, data.id)}
                                        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                                        alt="poster"
                                        width={403}
                                        height={502}
                                        priority={true}
                                        style={{
                                            objectFit: 'cover',
                                            width: "100%",
                                            maxHeight: "360px",
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
                                            maxHeight: "360px",
                                            borderRadius: "12px"
                                        }}
                                    >
                                    </Image>
                                )
                                }
                                
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
