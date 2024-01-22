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
import { ZamenaAcc } from "@/components/Content/UslugiPage/UslugiItems/ZamenaAcc";
import { MontajVodos } from "@/components/Content/UslugiPage/UslugiItems/MontajVodos";

export default function Component() {
  return (
    <>
      <Head>
        <title>Монтаж водоснабжения - Профессионализм и Надежность в Москве и МО</title>
        <meta
          name="description"
          content="Качественный монтаж систем водоснабжения в Москве и Московской области. Профессиональное обустройство водоснабжения для частных домов и коммерческих объектов. Надежность, использование современных технологий и доступные цены."
        />
        <meta
          name="keywords"
          content="Монтаж водоснабжения, системы водоснабжения, Москва, МО, профессиональный монтаж, надежное водоснабжение, частные дома, коммерческие объекты, современные технологии"
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
          <MontajVodos />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
