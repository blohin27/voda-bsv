import { FC } from "react";
import styles from "./styles.module.scss";
import { Roboto_Slab } from "next/font/google";
import classNames from "classnames";
import { Box } from "@mui/material";
import { ClassesSx } from "@/theme/theme";
import Link from "next/link";
const roboto = Roboto_Slab({ subsets: ["latin"] });

interface IProps {}

export const HeaderMenu: FC<IProps> = () => {
  return (
    <>
      <Box sx={classes.wrapper}>
        <Box ml={2} mr={2}>
          <Box sx={classes.section} className={roboto.className}>
            <Link href={"/uslugi"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Услуги</Box>
            </Link>
            <Link href={"/price"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Цены</Box>
            </Link>
            <Box sx={classes.link}>Срочный выезд</Box>
            <Link href={"/calculator"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Калькулятор</Box>
            </Link>
            <Link href={"/our-works"} style={{ textDecoration: "none" }}>
              <Box sx={classes.link}>Наши работы</Box>
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
    justifyContent: "space-between",
    padding: "15px 0 15px 0",
    maxWidth: "1200px",
    margin: "0 auto",
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
};
