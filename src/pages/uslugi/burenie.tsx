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
        <title>Бурение скважин на воду - высокое качество и профессионализм в Москве и МО</title>
        <meta
          name="description"
          content="Качественное бурение скважин на воду с применением последних технологий. Надежные и долгосрочные решения, соответствующие всем стандартам. Конкурентоспособные цены и гарантия качества в Москве и Московской области."
        />
        <meta
          name="keywords"
          content="Бурение скважин, скважины на воду, профессиональное бурение, Москва, МО, надежные решения, доступные цены, гарантия качества, современные технологии"
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
          <Burenie />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
