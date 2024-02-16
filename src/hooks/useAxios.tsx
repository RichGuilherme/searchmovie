import { useEffect, useState } from "react";
import { ApiResponse } from "../@types/apiInformation";
import { AxiosInstance, AxiosRequestConfig } from "axios";


type useAxiosProps = {
    axiosInstance: AxiosInstance
    method: string,
    url: string
    requestConfig?: AxiosRequestConfig
}


export const useAxios = ({ axiosInstance, method, url, requestConfig }: useAxiosProps) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<ApiResponse | null>(null)
    const [dataPage, setDataPage] = useState<number | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                })

                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return {data, loading, error}
}