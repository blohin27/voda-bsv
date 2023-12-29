import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_MILK, EMAIL, IP, MOBILE_TELEPHONE } from "@/const";
import Image from "next/image";
import { ContactSection } from "./comopents/ContactSection";
import { ContactySoiskatelem } from "@/pages/contact/comopents/ContactySoiskatelem";
import { AddressInMap } from "@/pages/contact/comopents/AddressInMap";
import { NashiPreim } from "@/pages/contact/comopents/NashyPreim";

interface IProps {}
export const ContactPage: FC<IProps> = () => {
  return (
    <Box sx={{ ...classes.root }}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}>Контакты</Box>
          <ContactSection />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: `${COLOR_MILK}`, padding: "100px" }}>
        <Box sx={classes.wrapper}>
          <ContactySoiskatelem />
        </Box>
      </Box>
      <Box sx={classes.wrapper}>
        <AddressInMap />
        <NashiPreim />
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  title: {
    fontWeight: "700",
    fontSize: "40px",
    textAlign: "center",
  },
  contactInformationAndPhotoSection: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  contactInformationText: {
    display: "flex",
    flexDirection: "column",
    width: "35%",
  },
  photoGeneralSection: {
    width: "65%",
  },
  titleContactSection: { fontSize: "25px", fontWeight: "700" },
  sectionContact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  photo: {
    width: "100%",
    display: "flex",
    height: "400px",
    position: "relative",
    "@media (max-width:800px)": {},
  },
  titleText: {
    fontWeight: "600",
  },
  textContact: {
    fontWeight: "400",
  },
};
