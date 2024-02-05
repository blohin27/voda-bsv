import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_MILK, EMAIL, IP, MOBILE_TELEPHONE } from "@/const";
import Image from "next/image";
import { ContactSection } from "@/components/Content/ContactPage/ContactSection";
import { ContactySoiskatelem } from "@/components/Content/ContactPage/ContactySoiskatelem";
import { AddressInMap } from "@/components/Content/ContactPage/AddressInMap";
import { NashyPreim } from "@/components/Content/ContactPage/NashyPreim";
import { BannerPromoContact } from "@/components/Content/ContactPage/BannerPromoConact";
import { KvalWorker } from "@/components/KvalWorker/KvalWorker";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";

interface IProps {}
export const ContactPage: FC<IProps> = () => {
  return (
    <Box sx={{ ...classes.root }}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Контакты</Box>
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
          <Box sx={classes.title} mt={5} mb={5}>
            Как с Нами связаться?
          </Box>
          <ContactSection />
        </Box>
      </Box>

      <AddressInMap />
      <Box mt={8}>
        <NashyPreim />
      </Box>
      <Box sx={classes.wrapperBannerContact}>
        <BannerPromoContact />
      </Box>
      <KvalWorker />
    </Box>
  );
};

const classes: ClassesSx = {
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
  wrapperBannerContact: {
    marginTop: "80px",
    "@media (max-width:800px)": {
      marginTop: "60px",
    },
    "@media (max-width:500px)": {
      marginTop: "40px",
    },
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
  contentImg: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
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
  wrapperImg: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  title: {
    fontWeight: "700",
    fontSize: "35px",
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
