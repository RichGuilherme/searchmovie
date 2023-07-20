import Link from "next/link"
import { Logo } from "../logo"


export const Footer = () => {
  
  return (
    <footer className="flex justify-center items-center w-full h-40% text-white font-OpenSans relative">

      <div className="absolute top-0 w-full h-full ">
        <div className="w-full h-full absolute top-0 bg-no-repeat bg-[cover] opacity-10 bg-[url(/image/movie-poster.jpg)]"></div>
      </div>

      <nav className="flex flex-col items-center mt-10 mb-14 z-10">
        <Logo />

        <ul className="flex gap-4 mt-14 text-xl">
          <li
            className="">
            <Link href="/">Home</Link>
          </li>

          <li
            className="">
            <Link href="/filmes">Filmes</Link>
          </li>

          <li
            className="">
            <Link href="/series">Series</Link>
          </li>

          <li
            className="">
            <Link href="/">Minha lista</Link>
          </li>
        </ul>
      </nav>

      <p className="ml-24 w-56 z-10 text-center">
        ©Copyright 2023 FilmsLand . All rights reserved.
      </p>
    </footer>
  )
}
