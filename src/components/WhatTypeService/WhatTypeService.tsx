import Box from "@mui/material/Box";
import React, { FC } from "react";
import Image from "next/image";
import { PromoSectionGeneralPage } from "@/components/PromoSectionGeneralPage/PromoSectionGeneralPage";
import { ClassesSx } from "@/theme/theme";

interface IProps {}
export const WhatTypeService: FC<IProps> = () => {
  return (
    <>
      <Box sx={classesStyle.titleObject}>Какие объекты в Москве и Московской области мы обслуживаем</Box>

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
    </>
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
    boxShadow: "1px 2px 45px -22px rgba(0, 0, 0, 0.75)",
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
    maxWidth: "1200px",
    margin: "0 auto",
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
