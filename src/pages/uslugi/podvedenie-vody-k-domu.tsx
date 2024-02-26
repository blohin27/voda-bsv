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
import { Reanimac } from "@/components/Content/UslugiPage/UslugiItems/Reanimac";
import { PodvedenVody } from "@/components/Content/UslugiPage/UslugiItems/PodvedenVody";

export default function Component() {
  return (
    <>
      <Head>
        <title>Подведение воды к дому - Надежное Водоснабжение для Вашего Участка</title>
        <meta
          name="description"
          content="Эффективное и надежное подведение воды к дому на вашем участке. Использование современных технологий для обеспечения стабильного и безопасного водоснабжения."
        />
        <meta
          name="keywords"
          content="подведение воды к дому, водоснабжение участка, установка водопровода, надежное водоснабжение, современное оборудование для воды"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="preconnect" href="https://voda-bsv.ru" />
      </Head>
      <IsDev>
        <RootLayout
          header={<HeaderSite />}
          content={
            <>
              <PodvedenVody />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
