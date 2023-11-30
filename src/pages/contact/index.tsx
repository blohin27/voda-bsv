import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "@/pages";

export default function Index() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        123
      </RootLayout>
    </IsDev>
  );
}
