import RootLayout from "@/pages/RootLayout";
import { IsDev } from "@/components/isDev/IsDev";
import { Montserrat } from "next/font/google";
import React, { FC, PropsWithChildren } from "react";
import { HeaderSite } from "../components/header/HeaderSite/HeaderSite";
import { ContentGeneralPage } from "@/components/Content/GeneralPage/GeneralPage";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import Head from "next/head";
import { observer } from "mobx-react";
import { ZaprStancii } from "@/components/Content/ObjectObsluj/ZaprStancii";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home: FC<PropsWithChildren<unknown>> = observer(() => {
  return (
    <>
      <Head>
        <title>Чистка Скважин на Воду в Московской Области - Voda-BSV</title>
        <meta
          name="description"
          content="Предлагаем качественные услуги по чистке и обслуживанию скважин на воду в Московской области. Быстро, надежно и по доступным ценам. Забота о вашем комфорте и безопасности."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BSV" />
        <meta
          name="keywords"
          content="чистка скважин, скважины на воду, обслуживание скважин, Московская область, частные дома, водоснабжение, профессиональная чистка, безопасность воды, чистая вода, скважинное оборудование."
        />
        <link rel="icon" type="image/jpg" href="/icons/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://voda-bsv.ru" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <meta name="yandex-verification" content="b7ff7d90f93cfade" />
      </Head>
      <IsDev>
        <RootLayout
          header={<HeaderSite />}
          content={
            <>
              <ContentGeneralPage />
              <FooterPage />
            </>
          }
        />
      </IsDev>
    </>
  );
});

export default Home;
