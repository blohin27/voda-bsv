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
import { TorgCentry } from "@/components/Content/ObjectObsluj/TorgCentry";
import { RoznSety } from "@/components/Content/ObjectObsluj/RoznSety";
import { Predpriyatie } from "@/components/Content/ObjectObsluj/Predpriyatie";

export default function Component() {
  return (
    <>
      <Head>
        <title>Эффективные Системы Водоснабжения для Розничных Сетей - Комплексные Решения</title>
        <meta
          name="description"
          content="Профессиональные системы водоснабжения для розничных сетей. Инновационные решения, качественное обслуживание, оперативный ремонт. Полная поддержка и гарантии."
        />
        <meta
          name="keywords"
          content="системы водоснабжения розничных сетей, водоснабжение для магазинов, обслуживание систем водоснабжения, решения для ритейла, водоснабжение для розничной торговли"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://voda-bsv.ru" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </Head>
      <IsDev>
        <RootLayout
          header={<HeaderSite />}
          content={
            <>
              <RoznSety />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
