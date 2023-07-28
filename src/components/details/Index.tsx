import useFetch from "@/hooks/useFeatch"
import { MovieDetails } from "./MovieDetails"
import { TopCast } from "./TopCast"
import { Recommendations } from "./Recommendations"
import { useParamsDetails } from "@/context/paramsDetailsContext"


export const Details = () => {
  const { idParams, mediaTypeParams } = useParamsDetails()
  const { data: creditsData, loading: creditsLoading } = useFetch(`https://api.themoviedb.org/3/${mediaTypeParams}/${idParams}/credits`)


  return (
    <main className="w-full relative text-textColors-200 font-OpenSans z-0">
      <MovieDetails crew={creditsData?.crew} loadingCrew={creditsLoading} />
      <TopCast cast={creditsData?.cast} loadingCrew={creditsLoading} />
      <Recommendations />
    </main>
  )
}
