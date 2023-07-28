import Link from "next/link"
import { Logo } from "../logo"


export const Footer = () => {
  const links = [{
    id: 1,
    linkName: "Home",
    href: "/"
  },
  {
    id: 2,
    linkName: "Filmes",
    href: "/filmes"
  },
  {
    id: 3,
    linkName: "Series",
    href: "/series"
  },
  {
    id: 4,
    linkName: "Minha lista",
    href: "/"
  }
  ]

  return (
    <footer className="flex sm:flex-row flex-col justify-center items-center w-full h-40% text-white font-OpenSans 
    relative max-sm:pb-7">

      <div className="absolute top-0 w-full h-full ">
        <div className="w-full h-full absolute top-0 bg-no-repeat bg-[cover] opacity-10 bg-[url(/image/movie-poster.jpg)]"></div>
      </div>

      <nav className="flex flex-col items-center mt-10 mb-14 z-10">
        <Logo />

        <ul className="flex gap-4 mt-14 text-xl">
          {links.map(({ id, linkName, href }) => (
            <li
              key={id}
              className="hover:text-primary">
              <Link href={href}>{linkName}</Link>
            </li>
          ))}

        </ul>
      </nav>

      <p className="ml-24 w-56 z-10 text-center max-sm:ml-0">
        ©Copyright 2023 FilmsLand . All rights reserved.
      </p>
    </footer>
  )
}
