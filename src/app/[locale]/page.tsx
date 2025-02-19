import FormHandler from '@/components/FormHandler';
import { useLocale, useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  const language = useLocale();

  const formProps = {
    personalInfo: t('form.personalInfo'),
    namePlaceholder: t('form.namePlaceholder'),
    contactPlaceholder: t('form.contactPlaceholder'),
    levelsQuestion: t('form.levelsQuestion'),
    rowDimensions: t('form.rowDimensions'),
    lengthPlaceholder: t('form.lengthPlaceholder'),
    widthPlaceholder: t('form.widthPlaceholder'),
    totalChickens: t('form.totalChickens'),
    chickensPlaceholder: t('form.chickensPlaceholder'),
    salaries: t('form.salaries'),
    salaryPlaceholder: t('form.salaryPlaceholder'),
    shedType: t('form.shedType'),
    semiControlled: t('form.semiControlled'),
    batterySheds: t('form.batterySheds'),
    floor: t('form.floor'),
    cageType: t('form.cageType'),
    aTypeCage: t('form.aTypeCage'),
    hTypeCage: t('form.hTypeCage'),
  };

  return (
    <FormHandler form={formProps} language={language} submit={t('form.submit')} />
  );
}