import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { OurWorksPage } from "@/components/Content/OurWorks/OurWorksPage";
import { PoleznyeStatiPage } from "@/components/Content/PoleznyeStatiPage/PoleznyeStatiPage";

export default function Component() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <PoleznyeStatiPage />
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
