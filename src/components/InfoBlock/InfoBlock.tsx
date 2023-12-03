import { FC } from "react";
import styles from "./styles.module.scss";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { InfoItem } from "@/components/InfoBlock/InfoItem";
const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {}
export const InfoBlocks: FC<Props> = () => {
  return (
    <Box sx={classes.root}>
      <Box position={"absolute"} className={styles.sectionWrapper}>
        <Box sx={classes.section}>
          <Box sx={classes.infoItems}>
            <InfoItem />
            <InfoItem />
            <InfoItem />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
  },
  sectionWrapper: {
    zIndex: 5,
    top: "0%",
    left: "50%",
    width: "100%",
    transform: "translate(-50%, -20%)",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "white",
    boxSizing: "border-box",
    padding: "25px",
    boxShadow: "0px 0px 26px 0px rgba(102, 102, 102, 0.75)",
    borderRadius: "10px",
  },
  section: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  infoItems: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
  },
  infoItem: {
    display: "flex",
    alignItems: "stretch",
    maxWidth: "250px",
  },
  sectionPromoTitle: {
    fontWeight: 900,
    fontSize: "35px",
    lineHeight: "50px",
    color: "#352c1d",
  },
  sectionPromoSubTitle: {
    fontSize: "18px",
    color: "#5f5f5f",
    fontWeight: 400,
    lineHeight: "30px",
  },
};
