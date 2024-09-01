import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock } from 'react-icons/ai'
import { ErrorMessager } from './ErrorMessager'
import { useFormContext } from 'react-hook-form'

type InputPasswordsProps = { onConfirmPassword?: boolean }

export const InputPasswords = ({ onConfirmPassword }: InputPasswordsProps) => {
    const { register, formState: { errors } } = useFormContext()
    const [showPassword, setShowPassoword] = useState(false)
    const [showPasswordConfirm, setShowPassowordConfirm] = useState(false)

    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center w-full h-12 bg-transparent border border-white rounded-full pl-6 text-xl">
                    <AiOutlineLock size={26} />
                    <input
                        type={`${showPassword ? "text" : "password"}`}
                        autoComplete="new-password"
                        placeholder="Senha"
                        {...register("password")}
                        className="w-10/12 bg-transparent border-none outline-none pl-3 text-lg focus:ring-0 placeholder:text-textColors-200"
                    />

                    {showPassword ?
                        <AiOutlineEye
                            onClick={() => setShowPassoword(!showPassword)}
                            className="cursor-pointer"
                            size={26} />
                        :
                        <AiOutlineEyeInvisible
                            onClick={() => setShowPassoword(!showPassword)}
                            className="cursor-pointer"
                            size={26} />
                    }
                </div>

                {errors.password?.message && (
                    <ErrorMessager messageError={errors.password.message.toString()} />
                )}
            </div>

            {/* Input confirma senha */}
            {onConfirmPassword &&
                <div className='flex flex-col'>
                    <div className="flex items-center w-full h-12 bg-transparent border border-white rounded-full pl-6 text-xl">
                        <AiOutlineLock size={26} />

                        <input
                            type={`${showPasswordConfirm ? "text" : "password"}`}
                            autoComplete="new-password"
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

                    {errors.confirmPassword?.message && (
                        <ErrorMessager messageError={errors.confirmPassword.message.toString()} />
                    )}
                </div>
            }
        </>
    )
}
