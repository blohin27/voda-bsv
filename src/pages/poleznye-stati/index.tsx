import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite, montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import React from "react";
import Head from "next/head";
import { CrashDeparture } from "@/components/Content/CrashDeparture/CrashDeparture";
import OurWorks from "@/pages/poleznye-stati";
import { OurWorksPage } from "@/components/Content/OurWorks/OurWorksPage";
import { SimpleDialog } from "@/components/Modal/Modal";
import { stateStore } from "@/domain";
import { PoleznyeStatiPage } from "@/components/Content/PoleznyeStatiPage/PoleznyeStatiPage";
import { RoznSety } from "@/components/Content/ObjectObsluj/RoznSety";

export default function Component() {
  return (
    <>
      <Head>
        <title>Полезные статьи о скважинах на воду - Советы и Рекомендации</title>
        <meta
          name="description"
          content="Изучите наши полезные статьи о скважинах на воду: советы по обслуживанию, ремонту, очистке и эксплуатации скважин в Москве и Московской области."
        />
        <meta
          name="keywords"
          content="полезные статьи, скважины на воду, обслуживание скважин, ремонт скважин, очистка скважин, эксплуатация скважин, Москва, МО"
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
              <PoleznyeStatiPage />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
}
