import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { ContactPage } from "@/components/Content/ContactPage/ContactPage";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";
import { SntAndIjs } from "@/components/Content/ObjectObsluj/SntAndIjs";
import { DomObject } from "@/components/Content/ObjectObsluj/DomObject";
import { RoznSety } from "@/components/Content/ObjectObsluj/RoznSety";

export default function SntIjs() {
  return (
    <>
      <Head>
        <title>Водоснабжение для Частных - Профессиональные Решения от Voda-BSV</title>
        <meta
          name="description"
          content="Комплексные решения по водоснабжению для частных и загородных домов. Эффективные системы, проектирование, установка и обслуживание в Московской области."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://voda-bsv.ru/obsluzhivaemye-obekty/doma" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Voda-BSV" />
        <meta
          name="keywords"
          content="водоснабжение частных домов, водоснабжение загородных домов, системы водоснабжения, Московская область, установка водоснабжения, обслуживание систем водоснабжения, проектирование систем водоснабжения, частное водоснабжение"
        />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </Head>
      <IsDev>
        <RootLayout
          header={<HeaderSite />}
          content={
            <>
              <SntAndIjs />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
