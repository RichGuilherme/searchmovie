import Image from "next/image"
import { ArrowDownIcon } from "../icons/arrowdown-icon"


export const UserAtivited = () => {
  return (
      <div className="flex items-center">
         <Image 
            src="/image/default-profile.png"
            alt="logo"
            height={33}
            width={38}
           />
         <p className="max-w-[147px] min-w-[90px] m-[05px016px] text-textColors-200">
            Richard Guilherme</p>
         <ArrowDownIcon/>
      </div>
  )
}
