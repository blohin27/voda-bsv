import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { EMAIL, IP, MOBILE_TELEPHONE } from "@/const";
import Image from "next/image";

interface IProps {}
export const ContactSection: FC<IProps> = () => {
  return (
    <>
      <Box sx={classes.contactInformationAndPhotoSection}>
        <Box sx={classes.contactInformationText}>
          <Box sx={classes.titleContactSection} mb={2}>
            Клиентам и партнерам
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={classes.sectionContact}>
              <Box sx={classes.titleText}>Номер телефона:</Box>
              <Box sx={classes.textContact}>{MOBILE_TELEPHONE}</Box>
            </Box>
            <Box sx={classes.sectionContact}>
              <Box sx={classes.titleText}>Адрес Электронной почты</Box>
              <Box sx={classes.textContact}>{EMAIL}</Box>
              <Box sx={classes.textContact}>{EMAIL}</Box>
            </Box>
            <Box sx={classes.sectionContact}>
              <Box sx={classes.titleText}>График работы</Box>
              <Box sx={classes.textContact}>{MOBILE_TELEPHONE}</Box>
            </Box>
            <Box sx={classes.sectionContact}>
              <Box sx={classes.titleText}>Реквизиты</Box>
              <Box sx={classes.textContact}>{`Наименоваие:${IP.name}`}</Box>
              <Box sx={classes.textContact}>{`ОГРН:${IP.OGRNIP}`}</Box>
              <Box sx={classes.textContact}>{`ИНН:${IP.INN}`}</Box>
            </Box>
          </Box>
        </Box>
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
      </Box>
    </>
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
  sectionContact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  textContact: {
    fontWeight: "400",
  },
};
