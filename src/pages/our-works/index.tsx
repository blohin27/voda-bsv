import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { OurWorksPage } from "@/components/Content/OurWorks/OurWorksPage";

export default function OurWorks() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <OurWorksPage />
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
