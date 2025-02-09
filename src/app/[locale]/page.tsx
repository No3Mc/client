import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className='p-5'>
      <h1>{t('welcome')}</h1>
    </div>
  );
}