"use client"
import { GenresContextType, ProviderProps } from '@/@types/contextApi';
import { createContext, useContext, useState } from 'react';

const GenresContext = createContext<GenresContextType>({
  selectedGenres: [],
  updateSelectedGenres: () => { },
});

export const useGenres = () => useContext(GenresContext)

export const GenresProvider = ({ children }: ProviderProps) => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])

  const updateSelectedGenres = (genres: number[] | number) => {
    if (Array.isArray(genres)) {
      setSelectedGenres(genres)
    } else {
      setSelectedGenres([genres])
    }
  }

  return (
    <GenresContext.Provider value={{ selectedGenres, updateSelectedGenres }}>
      {children}
    </GenresContext.Provider>
  )
}
