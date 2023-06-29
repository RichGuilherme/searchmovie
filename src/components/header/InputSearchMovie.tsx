import { SearchIcon } from "../icons/Search-icon"

export const TagInputSearchMovie = () => {
    return (
        <div className="flex items-center gap-2 relative">
            <div className="absolute left-2">
                <SearchIcon />
            </div>
            <input
                type="text"
                placeholder="Pesquisar por algum filme"
                className="bg-transparent border-0 outline-0 p-[1px_0_1px_36px] rounded-xl 
                text-textColors-200 text-lg placeholder:text-textColors-200
                focus:outline-none focus:outline-1 focus:outline-white " />
        </div>
    )
}
