import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite, montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import React from "react";
import Head from "next/head";
import { CrashDeparture } from "@/components/Content/CrashDeparture/CrashDeparture";

export default function Component() {
  return (
    <>
      <Head>
        <title>Аварийный Выезд по Водоснабжению - Быстрое Реагирование в Москве и МО</title>
        <meta
          name="description"
          content="Срочный аварийный выезд для решения проблем с водоснабжением в Москве и Московской области. Быстрое устранение неисправностей, круглосуточная поддержка и гарантия надежности."
        />
        <meta
          name="keywords"
          content="аварийный выезд, срочный ремонт водоснабжения, Москва, МО, быстрое устранение неисправностей, круглосуточная поддержка, надежное водоснабжение"
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
              <CrashDeparture />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
