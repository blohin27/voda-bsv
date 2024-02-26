import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { ContactPage } from "@/components/Content/ContactPage/ContactPage";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";
import { CalculatorPage } from "@/components/Content/CalculatorPage/CalculatorPage";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Контакты | Ремонт скважин на воду в частных домах</title>
        <meta
          name="description"
          content="Наши контакты для связи по вопросам ремонта и обслуживания скважин на воду в частных домах. Быстрая и качественная помощь."
        />
        <meta name="keywords" content="ремонт скважин, скважины на воду, частный дом, обслуживание скважин" />
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
              <ContactPage />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
