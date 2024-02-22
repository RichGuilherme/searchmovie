import { useEffect, useState } from "react";
import { ApiResponse } from "../@types/apiInformation";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


type useAxiosProps = {
    axiosInstance: AxiosInstance
    method: string,
    url: string
    requestConfig?: AxiosRequestConfig
}


type AxiosMethod = 'get' | 'post' | 'put' | 'delete';

export const useAxios = ({ axiosInstance, method, url, requestConfig }: useAxiosProps) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<ApiResponse | null>(null)
    const [dataPage, setDataPage] = useState<number | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance[method.toLowerCase() as AxiosMethod](url, {
                    ...requestConfig,
                })

                setData(response.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { data, loading, error }
}