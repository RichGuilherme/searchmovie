import Image from "next/image"
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
        <section className="relative h-[487px] w-[80%] flex flex-col gap-[18px] mx-auto my-[25px]">

            <div className="flex flex-row justify-between items-center w-full  px-3">
                <h1
                    className="text-2xl whitespace-nowrap font-medium font-Nunito flex flex-row items-center gap-2 ">
                    O que está Popular
                    <Image
                        src="/image/Ellipse.png"
                        alt="ellipse"
                        width={200}
                        height={120}
                        style={{
                            objectFit: 'cover',
                            width: "100%",
                            height: "100%",
                            borderRadius: "12px"
                        }}
                    ></Image>
                </h1>

                <SwitchTab typeData={["Filmes", "Tv Show"]} onTabChange={onTabChange} />
            </div>

            <Carousel data={data?.results} loading={loading} movieType={endpoint}/>
        </section>
    )
}

