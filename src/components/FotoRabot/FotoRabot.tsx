import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import Image from "next/image";
import { COLOR_BLACK } from "@/const";

interface IProps {}
export const FotoRabot: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}>Фото с наших объектов</Box>
          <Box sx={classes.arrayPhoto}>
            <PhotoItem src="/photo/dostaem_nasos.jpg" />
            <PhotoItem src="/photo/pred.jpg" />
            <PhotoItem src="/photo/dostaem_nasos_servisnoe_obslujivanie.jpg" />
            <PhotoItem src="/photo/montaj_vodoochistki.jpg" />
            <PhotoItem src="/photo/obslujivaem_zavody.jpg" />
            <PhotoItem src="/photo/zamena_nasosa.jpg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const PhotoItem: FC<{ src: string }> = ({ src }) => {
  return (
    <Box sx={classes.wrapperItem}>
      <Image
        src={src}
        alt={"image"}
        height={300}
        width={300}
        objectFit="cover"
        objectPosition="center center" // По умолчанию 'center', но может быть изменено
        quality={100}
      />
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  title: {
    marginTop: "20px",
    paddingTop: "40px",
    marginBottom: "30px",
    fontSize: "48px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
      marginTop: "20px",
      paddingTop: "40px",
      marginBottom: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
      marginTop: "20px",
      paddingTop: "40px",
      marginBottom: "25px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
      marginTop: "20px",
      paddingTop: "30px",
      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
      marginTop: "20px",
      paddingTop: "30px",
      marginBottom: "15px",
    },
  },
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  arrayPhoto: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
    "@media (max-width:780px)": {
      gap: "2px",
    },
  },
  wrapperItem: {
    position: "relative",
    display: "flex",

    "@media (max-width:960px)": {},
    "@media (max-width:780px)": {},
  },
};
