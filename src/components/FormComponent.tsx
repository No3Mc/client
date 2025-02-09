import React from 'react'

interface FormComponentProps {
    title: string
    titleBg: string
    children: React.ReactNode
}

function FormComponent({ title, titleBg, children }: FormComponentProps) {
    return (
        <div className='relative border-[1px] border-black rounded-[10px]'>
            <button className='absolute top-[-15px] left-[50%] translate-x-[-50%] bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center text-lg font-bold border-[2px] border-black'>?</button>
            <h4 className='text-[18px] text-white text-center text-balance pt-[30px] px-5 pb-4 rounded-t-[10px] border-b-[1px] border-black' style={{ backgroundColor: titleBg }}>{title}</h4>
            <div className='p-5'>{children}</div>
        </div>
    )
}

export default FormComponent