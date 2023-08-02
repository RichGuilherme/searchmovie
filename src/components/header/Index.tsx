"use client"

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { IoIosClose, IoMdClose } from 'react-icons/io'
import { IoMenuOutline } from "react-icons/io5"

import { TagInputSearchMovie } from './InputSearchMovie'
import { ButtonLogin } from './ButtonLogin'
import { ButtonRegister } from './ButtonRegister'
import { Logo } from '../logo'
import { UserAtivited } from './UserAtivited'
import { SearchIcon } from '../icons/Search-icon'



export const Header = () => {
    const [navMobile, setNavMobile] = useState(false)
    const [searchValue, setSearchValue] = useState<string>("")
    const [openSeach, setOpenSearch] = useState<boolean>(false)

    const { push } = useRouter()
    const pathname = usePathname()

    const onShowSearch = (show: boolean) => {
        setOpenSearch(show)
    }


    const handleSearch = (event: any) => {
        event.preventDefault()

        if (searchValue === "") return
           
        push(`/results?search=${searchValue}&page=1`)

        setOpenSearch(!openSeach)
        setSearchValue("")
    }

   


    const spanSearch = (
        <span
            style={{ display: `${openSeach ? "flex" : ""}` }}
            className='hidden flex-row justify-between w-full gap-2 bg-white fixed top-[71px] z-50 py-3 px-5 sm:px-32 font-OpenSans'>

            <div className='flex items-center gap-2 w-full'>
                <div onClick={handleSearch}>
                    <SearchIcon
                        color='black' />
                </div>

                <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    // onKeyDown={handlerPressKey}
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
    )


    return (
        <>
            <header className='flex items-center justify-between fixed w-full backdrop-blur-[3px] 
                     z-40 px-4 py-3.5 bg-[rgba(0,_0,_0,_.25)] font-OpenSans
                     sm:px-[70px] '>

                <nav className='flex items-center gap-[38px]'>
                    <Logo />

                    <ul className='hidden lg:flex gap-6 mr-4'>
                        <li
                            className={`text-lg font-bold hover:text-primary
                             ${pathname === "/" ? "text-primary" : "text-white"}`}>
                            <Link
                                href="/">Home</Link>
                        </li>

                        <li
                            className={`text-lg font-bold hover:text-primary  
                            ${pathname === "/filmes" ? "text-primary" : "text-white"}`}>
                            <Link href="/filmes">Filmes</Link>
                        </li>

                        <li
                            className={`text-lg font-bold hover:text-primary 
                            ${pathname === "/series" ? "text-primary" : "text-white"}`}>
                            <Link href="/series">Series</Link>
                        </li>

                        <li
                            className={`text-lg font-bold hover:text-primary whitespace-nowrap
                            ${pathname === "/myList" ? "text-primary" : "text-white"}`}>
                            <Link href="/">Minha lista</Link>
                        </li>
                    </ul>

                </nav>

                {/* Parte com o iconSearch e de login/register */}
                <div className='flex items-center'>
                    <TagInputSearchMovie onShowSearch={onShowSearch} />
                    <div
                        onClick={() => setNavMobile(!navMobile)}
                        className='block lg:hidden cursor-pointer z-10 text-white hover:text-primary'>
                        {navMobile ? <IoIosClose size={39} /> : <IoMenuOutline size={39} />}
                    </div>


                    <div className='hidden lg:flex items-center'>
                        {/* <UserAtivited />  */}
                        <ButtonLogin />
                        <ButtonRegister />
                    </div>
                </div>

                {navMobile &&
                    <aside
                        className='w-7/12 max-sm:w-full h-screen absolute top-0 right-0 
                        bg-[#000000e6]'>

                        <ul className='h-full flex flex-col justify-center items-center gap-9 '>
                            <li
                                className={`text-lg font-bold hover:text-primary
                                     ${pathname === "/" ? "text-primary" : "text-white"}`}>
                                <Link
                                    href="/">Home</Link>
                            </li>

                            <li
                                className={`text-lg font-bold hover:text-primary  
                                    ${pathname === "/filmes" ? "text-primary" : "text-white"}`}>
                                <Link href="/filmes">Filmes</Link>
                            </li>

                            <li
                                className={`text-lg font-bold hover:text-primary 
                                    ${pathname === "/series" ? "text-primary" : "text-white"}`}>
                                <Link href="/series">Series</Link>
                            </li>

                            <li
                                className={`text-lg font-bold hover:text-primary whitespace-nowrap
                                    ${pathname === "/myList" ? "text-primary" : "text-white"}`}>
                                <Link href="/">Minha lista</Link>
                            </li>
                        </ul>
                    </aside>
                }
            </header>


            {/* Quando o usuário clicar no icone de pesquisar essa aba irá aparecer */}
            {spanSearch}
        </>
    )
}
