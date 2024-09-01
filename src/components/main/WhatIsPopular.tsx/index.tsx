import { useState } from "react";

import { useAxios } from "@/hooks/useAxios";
import { SwitchTab } from "../../SwitchTab";
import { Carousel } from "../../Carousel";
import axiosInstancia from "@/data/service/axios";


export const WhatIsPopular = () => {
    const [endpoint, setEndpoint] = useState<string>("movie")

    const { data, loading } = useAxios({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `${endpoint}/popular`,
        requestConfig: {
           params: {
             language: 'pt-BR', 
           },
        }
     })
    
     const onTabChange = (tab: string): void => {
         setEndpoint(tab === "Filmes" ? "movie" : "tv")
     }


    return (
        <section className="relative h-[487px] max-sm:h-[552px] w-[93%] sm:w-[80%] flex flex-col gap-[18px] mx-auto my-[28px]">

            <div className="flex flex-row justify-between items-center w-full px-3">
                <h1
                    className="text-2xl sm:whitespace-nowrap font-medium font-Nunito flex 
                    flex-row items-center gap-2 ">
                    O que está Popular
                </h1>

                <SwitchTab typeData={["Filmes", "Tv Show"]} onTabChange={onTabChange} />
            </div>

            <Carousel
                dataResults={data?.results}
                loading={loading}
                mediaType={endpoint} />
        </section>
    )
}

