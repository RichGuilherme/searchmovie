import { dataSwitchTag } from "@/@types/switchTag";
import { useState } from "react";


export const SwitchTab = ({ typeData, onTabChange }: dataSwitchTag) => {
    const [selectedTab, setSelectedTab] = useState<number>(0)
    const [left, setLeft] = useState<number>(0)

    const activeTab = (tab:string, index:number) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index)
        }, 300)
        onTabChange(tab)
    }

    return (
        <div className="relative ">
            <div
                className="checkbox h-[34px] p-[2px] bg-white rounded-full ">

                <div className="flex items-center h-[30px] relative">
                    {typeData.map((tab, index) => (
                        
                        <span
                            onClick={() => activeTab(tab, index)}
                            style={{color: `${selectedTab === index ? "white" : "black"}`}}
                            key={index}
                            className="w-[100px] h-full flex items-center justify-center text-sm 
                           text-black z-10 cursor-pointer">
                            {tab}
                        </span>
                    ))}

                    <span
                        style={{ left: `${left}px` }}
                        className="h-[30px] w-[100px] absolute rounded-full 
                         bg-primary
                         transition-all duration-700" />
                </div>
            </div>
        </div>
    )
}
