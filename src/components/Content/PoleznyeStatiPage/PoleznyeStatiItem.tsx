import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLOR_ORANGE } from "@/const";
import Link from "next/link";

interface IProps {
  title: string;
  link: string;
  desc?: string;
  photo: string;
}
export const PoleznyeStatiItem: FC<IProps> = (props) => {
  return (
    <Box sx={classes.item}>
      <Link href={`${props.link}`} style={{ textDecoration: "none" }}>
        <Box sx={classes.sectionImage}>
          <Box sx={classes.photo}>
            <Image
              src={`${props.photo}`}
              alt={"image"}
              layout={"fill"}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено-
              quality={100}
            />
          </Box>
        </Box>
        <Box sx={classes.textSection}>
          <Box sx={classes.title}>{props.title}</Box>
          <Box sx={classes.desc}>{props.desc} </Box>
          <Box sx={classes.buttonSection}>
            <Box sx={classes.button}> Подробнее</Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const classes: ClassesSx = {
  item: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    minWidth: "200px",
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    "@media (max-width:650px)": {
      width: "40%",
    },
    "@media (max-width:600px)": {
      width: "80%",
    },
  },
  sectionImage: {},
  photo: {
    width: "100%",
    display: "flex",
    height: "200px",
    position: "relative",
    "@media (max-width:800px)": {},
  },
  textSection: {},
  title: { fontWeight: 600, fontSize: "20px", textAlign: "center", marginTop: "5px", color: "black" },
  desc: { fontSize: "16px" },
  buttonSection: { display: "flex", justifyContent: "center" },
  button: { backgroundColor: `${COLOR_ORANGE}`, color: "white", borderRadius: "5px", padding: "10px", fontWeight: "700", margin: "20px" },
};
