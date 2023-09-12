import { inputSearchProps } from "@/@types/inputSearch"
import { IoMdSearch } from "react-icons/io"

export const TagInputSearchMovie = ({onShowSearch}: inputSearchProps ) => {
    const showSearchOpen = false

    const showSearch = () => {
        onShowSearch(!showSearchOpen)
    }

    return (
        <div 
        onClick={() => showSearch()}
        className="flex items-center gap-2 relative cursor-pointer text-white 
        hover:text-primary mr-4 lg:mr-10 ">
             <IoMdSearch size={29} />
        </div>
    )
}
