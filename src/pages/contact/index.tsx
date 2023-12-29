import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { ContactPage } from "@/components/Content/ContactPage/ContactPage";

export default function Contact() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <ContactPage />
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
