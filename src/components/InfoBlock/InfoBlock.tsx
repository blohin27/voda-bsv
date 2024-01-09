import { FC } from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { InfoItem } from "@/components/InfoBlock/InfoItem";
import { FcComboChart } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {}
export const InfoBlocks: FC<Props> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.sectionWrapper}>
        <Box sx={classes.sections}>
          <Box sx={classes.infoItems}>
            <InfoItem
              title={"9+лет"}
              titleSub={"Эффективной работы в сфере водоснабжения "}
              icon={<FcComboChart style={{ fontSize: "100px", color: "#fe6c36" }} />}
            />
            <InfoItem
              title={"450+"}
              titleSub={"За 2023 год мы восстановили воду более чем в 450 домах "}
              icon={<FcBullish style={{ fontSize: "100px", color: "#fe6c36" }} />}
            />
            <InfoItem
              title={"10+"}
              titleSub={"Победили более чем в 10 тендерах на сервисное обслуживание "}
              icon={<FcComboChart style={{ fontSize: "120px", color: "#fe6c36" }} />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionWrapper: {
    zIndex: 5,
    marginLeft: "16px",
    marginRight: "16px",
    backgroundColor: "white",
    boxSizing: "border-box",
    padding: "15px",
    boxShadow: "0px 0px 26px 0px rgba(102, 102, 102, 0.75)",
    borderRadius: "10px",
    "@media (max-width:600px)": {
      padding: "12px",
    },
  },
  sections: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  infoItems: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  infoItem: {
    display: "flex",
    alignItems: "stretch",
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
