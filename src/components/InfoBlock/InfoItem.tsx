import React, { FC } from "react";
import Box from "@mui/material/Box";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { ClassesSx } from "@/theme/theme";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { useMediaQuery } from "@mui/material";
import { FcComboChart } from "react-icons/fc";
import { IconType } from "react-icons";

interface IProps {
  title?: string;
  titleSub?: string;
  icon?: React.ReactNode;
}

export const InfoItem: FC<IProps> = ({ title, titleSub, icon }) => {
  const adaptiv950 = useMediaQuery("(max-width:950px)");
  const adaptiv600 = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={classes.infoItem} id={"icon"}>
      {icon}
      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box sx={classes.sectionPromoTitle} className={montserrat.className}>
          {title}
        </Box>
        <Box sx={classes.sectionPromoSubTitle}>{titleSub}</Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  infoItem: {
    width: "29%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    maxWidth: "300px",
    alignItems: "center",
    "@media (max-width:950px)": {},
    "@media (max-width:600px)": {
      flexDirection: "row",
      width: "100%",
    },
  },

  sectionPromoSubTitle: {
    fontSize: "15px",
    color: "#5f5f5f",
    fontWeight: 400,
    lineHeight: "25px",
    "@media (max-width:950px)": {
      fontSize: "15px",
      lineHeight: "20px",
    },
  },
  sectionPromoTitle: {
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "50px",
    color: "#352c1d",
    "@media (max-width:950px)": {
      fontSize: "30px",
    },
    "@media (max-width:600px)": {
      fontSize: "25px",
    },
  },
};
