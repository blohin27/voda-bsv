import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { EMAIL, EMAIL2, IP, MOBILE_TELEPHONE } from "@/const";
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
              <Box sx={classes.textContact}>{EMAIL2}</Box>
            </Box>
            <Box sx={classes.sectionContact}>
              <Box sx={classes.titleText}>График работы</Box>
              <Box sx={classes.textContact}>{"c 7:00 до 23:00"}</Box>
            </Box>
            <Box sx={classes.sectionContact}>
              <Box sx={classes.titleText}>Реквизиты</Box>
              <Box sx={classes.textContact}>{`Наименоваие:${IP.name}`}</Box>
              <Box sx={classes.textContact}>{`ОГРН:${IP.OGRNIP}`}</Box>
              <Box sx={classes.textContact}>{`ИНН:${IP.INN}`}</Box>
            </Box>
            <Box sx={{ ...classes.sectionContact }}>
              <Box sx={classes.titleText}>Мы в социальных сетях</Box>
              <Box sx={classes.sectionNetworkSocial}>
                <Image src="/icons/icons-telegram.svg" alt={"image"} width={55} height={55} />
                <Image src="/icons/icons-whatsapp.svg" alt={"image"} width={55} height={55} />
                <Image src="/icons/Instagram_logo_2016.svg" alt={"image"} width={45} height={45} />
                <Box ml={1}>
                  <Image src="/icons/Facebook_f_logo_(2021).svg.png" alt={"image"} width={45} height={45} />{" "}
                </Box>
                <Box ml={1}>
                  <Image src="/icons/vk_logo_icon.svg" alt={"image"} width={45} height={45} />{" "}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={classes.photoGeneralSection}>
          <Box sx={classes.photo}>
            <Image
              src="/photo/contactPageimg.jpg"
              alt={"image"}
              layout={"fill"}
              objectFit="cover"
              objectPosition="90% 50%" // По умолчанию 'center', но может быть изменено
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
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  contactInformationText: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    "@media (max-width:800px)": {
      width: "60%",
    },
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
  photoGeneralSection: {
    width: "60%",
    "@media (max-width:800px)": {
      width: "40%",
    },
    "@media (max-width:550px)": {
      display: "none",
    },
  },
  titleContactSection: {
    fontSize: "33px",
    fontWeight: "700",
    "@media (max-width:1000px)": {
      fontSize: "28px",
    },
    "@media (max-width:800px)": {
      fontSize: "25px",
    },
    "@media (max-width:600px)": {
      fontSize: "22px",
    },
    "@media (max-width:400px)": {
      fontSize: "18px",
    },
  },

  photo: {
    width: "100%",
    display: "flex",
    height: "500px",
    position: "relative",
    "@media (max-width:800px)": {},
  },
  titleText: {
    fontWeight: "600",
    fontSize: "20px",
    "@media (max-width:1000px)": {
      fontSize: "18px",
    },
    "@media (max-width:800px)": {
      fontSize: "16px",
    },
    "@media (max-width:600px)": {
      fontSize: "14px",
    },
    "@media (max-width:400px)": {
      fontSize: "12px",
    },
  },
  sectionContact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  sectionNetworkSocial: { display: "flex", justifyContent: "flex-start", alignItems: "center" },
  textContact: {
    fontWeight: "400",
    fontSize: "17px",
    padding: "5px 0",
  },
};
