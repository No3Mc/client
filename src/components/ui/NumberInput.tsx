'use client';

import React, { useState } from 'react';

interface NumberInputProps {
    id: string; // Unique ID for the input field
    title: string; // Label for the input field
    language: string;
    value?: number; // Optional initial value
    onChange?: (value: number) => void; // Callback to get the updated value
    min?: number; // Minimum value
    max?: number; // Maximum value
    step?: number; // Step size for increment/decrement
    required?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
    id,
    title,
    language,
    value = 0,
    onChange,
    min = 0,
    max = Infinity,
    step = 1,
    required = false
}) => {
    const [internalValue, setInternalValue] = useState(value);

    const handleIncrement = () => {
        const newValue = Math.min(internalValue + step, max);
        setInternalValue(newValue);
        if (onChange) onChange(newValue);
    };

    const handleDecrement = () => {
        const newValue = Math.max(internalValue - step, min);
        setInternalValue(newValue);
        if (onChange) onChange(newValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Math.min(Math.max(Number(e.target.value), min), max);
        setInternalValue(newValue);
        if (onChange) onChange(newValue);
    };

    return (
        <span className='flex flex-col gap-[5px]'>
            <label htmlFor={id} className={language === 'ar' || language === 'ur' ? 'text-right' : ''}>{title}</label>
            <div className="flex items-center border-[1px] border-black rounded-[10px] overflow-hidden">
                {/* Input Field */}
                <input
                    type="number"
                    value={internalValue}
                    onChange={handleChange}
                    className="w-full px-4 outline-none text-black"
                    required={required}
                />

                {/* Decrement Button */}
                <button
                    onClick={handleDecrement}
                    className="px-4 bg-gray-200 hover:bg-gray-300 border-l-[1px] border-black text-black text-[28px]"
                >
                    -
                </button>

                {/* Increment Button */}
                <button
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
