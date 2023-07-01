
// "use client"
// import { useEffect, useState } from "react"
// import {  DataTrendingInstance } from '@/data/service/axios'


// interface PropsMovieList {
//    movie: string 
// }

// interface UrlTrending {
//    trendingTime : "day" | "week" | string
// }

// export const DataApi = (props: PropsMovieList) => {
//   const [dataMoviePopular, setDataMoviePopular] = useState(null)
 
//   const propsMovieList = props.movie

//   const getDataMovie = async (props: UrlTrending) => {
//     const response = await DataTrendingInstance.get(`/all/${props.trendingTime}?language=pt-BR`)
//     const data = response.data
    
//     setDataMoviePopular(data)
//   }
  
//   useEffect(() => {
//     getDataMovie({trendingTime: propsMovieList })

//   }, [propsMovieList])
  

//   if(dataMoviePopular){
//     return dataMoviePopular
//   }
// }
