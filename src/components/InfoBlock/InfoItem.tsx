import { FC } from "react";
import Box from "@mui/material/Box";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { ClassesSx } from "@/theme/theme";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { useMediaQuery } from "@mui/material";

interface IProps {}

export const InfoItem: FC<IProps> = () => {
  const adaptiv950 = useMediaQuery("(max-width:950px)");
  const adaptiv600 = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={classes.infoItem} id={"icon"}>
      {!adaptiv950 && <AddBusinessIcon style={{ fontSize: "120px", color: "#fe6c36" }} />}
      {adaptiv950 && <AddBusinessIcon style={{ fontSize: "70px", color: "#fe6c36" }} />}
      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box sx={classes.sectionPromoTitle} className={montserrat.className}>
          9+ лет
        </Box>
        <Box sx={classes.sectionPromoSubTitle}>Эффективной работы в сфере водоснабжения и ремонта скважин</Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  infoItem: {
    width: "29%",
    display: "flex",
    alignItems: "stretch",
    "@media (max-width:950px)": {
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
    },
    "@media (max-width:600px)": {
      flexDirection: "row",
      width: "100%",
    },
  },
  sectionPromoSubTitle: {
    fontSize: "18px",
    color: "#5f5f5f",
    fontWeight: 400,
    lineHeight: "30px",
    "@media (max-width:950px)": {
      fontSize: "15px",
      lineHeight: "20px",
    },
  },
  sectionPromoTitle: {
    fontWeight: 900,
    fontSize: "35px",
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
