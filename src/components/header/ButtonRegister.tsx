import Link from "next/link"

type RegisterProps = {
  link: string
  text: string
  backgroundColor: string
  textColor: string
}

export const ButtonRegister = ({link, backgroundColor, textColor, text}: RegisterProps) => {
  return (
    <Link href={`/${link}`}>
      <button 
        style={{
          backgroundColor: `${backgroundColor}`,
          color: `${textColor}`
        }}
        className="flex justify-center items-center h-[38px] px-7 ml-5
          text-lg font-medium cursor-pointer rounded-[5px] border-0">
         {`${text}`}
      </button>
    </Link>
  )
}
