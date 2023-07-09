import { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Heart } from "./icons/heart "
import { Genres } from "./Genres"
import { dataResults } from "@/@types/apiInformation"

import { ArrowRight } from "./icons/arrow-right"
import { ArrowLeft } from "./icons/arrow-left"
import { CarouselLoading } from "./CarouselLoading"



export const Carousel = ({ data, loading, movieType }: dataResults) => {
  const carouselContainer = useRef<HTMLDivElement>(null);
  const { push } = useRouter()

  const navigation = (dir: "left" | "right") => {
    const container = carouselContainer.current;

    if (container) {
      const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) :
        container.scrollLeft + (container.offsetWidth + 20)


      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };


  return (
    <div
      ref={carouselContainer}
      className="flex flex-row justify-start gap-5 w-full pl-2 text-textColors-200 overflow-hidden ">
      <div
        onClick={() => navigation("left")}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-primary hover:bg-white  
          cursor-pointer absolute top-60 -left-3 z-10 group">
        <ArrowLeft />
      </div>

      <div
        onClick={() => navigation("right")}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-primary hover:bg-white 
          cursor-pointer absolute top-60 -right-4 z-10 group">
        <ArrowRight />
      </div>

      {!loading ? (
        <>
          {data?.map((data, index) => (
            index < 20 && (
              <div
                key={data.id}
                className="bg-fullSize min-w-[267px] h-[379px] bg-center bg-no-repeat rounded-[13px]
                  group relative cursor-pointer ">

                  <Image
                    src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                    alt="poster"
                    width={403}
                    height={502}
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px"
                    }}
                  >
                  </Image>
              

                <div className="hidden absolute h-[107px] w-full backdrop-blur-[4px] bg-[rgba(0,0,0,0.45)] pl-2 pr-2.5 pt-2
         pb-3.5 bottom-0 group-hover:block">
                  <div className="flex justify-between relative" >
                    <h3 className="text-[18px] font-semibold truncate pr-2 w-[79%] h-6 font-Righteous">
                      {data.title === undefined ? data.name : data.title}
                    </h3>

                    <Heart />
                  </div>

                  <div className="flex items-center relative">
                    <Genres
                      movieId={data.id}
                      movieTypeProps={data.media_type === undefined ? movieType : data.media_type} />
                  </div>

                  <button
                    onClick={() => push(`/detalhes?movieType=${data.media_type === undefined ? movieType : data.media_type}&id=${data.id}`)}
                    className="w-[109px] h-7 bg-primary rounded-[30px] border-[none] float-right
                       text-textColors-200 text-[13px] text-center font-semibold cursor-pointer 
                        relative top-2"
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



    </div>

  )
}
