import { useState } from "react";

import useFetch from "@/hooks/useFeatch";
import { SwitchTab } from "../SwitchTab";
import { Carousel } from "../Carousel";


export const WhatIsPopular = () => {
    const [endpoint, setEndpoint] = useState<string>("movie")

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/${endpoint}/popular`)
    const onTabChange = (tab: string): void => {
        setEndpoint(tab === "Filmes" ? "movie" : "tv")
    }

    return (
        <section className="relative h-[487px] w-[93%] sm:w-[80%] flex flex-col gap-[18px] mx-auto my-[25px]">

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

