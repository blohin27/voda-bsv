import React, { FC, useState } from "react";
import { Montserrat } from "next/font/google";
import { ServiceItem } from "@/components/ServicesAll/component/ServiceItem/ServiceItem";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLUE_SECTION, COLOR_MILK, CONST_TITLE } from "@/const";
import { PoleznyeStatiItem } from "@/components/Content/PoleznyeStatiPage/PoleznyeStatiItem";
import { observer } from "mobx-react";
import { BasicSelect } from "../BasicSelect/BasicSelect";
import { modalStore } from "@/domain";
const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {}
export const ServicesAll: FC<IProps> = observer(() => {
  const [statePult, setStatePult] = useState("пульт1");

  const changePult = (item: string) => {
    setStatePult(item);
  };

  return (
    <Box sx={classes.wrapper} className={montserrat.className}>
      <Box sx={classes.titleGeneral}> Услуги по водоснабжению</Box>
      <Box mb={2}>
        <BasicSelect />
      </Box>
      <Box sx={classes.wrapperItems} mb={10}>
        <Box sx={classes.contentItems}>
          {modalStore.stateServiceAll === "пульт1" && (
            <>
              <PoleznyeStatiItem photo={"/photo/nasos.jpg"} title={"Ремонт скважины"} link={"/uslugi/remont-scvajin"} />
              <PoleznyeStatiItem photo={"/photo/gryaznaya_voda.jpg"} title={"Чистка скважины"} link={"/uslugi/chistka"} />
              <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Бурение скважины"} link={"/uslugi/burenie"} />
              <PoleznyeStatiItem photo={"/photo/5t.jpg"} title={"Замена насоса в скважине"} link={"/uslugi/zamena-nasosa"} />
            </>
          )}
          {modalStore.stateServiceAll === "пульт2" && (
            <>
              <PoleznyeStatiItem photo={"/photo/7t.jpg"} title={"Очистка фильтра скважины"} link={"/"} />
              <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Обустройства скважины"} link={"/"} />
              <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Диагностика скважины"} link={"/"} />
              <PoleznyeStatiItem photo={"/photo/5t.jpg"} title={"Замена насоса в скважине"} link={"/uslugi/zamena-nasosa"} />
            </>
          )}
          {modalStore.stateServiceAll === "пульт3" && (
            <>
              <PoleznyeStatiItem photo={"/photo/7t.jpg"} title={"Очистка фильтра скважины"} link={"/"} />
              <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Обустройства скважины"} link={"/"} />
              <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Диагностика скважины"} link={"/"} />
            </>
          )}
          {modalStore.stateServiceAll === "пульт4" && (
            <>
              <PoleznyeStatiItem photo={"/photo/7t.jpg"} title={"Очистка фильтра скважины"} link={"/"} />
              <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Обустройства скважины"} link={"/"} />
              <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Диагностика скважины"} link={"/"} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
});

const classes: ClassesSx = {
  wrapperItems: {
    maxWidth: "1080px",
    margin: "0 auto",
    paddingBottom: "60px",
    "@media (max-width:1090px)": {
      // maxWidth: "805px",
      // margin: "0 auto",
    },
    "@media (max-width:840px)": {
      // maxWidth: "535px",
      margin: "0 auto",
      paddingBottom: "40px",
    },
    "@media (max-width:640px)": {
      maxWidth: "100%",
      margin: "0 auto",
    },
    "@media (max-width:440px)": {
      maxWidth: "100%",
      paddingBottom: "30px",
      margin: "0 auto",
    },
  },
  titleGeneral: {
    ...CONST_TITLE,
    marginTop: "40px",
    paddingTop: "40px",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
      marginTop: "40px",
      paddingTop: "40px",
      marginBottom: "30px",
    },
  },
  contentItems: {
    margin: "0 16px 0 16px",
    gap: "20px",
    display: "flex",
    flexWrap: "wrap",
    // backgroundColor: COLOR_MILK,
    backgroundColor: COLOR_BLUE_SECTION,
    justifyContent: "center",
    "@media (max-width:600px)": {
      flexWrap: "nowrap",
      overflowX: "scroll",
      justifyContent: "flex-start",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1200px",
    margin: "0 auto",
    // marginLeft: "16px",
    // marginRight: "16px",
  },
  pultServiceItems: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > :first-child": {
      borderBottomLeftRadius: "5px",
      borderTopLeftRadius: "5px",
      borderRight: "1px solid #fe6c36",
    },
    "& > :last-child": {
      borderBottomRightRadius: "5px",
      borderTopRightRadius: "5px",
      borderLeft: "1px solid #fe6c36",
    },
  },
  pultItem: {
    transition: "all 0.6s ease",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid #fe6c36",
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    color: "black",
    backgroundColor: "white",
    flex: "1 0 auto",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: "250px",
    mminWidth: "150px",
    "@media (max-width:800px)": {
      width: "50%",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "38px",
    color: "#362c1d",
    fontWeight: 700,
    "@media (max-width:440px)": {
      fontSize: "25px",
    },
  },

  item: {
    display: "flex",
    justifyContent: "center",
    border: "2px solid blue",
  },
};
