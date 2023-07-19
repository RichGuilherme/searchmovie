"use client"

import { useState } from "react"
import { AllMoviesAndSeries } from "../AllMoviesAndSeries"
import { SideBarFilter } from "../SideBarFilter"


export const AllMovies = () => {
  const [filterLists, setFilterList] = useState("popularity.desc")
   
  const onFilterGenres = (id: number) => {
     
  }

  const onFilterList = (filter: string): void => {
    setFilterList(filter)
  }

  return (
    <main className="flex flex-row w-full text-white font-OpenSans">
        <SideBarFilter onFilterList={onFilterList} onFilterGenres={onFilterGenres} mediaType="movie"/>
        <AllMoviesAndSeries mediaType="movie" filter={filterLists}/>
    </main>
  )
}
