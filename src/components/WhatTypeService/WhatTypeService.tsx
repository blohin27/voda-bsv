import Box from "@mui/material/Box";
import React, { FC } from "react";
import Image from "next/image";
import { PromoSectionGeneralPage } from "@/components/PromoSectionGeneralPage/PromoSectionGeneralPage";
import { ClassesSx } from "@/theme/theme";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { COLOR_BLACK, COLOR_BLUE, COLOR_BLUE_HOVER, COLOR_BLUE_SECTION, CONST_TITLE } from "@/const";
import Link from "next/link";

interface IProps {}
export const WhatTypeService: FC<IProps> = () => {
  return (
    <Box sx={classesStyle.content}>
      <Box sx={classesStyle.titleObject}>Какие объекты мы обслуживаем</Box>
      <Box sx={classesStyle.sectionObslujAll}>
        <Link href={"/obsluzhivaemye-obekty/snt-ijs"} style={{ textDecoration: "none" }}>
          <Box sx={classesStyle.sectionObslujItem}>
            <Box sx={classesStyle.sectionImg}>
              <Image
                src={"/photo/photoObjectObslug/snt.jpg"}
                alt={"image"}
                layout={"fill"}
                // width={600}
                // height={400}
                objectFit="cover"
                objectPosition="center center" // По умолчанию 'center', но может быть изменено
                quality={100}
              />
            </Box>
            <Box sx={{ ...classesStyle.titleSub, color: COLOR_BLACK }}>СНТ и ИЖС</Box>
          </Box>
        </Link>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.sectionImg}>
            <Image
              src={"/photo/photoObjectObslug/home.jpg"}
              alt={"image"}
              layout={"fill"}
              // width={600}
              // height={400}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          <Box sx={{ ...classesStyle.titleSub }}>Частные дома</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.sectionImg}>
            <Image
              src={"/photo/photoObjectObslug/tc.jpg"}
              alt={"image"}
              layout={"fill"}
              // width={600}
              // height={400}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          <Box sx={{ ...classesStyle.titleSub }}>Торговые центры</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.sectionImg}>
            <Image
              src={"/photo/photoObjectObslug/predpri.jpg"}
              alt={"image"}
              layout={"fill"}
              // width={600}
              // height={400}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          <Box sx={{ ...classesStyle.titleSub }}>Предприятия</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.sectionImg}>
            <Image
              src={"/photo/photoObjectObslug/globus.jpg"}
              alt={"image"}
              layout={"fill"}
              // width={600}
              // height={400}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          <Box sx={{ ...classesStyle.titleSub }}>Розничные сети</Box>
        </Box>
        <Box sx={classesStyle.sectionObslujItem}>
          <Box sx={classesStyle.sectionImg}>
            <Image
              src={"/photo/photoObjectObslug/zapravka.jpg"}
              alt={"image"}
              layout={"fill"}
              // width={600}
              // height={400}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          <Box sx={{ ...classesStyle.titleSub }}>Заправочные станции</Box>
        </Box>
      </Box>
    </Box>
  );
};

const classesStyle: ClassesSx = {
  content: { backgroundColor: COLOR_BLUE_SECTION },
  sectionHeaderSite: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "15px",
    marginBottom: "12px",
  },
  sectionImg: {
    display: "flex",
    position: "relative",
    width: "270px",
    height: "270px",
    alignSelf: "center",
    "@media (max-width:1040px)": {
      width: "400px",
      height: "270px",
    },
    "@media (max-width:980px)": {
      width: "350px",
      height: "270px",
    },
    "@media (max-width:860px)": {
      width: "320px",
      height: "270px",
    },
    "@media (max-width:800px)": {
      width: "290px",
      height: "270px",
    },
    "@media (max-width:780px)": {
      width: "250px",
      height: "230px",
    },
    "@media (max-width:670px)": {
      width: "200px",
      height: "180px",
    },
    "@media (max-width:570px)": {
      width: "400px",
      height: "180px",
    },
    "@media (max-width:520px)": {
      width: "380px",
      height: "180px",
    },
    "@media (max-width:490px)": {
      width: "360px",
      height: "180px",
    },
    "@media (max-width:470px)": {
      width: "270px",
      height: "180px",
    },
    "@media (max-width:400px)": {
      width: "240px",
      height: "150px",
    },
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
  titleSub: { fontSize: "18px", fontWeight: 600, textAlign: "center", marginTop: "10px" },
  sectionWhite: {
    background: "linear-gradient(to right, black, black 20%, rgba(0, 0, 0, 30%) 80%)",
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
    marginTop: "200px",
    marginLeft: "16px",
    marginRight: "16px",
    backgroundColor: "#fcfbf9",
    padding: "40px 60px",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
  },
  sectionText: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "30px",
  },
  titleObject: {
    marginTop: "60px",
    paddingTop: "80px",
    marginBottom: "30px",
    fontSize: "48px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
      marginTop: "30px",
      paddingTop: "60px",
      marginBottom: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
      marginTop: "40px",
      paddingTop: "40px",
      marginBottom: "25px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
      marginTop: "30px",
      paddingTop: "30px",
      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
      marginTop: "20px",
      paddingTop: "30px",
      marginBottom: "15px",
    },
  },
  sectionObslujAll: {
    maxWidth: "1000px",
    cursor: "pointer",
    margin: "0 auto",
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // gap: "30px",
  },
  sectionObslujItem: {
    backgroundColor: "white",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    padding: "20px",
    margin: "10px",
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
