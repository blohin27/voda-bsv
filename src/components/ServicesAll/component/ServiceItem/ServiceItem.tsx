import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Montserrat } from "next/font/google";
import Box from "@mui/material/Box";
import { ClassesSx } from "@/theme/theme";
const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {}
export const ServiceItem: FC<IProps> = () => {
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.content}></Box>
    </Box>
  );
};

const classes: ClassesSx = {
  content: {
    width: "260px",
    height: " 300px",
    border: "1px solid blue;",
  },
  wrapper: {},
};
