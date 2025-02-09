"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { useTranslations } from "next-intl";

function CalculatePage() {
  const t = useTranslations();
  const router = useRouter();

  const handleCalculateAgain = () => {
    router.push("/");
  };

  return (
    <div className="p-4 bg-blue-100 min-h-screen flex justify-center items-center flex-col space-y-4">
      {/* Currency Selection */}
      <div className="text-sm text-right w-full max-w-md mb-4">
        <Select>
          <SelectTrigger className="bg-white text-blue-500 px-3 py-2 rounded-lg font-semibold">
            <span>{t("results.currency")}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="PKR">PKR</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Data Cards */}
      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.feedMachinePrice")}</p>
            <p className="text-2xl">15,000.00 PKR</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.maintenance")}</p>
            <p className="text-2xl">5,000.00 PKR</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.roi")}</p>
            <p className="text-2xl">08 {t("results.months")}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.projectCompletionTime")}</p>
            <p className="text-2xl">02 {t("results.months")}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.dispenseTime")}</p>
            <p className="text-2xl">1 {t("results.hour")} 25 {t("results.minutes")}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.monthlyLoss")}</p>
            <p className="text-2xl">2,000.00 PKR</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.feedWasted")}</p>
            <p className="text-2xl">5Kg</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500 text-white rounded-2xl w-full max-w-md shadow-lg">
        <CardContent>
          <div className="text-center text-xl leading-relaxed font-bold font-sans">
            <p>{t("results.electricityUsage")}</p>
            <p className="text-2xl">3</p>
          </div>
        </CardContent>
      </Card>

      {/* Calculate Again Button */}
      <div className="flex justify-center w-full max-w-md mt-6">
        <Button 
          className="bg-white text-blue-500 font-bold px-8 py-3 rounded-lg text-xl" 
          onClick={handleCalculateAgain}
        >
          {t("results.calculateAgain")}
        </Button>
      </div>
    </div>
  );
}

export default CalculatePage;
