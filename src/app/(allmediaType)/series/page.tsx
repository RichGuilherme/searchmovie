import { AllMediaType } from "@/components/allMediaType/Index"
import { GenresProvider } from "@/context/genresContext"

export default function Series() {
  return (
    <GenresProvider>
      <AllMediaType mediaType="tv"/>
    </GenresProvider>
  )
}
