import Image from "next/image";
import Box from "@mui/material/Box";
import { PromoSectionGeneralPage } from "@/components/PromoSectionGeneralPage/PromoSectionGeneralPage";
import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";

interface IProps {}

export const BannerPromo: FC<IProps> = () => {
  return (
    <Box sx={classesStyle.setcionGeneralPageBanner}>
      <Image src="/photoNew/testImage.jpg" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="center center" quality={100} />
      <Box sx={classesStyle.sectionWhite} />
      <PromoSectionGeneralPage />
    </Box>
  );
};

const classesStyle: ClassesSx = {
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
    background: "linear-gradient(to right, black, black 30%, rgba(0, 0, 0, 10%) 80%)",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:800px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
};
