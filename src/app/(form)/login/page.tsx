
import { InputLogin } from "@/components/form/InputLogin";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="w-full h-screen text-gray-800">
      <section className="relative w-full h-full flex flex-row justify-between items-start overflow-hidden">
        <div className="h-full w-96 p-4 relative bg-cover bg-center" style={{backgroundImage: 'url("/image/movie-background-collage1.jpg")'}}>
          <Link href="/">
            <Image
              priority={true}
              src="/image/logo.png"
              alt="logo"
              height={43}
              width={181}
            />
          </Link>
          <div className="h-full flex flex-col justify-center items-center gap-8">
            <h1 className="text-6xl font-extrabold">Olá, Amigo!</h1>
            <p className="text-xl font-light text-center max-w-xs">Caso não tenha criado uma conta</p>
            <button className="w-80 h-16 mt-8 border border-white rounded-full text-2xl font-bold bg-transparent">
              <Link href="/register">Cria conta</Link>
            </button>
          </div>
        </div>
        <InputLogin />
      </section>
    </main>
  );
}