import RootLayout from "@/pages/RootLayout";
import Box from "@mui/material/Box";
import Image from "next/image";
import { PromoSectionGeneralPage } from "@/components/PromoSectionGeneralPage/PromoSectionGeneralPage";
import { IsDev } from "@/components/isDev/IsDev";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Montserrat } from "next/font/google";
import { PromoSectionGeneralPage2 } from "@/components/PromoSectionGeneralPage2/PromoSectionGeneralPage2";
import { ServicesAll } from "@/components/ServicesAll/Services";
import React from "react";
import { ClassesSx } from "@/theme/theme";
import { HeaderSite } from "../components/header/HeaderSite/HeaderSite";

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

const ContentGeneralPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      className={montserrat.className}
    >
      <Box sx={classesStyle.setcionGeneralPageBanner}>
        <Image
          src="/photoNew/testImage.jpg"
          alt={"image"}
          layout={"fill"}
          objectFit="cover"
          objectPosition="center center" // По умолчанию 'center', но может быть изменено
          quality={100}
        />
        <Box sx={classesStyle.sectionWhite} />

        <PromoSectionGeneralPage />
      </Box>
      <InfoBlocks />
      <Box id={"PhotoAndText"}>
        <Box sx={classesStyle.sectionPhotoAndText}>
          <Box style={{ position: "relative", marginRight: "35px" }}>
            <Image
              src="/photoNew/testImage.jpg"
              alt={"image"}
              width={500}
              height={400}
              objectFit={"contain"}
              quality={100}
            />
          </Box>
          <Box sx={classesStyle.sectionText}>
            <Box>
              Сейчас наша компания – это целый штат квалифицированных
              сотрудников, насчитывающий более 100 профессиональных клинеров.
              Каждый из них ения оправки КП, перечисления оплаты, материальной
              ответсттправки КП, перечисления, сотрудничества – удобным и
              выгодным.Сейчас наша компания – это целыйперечисления оправки КП,
              перечисления оправки КП, перечисления оплаты, материальной
              ответственности перед заказчиком, делает процесс заключения
              договора максимально быстрым, сотрудничества – удобным и
              выгодным.Сейчас наша компания – это целый
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classesStyle.titleObject}>
        Какие объекты в Москве и Московской области мы обслуживаем
      </Box>
      <Box sx={classesStyle.sectionObslujAll}>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.imgItem}>
            <img src={"/icons/_.svg"} />
          </Box>
          <Box style={{ textAlign: "center" }}>Квартиры</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.imgItem}>
            <img src={"/icons/_.svg"} />
          </Box>
          <Box style={{ textAlign: "center" }}>Квартиры</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.imgItem}>
            <img src={"/icons/_.svg"} />
          </Box>
          <Box style={{ textAlign: "center" }}>Квартиры</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.imgItem}>
            <img src={"/icons/_.svg"} />
          </Box>
          <Box style={{ textAlign: "center" }}>Квартиры</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.imgItem}>
            <img src={"/icons/_.svg"} />
          </Box>
          <Box style={{ textAlign: "center" }}>Квартиры</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.imgItem}>
            <img src={"/icons/_.svg"} />
          </Box>
          <Box style={{ textAlign: "center" }}>Квартиры</Box>
        </Box>
      </Box>

      <Box sx={classesStyle.specRachetWrapper}>
        <Image
          src="/photoNew/testImage.jpg"
          alt={"image"}
          layout={"fill"}
          objectFit="cover"
          objectPosition="center center"
          quality={100}
        />
        <Box>
          <PromoSectionGeneralPage2 />
        </Box>
        <Box sx={classesStyle.sectionBlack}></Box>
      </Box>
      <Box
        style={{
          margin: "60px 0 30px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ServicesAll />
      </Box>
    </Box>
  );
};

const classesStyle: ClassesSx = {
  sectionHeaderSite: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "15px",
    marginBottom: "12px",
  },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "500px",
    position: "relative",
    "@media (max-width:800px)": {
      height: "450px",
    },
    "@media (max-width:600px)": {
      height: "350px",
    },
  },
  sectionWhite: {
    background:
      "linear-gradient(to right, black, black 20%, rgba(0, 0, 0, 30%) 80%)",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.8,
    "@media (max-width:800px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
  sectionWrapperPromo: {
    width: "100%",
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionPhotoAndText: {
    display: "flex",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    marginTop: "200px",
    backgroundColor: "#fcfbf9",
    padding: "40px 60px",
    borderRadius: "10px",
    boxShadow: "1px 2px 45px -22px rgba(0, 0, 0, 0.75)",
  },
  sectionText: {
    display: "flex",
    flexDirection: "column",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "30px",
  },
  titleObject: {
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "120px",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "42px",
    color: "#362c1d",
  },
  sectionObslujAll: {
    maxWidth: "1000px",
    margin: "0 auto",
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
  sectionObslujItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "270px",
    boxShadow: "2px 5px 45px -28px rgba(0, 0, 0, 1)",
    borderRadius: "15px",
    padding: "15px 10px",
    marginBottom: "40px",
  },
  imgItem: {
    textAlign: "center",
  },
  specRachetWrapper: {
    display: "flex",
    width: "100%",
    height: "500px",
    position: "relative",
  },
  sectionBlack: {
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
};
