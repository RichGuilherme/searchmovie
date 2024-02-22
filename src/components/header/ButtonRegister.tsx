import Link from "next/link"

export const ButtonRegister = () => {
  return (
    // <Link href="/register" prefetch={false}>
      <button className="flex justify-center items-center w-[138px] h-[38px] ml-5
       bg-textColors-200 text-primary text-lg cursor-pointer rounded-[5px] border-0">
         Registrar
      </button>
    // </Link>
  )
}