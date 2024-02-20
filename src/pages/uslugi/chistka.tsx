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

export default function Component() {
  return (
    <>
      <Head>
        <title>Чистка скважин на воду - эффективные решения с гарантией в Москве и МО</title>
        <meta
          name="description"
          content="Профессиональная чистка скважин на воду с использованием современных технологий. Эффективные методы, долгосрочные результаты. Доступные цены и гарантия качества в Москве и МО."
        />
        <meta
          name="keywords"
          content="Чистка скважин, скважины на воду, эффективная чистка, безопасные методы, Москва, МО, качественная чистка, доступные цены, гарантия результатов"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
      </Head>
      <IsDev>
        <RootLayout
          header={<HeaderSite />}
          content={
            <>
              <Chistka />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
