import { MovieData } from "@/@types/apiInformation"
import { useGenres } from "@/context/genresContext"
import { useEffect, useState } from "react"

type UseDataAllMediaTypeProps = {
    filter: any
    mediaType: any
    newCurrentPage: any
}

export const useDataAllMediaType = ({ filter, mediaType, newCurrentPage }: UseDataAllMediaTypeProps) => {
    const [filterPrevious, setFilterPrevious] = useState("popularity.desc")
    const [loading, setLoading] = useState(true)
    const [dataApi, setDataApi] = useState<MovieData[]>([])
    const [isLoadingElementObserve, setIsLoadingElementObserve] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)

    const { selectedGenres } = useGenres()
    const genresQueryString = selectedGenres.length > 0 ? selectedGenres.join('%2C') : ''  // exemplo de código de filme 16%2C18%2C26. O %2C representa os espaço para API poder identificar os genêros pedidos.


    const Key = process.env.NEXT_PUBLIC_API_URL
    const urlBase = "https://api.themoviedb.org/3/discover/"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${Key}`
                    }
                }


                const params = `${mediaType}?include_adult=false&language=pt-BR&page=${filterPrevious === filter  ? currentPage : 1}&sort_by=${filter}&vote_count.gte=500&with_genres=${genresQueryString}`
                const response = await fetch(`${urlBase}${params}`, options)
                const data = await response.json()

                // filtragem dos dados. Caso não precise recarregas os dados na tela, ao rola com scroll para baixo os novos dados serão armazenados com os anteriores.
                if (currentPage === 1 && filterPrevious === filter) {
                    setDataApi(data.results)
                    setFilterPrevious(filter)
                    setLoading(false)

                } else {
                    setDataApi(prevData => [...prevData, ...data.results])
                    setFilterPrevious(filter)
                    setLoading(false)
                } 


            } catch (error) {
                console.error(error)

            } finally {
                setIsLoadingElementObserve(false)
            }
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedGenres, genresQueryString, filterPrevious, mediaType, filter, newCurrentPage])


    useEffect(() => {
        setCurrentPage(1) // Resetar a página ao mudar o filtro ou os gêneros selecionados
    }, [filter, genresQueryString])

    
    useEffect(() => {
        setCurrentPage(newCurrentPage)
    }, [newCurrentPage])



    return { dataApi, loading, isLoadingElementObserve }
}
