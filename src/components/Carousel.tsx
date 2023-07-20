import { useRef } from "react"
import { RxArrowLeft, RxArrowRight } from "react-icons/rx"

import { DataResults } from "@/@types/apiInformation"
import { CardItem } from "./CardItem"


export const Carousel = ({ dataResults, loading, mediaType }: DataResults) => {
  const carouselContainer = useRef<HTMLDivElement>(null)

  const navigation = (dir: "left" | "right") => {
    const container = carouselContainer.current

    if (container) {
      const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) :
        container.scrollLeft + (container.offsetWidth + 20)


      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      ref={carouselContainer}
      className="pl-2 text-textColors-200 overflow-hidden ">
      <div
        onClick={() => navigation("left")}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-primary hover:bg-white  
          cursor-pointer absolute top-60 -left-3 z-10 group">

        <RxArrowLeft size={22} className="group-hover:text-primary" />
      </div>

      <div
        onClick={() => navigation("right")}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-primary hover:bg-white 
          cursor-pointer absolute top-60 -right-4 z-10 group">

        <RxArrowRight size={22} className="group-hover:text-primary"/>
      </div>

      <div className="flex flex-row justify-start gap-5 w-full">
          <CardItem dataResults={dataResults} loading={loading} mediaType={mediaType}/>
      </div>
    </div>

  )
}
