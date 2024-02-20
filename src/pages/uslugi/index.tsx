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
        <title>Ремонт Скважин и Водоснабжение - Надежность и Качество в Москве и МО</title>
        <meta
          name="description"
          content="Проффесиональный ремонт скважин и обслуживание систем водоснабжения в Москве и Московской области. Быстрое устранение проблем, повышение эффективности и обеспечение качественной воды для вашего дома."
        />
        <meta
          name="keywords"
          content="Ремонт скважин, водоснабжение, обслуживание скважин, Москва, МО, качество воды, надежное водоснабжение, профессиональный ремонт"
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
              <UslugiPage />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
