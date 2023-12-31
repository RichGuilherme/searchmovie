import { Carousel } from "../Carousel"
import { SwitchTab } from "../SwitchTab"
import { useState } from "react"
import  useFetch  from "@/hooks/useFeatch"


export const Trending = () => {
    const [endpoint, setEndpoint] = useState<string>("day")

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/trending/all/${endpoint}`)

    const onTabChange = (tab:string):void => {
        setEndpoint(tab === "Hoje" ? "day" : "week")
    };

    return (
        <section
            className="relative h-[487px] w-[93%] sm:w-[80%]  flex flex-col gap-[18px] mx-auto mt-[84px]">

            <div className="flex flex-row justify-between items-center w-full  px-3">
                <h1
                    className="text-2xl font-medium font-Nunito flex flex-row items-center gap-2"> 
                    Tendências
                </h1>

                <SwitchTab typeData={["Hoje", "Semana"]} onTabChange={onTabChange} />
            </div>

            <Carousel dataResults={data?.results} loading={loading}/>

        </section>
    )
}
