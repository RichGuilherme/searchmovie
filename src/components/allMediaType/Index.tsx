"use client"

import { useState } from "react"
import { AllMoviesAndSeries } from "./AllMoviesAndSeries"
import { SideBarFilter } from "./SideBarFilter"
import { AllMediaTypeProps } from "@/@types/apiInformation"


export const AllMediaType = ({mediaType}: AllMediaTypeProps) => {
  const [filterLists, setFilterList] = useState("popularity.desc")
   
  const onFilterList = (filter: string): void => {
    setFilterList(filter)
  }
  
  return (
    <main className="flex flex-col lg:flex-row w-full text-white font-OpenSans">
        <SideBarFilter onFilterList={onFilterList} mediaType={mediaType}/>
        <AllMoviesAndSeries filter={filterLists} mediaType={mediaType}/>
    </main>
  )
}
