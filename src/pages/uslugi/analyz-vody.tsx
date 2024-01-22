import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite, montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { ContentGeneralPage } from "@/components/Content/GeneralPage/GeneralPage";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import React from "react";
import { PricePage } from "@/components/Content/PricePage/PricePage";
import { UslugiPage } from "@/components/Content/UslugiPage/UslugiPage";
import { Burenie } from "@/components/Content/UslugiPage/UslugiItems/Burenie";
import { RemontScvajin } from "@/components/Content/UslugiPage/UslugiItems/RemontScvajin";
import Head from "next/head";
import { MOBILE_TELEPHONE } from "@/const";
import { Chistka } from "@/components/Content/UslugiPage/UslugiItems/Chistka";
import { ZamenaNasosa } from "@/components/Content/UslugiPage/UslugiItems/ZamenaNasosa";
import { Diagnostica } from "@/components/Content/UslugiPage/UslugiItems/Diagnostica";
import { AnalizVody } from "@/components/Content/UslugiPage/UslugiItems/AnalizVody";

export default function Component() {
  return (
    <>
      <Head>
        <title>Анализ воды из скважины - Качество и Безопасность в Москве и МО</title>
        <meta
          name="description"
          content="Профессиональный анализ воды из скважины в Москве и Московской области. Точное определение качества воды, выявление примесей и обеспечение безопасности водоснабжения для вашего дома."
        />
        <meta
          name="keywords"
          content="Анализ воды, скважина на воду, проверка качества воды, Москва, МО, безопасность воды, чистая вода, лабораторный анализ, контроль качества"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
      </Head>
      <IsDev>
        <RootLayout>
          <HeaderSite />
          <AnalizVody />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
