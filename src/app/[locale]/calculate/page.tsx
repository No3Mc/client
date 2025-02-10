import ResultHandler from "@/components/ResultHandler";
import { useLocale, useTranslations } from "next-intl";

function CalculatePage() {
  const t = useTranslations();
  const language = useLocale();

  const resultProps = {
    title: t('results.title'),
    currency: t('results.currency'),
    feedMachinePrice: t('results.feedMachinePrice'),
    roi: t('results.roi'),
    dispenseTime: t('results.dispenseTime'),
    projectCompletionTime: t('results.projectCompletionTime'),
    maintenance: t('results.maintenance'),
    monthlyLoss: t('results.monthlyLoss'),
    feedWasted: t('results.feedWasted'),
    electricityUsage: t('results.electricityUsage'),
    calculateAgain: t('results.calculateAgain'),
    months: t('results.months'),
    hour: t('results.hour'),
    minutes: t('results.minutes'),
  }
  return (
    <ResultHandler result={resultProps} calculateAgain={t('results.calculateAgain')} language={language} />
  );
}

export default CalculatePage;
