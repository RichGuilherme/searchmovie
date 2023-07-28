import { ReactNode } from "react"

export type ProviderProps = {
    children: ReactNode
}
  
export type GenresContextType = {
    selectedGenres: number[]
    updateSelectedGenres: (genres: number[] | number) => void
};
  