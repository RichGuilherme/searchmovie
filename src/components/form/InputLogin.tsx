import { FacebookIcon } from "@/components/icons/facebook-icon"
import { GoogleIcon } from "@/components/icons/google-icon"


export const InputLogin = () => {
    return (
      <section className="w-full h-full flex flex-col items-center mt-85 bg-dark">
        <div className="flex flex-col items-center gap-28">
          <h1 className="text-6xl font-bold">
            Entrar no <span className="text-primary">FilmesLand</span>
          </h1>
          <div className="flex gap-18">
            <div className="p-4 border-2 border-white rounded-full cursor-pointer">
              <GoogleIcon />
            </div>
            <div className="p-4 border-2 border-white rounded-full cursor-pointer">
              <FacebookIcon />
            </div>
          </div>
          <p className="text-2xl font-light">Ou usar sua conta de e-mail:</p>
          <form className="flex flex-col items-center h-full">
            <div className="flex flex-col items-center mb-10">
              <label htmlFor="email" className="text-xl font-light mb-1">
                Seu Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="w-80 h-16 border border-white rounded-lg pl-4 text-xl"
              />
            </div>
            <div className="flex flex-col items-center mb-10">
              <label htmlFor="passwordId" className="text-xl font-light mb-1">
                Sua Senha
              </label>
              <input
                type="current-password"
                id="passwordId"
                placeholder="Digite sua senha"
                className="w-80 h-16 border border-white rounded-lg pl-4 text-xl"
              />
            </div>
            <button
              type="submit"
              className="w-80 h-16 bg-primary text-primary-text text-2xl font-bold rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    );
  };
