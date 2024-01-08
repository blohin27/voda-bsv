import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OrderCall } from "@/components/OrderCall/OrderCall";
import { Montserrat } from "next/font/google";
import { ClassesSx } from "@/theme/theme";
import { Box, useMediaQuery } from "@mui/material";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {}
export const PromoSectionGeneralPage: FC<Props> = () => {
  const showSubTitle = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={classes.sectionWrapperPromo}>
      <Box sx={classes.setcionPromo}>
        <h1>
          <Box sx={classes.setcionPromoTitle}>Чистка и ремонт скважин в Москве и Московской области</Box>
        </h1>
        {!showSubTitle && (
          <Box sx={classes.sectionPromoSubTitle}>
            Оставьте заявку, и наш менеджер ответит на вопросы, подскажет по набору услуг и рассчитает стоимость уборки
          </Box>
        )}
        <Box mt={2}>
          <OrderCall />
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  sectionWrapperPromo: {
    width: "100%",
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width:800px)": {
      textAlign: "center",
    },
  },
  setcionPromo: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",

    left: "60px",
    maxWidth: "50%",
    minWidth: "580px",
    color: "#352c1d",
    zIndex: 2,
    "@media (max-width:900px)": {
      top: "70px",
      minWidth: "500px",
    },
    "@media (max-width:800px)": {
      top: "45%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    "@media (max-width:500px)": {
      minWidth: "400px",
    },
    "@media (max-width:400px)": {
      minWidth: "300px",
    },
  },
  setcionPromoTitle: {
    color: "white",
    fontWeight: 785,
    fontSize: "50px",
    lineHeight: "60px",
    letterSpacing: "2px",
    marginBottom: "10px",
    "@media (max-width:900px)": {
      fontSize: "40px",
      lineHeight: "50px",
      letterSpacing: "2px",
      marginBottom: "30px",
    },
    "@media (max-width:600px)": {
      fontSize: "30px",
      lineHeight: "30px",
      letterSpacing: "2px",
      marginBottom: "5px",
    },
    "@media (max-width:500px)": {
      fontSize: "22px",
      lineHeight: "30px",
      letterSpacing: "2px",
      marginBottom: "5px",
    },
  },
  sectionPromoSubTitle: {
    fontSize: "18px",
    color: "white",
    fontWeight: 500,
    lineHeight: "30px",
  },
};
