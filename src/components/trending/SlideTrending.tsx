import { ItemTrending } from "./ItemTrending"



export const SlideTrending = () => {
  return (
    <div className="flex flex-row justify-around flex-wrap gap-5 w-full text-textColors-200">
         <ItemTrending/>
         <ItemTrending/>
         <ItemTrending/>
         <ItemTrending/>
         <ItemTrending/>
    </div>
  )
}
