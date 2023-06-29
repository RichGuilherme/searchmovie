import { FacebookIcon } from "@/components/icons/facebook-icon";
import { GoogleIcon } from "@/components/icons/google-icon";

export const InputRegister = () => {
  return (
    <section className="w-full h-full flex flex-col mt-85 bg-background-dark">
      <div className="flex flex-col items-center gap-28">
        <h1 className="text-6xl font-bold">
          Entrar no <span className="text-color-primary">FilmesLand</span>
        </h1>
        <div className="flex gap-18">
          <div className="p-4 border-2 border-white rounded-full cursor-pointer">
            <GoogleIcon />
          </div>
          <div className="p-4 border-2 border-white rounded-full cursor-pointer">
            <FacebookIcon />
          </div>
        </div>
        <p className="text-2xl font-light">Ou usar sua conta email:</p>
        <form className="flex flex-col items-center" action="">
          <div className="mb-10">
            <label className="text-xl font-light" htmlFor="email">
              Seu Email
            </label>
            <input
              className="w-491 h-67 border-2 border-white rounded-lg bg-transparent text-text-color2 pl-4 text-3xl"
              type="email"
              id="email"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-10">
            <label className="text-xl font-light" htmlFor="passwordId">
              Sua Senha
            </label>
            <input
              className="w-491 h-67 border-2 border-white rounded-lg bg-transparent text-text-color2 pl-4 text-3xl"
              type="current-password"
              id="passwordId"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="mb-10">
            <label className="text-xl font-light" htmlFor="confirmPasswordId">
              Confirma Senha
            </label>
            <input
              className="w-491 h-67 border-2 border-white rounded-lg bg-transparent text-text-color2 pl-4 text-3xl"
              type="current-password"
              id="confirmPasswordId"
              placeholder="Digite sua senha"
            />
          </div>
          <button className="w-312 h-65 rounded-full bg-background-color text-color-primary text-6xl font-bold cursor-pointer hover:bg-color-primary hover:text-text-color2">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
};