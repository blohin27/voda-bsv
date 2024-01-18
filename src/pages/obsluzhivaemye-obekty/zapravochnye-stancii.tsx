import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { ContactPage } from "@/components/Content/ContactPage/ContactPage";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";
import { SntAndIjs } from "@/components/Content/ObjectObsluj/SntAndIjs";
import { ZaprStancii } from "@/components/Content/ObjectObsluj/ZaprStancii";

export default function ZapravochnyeStancii() {
  return (
    <>
      <Head>
        <title>Обслуживание Систем Водоснабжения на АЗС - Надежные и Эффективные Решения</title>
        <meta
          name="description"
          content="Комплексные услуги по обслуживанию систем водоснабжения на автозаправочных станциях. Эффективное управление водными ресурсами, повышение безопасности и соблюдение экологических стандартов."
        />
        <meta
          name="keywords"
          content="водоснабжение АЗС, обслуживание АЗС, водные системы АЗС, управление водными ресурсами на АЗС, экологические стандарты водоснабжения"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <IsDev>
        <RootLayout>
          <HeaderSite />
          <ZaprStancii />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
