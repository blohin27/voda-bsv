import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Montserrat } from "next/font/google";
import { ServiceItem } from "@/components/ServicesAll/component/ServiceItem/ServiceItem";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {}
export const ServicesAll: FC<IProps> = () => {
  const [statePult, setStatePult] = useState("пульт1");

  const changePult = (item: string) => {
    setStatePult(item);
  };

  return (
    <Box sx={classes.wrapper} className={montserrat.className}>
      <Box sx={classes.title} className={montserrat.className} mb={3}>
        Основные услуги по водоснабжению
      </Box>
      <Box sx={classes.pultServiceItems} mb={3}>
        <Box
          onClick={() => {
            changePult("пульт1");
          }}
          sx={classes.pultItem}
          style={statePult === "пульт1" ? { backgroundColor: "#fe6c36", color: "white" } : {}}
        >
          Все услуги
        </Box>
        <Box
          onClick={() => {
            changePult("пульт2");
          }}
          sx={classes.pultItem}
          style={statePult === "пульт2" ? { backgroundColor: "#fe6c36", color: "white" } : {}}
        >
          Для физ. лиц
        </Box>
        <Box
          onClick={() => {
            changePult("пульт3");
          }}
          sx={classes.pultItem}
          style={statePult === "пульт3" ? { backgroundColor: "#fe6c36", color: "white" } : {}}
        >
          Для юр. лиц
        </Box>
      </Box>
      <Box sx={classes.wrapperItems} mb={10}>
        <Box sx={classes.contentItems}>
          {statePult === "пульт1" && (
            <>
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem /> <ServiceItem />
              <ServiceItem /> <ServiceItem />
              <ServiceItem />
            </>
          )}
          {statePult === "пульт2" && (
            <>
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
            </>
          )}
          {statePult === "пульт3" && (
            <>
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  wrapperItems: {
    maxWidth: "1080px",
    margin: "0 auto",
    "@media (max-width:1090px)": {
      maxWidth: "805px",
      margin: "0 auto",
    },
    "@media (max-width:840px)": {
      maxWidth: "535px",
      margin: "0 auto",
    },
    "@media (max-width:540px)": {
      maxWidth: "100%",
      margin: "0 auto",
    },
    "@media (max-width:440px)": {
      maxWidth: "100%",
      margin: "0 auto",
    },
  },
  contentItems: {
    gap: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    "@media (max-width:600px)": {
      flexWrap: "nowrap",
      overflowX: "auto",
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
    cursor: "pointer",
    border: "2px solid #fe6c36",
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    color: "black",
    backgroundColor: "white",
    flex: "1 0 auto",
    justifyContent: "center",
    maxWidth: "250px",
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
