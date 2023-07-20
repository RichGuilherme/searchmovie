import  useFetch  from "@/hooks/useFeatch"
import { MovieDetails } from "./MovieDetails"
import { TopCast } from "./TopCast"
import { DetailsProps } from "@/@types/apiInformation"
import { Recommendations } from "./Recommendations"


export const Details = ({mediaTypeParams, idParams}: DetailsProps) => {
  const {data: crewData, loading: crewLoading} = useFetch(`https://api.themoviedb.org/3/${mediaTypeParams}/${idParams}/credits`)

  return (
    <main className="w-full relative text-textColors-200 font-OpenSans z-0">
       <MovieDetails mediaTypeParams={mediaTypeParams} idParams={idParams} />
       <TopCast crew={crewData} loadingCrew={crewLoading}/>
       <Recommendations  mediaTypeParams={mediaTypeParams} idParams={idParams} />
    </main>
  )
}
