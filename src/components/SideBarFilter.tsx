
import { useGenres } from "@/context/genresContext"
import useFetch from "@/hooks/useFeatch"
import { useState } from "react"
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri"
import { HiArrowUp } from "react-icons/hi"
import { BsFilterLeft } from "react-icons/bs"
import { IoIosClose } from "react-icons/io"

type SideBarFilterProps = {
    mediaType: string
    onFilterList: (filter: string) => void
}
export const SideBarFilter = ({ onFilterList, mediaType }: SideBarFilterProps) => {
    const [showFilterGenres, setShowFilterGenres] = useState(false)
    const [showAsideMobile, setShowAsideMobile] = useState(false)
    const [genres, setGenres] = useState<Array<number>>([])

    const { data } = useFetch(`https://api.themoviedb.org/3/genre/${mediaType}/list`)

    const { updateSelectedGenres } = useGenres()

    const handleGenreCheckbox = (genreId: number) => {
        const updatedGenres = genres.includes(genreId)
            ? genres.filter((id) => id !== genreId)
            : [...genres, genreId]

        setGenres(updatedGenres)
        updateSelectedGenres(updatedGenres) // Atualiza os gêneros selecionados no contexto
    }


    const handleFilterList = (filtro: string = "") => {
        onFilterList(filtro)
        if(showAsideMobile === true){
            setShowAsideMobile(false)
        }
    }


    const chekbox = "ml-3 w-5 h-5 rounded-md border-2 border-primary bg-transparent checked:text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"


    return (
        <aside className={`${showAsideMobile && "w-full h-screen fixed cursor-default z-50 overflow-hidden"}`}
         >
            {showAsideMobile &&
                <IoIosClose
                    onClick={() => setShowAsideMobile(!showAsideMobile)}
                    className="fixed top-20 left-3 z-20 fill-textColors-100 cursor-pointer"
                    size={39} />
            }

            <div
                className={` z-10 min-w-[221px] h-screen w-[20%] ${showAsideMobile === true ? "fixed" : "hidden"} lg:block inset-0 
             px-6 pt-[140px] pb-7 rounded-br-3xl shadow-lg bg-[#06121E] overflow-y-auto overflow-x-hidden`}>

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

                    <li onClick={() => setShowFilterGenres(!showFilterGenres)}
                        className="hover:text-white cursor-pointer" >
                        Filtros
                        {showFilterGenres === false ?
                            <RiArrowRightSFill className="inline fill-primary" />
                            :
                            <RiArrowDownSFill className="inline fill-primary" />
                        }
                    </li>
                    <ul className={`${showFilterGenres === true ? "flex" : "hidden"} flex-col gap-2 
                    font-light text-base text-textColors-100`}>
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
            </div>

            {/* Botão para subi até o top novamente */}
            {!showAsideMobile &&
                <span className="fixed bottom-3 left-5 z-20">
                    <BsFilterLeft
                        onClick={() => setShowAsideMobile(!showAsideMobile)}
                        className="lg:hidden block cursor-pointer border-2  bg-primary rounded-full fill-white"
                        size={39} />

                    <div
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })
                        }}
                        className="border-2 w-9 h-9 flex items-center justify-center rounded-full mt-10 bg-primary
                           cursor-pointer hover:animate-bounce">
                        <HiArrowUp
                            size={27} />
                    </div>
                </span>}

        </aside>
    )
}
