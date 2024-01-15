import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { ContactPage } from "@/components/Content/ContactPage/ContactPage";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";
import { SntAndIjs } from "@/components/Content/ObjectObsluj/SntAndIjs";

export default function SntIjs() {
  return (
    <>
      <Head>
        <title>Водоснабжение для СНТ и ИЖС - Качественные Решения от Voda-BSV</title>
        <meta
          name="description"
          content="Экспертные услуги по водоснабжению для СНТ и ИЖС в Московской области. Надежные системы водоснабжения, проектирование, монтаж и обслуживание."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://voda-bsv.ru/obsluzhivaemye-obekty/snt-ijs" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Voda-BSV" />
        <meta
          name="keywords"
          content="водоснабжение СНТ, водоснабжение ИЖС, системы водоснабжения, Московская область, установка водоснабжения, обслуживание систем воды, качественное водоснабжение, проектирование водоснабжения"
        />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
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
