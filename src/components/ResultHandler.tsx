'use client';

import { ResultData } from '@/types/form'
import React from 'react'
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { redirect } from "next/navigation";
import FormComponent from './FormComponent';

const BASE_FEED_MACHINE_PRICE = 15000;
const BASE_MAINTENANCE = 5000;
const BASE_MONTHLY_LOSS = 2000;
const BASE_USD = 279.33;
const BASE_EUR = 287.94;

function ResultHandler({ result, calculateAgain, language }: { result: ResultData, calculateAgain: string, language: string }) {
    const [currency, setCurrency] = React.useState<string>('PKR');
    const [feedMachinePrice, setFeedMachinePrice] = React.useState<number>(BASE_FEED_MACHINE_PRICE);
    const [maintenance, setMaintenance] = React.useState<number>(BASE_MAINTENANCE);
    const [monthlyLoss, setMonthlyLoss] = React.useState<number>(BASE_MONTHLY_LOSS);

    const handleCurrencyChange = (value: string) => {
        setCurrency(value);
        if (value === 'PKR') {
            setFeedMachinePrice(BASE_FEED_MACHINE_PRICE);
            setMaintenance(BASE_MAINTENANCE);
            setMonthlyLoss(BASE_MONTHLY_LOSS);
        } else if (value === 'USD') {
            setFeedMachinePrice(BASE_FEED_MACHINE_PRICE / BASE_USD);
            setMaintenance(BASE_MAINTENANCE / BASE_USD);
            setMonthlyLoss(BASE_MONTHLY_LOSS / BASE_USD);
        } else if (value === 'EUR') {
            setFeedMachinePrice(BASE_FEED_MACHINE_PRICE / BASE_EUR);
            setMaintenance(BASE_MAINTENANCE / BASE_EUR);
            setMonthlyLoss(BASE_MONTHLY_LOSS / BASE_EUR);
        }
    }

    const handleCalculateAgain = () => {
        redirect(`/${language}/`);
    };

    return (
        <div className="p-5 bg-[#00AAFF]">
            {/* Currency Selection */}
            <div className='flex justify-between items-center pt-4'>
                <h2 className='text-[32px] text-white'>Results</h2>

                <Select value={currency} onValueChange={(value) => handleCurrencyChange(value)}>
                    <SelectTrigger className="text-white border-[1px] border-white rounded-[6px] text-[18px] h-[50px] w-[179px]">
                        <span>{result.currency} {currency}</span>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="PKR">PKR</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Data Cards */}
            <div className='pt-10 pb-8'>
                <FormComponent title={result.feedMachinePrice} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">{feedMachinePrice.toLocaleString('en-US')} {currency}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.maintenance} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">{maintenance.toLocaleString('en-US')} {currency}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.roi} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">08 {result.months}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.projectCompletionTime} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">02 {result.months}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.dispenseTime} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">1 {result.hour} 25 {result.minutes}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.monthlyLoss} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">{monthlyLoss.toLocaleString('en-US')} {currency}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.feedWasted} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">5 Kg</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.electricityUsage} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">3</p>
                </FormComponent >
            </div>

            <button type='submit' onClick={handleCalculateAgain} className='w-full bg-[#40BFFF] text-white py-2 rounded-[10px] text-[20px]'>{calculateAgain}</button>
        </div>
    )
}

export default ResultHandler