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
        <title>Заголовок вашей страницы</title>
        <meta name="description" content="Описание вашей страницы" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://voda-bsv.ru" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BSV" />
        <meta name="keywords" content="ключевое, слово, вашего, сайта" />
        {/* Ссылки на ресурсы */}
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://example.com" />
        <link rel="stylesheet" href="/path/to/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />

        {/* Дополнительные элементы */}
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
