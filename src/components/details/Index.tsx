import { useFetch } from "@/data/hooks/useFeatch"
import { MovieDetails } from "./MovieDetails"
import { TopCast } from "./TopCast"
import { DetailsProps } from "@/data/types/apiInformation"


export const Details = ({movieType, id}: DetailsProps) => {
  
  return (
    <main className="w-full h-screen relative text-textColors-200 font-OpenSans z-0">
       <MovieDetails movieType={movieType} id={id} />
       <TopCast />
    </main>
  )
}
