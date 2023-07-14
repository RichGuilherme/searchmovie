"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'

import { TagInputSearchMovie } from './InputSearchMovie'
import { ButtonLogin } from './ButtonLogin'
import { ButtonRegister } from './ButtonRegister'
import { Logo } from '../logo'
import { UserAtivited } from './UserAtivited'
import { SearchIcon } from '../icons/Search-icon'



export const Header = () => {
    const [linkColor, setLinkColor] = useState("/")
    const [searchValue, setSearchValue] = useState<string>("")
    const [openSeach, setOpenSearch] = useState<boolean>(false)

    const { push } = useRouter()

    const onShowSearch = (show: any) => {
        setOpenSearch(show)
    }
    const handleSearch = (event: any) => {
        event.preventDefault()

        if (!searchValue) return

        push(`/results?search=${searchValue}`)

        setOpenSearch(!openSeach)
        setSearchValue("")
    }

    const handlerPressKey = (event: any) => {
        if (event.key === "Enter") {
            handleSearch(event)
        }
    }

    const handlerLinkColor = (route:string) => {
        setLinkColor(route)
    }

    return (
        <>
            <header className='flex items-center justify-between fixed w-full backdrop-blur-[3px] z-40 px-[70px] py-3.5 bg-[rgba(0,_0,_0,_.25)] font-OpenSans'>
                <nav className='flex items-center gap-[38px]'>
                    <Logo />

                    <ul className='flex gap-6'>
                        <li 
                            onClick={() => handlerLinkColor("/")}
                            className={`text-lg font-bold ${linkColor === "/" ? "text-primary" : "text-white"}`}>
                            <Link 
                            href="/">Home</Link>
                        </li>

                        <li 
                            onClick={() => handlerLinkColor("/filmes")}
                            className={`text-lg font-bold ${linkColor === "/filmes" ? "text-primary" : "text-white"}`}>
                            <Link href="/filmes">Filmes</Link>
                        </li>

                        <li  
                            onClick={() => handlerLinkColor("/series")}
                            className={`text-lg font-bold ${linkColor === "/series" ? "text-primary" : "text-white"}`}>
                            <Link href="/">Series</Link>
                        </li>

                        <li 
                            onClick={() => handlerLinkColor("/myList")}
                            className={`text-lg font-bold ${linkColor === "/myList" ? "text-primary" : "text-white"}`}>
                            <Link href="/">Minha lista</Link>
                        </li>
                    </ul>
                </nav>

                <div className='flex items-center gap-[38px]'>
                    <TagInputSearchMovie onShowSearch={onShowSearch} />

                    {/* <UserAtivited />  */}
                    <ButtonLogin />
                    <ButtonRegister />
                </div>
            </header>

            <span
                style={{ display: `${openSeach ? "flex" : ""}` }}
                className='hidden flex-row justify-between w-full gap-2 bg-white fixed top-[71px] z-50 py-3 px-32 font-OpenSans'>

                <div className='flex items-center gap-2 w-full'>
                    <SearchIcon color='black' />

                    <input
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handlerPressKey}
                        value={searchValue}
                        className='text-xl border-none focus:rounded-md outline-none w-full'
                        maxLength={40}
                        type="text"
                        placeholder='Pesquisar por um filme ou serie'
                    />
                </div>

                <div 
                className='flex items-center justify-center w-10 cursor-pointer '
                onClick={() => setOpenSearch(!openSeach)}>
                    <IoMdClose size={25} />
                </div>
            </span>
        </>
    )
}
