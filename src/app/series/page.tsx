import { AllMovies } from "@/components/allMovies/Index"
import { GenresProvider } from "@/context/genresContext"

export default function Series() {
  return (
    <GenresProvider>
      <AllMovies mediaType="tv"/>
    </GenresProvider>
  )
}
