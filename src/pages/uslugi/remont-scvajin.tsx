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

export default function Component() {
  return (
    <>
      <Head>
        <title>Ремонт и обслуживание скважин на воду - высокое качество по доступным ценам в Москве и МО</title>
        <meta
          name="description"
          content="Экспертный ремонт и обслуживание скважин на воду. Использование передовых технологий, профессиональный подход и долгосрочные гарантии. Бесплатные консультации и выгодные цены."
        />
        <meta
          name="keywords"
          content="Ремонт скважин, обслуживание скважин, скважины на воду, профессиональный ремонт, Москва, МО, бесплатная консультация, доступные цены, гарантия качества"
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
          <RemontScvajin />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
