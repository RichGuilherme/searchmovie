import Image from "next/image"
import { Carousel } from "../Carousel"
import { SwitchTab } from "../SwitchTab"
import { useState } from "react"
import { useFetch } from "@/data/hooks/useFeatch"


export const Trending = () => {
    const [endpoint, setEndpoint] = useState<string>("day")

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/trending/all/${endpoint}`)
    const onTabChange = (tab:string):void => {
        setEndpoint(tab === "Hoje" ? "day" : "week")
    };

    return (
        <section
            className="relative h-[487px] w-[80%] flex flex-col gap-[18px] mx-auto my-[84px]">

            <div
                className="flex flex-row justify-between items-center w-full h-[12%] px-3">
                <h1
                    className="text-3xl font-medium font-Nunito flex items-center gap-2 "> 
                    Tendências
                    <Image
                        src="/image/Ellipse.png"
                        alt="ellipse"
                        width={32}
                        height={24}
                    ></Image>
                </h1>

                <SwitchTab typeData={["Hoje", "Semana"]} onTabChange={onTabChange} />
            </div>

            <Carousel data={data?.results} loading={loading}/>

        </section>
    )
}
