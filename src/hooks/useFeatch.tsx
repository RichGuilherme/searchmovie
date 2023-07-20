import { useEffect, useState } from "react";
import { DatasApi } from "../data/service/axios";
import { ApiResponse} from "../@types/apiInformation";


const useFetch = (url:string) => {
    const [data, setData] = useState< ApiResponse |null>(null)
    const [dataPage, setDataPage] = useState<number | null>(null)
    const [loading, setLoading] = useState<boolean | null>(true)
    const [error, setError] = useState< null | string>(null)

    useEffect(() => {
        setData(null)
        setError(null)

        DatasApi(url)
            .then((res: ApiResponse) => {
                setLoading(false)
                setDataPage(1)
                setData(res)
            })
            .catch((err) => {
                setLoading(false)
                setError("Aconteceu alguma coisa!")
            })
    }, [url])
    
    return { data, dataPage, loading, error }
}

export default useFetch