import  useFetch  from "@/hooks/useFeatch"
import { MovieDetails } from "./MovieDetails"
import { TopCast } from "./TopCast"
import { DetailsProps } from "@/@types/apiInformation"
import { Recommendations } from "./Recommendations"


export const Details = ({movieTypeParams, idParams}: DetailsProps) => {
  const {data: crewData, loading: crewLoading} = useFetch(`https://api.themoviedb.org/3/${movieTypeParams}/${idParams}/credits`)

  return (
    <main className="w-full h-screen relative text-textColors-200 font-OpenSans z-0">
       <MovieDetails movieTypeParams={movieTypeParams} idParams={idParams} />
       <TopCast crew={crewData} loadingCrew={crewLoading}/>
       <Recommendations  movieTypeParams={movieTypeParams} idParams={idParams} />
    </main>
  )
}
