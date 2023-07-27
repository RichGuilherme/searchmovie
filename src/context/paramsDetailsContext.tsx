"use client"

import { ProviderProps } from "@/@types/contextApi"
import { createContext, useContext, useState } from "react"

type ParamsDetailsContextType = {
    idParams: string
    mediaTypeParams: string
    setIdParams: React.Dispatch<React.SetStateAction<string>> 
    setMediaTypeParams: React.Dispatch<React.SetStateAction<string>> 
}

const paramsDetailsContext = createContext<ParamsDetailsContextType>({
    idParams: "" ,
    mediaTypeParams: "",
    setIdParams: () => { },
    setMediaTypeParams: () => { }
})

export const useParamsDetails = () => useContext(paramsDetailsContext)


export const ParamsDetailsProvider = ({children}: ProviderProps) => {
    const [idParams, setIdParams] = useState("")
    const [mediaTypeParams, setMediaTypeParams] = useState("")


    return (
        <paramsDetailsContext.Provider 
         value={{
            idParams,
            mediaTypeParams,
            setIdParams,
            setMediaTypeParams
         }}>

         {children}
        </paramsDetailsContext.Provider>
    )
}
