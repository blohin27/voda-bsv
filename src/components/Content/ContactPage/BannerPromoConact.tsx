import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { OrderCall } from "@/components/OrderCall/OrderCall";
import Image from "next/image";
import { FcAdvertising, FcAssistant, FcConferenceCall } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";

interface IProps {}
export const BannerPromoContact: FC<IProps> = () => {
  return (
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
      <Box sx={{ width: "100%", position: "relative", zIndex: 2, color: "white", maxWidth: "1200px", margin: "0 auto" }}>
        <Box sx={classesStyle.content}>
          <Box sx={{ ...classesStyle.titleBlock }}>Персональное предложение на постоянное обслуживание юридических лиц</Box>
          <Box sx={{ textAlign: "left", fontWeight: 400, fontSize: "20px", display: "flex", alignItems: "center" }}>
            <FcAdvertising size={50} />
            <Box sx={classesStyle.desc}>
              Скидка <Box sx={{ ...classesStyle.top }}>15-25%</Box> на постоянное обслуживание
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FcInspection size={50} />
            <Box sx={classesStyle.desc}>Заключаем договор</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FcSalesPerformance size={50} />
            <Box sx={classesStyle.desc}>Полная материальная ответсвенность на нас</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FcBearish size={50} />
            <Box sx={classesStyle.desc}>Сниженая стоимость на последующие услуги</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FcAssistant size={50} />
            <Box sx={classesStyle.desc}>Приоритетная техподдержка</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FcConferenceCall size={70} />
            <Box sx={classesStyle.desc}>
              Входим в <Box sx={{ ...classesStyle.top }}>ТОП - 3 лучших компаний </Box> по отзывам жителей МО
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classesStyle: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px", display: "flex", flexDirection: "column", gap: "5px" },
  sectionWrapperPromo: {
    width: "100%",
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width:800px)": {
      textAlign: "center",
    },
  },
  desc: {
    fontSize: "18px",
    "@media (max-width:850px)": {
      fontSize: "16px",
    },
    "@media (max-width:650px)": {
      fontSize: "16px",
    },
    "@media (max-width:550px)": {
      fontSize: "14px",
    },
    "@media (max-width:450px)": {
      fontSize: "14px",
    },
  },
  top: {
    color: "orange",
    fontWeight: "700",
    fontSize: "25px",
    display: "inline",
    "@media (max-width:750px)": {
      fontSize: "20px",
    },
    "@media (max-width:650px)": {
      fontSize: "20px",
    },
    "@media (max-width:550px)": {
      fontSize: "17px",
    },
  },
  titleBlock: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "55px",
    "@media (max-width:850px)": {
      fontSize: "35px",
      lineHeight: "50px",
    },
    "@media (max-width:750px)": {
      fontSize: "30px",
      lineHeight: "40px",
    },
    "@media (max-width:500px)": {
      fontSize: "25px",
      lineHeight: "35px",
    },
    "@media (max-width:400px)": {
      fontSize: "20px",
      lineHeight: "30px",
    },
  },
  setcionPromo: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "60px",
    left: "60px",
    maxWidth: "50%",
    minWidth: "580px",
    color: "#352c1d",
    zIndex: 2,
    "@media (max-width:900px)": {
      top: "70px",
      minWidth: "500px",
    },
    "@media (max-width:800px)": {
      top: "45%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    "@media (max-width:500px)": {
      minWidth: "400px",
    },
    "@media (max-width:400px)": {
      minWidth: "300px",
    },
  },
  setcionPromoTitle: {
    color: "white",
    fontWeight: 785,
    fontSize: "50px",
    lineHeight: "60px",
    letterSpacing: "2px",
    marginBottom: "10px",
    "@media (max-width:900px)": {
      fontSize: "40px",
      lineHeight: "50px",
      letterSpacing: "2px",
      marginBottom: "30px",
    },
    "@media (max-width:600px)": {
      fontSize: "30px",
      lineHeight: "30px",
      letterSpacing: "2px",
      marginBottom: "5px",
    },
    "@media (max-width:500px)": {
      fontSize: "22px",
      lineHeight: "30px",
      letterSpacing: "2px",
      marginBottom: "5px",
    },
  },
  sectionPromoSubTitle: {
    fontSize: "18px",
    color: "white",
    fontWeight: 500,
    lineHeight: "30px",
  },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "650px",
    position: "relative",
    alignItems: "center",
    "@media (max-width:800px)": {},
    "@media (max-width:600px)": {
      height: "600px",
    },
  },
  sectionWhite: {
    background: "linear-gradient(to right, black, black 100%, rgba(0, 0, 0, 10%) 80%)",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:800px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
};
