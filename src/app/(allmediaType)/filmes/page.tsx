import { AllMediaType } from "@/components/allMediaType/Index"
import { GenresProvider } from "@/context/genresContext"

export default function Movies() {
  return (
    <GenresProvider>
      <AllMediaType mediaType="movie"/>
    </GenresProvider>
  )
}
