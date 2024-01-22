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
import { ServicObsluj } from "@/components/Content/UslugiPage/UslugiItems/ServicOblsuj";

export default function Component() {
  return (
    <>
      <Head>
        <title>Замена гидроаккумуляторов - Качество и Долговечность в Москве и МО</title>
        <meta
          name="description"
          content="Высококачественная замена гидроаккумуляторов в скважине в Москве и Московской области. Профессиональный подбор и монтаж гидроаккумуляторов для обеспечения стабильной работы системы водоснабжения."
        />
        <meta
          name="keywords"
          content="Замена гидроаккумуляторов, гидроаккумуляторы для скважин, водоснабжение, Москва, МО, качественный монтаж, долговечность, надежные системы, эффективное решение"
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
          <ServicObsluj />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
