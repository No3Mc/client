import { useTranslations } from 'next-intl';
import React from 'react'

function ContactPage() {
    const t = useTranslations();

    return (
        <div className='bg-[#00AAFF] w-full h-screen px-[22px] py-[33px] text-white'>
            <h1 className='text-[22px] font-semibold'>{t('contact.title')}</h1>
            <p className='text-[18px] my-3'><a href='tel:+923001111494'>Phone Number: +92 300 1111494</a></p>
            <p className='text-[18px] my-3'>Email: <a href='mailto:info@mnsrobotics.com'>info@mnsrobotics.com</a></p>
            <p className='text-[18px] my-3'>Website: <a href='https://www.mnsrobotics.com'>www.mnsrobotics.com</a></p>
            <a href='https://wa.me/+923001111494'><button className='text-[18px] text-white flex items-center gap-2 bg-[#00aaffa9] border-[1px] border-white py-2 px-4 rounded-[10px]'><img src="/whatsapp.svg" alt="whatsapp" className='w-[30px] h-[30px]' />{t('contact.message')}</button></a>
        </div>
    )
}

export default ContactPage