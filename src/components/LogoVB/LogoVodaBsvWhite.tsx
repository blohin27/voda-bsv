import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

interface IProps {
  sizeText?: string;
  sizeLogoHome?: string;
}

export const LogoVodaBsvWhite: FC<IProps> = ({ sizeText = "30px", sizeLogoHome = "50px" }) => {
  return (
    <Box sx={classes.menu_logo}>
      <Box sx={{ ...classes.img_logo, height: sizeLogoHome, width: sizeLogoHome }} display={"flex"} position={"relative"}>
        {/*<Image*/}
        {/*  src="/logo_dom.png"*/}
        {/*  alt={"image"}*/}
        {/*  layout={"fill"}*/}
        {/*  objectFit="contain"*/}
        {/*  objectPosition="center center" // По умолчанию 'center', но может быть изменено*/}
        {/*  quality={100}*/}
        {/*/>*/}

        <IoHome style={{ color: "white", width: 100, height: 65, alignSelf: "center" }} />
      </Box>
      <Box sx={{ ...classes.text_logo, fontSize: sizeText }}>
        <Box sx={{ ...classes.voda, color: "white" }}>voda-bsv.ru</Box>
        <Box sx={{ ...classes.text_deviz, color: "white" }}>вода в каждый дом</Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  menu_logo: {
    whiteSpace: "nowrap",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    borderTop: "2px solid white ",
    borderBottom: "2px solid white",
  },
  voda: {
    fontSize: "55px",
    "@media (max-width:1050px)": {
      fontSize: "45px",
    },
    "@media (max-width:950px)": {
      fontSize: "40px",
    },
    "@media (max-width:900px)": {
      fontSize: "55px",
    },
    "@media (max-width:600px)": {
      fontSize: "40px",
    },
    "@media (max-width:450px)": {
      fontSize: "35px",
    },
    "@media (max-width:410px)": {
      fontSize: "30px",
    },
    "@media (max-width:380px)": {
      fontSize: "28px",
    },
    "@media (max-width:360px)": {
      fontSize: "26px",
    },
    "@media (max-width:340px)": {
      fontSize: "24px",
    },
  },
  img_logo: {
    height: "50px",
    width: "50px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    left: "10px",
  },
  text_logo: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#09a4eb",
    textTransform: "uppercase",
    fontFamily: "Tahoma",
    justifyContent: "center",
    cursor: "pointer",
    marginLeft: "10px",
    letterSpacing: "3px",
    paddingTop: "3px",
    paddingBottom: "3px",
    "@media (max-width:600px)": {
      fontSize: "28px",
    },
  },
  text_deviz: {
    color: "rgba(143, 143, 143)",
    fontSize: "10px",
    textAlign: "center",
  },
};
