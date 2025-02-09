'use client';

import React from 'react'
import { twMerge } from 'tailwind-merge';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    title: string;
    language: string;
}

function InputField({ id, title, placeholder, language, ...props }: InputFieldProps) {
    return (
        <span className='flex flex-col gap-[5px]'>
            <label htmlFor={id} className={language === 'ar' || language === 'ur' ? 'text-right' : ''}>{title}</label>
            <input id={id} className={twMerge(language === 'ar' || language === 'ur' ? 'text-right' : '', 'border-[1px] border-black rounded-[10px] py-2 px-4')} placeholder={placeholder} {...props} />
        </span>
    )
}

export default InputField