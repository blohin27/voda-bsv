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
        <title>Чистка Скважин на Воду в Московской Области - Voda-BSV</title>
        <meta
          name="description"
          content="Предлагаем качественные услуги по чистке и обслуживанию скважин на воду в Московской области. Быстро, надежно и по доступным ценам. Забота о вашем комфорте и безопасности."
        />
        {/*<meta charset="UTF-8" />*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://voda-bsv.ru" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BSV" />
        <meta
          name="keywords"
          content="чистка скважин, скважины на воду, обслуживание скважин, Московская область, частные дома, водоснабжение, профессиональная чистка, безопасность воды, чистая вода, скважинное оборудование."
        />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
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
