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
import { Post6 } from "@/components/Content/PoleznyeStatiPage/Post6";

export default function Component() {
  return (
    <>
      <Head>
        <title>Цены на Ремонт Водоснабжения - Прозрачность и Доступность в Москве и МО</title>
        <meta
          name="description"
          content="Узнайте доступные цены на ремонт и обслуживание систем водоснабжения в Москве и Московской области. Гарантируем качество услуг по конкурентоспособным ценам."
        />
        <meta
          name="keywords"
          content="цены на ремонт водоснабжения, стоимость ремонта скважин, Москва, МО, доступное водоснабжение, ремонт скважин, надежное водоснабжение, качественное обслуживание"
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
              <PricePage />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
