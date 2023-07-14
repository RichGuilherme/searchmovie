import Image from "next/image"
import { SwitchTab } from "../SwitchTab"
import { Carousel } from "../Carousel"
import { useState } from "react"
import useFetch from "@/hooks/useFeatch"

export const TopRated = () => {
    const [endpoint, setEndpoint] = useState<string>("movie")

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/${endpoint}/top_rated`)
    const onTabChange = (tab: string): void => {
        setEndpoint(tab === "Filmes" ? "movie" : "tv")
    }

    return (
        <>
            <section className="relative h-[550px] w-[80%] flex flex-col gap-[18px] mx-auto my-[25px] z-10">

                <div className="flex flex-row justify-between items-center w-full  px-3">
                    <h1
                        className="text-2xl whitespace-nowrap font-medium font-Nunito flex flex-row items-center gap-2 ">
                        Top Avaliações
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

                <Carousel data={data?.results} loading={loading} movieType={endpoint} />

            </section>
            <div className="w-full h-48 absolute bottom-[-24px] left-0 bg-[linear-gradient(360deg,_#053ba3_0%,_rgba(0,0,0,0.00)_100%)]  "></div>
        </>
    )
}
