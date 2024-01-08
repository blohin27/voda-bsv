import RootLayout from "@/pages/RootLayout";
import { IsDev } from "@/components/isDev/IsDev";
import { Montserrat } from "next/font/google";
import React from "react";
import { HeaderSite } from "../components/header/HeaderSite/HeaderSite";
import { ContentGeneralPage } from "@/components/Content/GeneralPage/GeneralPage";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ремонт и обслуживание скважины на воду в Московской области</title>
        <meta name="description" content="Ремонт скважины на воду в Москве и Подмосковье" />
        <meta name="keywords" content="ключевое слово 1, ключевое слово 2" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" href="your-script.js" as="script" />
      </Head>
      <IsDev>
        <RootLayout>
          <HeaderSite />
          <ContentGeneralPage />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
