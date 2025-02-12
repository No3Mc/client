import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

function CalculatingScreen() {
    const t = useTranslations();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#002D43] bg-opacity-85 backdrop-blur-md z-10  ">
            <div className="bg-white w-[214px] h-[200px] rounded-[30px] shadow-xl text-center flex flex-col items-center justify-center">
                <div className='w-[80px] h-[80px] bg-[#105A80] rounded-full flex items-center justify-center border-[5px] border-[#CFDEE6]'>
                    <Image src="/images/chicken.png" alt="Chicken" height={62} width={62} />
                </div>
                <h3 className='font-medium text-[28px] mt-3'>{t('calculate.title')}</h3>
                <p className="text-[18px] text-[#71717A]">{t('calculate.description')}</p>
            </div>
        </div>
    );
};

export default CalculatingScreen;
