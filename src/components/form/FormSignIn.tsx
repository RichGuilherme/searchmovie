"use client"
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail, } from "react-icons/md";

import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import { ErrorMessager } from "./ErrorMessager";
import { InputPasswords } from "./InputPasswords";
import { AuthInput } from "./AuthInput";



const schemaLogin = z.object({
  email: z.string().email("Email invalido!"),
  password: z.string().min(5, "Senha curta demais!"),
})

type PropsForm = z.infer<typeof schemaLogin>

export const FormSignIn = () => {
  const pathname = usePathname()

  const methods = useForm({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const handleLoginForm = async (data: PropsForm) => {
    const { email, password } = data

    console.log(email, password)
  }

  return (
    <section className="flex flex-col flex-wrap items-center justify-center sm:w-[578px] mx-auto h-full max-xl:mb-12 max-sm:px-4 bg-dark text-textColors-200">
      <div className="flex flex-col justify-center sm:w-[480px] w-full ">
        <nav className="flex justify-start gap-10 mb-9 text-lg">
          <Link
            className={`${pathname === "/sign-in" ? "after:block after:w-full after:h-1 after:rounded-full after:mt-1 after:bg-primary"
              : "text-textColors-100"}
            hover:text-textColors-200`}
            href="/sign-in">
            Sign In
          </Link>

          <Link
            className={`${pathname === "/sign-up" ? "after:block after:w-full after:h-1 after:rounded-full after:mt-1 after:bg-primary"
              : "text-textColors-100"}
            hover:text-textColors-200`}
            href="/sign-up">
            Sign Up
          </Link>
        </nav>

        <FormProvider {...methods}>
          <form className="flex flex-col gap-6 h-full" onSubmit={methods.handleSubmit(handleLoginForm)}>

            <div className="flex flex-col">
              <div className="flex items-center w-full h-12 bg-transparent border border-white rounded-full pl-6 text-xl">
                <MdAlternateEmail size={26} />
                <input
                  type="email"
                  autoComplete="username"
                  id="email"
                  placeholder="Email"
                  {...methods.register("email")}
                  className="w-11/12 bg-transparent border-none outline-none text-lg focus:ring-0 placeholder:text-textColors-200"
                />
              </div>
              {methods.formState.errors.email?.message && (
                <ErrorMessager messageError={methods.formState.errors.email.message} />
              )}
            </div>

            <InputPasswords />

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="ml-3 w-5 h-5 rounded-md border-1 border-white bg-transparent checked:text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <label htmlFor="checkbox">Lembrar de mim</label>
              </div>

              <button
                type="submit"
                disabled={methods.formState.isSubmitting}
                className="bg-primary px-12 py-[10px] rounded-full text-primary-text text-xl font-medium hover:bg-white hover:text-primary"
              >
                {methods.formState.isSubmitting ? "..." : "Register"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>

      <span className="flex flex-row items-center gap-5 w-full
          after:block after:w-full after:h-[2px] after:bg-textColors-100 
          before:block before:w-full before:h-[2px] before:bg-textColors-100">
        Ou
      </span>

      <AuthInput />
    </section>
  );
};
