import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { ContactPage } from "@/components/Content/ContactPage/ContactPage";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";
import { SntAndIjs } from "@/components/Content/ObjectObsluj/SntAndIjs";
import { Predpriyatie } from "@/components/Content/ObjectObsluj/Predpriyatie";

export default function Predpriytie() {
  return (
    <>
      <Head>
        <title>Водоснабжение и Ремонт Скважин на Воду для Предприятий</title>
        <meta
          name="description"
          content="Профессиональное водоснабжение и ремонт скважин на воду для предприятий. Качественные услуги по доступным ценам.Гарантии качества в соответствии с договором"
        />
        <meta name="keywords" content="водоснабжение предприятий, ремонт скважин, бурение скважин, обслуживание водных скважин, водоснабжение скважин" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </Head>
      <IsDev>
        <RootLayout>
          <HeaderSite />
          <Predpriyatie />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
