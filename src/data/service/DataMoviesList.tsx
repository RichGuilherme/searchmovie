
// "use client"
// import { useEffect, useState } from "react"


// interface PropsMovieList {
//    movie: string 
// }

// interface UrlMovieList {
//    movieList: "popular" | "now_playing" | "top_rated" | string
// }

// export const DataApi = (props: PropsMovieList) => {
//   const [dataMoviePopular, setDataMoviePopular] = useState(null)
 
//   const propsMovieList = props.movie

//   const getDataMovie = async (props: UrlMovieList) => {
//     const response = await DataMovieListInstance.get(`/${props.movieList}?language=pt-BR&page=1`)
//     const data = response.data
    
//     setDataMoviePopular(data)
//   }
  
//   useEffect(() => {
//     getDataMovie({movieList: propsMovieList })

//   }, [propsMovieList])
  

//   if(dataMoviePopular){
//     return dataMoviePopular
//   }
// }
