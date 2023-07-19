
import { useGenres } from "@/context/genresContext"
import useFetch from "@/hooks/useFeatch"
import {  useState } from "react"
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri"

type SideBarFilterProps = {
    mediaType: string
    onFilterList: (filter: string) => void
}
export const SideBarFilter = ({ onFilterList, mediaType }: SideBarFilterProps) => {
    const [showFilter, setShowFilter] = useState(false)
    const [genres, setGenres] = useState([])

    const { data } = useFetch(`https://api.themoviedb.org/3/genre/${mediaType}/list`)

    const { updateSelectedGenres } = useGenres()

    const handleGenreCheckbox = (genreId: any) => {
        const updatedGenres = genres.includes(genreId)
            ? genres.filter((id) => id !== genreId)
            : [...genres, genreId]

        setGenres(updatedGenres)
        updateSelectedGenres(updatedGenres) // Atualiza os gêneros selecionados no contexto
    };


    const handleFilterList = (filtro: string = "") => {
        onFilterList(filtro)
    }

    const chekbox = "ml-3 w-5 h-5 rounded-md border-2 border-primary bg-transparent checked:text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"


    return (
        <aside className="bg-[#06121E] px-8 pt-36 pb-7 w-[20%] rounded-br-3xl shadow-lg min-w-[221px] h-screen overflow-y-auto overflow-x-hidden">
            <ul className="flex flex-col gap-3 text-lg text-textColors-100 font-bold min-w-[169px]">
                <li onClick={() => handleFilterList("popularity.desc")}
                    className="hover:text-white cursor-pointer">
                    Mais populares
                </li>

                <li onClick={() => handleFilterList("vote_average.desc")}
                    className="hover:text-white cursor-pointer">
                    Avaliações
                </li>

                <li onClick={() => handleFilterList("primary_release_date.desc")}
                    className="hover:text-white cursor-pointer">
                    Lançamentos
                </li>

                <li onClick={() => setShowFilter(!showFilter)}
                    className="hover:text-white cursor-pointer" >
                    Filtros
                    {showFilter === false ?
                        <RiArrowRightSFill className="inline" />
                        :
                        <RiArrowDownSFill className="inline" />
                    }
                </li>
                <ul className={`${showFilter === true ? "flex" : "hidden"} flex-col gap-2 font-light text-base text-textColors-100`}>
                    <li className="">Ordenar de A a Z
                        <input type="checkbox" className={chekbox} />
                    </li>

                    <li className="">Ordenar de Z a A
                        <input type="checkbox" className={chekbox} />
                    </li>

                    <p className="text-xl">Genêros: </p>
                    {data?.genres.map(genre => (
                        <li key={genre.id}
                            className="">
                            {genre.name}
                            <input
                                type="checkbox"
                                className={chekbox}
                                value={genre.id}
                                onClick={() => handleGenreCheckbox(genre.id)}
                            />
                        </li>
                    ))}
                </ul>
            </ul>
        </aside>
    )
}
