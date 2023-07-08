import { TagInputSearchMovie } from './InputSearchMovie'

import Link from 'next/link'

import { ButtonLogin } from './ButtonLogin'
import { ButtonRegister } from './ButtonRegister'
import { Logo } from '../logo'
import { UserAtivited } from './UserAtivited'


export const Header = () => {
    return (
        <header className='flex items-center justify-between fixed w-full backdrop-blur-[3px] z-40 px-[70px] py-3.5 bg-[rgba(0,_0,_0,_.25)] font-OpenSans'>
            <nav className='flex items-center gap-[38px]'>
                <Logo />

                <ul className='flex gap-6'>
                    <li
                        className='text-lg text-textColors-200'>
                        <Link href="/">Home</Link>
                    </li>

                    <li
                        className='text-lg text-textColors-200'>
                        <Link href="/">Filmes</Link>
                    </li>

                    <li
                        className='text-lg text-textColors-200'>
                        <Link href="/">Series</Link>
                    </li>

                    <li
                        className='text-lg text-textColors-200'>
                        <Link href="/">Minha lista</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-[38px]'>
                <TagInputSearchMovie />

                {/* <UserAtivited />  */}
                <ButtonLogin />
                <ButtonRegister />
            </div>
        </header>
    )
}
