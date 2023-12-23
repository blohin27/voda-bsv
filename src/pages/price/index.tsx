import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite, montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { ContentGeneralPage } from "@/components/Content/GeneralPage/GeneralPage";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import React from "react";
import { PricePage } from "@/components/Content/PricePage/PricePage";

export default function Price() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <PricePage />
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
