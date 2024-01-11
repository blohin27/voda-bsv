import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLOR_MILK, COLOR_ORANGE, CONST_TITLE } from "@/const";
import { PoleznyeStatiItem } from "@/components/Content/PoleznyeStatiPage/PoleznyeStatiItem";
import Link from "next/link";

interface IProps {}
export const PoleznyeStatiPage: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <Box sx={{ ...classes.titleImg, fontSize: "52px" }}>Полезные статьи</Box>
              <Box sx={{ ...classes.titleDescImg }}>
                Для быстрой навигации по странице используйте кнопки разделов или боковое меню. В них вы найдете подробное описание цен
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.titlePage}>Полезные статьи</Box>
          <Box sx={classes.sectionItems}>
            <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photo/2t.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photo/5t.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
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
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "500px",
    position: "relative",
    "@media (max-width:800px)": {
      // height: "50px",
    },
  },
  content: { margin: "0 16px 0 16px" },
  titlePage: { fontWeight: "700", fontSize: "40px", textAlign: "center" },
  sectionItems: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px 20px" },
  setcionGeneralPageBannerImg: {
    width: "100%",
    display: "flex",
    height: "450px",
    position: "relative",
    "@media (max-width:800px)": {
      // height: "50px",
    },
  },
  contentImg: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
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
  sectionWhiteImg: {
    // background: "linear-gradient(to left, white, white 100%, rgba(255,255,255 10%) 100%)",
    background: "linear-gradient(to left, black, black 100%, rgba(0, 0, 0, 10%) 90%)",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:900px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
};
