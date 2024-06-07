import React from 'react'
import { FieldError } from 'react-hook-form'

type ErrorMessagerProps = {messageError: string }

export const ErrorMessager = ({messageError}: ErrorMessagerProps) => {
    return (
        <span className='pl-2 pt-2 text-zinc-300'>
            {messageError}
        </span>
    )
}
