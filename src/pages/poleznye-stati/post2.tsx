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
import { Post1 } from "@/components/Content/PoleznyeStatiPage/Post1";
import { Post2 } from "@/components/Content/PoleznyeStatiPage/Post2";

export default function Component() {
  return (
    <>
      <Head>
        <title>Как Правильно Чистить Скважину - Полезные Советы и Руководство</title>
        <meta
          name="description"
          content="Полное руководство по очистке скважины: узнайте эффективные методы и советы для поддержания вашей скважины в идеальном состоянии."
        />
        <meta name="keywords" content="очистка скважины, руководство по очистке скважины, методы очистки скважины, поддержание скважины, уход за скважиной" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      </Head>
      <IsDev>
        <RootLayout>
          <HeaderSite />
          <Post2 />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
