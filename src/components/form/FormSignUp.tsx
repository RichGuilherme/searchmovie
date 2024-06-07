"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

import { FacebookIcon } from "@/components/icons/facebook-icon"
import { GoogleIcon } from "@/components/icons/google-icon"

import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"


const schemaRegister = z.object({
  username: z.string().min(5, "Username dever possuir no mínimo 5 caracteres!"),
  email: z.string().email("Email invalido!"),
  password: z.string().min(5, "Senha curta demais!"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas diferentes!",
  path: ["confirmPassword"]
});

type PropsForm = z.infer<typeof schemaRegister>

export const FormSignUp = () => {
  const pathname = usePathname()
  const [showPassword, setShowPassoword] = useState(false)
  const [showPasswordConfirm, setShowPassowordConfirm] = useState(false)

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  })

  const handleRegisterForm = async (data: PropsForm) => {
    const email = data.email
    const password = data.password
    const username = data.username

    console.log(email, password, username)
  }

  return (
    <div className="flex flex-col flex-wrap items-center justify-center sm:w-[578px] mx-auto h-full max-xl:mb-12 max-sm:px-4 bg-dark text-textColors-200">
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

        <form className="flex flex-col gap-6 h-full" onSubmit={handleSubmit(handleRegisterForm)}>
          {/* Input Username */}
          <div className="flex flex-col items-center w-full h-14 bg-transparent border border-white rounded-full pl-6 text-xl">
            <AiOutlineUser size={26} />
            <input
              type="text"
              id="username"
              placeholder="Username"
              {...register("username")}
              className="w-11/12 bg-transparent border-none outline-none text-lg focus:ring-0 placeholder:text-textColors-200"
            />
            {errors.username?.message && (
              <span >
                {errors.username?.message}
              </span>
            )}
          </div>

          {/* Input Email */}
          <div>
            <div className="flex items-center w-full h-14 bg-transparent border border-white rounded-full pl-6 text-xl">
              <MdAlternateEmail size={26} />
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
                className="w-11/12 bg-transparent border-none outline-none text-lg focus:ring-0 placeholder:text-textColors-200"
              />
            </div>

            {errors.email?.message && (
              <span>
                {errors.email?.message}
              </span>
            )}
          </div>

          {/* Input senha */}
          <div className="flex flex-col w-full h-full bg-transparent border border-white rounded-full pl-6 text-xl">
            <div className="flex items-center">

              <AiOutlineLock size={26} />
              <input
                type={`${showPassword ? "current-password" : "password"}`}
                placeholder="Senha"
                {...register("password")}
                className="w-10/12 bg-transparent border-none outline-none pl-3 text-lg focus:ring-0 placeholder:text-textColors-200"
              />

              {showPassword ?
                <AiOutlineEye
                  onClick={() => setShowPassowordConfirm(!showPasswordConfirm)}
                  className="cursor-pointer"
                  size={26} />
                :
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassoword(!showPassword)}
                  className="cursor-pointer"
                  size={26} />
              }
            </div>

            {errors.confirmPassword?.message && (
              <span>
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>

          {/* Input confirma senha */}
          <div className="flex items-center w-full h-14 bg-transparent border border-white rounded-full pl-6 text-xl">
            <AiOutlineLock size={26} />

            <input
              type={`${showPasswordConfirm ? "current-password" : "password"}`}
              placeholder="Confirma Senha"
              {...register("confirmPassword")}
              className="w-10/12 bg-transparent border-none outline-none pl-3 text-lg focus:ring-0 placeholder:text-textColors-200"
            />

            {showPasswordConfirm ?
              <AiOutlineEye
                onClick={() => setShowPassowordConfirm(!showPasswordConfirm)}
                className="cursor-pointer"
                size={26} />
              :
              <AiOutlineEyeInvisible
                onClick={() => setShowPassowordConfirm(!showPasswordConfirm)}
                className="cursor-pointer"
                size={26} />
            }
          </div>


          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <input type="checkbox"
                id="checkbox"
                className="ml-3 w-5 h-5 rounded-md border-1 border-white bg-transparent checked:text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="checkbox">Lembrar de mim</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary px-14 py-[10px] rounded-full text-primary-text text-xl font-medium hover:bg-white hover:text-primary"
            >
              {isSubmitting ? "..." : "Register"}
            </button>
          </div>
        </form>


      </div>

      <span className="flex flex-row items-center gap-5 w-full
          after:block after:w-full after:h-[2px] after:bg-textColors-100 
          before:block before:w-full before:h-[2px] before:bg-textColors-100">
        Ou
      </span>


      <div className="flex flex-col sm:flex-row gap-5 w-[97%] h-auto mt-6">
        <button className="flex items-center justify-center gap-3 w-full py-[14px] rounded-full bg-[#1540CB]">
          <FacebookIcon />
          Login com Facebook
        </button>

        <button className="flex items-center justify-center gap-3 w-full py-[14px] rounded-full bg-[#DC5037]">
          <GoogleIcon />
          Login com Google
        </button>
      </div>
    </div>
  );
};
