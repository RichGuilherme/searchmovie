import { InputRegister } from "@/components/form/InputRegister";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
    return (
      <main className="w-full h-full">
        <section className="relative w-full h-full flex flex-row justify-between items-start overflow-y-hidden">
          <div className="h-full w-910 px-15 relative bg-cover bg-center" style={{ backgroundImage: "url('/image/movie-background-collage1.jpg')" }}>
            <Link href="/">
              <Image
                priority={true}
                src="/image/logo.png"
                alt="logo"
                height={43}
                width={181}
              />
            </Link>
            <div className="h-full flex flex-col justify-center items-center gap-28">
              <h1 className="text-9xl font-extrabold">Olá, Amigo!</h1>
              <p className="text-4xl font-light max-w-290 text-center">Caso não tenha criado uma conta</p>
              <button className="w-312 h-65 border-2 border-white rounded-full font-bold text-6xl cursor-pointer">
                <Link href="/login">Login</Link>
              </button>
            </div>
          </div>
          <InputRegister />
        </section>
      </main>
    );
  }