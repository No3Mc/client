'use client';

import React, { useEffect, useState } from 'react'
import FormComponent from '@/components/FormComponent';
import { FormData } from '@/types/form';
import InputField from './ui/InputField';
import NumberInput from './ui/NumberInput';
import ButtonGroup from './ui/ButtonGroup';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import CalculatingScreen from './CalculatingScreen';
import { sendSlackMessage } from '@/lib/actions';

function FormHandler({ form, submit, language }: { form: FormData, submit: string, language: string }) {
    // const { ...name } = useField('text')
    // const { ...contact } = useField('number')
    // const [selected, setSelected] = React.useState<number>(0);
    // const [length, setLength] = React.useState<number>(0);
    // const [width, setWidth] = React.useState<number>(0);
    // const [chickens, setChickens] = React.useState<number>(0);
    // const [salary, setSalary] = React.useState<number>(0);
    // const [shedType, setShedType] = React.useState<string>(form.batterySheds);
    // const [cageType, setCageType] = React.useState<string>(form.karachiCages);
    const { register, handleSubmit, setValue, watch } = useForm();
    const [isCalculating, setCalculating] = useState(false);

    const selected = watch("selected");
    const length = watch("length");
    const width = watch("width");
    const chickens = watch("chickens");
    const salary = watch("salary");
    const shedType = watch("shedType");
    const cageType = watch("cageType");

    useEffect(() => {
        register("selected");
        register("length");
        register("width");
        register("chickens");
        register("salary");
        register("shedType");
        register("cageType");
    }, [register]);

    const submitData = async (data: any) => {
        setCalculating(true);

        window.parent.postMessage({
            type: 'formSubmitted',
            payload: JSON.stringify(data)
        }, '*');

        const result = await sendSlackMessage(data);
        if (data.selected !== 2 || data.shedType !== form.semiControlled || data.cageType !== form.aTypeCage) {
            setTimeout(() => {
                redirect(`${language}/contact`);
            }, 3000);
            return;
        }
        if (result.success) {
            setTimeout(() => {
                redirect(`${language}/calculate?data=${JSON.stringify(data)}`);
            }, 3000);
        } else {
            setCalculating(false);
            redirect(`/${language}/`);
        }
    };

    return (
        <>
            {isCalculating && <CalculatingScreen />}

            <form className='p-5' onSubmit={handleSubmit((data) => submitData(data))}>
                <div className='pt-5 pb-[30px]'>
                    <FormComponent title={form.personalInfo} titleBg={'#71717A'}>
                        <div className='flex flex-col gap-[15px]'>
                            <InputField id='name' title={form.namePlaceholder} placeholder={form.namePlaceholder} language={language} required aria-required {...register('name')} />
                            <InputField id='contact' title={form.contactPlaceholder} placeholder={form.contactPlaceholder} language={language} required aria-required {...register('contact')} />
                        </div>
                    </FormComponent >
                </div>

                <hr className='bg-[#D8D8D8] h-[2px] -mx-5' />

                <div className='py-8'>
                    <FormComponent title={form.levelsQuestion} titleBg={selected ? '#00C73C' : '#E40000'}>
                        <div className="flex space-x-4 justify-center items-center">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <label key={num} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="selected"
                                        value={num}
                                        onChange={() => setValue("selected", num)}
                                        className="hidden"
                                        required
                                    />
                                    <div
                                        className={`w-12 h-12 rounded-full border-[1px] border-black flex items-center justify-center text-[24px] ${selected === num ? 'bg-[#00AAFF] text-white' : 'bg-white text-black'
                                            }`}
                                    >
                                        {num}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </FormComponent >
                </div>

                <div className='pt-4 pb-8'>
                    <FormComponent title={form.rowDimensions} titleBg={length && width ? '#00C73C' : '#E40000'}>
                        <div className='flex flex-col gap-[15px]'>
                            <NumberInput id='length' title={form.lengthPlaceholder} language={language} onChange={(value) => setValue("length", value)} step={1} required />
                            <NumberInput id='width' title={form.widthPlaceholder} language={language} onChange={(value) => setValue("width", value)} step={1} required />
                        </div>
                    </FormComponent >
                </div>

                <div className='pt-4 pb-8'>
                    <FormComponent title={form.totalChickens} titleBg={chickens ? '#00C73C' : '#E40000'}>
                        <NumberInput id='noOfChickens' title={form.totalChickens} placeholder={form.chickensPlaceholder} language={language} onChange={(value) => setValue("chickens", value)} step={1} required />
                    </FormComponent >
                </div>

                <div className='pt-4 pb-8'>
                    <FormComponent title={form.salaryPlaceholder} titleBg={salary ? '#00C73C' : '#E40000'}>
                        <NumberInput id='salaries' title={form.salaries} placeholder={form.salaries} language={language} onChange={(value) => setValue("salary", value)} step={1} required />
                    </FormComponent >
                </div>

                <div className='pt-4 pb-8'>
                    <FormComponent title={form.shedType} titleBg={shedType ? '#00C73C' : '#E40000'}>
                        <ButtonGroup
                            id='shedType'
                            options={[form.semiControlled, form.batterySheds, form.floor]}
                            defaultValue={shedType} // Set default selection
                            onChange={(value: string) => setValue("shedType", value)} // Handle selection changes
                        />
                    </FormComponent >
                </div>

                <div className='pt-4 pb-8'>
                    <FormComponent title={form.cageType} titleBg={cageType ? '#00C73C' : '#E40000'}>
                        <ButtonGroup
                            id='cageType'
                            options={[form.aTypeCage, form.hTypeCage]}
                            defaultValue={cageType} // Set default selection
                            onChange={(value: string) => setValue("cageType", value)} // Handle selection changes
                        />
                    </FormComponent >
                </div>

                <button type='submit' className='w-full bg-[#00AAFF] text-white py-2 rounded-[10px] text-[20px]'>{submit}</button>
            </form >
        </>
    )
}

export default FormHandler