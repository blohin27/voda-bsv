import { FC } from "react";
import styles from "./styles.module.scss";
import { Roboto_Slab } from "next/font/google";
import classNames from "classnames";
import { Box } from "@mui/material";
import { ClassesSx } from "@/theme/theme";
import Link from "next/link";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
const roboto = Roboto_Slab({ subsets: ["latin"] });

interface IProps {}

export const HeaderMenu: FC<IProps> = () => {
  return (
    <>
      <Box sx={classes.wrapper}>
        <Box ml={2} mr={2}>
          <Box sx={classes.section} className={montserrat.className}>
            <Link href={"/uslugi"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Услуги</Box>
            </Link>
            <Link href={"/price"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Цены</Box>
            </Link>
            <Link href={"/avaria-vyezd"} style={{ textDecoration: "none" }}>
              <Box sx={{ ...classes.linkUrgent }}>Аварийный выезд</Box>
            </Link>
            <Link href={"/nashy-raboty"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Наши работы</Box>
            </Link>
            <Link href={"/priglasit-nas-v-tender"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Тендеры</Box>
            </Link>
            <Link href={"/poleznye-stati"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Полезные статьи</Box>
            </Link>
            <Link href={"/contact"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Контакты</Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const classes: ClassesSx = {
  section: {
    display: "flex",
    justifyContent: "center",
    padding: "15px 0 15px 0",
    maxWidth: "1200px",
    margin: "0 auto",
    fontWeight: 700,
    gap: "30px",
  },
  wrapper: {
    backgroundColor: "#08a4eb",
  },
  link: {
    color: "white",
    fontSize: "20px",
    "@media (max-width:1100px)": {
      fontSize: "17px",
    },
    "@media (max-width:900px)": {
      fontSize: "15px",
    },
  },
  linkUrgent: {
    animation: "blink 2s linear  infinite",
    borderRadius: "2px",
    color: "white",
    fontSize: "20px",
    "@media (max-width:1100px)": {
      fontSize: "17px",
    },
    "@media (max-width:900px)": {
      fontSize: "15px",
    },
    "@keyframes blink": {
      "0%": { backgroundColor: "transparent" },
      "70%": { backgroundColor: "transparent" },
      "71%": { backgroundColor: "rgb(255, 0, 0)" },
      "80%": { backgroundColor: "transparent" },
      "91%": { backgroundColor: "rgb(255, 0, 0)" },
      "100%": { backgroundColor: "transparent" },
    },
  },
};
