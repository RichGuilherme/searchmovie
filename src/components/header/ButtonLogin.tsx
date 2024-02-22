import Link from "next/link"

export const ButtonLogin = () => {
  return (
    // <Link href="/" prefetch={false}>
      <button className="flex justify-center items-center w-[138px] h-[38px] bg-primary text-textColors-200 text-lg cursor-pointer rounded-[5px] border-0">
        
         Login
      </button>
    // </Link>
  )
}