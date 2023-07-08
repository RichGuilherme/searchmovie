import  useFetch  from "@/hooks/useFeatch"
import { MovieDetails } from "./MovieDetails"
import { TopCast } from "./TopCast"
import { DetailsProps } from "@/@types/apiInformation"
import { Similares } from "./Similares"

export const Details = ({movieType, id}: DetailsProps) => {
  const {data: crewData, loading: crewLoading} = useFetch(`https://api.themoviedb.org/3/${movieType}/${id}/credits`)

  return (
    <main className="w-full h-screen relative text-textColors-200 font-OpenSans z-0">
       <MovieDetails movieType={movieType} id={id} />
       <TopCast crew={crewData} loadingCrew={crewLoading}/>
       <Similares  movieType={movieType} id={id} />
    </main>
  )
}
