import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { OrderCall } from "@/components/OrderCall/OrderCall";

interface IProps {
  text?: string;
  subText?: string;
}

export const Banner: FC<IProps> = ({ text = "Получить бесплатную консультацию", subText = "Наш специалист свяжется с вами через некторое время" }) => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.setcionGeneralPageBanner}>
            <Image
              src="/photo/schlang.jpg"
              alt={"image"}
              layout={"fill"}
              objectFit="cover"
              objectPosition="50% 70%" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.contentForBanner}>
              <Box sx={classes.contentForBannerwrapperSection}>
                <Box sx={classes.sectionBanner}>
                  <Box display={"flex"} flexDirection={"column"} gap={"30px"} mt={7} mr={2} ml={2}>
                    <h3>
                      <Box sx={classes.bannerTitle}> {text}</Box>
                    </h3>
                    {subText && <Box sx={classes.descr}>{subText}</Box>}
                    <OrderCall />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  bannerTitle: {
    fontSize: "38px",
    fontWeight: 700,
    maxWidth: "600px",
    textAlign: "left",
    lineHeight: "50px",
    color: "white",
    "@media (max-width:900px)": {
      textAlign: "center",
      fontSize: "25px",
      lineHeight: "40px",
    },
  },
  sectionBanner: {
    display: "flex",
    justifyContent: "right",
    width: "100%",
    "@media (max-width:900px)": {
      justifyContent: "center",
      textAlign: "center",
    },
  },
  contentForBannerwrapperSection: {
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
  },
  descr: {
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  content: { display: "flex" },
  contentSection: { display: "flex", width: "100%" },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "400px",
    position: "relative",
    "@media (max-width:800px)": {
      height: "350px",
    },
    "@media (max-width:400px)": {
      height: "450px",
    },
  },
  contentForBanner: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  sectionContentBaner: {
    color: "red",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionWhite: {
    background: "linear-gradient(to left, black, black 40%, rgba(0, 0, 0, 10%) 90%)",
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
