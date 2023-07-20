import { AllMovies } from "@/components/allMovies/Index"
import { GenresProvider } from "@/context/genresContext"

export default function Movies() {
  return (
    <GenresProvider>
      <AllMovies mediaType="movie"/>
    </GenresProvider>
  )
}
