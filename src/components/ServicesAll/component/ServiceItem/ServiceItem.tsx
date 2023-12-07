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
    width: "100%",
    height: "100%",
    border: "1px solid blue;",
  },

  wrapper: {
    backgroundColor: "rgba(0 0 0)",
    width: "260px",
    height: " 320px",
    "@media (max-width:600px)": {
      flex: "0 0 auto",
    },
    "@media (max-width:360px)": {
      width: "300px",
    },
  },
};
