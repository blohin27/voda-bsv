import React, { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Montserrat } from "next/font/google";
import Box from "@mui/material/Box";
import { ClassesSx } from "@/theme/theme";
import Image from "next/image";
import { COLOR_BLUE, COLOR_BLUE_HOVER, COLOR_ORANGE } from "@/const";
const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {
  title?: string;
  desc?: string;
  photo: string;
}
export const ServiceItem: FC<IProps> = ({ title, desc, photo }) => {
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.content}>
        <Box sx={classes.photo}>
          <Box sx={classes.setcionGeneralPageBanner}>
            <Image
              src={photo}
              alt={"image"}
              layout={"fill"}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            margin: "0 6px 0 6px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Box sx={classes.title}>{title}</Box>
            <Box sx={classes.desc}>{desc}</Box>
          </Box>
          <Box sx={classes.action}>
            <Box sx={{ backgroundColor: COLOR_ORANGE, color: "white", padding: "5px 10px 5px 10px", borderRadius: "5px" }}>Заказать</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e7f7ff",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: "700",
    margin: "8px 0px",
  },
  desc: { fontSize: "13px", fontWeight: "300" },
  action: { display: "flex", justifyContent: "center", marginTop: "15px", marginBottom: "10px" },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "150px",
    position: "relative",
  },
  wrapper: {
    backgroundColor: "rgba(0 0 0)",
    width: "300px",
    "@media (max-width:600px)": {
      flex: "0 0 auto",
    },
    "@media (max-width:360px)": {
      width: "300px",
    },
  },
};
