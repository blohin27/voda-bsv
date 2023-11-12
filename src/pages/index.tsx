import { LogoGeneralVodaBsv } from "@/components/LogoVB/LogoGeneralVodaBsv";
import { ContactInformationMain } from "@/components/ContactInformationMain/ContactInformationMain";
import RootLayout from "@/pages/RootLayout";
import classNames from "classnames";
import styles from "./index.module.css";
import { SocialNetworkIcons } from "@/components/SocialNetwork/SocialNetworkIcons";
import Button from "@mui/material/Button";
import { HeaderMenu } from "@/components/HeaderMenu/HeaderMenu";
import { Box } from "@mui/system";
import Image from "next/image";
import { PromoSectionGeneralPage } from "@/components/PromoSectionGeneralPage/PromoSectionGeneralPage";

export default function Home() {
  return (
    <RootLayout>
      <HeaderSite />
      <ContentGeneralPage />
    </RootLayout>
  );
}

const HeaderSite = () => (
  <>
    <div className={classNames(`${styles.setcion}`)}>
      <LogoGeneralVodaBsv />
      <ContactInformationMain />
      <SocialNetworkIcons />
      <SectionButtons />
    </div>
    <div>
      <HeaderMenu />
    </div>
  </>
);
const ContentGeneralPage = () => (
  <Box>
    <Box className={classNames(styles.setcionGeneralPageBanner)}>
      <Image
        src="/photoNew/testImage.jpg"
        alt={"image"}
        layout={"fill"}
        objectFit="cover"
        objectPosition="center center" // По умолчанию 'center', но может быть изменено
        quality={100}
      />
      <Box className={classNames(styles.sectionWhite)} />
      <PromoSectionGeneralPage />
    </Box>
  </Box>
);

const SectionButtons = () => (
  <Box display={"flex"}>
    <Box mr={1}>
      <Button variant="contained" style={{ backgroundColor: "#ff6c36" }}>
        Обратный звонок
      </Button>
    </Box>
    <Box ml={1}>
      <Button variant="contained">Расчитать стоимость</Button>
    </Box>
  </Box>
);
