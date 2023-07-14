"use client"

import { useState } from "react"
import { SearchIcon } from "../icons/Search-icon"

type inputSearchProps = {
    onShowSearch: (any:boolean) => void
}

export const TagInputSearchMovie = ({onShowSearch}: inputSearchProps ) => {
    const [showOpen, setShowOpen] = useState<boolean>(false)

    const showSearch = () => {
        onShowSearch(!showOpen)
    }

    return (
        <div 
        onClick={() => showSearch()}
        className="flex items-center gap-2 relative cursor-pointer text-white">
                <SearchIcon 
                
                color={"white"} />
        </div>
    )
}
