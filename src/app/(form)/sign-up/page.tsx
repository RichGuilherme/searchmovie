import { FormSignUp } from "@/components/form/FormSignUp";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <header className="flex items-center pl-20 h-14 bg-black">
        <Link href="/">
          <Image
            priority={true}
            src="/image/logo.png"
            alt="logo"
            height={43}
            width={181}
          />
        </Link>
      </header>

      <main className="w-full h-full bg-backgroundRegister font-OpenSans">
        <section className="w-full min-h-[calc(100vh-56px)] flex flex-col items-center xl:flex-row max-xl:pt-8 max-xl:gap-16 overflow-hidden">
          <div className="h-full sm:w-[480px] max-sm:px-3 pl-0 xl:pl-32 bg-cover bg-center">
            <div className="h-full flex flex-col justify-center items-center gap-3 xl:gap-8 text-white">
              <h1 className=" mb-7 text-6xl font-bold">
                FilmesLand
              </h1>
              
              <p className="max-w-[720px] text-3xl font-medium text-center leading-normal">
                Encontre o filme ou série que você tanto procura e descubra outras opções similares
              </p>
            </div>
          </div>

          <FormSignUp />
        </section>
      </main>
    </>
  )
}
