"use client"

import { useState } from "react"
import { AllMoviesAndSeries } from "../AllMoviesAndSeries"
import { SideBarFilter } from "../SideBarFilter"

type AllmovieProps = {mediaType: string}
export const AllMovies = ({mediaType}: AllmovieProps) => {
  const [filterLists, setFilterList] = useState("popularity.desc")
   
  const onFilterList = (filter: string): void => {
    setFilterList(filter)
  }
  
  return (
    <main className="flex flex-row w-full text-white font-OpenSans">
        <SideBarFilter onFilterList={onFilterList} mediaType={mediaType}/>
        <AllMoviesAndSeries mediaType={mediaType} filter={filterLists}/>
    </main>
  )
}
