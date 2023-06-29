import Image from "next/image"
import { SlideTrending } from "./SlideTrending"
import { SwitchTab } from "../SwitchTab"
import { useState } from "react"


export const Trending = () => {
    const [endpoint, setEndpoint] = useState<string>("hoje")

    const onTabChange = (tab:string):void => {
        setEndpoint(tab === "Hoje" ? "Hoje" : "Semana")
    };

    return (
        <section
            className="relative h-[487px] w-[80%] flex flex-col gap-[18px] mx-auto my-[84px]">

            <div
                className="flex flex-row justify-between items-center w-full h-[12%] px-3">
                <h1
                    className="text-3xl font-medium flex items-center gap-2">
                    Tendências
                    <Image
                        src="/image/Ellipse.png"
                        alt="ellipse"
                        width={32}
                        height={24.789}
                    ></Image>
                </h1>

                <SwitchTab typeData={["Hoje", "Semana"]} onTabChange={onTabChange} />
            </div>

            <SlideTrending />

        </section>
    )
}
