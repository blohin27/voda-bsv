import RootLayout from "@/pages/RootLayout";
import Box from "@mui/material/Box";
import Image from "next/image";
import { PromoSectionGeneralPage } from "@/components/PromoSectionGeneralPage/PromoSectionGeneralPage";
import { IsDev } from "@/components/isDev/IsDev";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Montserrat } from "next/font/google";
import { ServicesAll } from "@/components/ServicesAll/Services";
import React from "react";
import { ClassesSx } from "@/theme/theme";
import { HeaderSite } from "../components/header/HeaderSite/HeaderSite";
import { ContentGeneralPage } from "@/components/Content/GeneralPage/GeneralPage";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { UslugiPage } from "@/components/Content/UslugiPage/UslugiPage";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <ContentGeneralPage />
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
