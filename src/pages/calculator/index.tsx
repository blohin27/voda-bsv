import { IsDev } from "@/components/isDev/IsDev";
import RootLayout from "@/pages/RootLayout";
import { HeaderSite } from "../../components/header/HeaderSite/HeaderSite";
import { FooterPage } from "@/components/Footer/FooterPage/FooterPage";
import { CalculatorPage } from "@/components/Content/CalculatorPage/CalculatorPage";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Calculator() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        {false && <CalculatorPage />}
        <FooterPage />
      </RootLayout>
    </IsDev>
  );
}
