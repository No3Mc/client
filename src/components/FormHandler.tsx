'use client';

import React from 'react'
import FormComponent from '@/components/FormComponent';
import { FormData } from '@/types/form';
import InputField from './ui/InputField';
import NumberInput from './ui/NumberInput';

function FormHandler({ form, submit, language }: { form: FormData, submit: string, language: string }) {
    const [name, setName] = React.useState<string>('');
    const [contact, setContact] = React.useState<number>(0);
    const [selected, setSelected] = React.useState<number>(0);
    const [length, setLength] = React.useState<number>(0);
    const [width, setWidth] = React.useState<number>(0);

    return (
        <form className='p-5'>
            <div className='pt-5 pb-[30px]'>
                <FormComponent title={form.personalInfo} titleBg={'#71717A'}>
                    <div className='flex flex-col gap-[15px]'>
                        <InputField id='name' type='text' title={form.namePlaceholder} placeholder={form.namePlaceholder} language={language} required onChange={(e) => setName(e.target.value)} value={name} />
                        <InputField id='contact' type='number' title={form.contactPlaceholder} placeholder={form.contactPlaceholder} language={language} required onChange={(e) => setContact(Number(e.target.value))} value={contact} />
                    </div>
                </FormComponent >
            </div>

            <hr className='bg-[#D8D8D8] h-[2px] -mx-5' />

            <div className='py-8'>
                <FormComponent title={form.levelsQuestion} titleBg={'#00C73C'}>
                    <div className="flex space-x-4 justify-center items-center">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                className={`w-12 h-12 rounded-full border-[1px] border-black flex items-center justify-center text-[24px] ${selected === num
                                    ? 'bg-[#00AAFF] text-white'
                                    : 'bg-white text-black'
                                    }`}
                                onClick={() => setSelected(num)}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={form.levelsQuestion} titleBg={'#00C73C'}>
                    <div className='flex flex-col gap-[15px]'>
                        <NumberInput id='length' title={'Length (meters)'} language={language} value={length} onChange={(value) => setLength(value)} min={1} max={5} step={1} required />
                        <NumberInput id='width' title={'Width (meters)'} language={language} value={width} onChange={(value) => setWidth(value)} min={1} max={5} step={1} required />
                    </div>
                </FormComponent >
            </div>

            <button type='submit' className='w-full bg-[#00AAFF] text-white py-2 rounded-[10px]'>{submit}</button>
        </form >
    )
}

export default FormHandler