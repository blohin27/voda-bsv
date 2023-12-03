import { FC } from "react";
import Box from "@mui/material/Box";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { ClassesSx } from "@/theme/theme";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { useMediaQuery } from "@mui/material";

interface IProps {}

export const InfoItem: FC<IProps> = () => {
  const adaptiv900 = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={classes.infoItem} id={"icon"}>
      {!adaptiv900 && (
        <AddBusinessIcon style={{ fontSize: "120px", color: "#fe6c36" }} />
      )}
      {adaptiv900 && (
        <AddBusinessIcon style={{ fontSize: "100px", color: "#fe6c36" }} />
      )}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={classes.sectionPromoTitle} className={montserrat.className}>
          9+ лет
        </Box>
        <Box sx={classes.sectionPromoSubTitle}>
          Эффективной работы в сфере водоснабжения
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  sectionPromoSubTitle: {
    fontSize: "18px",
    color: "#5f5f5f",
    fontWeight: 400,
    lineHeight: "30px",
    "@media (max-width:900px)": {
      fontSize: "15px",
    },
  },
  sectionPromoTitle: {
    fontWeight: 900,
    fontSize: "35px",
    lineHeight: "50px",
    color: "#352c1d",
    // "@media (max-width:900px)": {
    //   justifyContent: "center",
    //   fontSize: "30px",
    // },
  },
  infoItem: {
    display: "flex",
    alignItems: "stretch",
    maxWidth: "350px",
    // "@media (max-width:900px)": {
    //   justifyContent: "center",
    //   fontSize: "30px",
    // },
  },
};
