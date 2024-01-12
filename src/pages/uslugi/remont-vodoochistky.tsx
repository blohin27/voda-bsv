import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite, montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { ContentGeneralPage } from "@/components/Content/GeneralPage/GeneralPage";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import React from "react";
import { PricePage } from "@/components/Content/PricePage/PricePage";
import { UslugiPage } from "@/components/Content/UslugiPage/UslugiPage";
import { Burenie } from "@/components/Content/UslugiPage/UslugiItems/Burenie";
import { AnalizVody } from "@/components/Content/UslugiPage/UslugiItems/AnalizVody";
import { RemontVodoOchistki } from "@/components/Content/UslugiPage/UslugiItems/RemontVodoOchistki";

export default function RootComponent() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <RemontVodoOchistki />
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
