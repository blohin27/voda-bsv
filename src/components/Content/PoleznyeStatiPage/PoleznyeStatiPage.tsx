import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLOR_BLACK, COLOR_MILK, COLOR_ORANGE, CONST_TITLE, CONST_TITLE_FIRST_PAGE } from "@/const";
import { PoleznyeStatiItem } from "@/components/Content/PoleznyeStatiPage/PoleznyeStatiItem";
import Link from "next/link";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";

interface IProps {}
export const PoleznyeStatiPage: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Полезные статьи</Box>
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
          <Box sx={classes.subTitle1}>Полезные статьи для вашей скважины</Box>
          <Box sx={classes.sectionItems}>
            <PoleznyeStatiItem photo={"/photo/burim.jpg"} title={"Как пробурить скважину?"} link={"/poleznye-stati/post1"} />
            <PoleznyeStatiItem photo={"/photo/gryaznaya_voda.jpg"} title={"Как очистить скважину своими руками?"} link={"/poleznye-stati/post2"} />
            <PoleznyeStatiItem photo={"/photo/zamena_nasosa_beloozersk.jpg"} title={"Почему насос выходит из строя"} link={"/poleznye-stati/post3"} />
            {/*<PoleznyeStatiItem photo={"/photo/him.jpg"} title={"Какую химию использовать для очистки скважин"} link={"/poleznye-stati/post4"} />*/}
            {/*<PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/poleznye-stati/post5"} />*/}
            {/*<PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/poleznye-stati/post6"} />*/}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: { backgroundColor: "white" },
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  wrapperItemPrice: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  wrapperImg: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  sectionWhite: {
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
  contentImg: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  setcionGeneralPageBannerImg: {
    width: "100%",
    display: "flex",
    height: "200px",
    position: "relative",
    "@media (max-width:480px)": {
      height: "200px",
    },
  },
  subTitle1: { ...CONST_TITLE_FIRST_PAGE, color: COLOR_BLACK },
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
  content: { margin: "0 16px 0 16px" },
  titlePage: { fontWeight: "700", fontSize: "40px", textAlign: "center" },
  sectionItems: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px 20px" },

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
  titleImg: { ...CONST_TITLE, marginTop: "40px", paddingTop: "40px", color: "white" },
  titleDescImg: {
    display: "flex",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    maxWidth: "600px",
    margin: "0 auto",
    color: "white",
  },
};
