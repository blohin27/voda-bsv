import RootLayout from "@/pages/RootLayout";
import classNames from "classnames";
import styles from "./index.module.css";
import { Box } from "@mui/system";
import Image from "next/image";
import { PromoSectionGeneralPage } from "@/components/PromoSectionGeneralPage/PromoSectionGeneralPage";
import { IsDev } from "@/components/isDev/IsDev";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Montserrat } from "next/font/google";
import { PromoSectionGeneralPage2 } from "@/components/PromoSectionGeneralPage2/PromoSectionGeneralPage2";
import { ServicesAll } from "@/components/ServicesAll/Services";
import React from "react";
import { HeaderSite } from "@/components/header/HeaderSite/HeaderSite";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <IsDev>
      <RootLayout>
        <HeaderSite />
        <ContentGeneralPage />
      </RootLayout>
    </IsDev>
  );
}

const ContentGeneralPage = () => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    className={classNames(montserrat.className)}
  >
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
    <InfoBlocks />
    <div id={"PhotoAndText"}>
      <div
        style={{ display: "flex" }}
        className={classNames(styles.sectionPhotoAndText)}
      >
        <div style={{ position: "relative", marginRight: "35px" }}>
          <Image
            src="/photoNew/testImage.jpg"
            alt={"image"}
            width={500}
            height={400}
            objectFit={"contain"}
            // По умолчанию 'center', но может быть изменено
            quality={100}
          />
        </div>
        <div className={classNames(styles.sectionText)}>
          <div>
            Сейчас наша компания – это целый штат квалифицированных сотрудников,
            насчитывающий более 100 профессиональных клинеров. Каждый из них
            ения оправки КП, перечисления оплаты, материальной ответсттправки
            КП, перечисления, сотрудничества – удобным и выгодным.Сейчас наша
            компания – это целыйперечисления оправки КП, перечисления оправки
            КП, перечисления оплаты, материальной ответственности перед
            заказчиком, делает процесс заключения договора максимально быстрым,
            сотрудничества – удобным и выгодным.Сейчас наша компания – это целый
          </div>
        </div>
      </div>
    </div>
    <div className={classNames(styles.titleObject)}>
      Какие объекты в Москве и Московской области мы обслуживаем
    </div>
    <div
      id={"sectionObslujAll"}
      className={classNames(styles.sectionObslujAll)}
    >
      <div className={classNames(styles.sectionObslujItem)}>
        <div className={classNames(styles.imgItem)}>
          <img src={"/icons/_.svg"} />
        </div>
        <div style={{ textAlign: "center" }}>Квартиры</div>
      </div>
      <div className={classNames(styles.sectionObslujItem)}>
        <div className={classNames(styles.imgItem)}>
          <img src={"/icons/_.svg"} />
        </div>
        <div style={{ textAlign: "center" }}>Квартиры</div>
      </div>
      <div className={classNames(styles.sectionObslujItem)}>
        <div className={classNames(styles.imgItem)}>
          <img src={"/icons/_.svg"} />
        </div>
        <div style={{ textAlign: "center" }}>Квартиры</div>
      </div>
      <div className={classNames(styles.sectionObslujItem)}>
        <div className={classNames(styles.imgItem)}>
          <img src={"/icons/_.svg"} />
        </div>
        <div style={{ textAlign: "center" }}>Квартиры</div>
      </div>
      <div className={classNames(styles.sectionObslujItem)}>
        <div className={classNames(styles.imgItem)}>
          <img src={"/icons/_.svg"} />
        </div>
        <div style={{ textAlign: "center" }}>Квартиры</div>
      </div>
      <div className={classNames(styles.sectionObslujItem)}>
        <div className={classNames(styles.imgItem)}>
          <img src={"/icons/_.svg"} />
        </div>
        <div style={{ textAlign: "center" }}>Квартиры</div>
      </div>
    </div>

    <div className={classNames(styles.specRachetWrapper)}>
      <Image
        src="/photoNew/testImage.jpg"
        alt={"image"}
        layout={"fill"}
        objectFit="cover"
        objectPosition="center center"
        quality={100}
      />
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <PromoSectionGeneralPage2 />
      </div>
      <div className={classNames(styles.sectionBlack)}></div>
    </div>
    <div
      style={{
        margin: "60px 0 30px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ServicesAll />
    </div>
  </Box>
);
