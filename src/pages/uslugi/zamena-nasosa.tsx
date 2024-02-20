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

export default function Component() {
  return (
    <>
      <Head>
        <title>Замена насоса в скважине на воду - Надежность и Эффективность в Москве и МО</title>
        <meta
          name="description"
          content="Профессиональная замена насоса в скважине на воду в Москве и МО. Использование современных насосных систем, обеспечение долговечности и эффективности работы скважины. Быстрые и надежные решения по доступным ценам."
        />
        <meta
          name="keywords"
          content="Замена насоса в скважине, насосы для скважин, водоснабжение, Москва, МО, эффективные насосы, профессиональный монтаж, доступные цены, высокое качество, надежность"
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
              <ZamenaNasosa />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
