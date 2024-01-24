import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";

import { NashyRaboty } from "@/components/NashyRaboty/NashyRaboty";
import { NashyRabotyTemplate } from "@/components/NashyRaboty/NashyRaboty2";
import Image from "next/image";
import { COLOR_BLACK, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { observer } from "mobx-react";
import { SimpleDialog } from "@/components/Modal/Modal";
import { modalStore } from "@/domain";

interface IProps {}
export const OurWorksPage: FC<IProps> = observer(() => {
  return (
    <>
      <Box sx={classes.root}>
        <Box sx={classes.setcionGeneralPageBannerImg}>
          <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
          <Box sx={classes.sectionWhiteImg} />
          <Box sx={classes.wrapperImg}>
            <Box sx={classes.contentImg}>
              <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <h1>
                  <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Наши работы</Box>
                </h1>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={classes.wrapper}>
          <Box sx={classes.content}>
            <Box mt={-6}>
              <InfoBlocks />
            </Box>
            <h2>
              <Box sx={{ ...classes.subTitle1 }}>Примеры выполненных работ</Box>
            </h2>
            <Box sx={classes.itemWorks}>
              <Box sx={classes.marginItem}>
                <NashyRabotyTemplate
                  textFirst
                  title={"Чистка скважины"}
                  glubina={"40 метров"}
                  time={"4 часа"}
                  typeWork={"Чистка скважины с использованием профессиональной химии"}
                  kolvoPersonal={"2 человека"}
                  photo={["/photo/chistyavoda.jpg", "/photo/gryaznaya_voda.jpg"]}
                  price={"15 000 рублей"}
                />
              </Box>
              <Box sx={classes.marginItem}>
                <NashyRabotyTemplate
                  title={"Замена насоса"}
                  glubina={"54 метров"}
                  time={"3 часа"}
                  typeWork={"Замена насоса с настройкой автоматики"}
                  kolvoPersonal={"2 человека"}
                  photo={["/photo/diagnostika_skvajiny_na4alo.jpg"]}
                  price={"18 000 рублей"}
                />
              </Box>
              <Box sx={classes.marginItem}>
                <NashyRabotyTemplate
                  textFirst
                  title={"Замена гидроаккумулятора"}
                  glubina={"40 метров"}
                  time={"1 часа"}
                  typeWork={"Замена гидроаккумулятора вместо неисправного"}
                  kolvoPersonal={"2 человека"}
                  photo={["/photo/1t.jpg", "/photo/montaj_vodosnabjenia.jpg"]}
                  price={"4 000 рублей"}
                />
              </Box>
              <Box sx={classes.marginItem}>
                <NashyRabotyTemplate
                  title={"Чистка водоочистки"}
                  glubina={"80 метров"}
                  time={"3 часа"}
                  typeWork={"Чистка водоочистки с использованием современного инструмента"}
                  kolvoPersonal={"2 человека"}
                  photo={["/photo/gryaznaya_vodoochistka.jpg", "/photo/nr_gr_elemtn1.jpg", "/photo/nr_gryazny_element.jpg"]}
                  price={"25 000 рублей"}
                />
              </Box>
              <Box sx={classes.marginItem}>
                <NashyRabotyTemplate
                  textFirst
                  title={"Замена насоса"}
                  glubina={"80 метров"}
                  time={"5 часа"}
                  typeWork={"Замена трехфазного насоса в скважине"}
                  kolvoPersonal={"2 человека"}
                  photo={["/photo/remont_ramenskoe.jpg"]}
                  price={"30 000 рублей"}
                />
              </Box>
              <Box>
                <NashyRabotyTemplate
                  title={"Установка кессона"}
                  glubina={"0 метров"}
                  time={"6 часа"}
                  typeWork={"Установка кессона на 4 кольца"}
                  kolvoPersonal={"4 человека"}
                  photo={["/photo/septic.jpg"]}
                  price={"20 000 рублей"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <SimpleDialog open={modalStore.modalOpen} />
    </>
  );
});

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  title: { fontWeight: 700, fontSize: "30px", textAlign: "center" },
  titleGeneral: {
    marginTop: "50px",
    fontSize: "48px",
    color: "white",
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
    },
  },
  marginItem: {
    marginBottom: "30px",
  },
  liItem: { fontWeight: "600", fontSize: "20px", color: COLOR_BLACK, "@media (max-width:700px)": { fontSize: "14px" } },
  imgSection: {
    position: "relative",
    height: "150px",
    width: "350px",
    float: "left",
    marginRight: "15px",
    "@media (max-width:600px)": {
      width: "100%",
      marginBottom: "10px",
    },
  },
  subTitle1: { ...CONST_TITLE_FIRST_PAGE, color: COLOR_BLACK },
  subTitle1OstavZayvk: {
    fontSize: "35px",
    marginTop: "90px",
    marginBottom: "15px",
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "35px",
    },
    "@media (max-width: 1100px)": {
      fontSize: "35px",
      marginTop: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "30px",
    },
    "@media (max-width: 640px)": {
      fontSize: "24px",
    },
    "@media (max-width: 480px)": {
      fontSize: "22px",
    },
    color: COLOR_BLACK,
  },
  descTextSection: { textAlign: "left", margin: "5px 5px", fontSize: "16px", fontWeight: "400", lineHeight: "1.55" },
  setcionGeneralPageBannerImg: {
    width: "100%",
    display: "flex",
    height: "200px",
    position: "relative",
    "@media (max-width:480px)": {
      height: "200px",
    },
  },
  contentImg: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  titleDesc: {
    display: "flex",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    maxWidth: "600px",
    margin: "0 auto",
    color: "white",
  },
  wrapperImg: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  arrayPhoto: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
    "@media (max-width:580px)": {
      gap: "2px",
    },
  },
  sectionWhiteImg: {
    background: "linear-gradient(to left, black, black 100%, rgba(0, 0, 0, 10%) 90%)",
    opacity: 0.6,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:900px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
  table: {
    display: "flex",
    justifyContent: "center",
  },
  tdStyle: {
    textAlign: "center",
    backgroundColor: "#fcfbf9",
    border: "1px solid #dedede",
    height: "25px",
    fontSize: "22px",
    fontWeight: "700",
    "@media (max-width:500px)": { fontSize: "15px" },
  },
  thStyle: { width: "60%", backgroundColor: "#4ab461", color: "white", height: "30px", fontSize: "25px", fontWeight: "600", textAlign: "center" },
  titlePrice: {
    fontSize: "35px",
    marginTop: "20px",
    marginBottom: "15px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "35px",
    },
    "@media (max-width: 950px)": {
      fontSize: "30px",
    },
    "@media (max-width: 640px)": {
      fontSize: "24px",
    },
    "@media (max-width: 480px)": {
      fontSize: "22px",
    },
  },
};
