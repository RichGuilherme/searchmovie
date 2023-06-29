import { Heart } from "../icons/heart "

export const ItemTrending = () => {
    return (
        <div
         style={{backgroundImage: "url(image/Rectangle.png)"}}
         className="bg-fullSize bg-center bg-no-repeat w-[250px] h-[339px] relative 
         cursor-pointer rounded-[13px] group">

            <div className="hidden absolute h-[107px] w-full backdrop-blur-[2px] pl-2 pr-2.5 pt-2
             pb-3.5 bottom-0 group-hover:block">
                <div className="flex justify-between items-center relative" >
                    <h3 className="text-[25px] uppercase">
                        The last of Us
                    </h3>

                    <Heart/>
                </div>

                <div className="flex justify-between items-center relative">
                    <span className="text-lg">2023</span>
                    <button
                    className="absolute w-[109px] h-7 bg-primary text-textColors-200 text-[13px]
                     font-semibold cursor-pointer rounded-[30px] border-[none] right-0 top-[22px]"
                    >Mais info</button>
                </div>
            </div>
        </div>
    )
}
