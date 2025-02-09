'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const SUPPORTED_LOCALES = ['en', 'ur', 'ar'];

const LanguageSelector = () => {
    const pathname = usePathname(); // Get the current path
    const searchParams = useSearchParams(); // Get current search parameters
    const router = useRouter(); // Router for navigation

    const handleLanguageSwitch = (lng: string) => {
        // Extract the current locale from the URL
        const segments = pathname.split('/').filter(Boolean); // Split and remove empty segments
        const currentLocale = segments[0];

        // If the current locale is supported, replace it; otherwise, add the new locale
        if (SUPPORTED_LOCALES.includes(currentLocale)) {
            segments[0] = lng; // Replace the locale
        } else {
            segments.unshift(lng); // Add the new locale at the beginning
        }

        // Rebuild the URL
        const newPathname = `/${segments.join('/')}`;

        // Preserve search params and navigate to the new path
        const params = new URLSearchParams(searchParams?.toString() || '');
        router.push(`${newPathname}?${params.toString()}`);
    };

    return (
        <div className="flex items-center justify-center space-x-4 p-4 rounded-lg border-b-[3px] border-[#00AAFF] text-black w-full">
            {SUPPORTED_LOCALES.map((lng) => (
                <button
                    key={lng}
                    // className={pathname.startsWith(`/${lng}`) ? 'default' : 'ghost'}
                    className={twMerge("w-[110.85px] h-[45px] text-[20px] rounded-[10px]", pathname.startsWith(`/${lng}`) ? 'text-white bg-[#00AAFF] shadow-lg' : 'text-[#00AAFF] bg-[#D9F2FF]')}
                    onClick={() => handleLanguageSwitch(lng)}
                >
                    {lng === 'en' && 'English'}
                    {lng === 'ur' && 'اردو'}
                    {lng === 'ar' && 'عربي'}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
