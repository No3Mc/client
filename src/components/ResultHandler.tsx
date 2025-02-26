'use client';

import { ResultData } from '@/types/form'
import React from 'react'
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { redirect, useSearchParams } from "next/navigation";
import FormComponent from './FormComponent';

const PER_CHICKEN_PRICE = 227;
// const BASE_FEED_MACHINE_PRICE = 15000;
const BASE_MAINTENANCE = 5000;
const BASE_USD = 279.33;
const BASE_EUR = 287.94;

function ResultHandler({ result, calculateAgain, language }: { result: ResultData, calculateAgain: string, language: string }) {
    const searchParams = useSearchParams();
    const dataParam = searchParams.get("data");
    const parsedData = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;

    const feedSpillagePerMonth = () => {
        const feedPerDay = 110; // grams per day
        const spillageRate = 2 / 100; // 2% spillage
        const conversionFactor = parseInt(parsedData.chickens) / 1000; // grams to kg
        const costPerKg = 114; // cost per kg in rps
        const daysInMonth = 30; // number of days
        const dailySpillageKg = (feedPerDay * spillageRate) * conversionFactor;
        const dailySpillageCost = dailySpillageKg * costPerKg;
        const monthlySpillageCost = dailySpillageCost * daysInMonth;

        return monthlySpillageCost;
    };

    const feedWastedPerMonth = () => {
        const feedPerDay = 110; // grams per day
        const spillageRate = 2 / 100; // 2% spillage
        const conversionFactor = parseInt(parsedData.chickens) / 1000; // grams to kg
        const daysInMonth = 30; // number of days
        const dailySpillageKg = (feedPerDay * spillageRate) * conversionFactor;
        const monthlySpillageCost = dailySpillageKg * daysInMonth;

        return monthlySpillageCost;
    };

    const monthlyLossPerMonth = feedSpillagePerMonth() + Math.round(parseInt(parsedData.salary) / 3);
    const maintenancePerMonth = parseInt(parsedData.chickens) * (BASE_MAINTENANCE / 23000);

    const [currency, setCurrency] = React.useState<string>('PKR');
    const [feedMachinePrice, setFeedMachinePrice] = React.useState<number>(PER_CHICKEN_PRICE);
    const [maintenance, setMaintenance] = React.useState<number>(maintenancePerMonth);
    const [monthlyLoss, setMonthlyLoss] = React.useState<number>(monthlyLossPerMonth);
    const feedWasted = feedWastedPerMonth();

    const handleCurrencyChange = (value: string) => {
        setCurrency(value);
        if (value === 'PKR') {
            setFeedMachinePrice(PER_CHICKEN_PRICE);
            setMaintenance(BASE_MAINTENANCE);
            setMonthlyLoss(feedWastedPerMonth);
        } else if (value === 'USD') {
            setFeedMachinePrice(PER_CHICKEN_PRICE / BASE_USD);
            setMaintenance(maintenancePerMonth / BASE_USD);
            setMonthlyLoss(monthlyLossPerMonth / BASE_USD);
        } else if (value === 'EUR') {
            setFeedMachinePrice(PER_CHICKEN_PRICE / BASE_EUR);
            setMaintenance(maintenancePerMonth / BASE_EUR);
            setMonthlyLoss(monthlyLossPerMonth / BASE_EUR);
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
                    <p className="text-[24px] text-center">{feedMachinePrice.toLocaleString('en-US')} {currency} per bird</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.maintenance} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">{maintenance.toLocaleString('en-US')} {currency}</p>
                </FormComponent >
            </div>


            <div className='pt-4 pb-8'>
                <FormComponent title={result.roi} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">98.79%</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.projectCompletionTime} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">03 {result.months}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.dispenseTime} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">2.5 {result.minutes}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.monthlyLoss} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">{monthlyLoss.toLocaleString('en-US')} {currency}</p>
                </FormComponent >
            </div>

            <div className='pt-4 pb-8'>
                <FormComponent title={result.feedWasted} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">{feedWasted?.toLocaleString('en-US')} Kg</p>
                </FormComponent >
            </div>

            {/* <div className='pt-4 pb-8'>
                <FormComponent title={result.electricityUsage} titleBg={'#105A7F'}>
                    <p className="text-[24px] text-center">3</p>
                </FormComponent >
            </div> */}

            <button type='submit' onClick={handleCalculateAgain} className='w-full bg-[#40BFFF] text-white py-2 rounded-[10px] text-[20px]'>{calculateAgain}</button>
        </div>
    )
}

export default ResultHandler
