import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { OurWorksPage } from "@/components/Content/OurWorks/OurWorksPage";
import { CalculatorPage } from "@/components/Content/CalculatorPage/CalculatorPage";

export default function OurWorks() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <CalculatorPage />
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
