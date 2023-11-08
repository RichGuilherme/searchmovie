import { FormSignIn } from "@/components/form/FormSignIn";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
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

      <main className="w-full h-[calc(100vh-56px)] bg-backgroundRegister font-OpenSans">
        <section className="relative w-full h-full flex flex-row justify-between items-start overflow-hidden">
          <div className="h-full pl-32 relative bg-cover bg-center">
            <div className="h-full flex flex-col justify-center items-center gap-8 text-white">
              <h1 className=" mb-7 text-6xl font-bold">
                FilmesLand
              </h1>
              <p className="max-w-[720px] text-3xl font-medium text-center leading-normal">
                Encontre o filme ou série que você tanto procura e descubra outras opções similares
              </p>
            </div>
          </div>

          <FormSignIn />
        </section>
      </main>
    </>
  )
}