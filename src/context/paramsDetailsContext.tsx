"use client"

import { ProviderProps } from "@/@types/contextApi"
import { createContext, useContext, useEffect, useState } from "react"

type ParamsDetailsContextType = {
    idParams: string | null
    mediaTypeParams: string | null
    setIdParams: React.Dispatch<React.SetStateAction<string | null>>
    setMediaTypeParams: React.Dispatch<React.SetStateAction<string | null>>
}

const paramsDetailsContext = createContext<ParamsDetailsContextType>({
    idParams: "",
    mediaTypeParams: "",
    setIdParams: () => { },
    setMediaTypeParams: () => { }
})

export const useParamsDetails = () => useContext(paramsDetailsContext)


export const ParamsDetailsProvider = ({ children }: ProviderProps) => {
    const [idParams, setIdParams] = useState<string | null>("")
    const [mediaTypeParams, setMediaTypeParams] = useState<string | null>("")

    const paramsDetailsValue = {
        idParams,
        mediaTypeParams,
        setIdParams,
        setMediaTypeParams
    };


    return (
        <paramsDetailsContext.Provider
            value={paramsDetailsValue}>

            {children}
        </paramsDetailsContext.Provider>
    )
}
