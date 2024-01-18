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

export default function Component() {
  return (
    <>
      <Head>
        <title>Водоснабжение для Торговых Центров - Решения и Обслуживание</title>
        <meta
          name="description"
          content="Надежные и эффективные решения по водоснабжению для торговых центров. Современные технологии, профессиональное обслуживание и ремонт. Гарантии по договору"
        />
        <meta
          name="keywords"
          content="водоснабжение торговых центров, системы водоснабжения, водоснабжение для бизнеса, обслуживание водоснабжения, водные системы торговых центров"
        />
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
          <TorgCentry />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
