"use client"
import { ReactNode, createContext, useContext, useState } from 'react';

type ProviderProps = {
    children: ReactNode
}

const GenresContext = createContext({
  selectedGenres: [Array<number>],
  updateSelectedGenres: (genres: any) => {},
})

export const useGenres = () => useContext(GenresContext)

export const GenresProvider = ({ children }: ProviderProps) => {
  const [selectedGenres, setSelectedGenres] = useState([])

  const updateSelectedGenres = (genres: any) => {
    setSelectedGenres(genres)
  }

  return (
    <GenresContext.Provider value={{ selectedGenres, updateSelectedGenres }}>
      {children}
    </GenresContext.Provider>
  )
}
