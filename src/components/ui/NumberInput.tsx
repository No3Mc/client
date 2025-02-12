'use client';

import React, { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface NumberInputProps {
    id: string; // Unique ID for the input field
    title: string; // Label for the input field
    placeholder?: string;
    language: string;
    onChange?: (value: number) => void; // Callback to get the updated value
    min?: number; // Minimum value
    max?: number; // Maximum value
    step?: number; // Step size for increment/decrement
    required?: boolean;
}

function NumberInput({ id, title, language, placeholder, onChange, min = 0, max = Infinity, step = 1, required = false }: NumberInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleIncrement = () => {
        if (inputRef.current) {
            const newValue = Math.min(parseInt(inputRef.current?.value ?? '0') + step, max);
            inputRef.current.value = newValue.toString();
            if (onChange) onChange(newValue);
        }
    };

    const handleDecrement = () => {
        if (inputRef.current) {
            const newValue = Math.max(parseInt(inputRef.current?.value ?? '0') - step, min);
            inputRef.current.value = newValue.toString();
            if (onChange) onChange(newValue);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputRef.current) {
            const newValue = Math.min(Math.max(Number(e.target.value), min), max);
            inputRef.current.value = newValue.toString();
            if (onChange) onChange(newValue);
        }
    };

    return (
        <span className='flex flex-col gap-[3px]'>
            <label htmlFor={id} className={language === 'ar' || language === 'ur' ? 'text-right' : ''}>{title}</label>
            <div className="flex items-center border-[1px] border-black rounded-[10px] overflow-hidden">
                {/* Input Field */}
                <input
                    type="number"
                    ref={inputRef}
                    onChange={handleChange}
                    className={twMerge(language === 'ar' || language === 'ur' ? 'text-right' : '', "w-full px-4 outline-none text-black")}
                    required={required}
                    aria-required={required}
                    placeholder={placeholder}
                />

                {/* Decrement Button */}
                <button
                    type='button'
                    onClick={handleDecrement}
                    className="px-4 bg-gray-200 hover:bg-gray-300 border-l-[1px] border-black text-black text-[28px]"
                >
                    -
                </button>

                {/* Increment Button */}
                <button
                    type='button'
                    onClick={handleIncrement}
                    className="px-4 bg-gray-200 hover:bg-gray-300 border-l-[1px] border-black text-black text-[28px]"
                >
                    +
                </button>
            </div>
        </span>
    );
};

export default NumberInput;
