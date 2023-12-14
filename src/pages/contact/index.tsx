import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";

export default function Index() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <div style={{ textAlign: "center" }}>123</div>
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
