import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLOR_MILK, EMAIL, IP, MOBILE_TELEPHONE } from "@/const";

interface IProps {}
export const ContactySoiskatelem: FC<IProps> = () => {
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.photoGeneralSection}>
        <Box sx={classes.photo}>
          <Image
            src="/photoNew/testImage.jpg"
            alt={"image"}
            layout={"fill"}
            objectFit="cover"
            objectPosition="left left" // По умолчанию 'center', но может быть изменено
            quality={100}
          />
        </Box>
      </Box>
      <Box sx={classes.text}>
        <Box sx={classes.title}>Контакты соискателям</Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={classes.sectionContact}>
            <Box sx={classes.titleText}>Номе телефона</Box>
            <Box sx={classes.textContact}>{MOBILE_TELEPHONE}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { display: "flex", gap: "20px", padding: "0px" },
  photoGeneralSection: { display: "flex", width: "65%" },
  text: { display: "flex", width: "35%", flexDirection: "column", alignSelf: "center" },
  photo: {
    width: "100%",
    display: "flex",
    height: "400px",
    position: "relative",
    "@media (max-width:800px)": {},
  },
  title: { fontSize: "30px", fontWeight: 700 },
  titleText: {
    fontWeight: "600",
  },
  sectionContact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  textContact: {
    fontWeight: "400",
  },
};
