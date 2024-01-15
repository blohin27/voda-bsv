import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { ContactPage } from "@/components/Content/ContactPage/ContactPage";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";
import { SntAndIjs } from "@/components/Content/ObjectObsluj/SntAndIjs";

export default function TorgCentry() {
  return (
    <>
      <Head>
        <title>Название моей страницы</title>
        <meta name="description" content="Описание страницы, которое будет отображаться в результатах поиска." />
        <meta name="keywords" content="ключевое слово 1, ключевое слово 2" />
        <meta name="robots" content="index, follow" /> {/* Разрешить индексацию и следование по ссылкам */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" href="your-script.js" as="script" />
        {/*<meta name="robots" content="noindex, nofollow" />  /!* Запретить индексацию и следование по ссылкам *!/*/}
        {/* Здесь можно добавить другие элементы head, если это необходимо */}
      </Head>
      <IsDev>
        <RootLayout>
          <HeaderSite />
          <SntAndIjs />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
