import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";

export default function Index() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
      </RootLayout>
    </IsDev>
  );
}
