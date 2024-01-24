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
import { modalStore } from "@/domain";

export default function Component() {
  return (
    <>
      <Head>
        <title>Наши работы - Примеры качественного водоснабжения в Москве и МО</title>
        <meta
          name="description"
          content="Просмотрите наши выполненные проекты по водоснабжению и ремонту скважин в Москве и Московской области. Качественная работа, надежность и профессионализм в каждом проекте."
        />
        <meta
          name="keywords"
          content="наши работы, водоснабжение, ремонт скважин, Москва, МО, выполненные проекты, качественная работа, надежное водоснабжение"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="preconnect" href="http://voda-bsv.ru" />
      </Head>
      <IsDev>
        <RootLayout>
          <HeaderSite />
          <OurWorksPage />
          <FooterPage />
        </RootLayout>
      </IsDev>
    </>
  );
}
