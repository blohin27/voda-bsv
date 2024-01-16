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
import { FcHome } from "react-icons/fc";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {}
export const InfoBlocks: FC<Props> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.sectionWrapper}>
        <Box sx={classes.sections}>
          <Box sx={classes.infoItems}>
            <InfoItem
              title={"9 + лет"}
              titleSub={"Эффективной работы в сфере водоснабжения и водоотведения "}
              icon={<FcComboChart style={{ fontSize: "100px", color: "#fe6c36" }} />}
            />
            <InfoItem
              title={"450 +"}
              titleSub={"За 2023 год мы восстановили подачу воды более чем в 450 домах "}
              icon={<FcHome style={{ fontSize: "100px", color: "#fe6c36" }} />}
            />
            <InfoItem
              title={"+ 78%"}
              titleSub={"Более 75% наших клиентов рекоммендуют нас своим друзьям и знакомым"}
              icon={<FcBullish style={{ fontSize: "100px", color: "#fe6c36" }} />}
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
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
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
