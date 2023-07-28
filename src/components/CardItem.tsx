import Image from "next/image"
import { useRouter } from "next/navigation"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"

import { CarouselLoading } from "./CarouselLoading"
import { DataResults } from "@/@types/apiInformation"

export const CardItem = ({ dataResults, loading, mediaType }: DataResults) => {
    const { push } = useRouter()

    return (
        <>
            {!loading ? (
                <>
                    {dataResults?.map((data, index) => (
                        index < 20 && (

                            <div
                                key={data.id}
                                className="bg-fullSize min-w-[267px] h-[379px] bg-center bg-no-repeat rounded-[13px]
                                            group relative ">

                                {data?.poster_path && data?.poster_path !== "" ? (
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
                                )
                                }


                                <div className="block lg:hidden absolute h-[107px] w-full rounded-[13px] backdrop-blur-[4px] bg-[rgba(0,0,0,0.45)] pl-2 pr-2.5 pt-2
                                       pb-3.5 bottom-0 group-hover:block">
                                    <div className="flex justify-between relative" >
                                        <h3 className="text-[18px] font-semibold truncate pr-2 w-[79%] h-6 font-Righteous">
                                            {data.title === undefined ? data.name : data.title}
                                        </h3>


                                        <AiOutlineHeart
                                            size={29}
                                            className="hover:text-red-700 cursor-pointer" />
                                    </div>

                                    <div className="flex items-center relative font-bold text-lg">
                                        {data?.vote_average?.toFixed(1)}

                                        &nbsp;<AiFillStar size={19} className="fill-yellow-600" />
                                    </div>

                                    <button
                                        onClick={() => push(`/detalhes?mediaType=${data.media_type === undefined ? mediaType : data.media_type}&id=${data.id}`)}
                                        className="w-[109px] h-7 bg-primary rounded-[30px] border-[none] float-right
                                         text-textColors-200 text-[13px] text-center font-semibold cursor-pointer 
                                           relative hover:bg-white hover:text-primary"
                                    >Mais info</button>
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
