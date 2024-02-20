import React, { FC, forwardRef, useRef, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { data1, data2 } from "./data";
import { COLOR_BLACK, CONST_TITLE, CONST_TITLE_FIRST_PAGE } from "@/const";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { v4 as uuidv4 } from "uuid";
import { chistka, dataTableRemBur, dataTableRemBur2, diag, ecv, montajVodosnab, servObsVodo, ustanovkaNasosa, zamenaNasosa } from "@/price";

interface IProps {}
export const PricePage: FC<IProps> = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const myRef2 = useRef<HTMLDivElement>(null);
  const myRef3 = useRef<HTMLDivElement>(null);
  const myRef4 = useRef<HTMLDivElement>(null);
  const myRef5 = useRef<HTMLDivElement>(null);
  const myRef6 = useRef<HTMLDivElement>(null);
  const myRef7 = useRef<HTMLDivElement>(null);
  const myRef8 = useRef<HTMLDivElement>(null);
  const myRef9 = useRef<HTMLDivElement>(null);
  const myRef10 = useRef<HTMLDivElement>(null);
  const [rem5, setRem] = useState("Ремонт скважины");

  const scrollToMyRef = (myRef: any) => {
    myRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={classes.root}>
      <Box>
        <Box>
          <Box sx={classes.setcionGeneralPageBanner}>
            <Image src="/photo/photoObjectObslug/mj.png" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.wrapper}>
              <Box sx={classes.content}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                  <h1>
                    <Box sx={{ ...classes.title, fontSize: "52px" }}>Цены на ремонт скважин</Box>
                  </h1>
                  <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "0 16px 0 16px" }}>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef);
                      }}
                    >
                      Ремонт скважины
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef2);
                      }}
                    >
                      Бурение
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef3);
                      }}
                    >
                      Бурение (малогабариткой)
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef4);
                      }}
                    >
                      Чистка скважины
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef5);
                      }}
                    >
                      Диагностика
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef6);
                      }}
                    >
                      Замена насоса
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef7);
                      }}
                    >
                      Установка насоса
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef8);
                      }}
                    >
                      Замена насоса ЭЦВ
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef9);
                      }}
                    >
                      Сервис по водоочистке
                    </Box>
                    <Box
                      sx={classes.buttonItem}
                      onClick={() => {
                        scrollToMyRef(myRef10);
                      }}
                    >
                      Монтаж водоснабжения
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={-6}>
            <InfoBlocks />
          </Box>
          <Box sx={classes.wrapperItemPrice}>
            <Box sx={classes.contenItemPrice}>
              <ComponentTableWithTitle title={"Цены на ремонт скважины"} dataTableRem={dataTableRemRem} key={uuidv4()} ref={myRef} />
              <ComponentTableWithTitle title={"Цены на бурение в Москве и МО"} dataTableRem={dataTableRemBur} key={uuidv4()} ref={myRef2} />
              <ComponentTableWithTitle title={"Цены на бурение за метр малогабаритной установкой"} dataTableRem={dataTableRemBur2} key={uuidv4()} ref={myRef3} />
              <ComponentTableWithTitle title={"Цены на чистку скважин на воду"} dataTableRem={chistka} key={uuidv4()} ref={myRef4} />
              <ComponentTableWithTitle title={"Цены на диагностику скважины"} dataTableRem={diag} key={uuidv4()} ref={myRef5} />
              <ComponentTableWithTitle title={"Цена на замену насоса"} dataTableRem={zamenaNasosa} key={uuidv4()} ref={myRef6} />
              <ComponentTableWithTitle title={"Цены на установку насоса"} dataTableRem={ustanovkaNasosa} key={uuidv4()} ref={myRef7} />
              <ComponentTableWithTitle title={"Цены замену насоса ЭЦВ"} dataTableRem={ecv} ref={myRef8} />
              <ComponentTableWithTitle title={"Цены на сервисное обслуживание водоочистки"} dataTableRem={servObsVodo} key={uuidv4()} ref={myRef9} />
              <ComponentTableWithTitle title={"Цены на монтаж водоснабжения"} dataTableRem={montajVodosnab} key={uuidv4()} ref={myRef10} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ComponentTableWithTitle = forwardRef<HTMLDivElement, { title: string; dataTableRem: { name: string; price: string }[] }>(
  ({ title, dataTableRem }, ref) => {
    return (
      <Box sx={classes.contenForTable}>
        <Box sx={{ ...classes.subTitle1 }} ref={ref}>
          {title}
        </Box>
        <Box sx={classes.table}>
          <Table style={{ width: "100%", borderCollapse: "collapse", border: "none" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...classes.thStyle }}>Название услуги</TableCell>
                <TableCell sx={{ ...classes.thStyle, width: "60%" }}>Цена</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTableRem.map((item) => (
                <TableRow key={item.name}>
                  <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                  <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    );
  },
);

ComponentTableWithTitle.displayName = "ComponentTableWithTitle";

const classes: ClassesSx = {
  root: {},
  tdStyle: {
    textAlign: "center",
    backgroundColor: "#fcfbf9",
    border: "1px solid #dedede",
    height: "35px",
    fontSize: "24px",
    fontWeight: "700",
    "@media (max-width:750px)": {
      fontSize: "20px",
    },
    "@media (max-width:550px)": {
      fontSize: "18px",
      fontWeight: "600",
    },
  },
  thStyle: {
    width: "60%",
    backgroundColor: "#4ab461",
    color: "white",
    height: "30px",
    fontSize: "35px",
    fontWeight: "600",
    textAlign: "center",
    "@media (max-width:750px)": {
      fontSize: "25px",
    },
    "@media (max-width:550px)": {
      fontSize: "18px",
    },
  },
  subTitle1: { ...CONST_TITLE_FIRST_PAGE, color: COLOR_BLACK },
  buttonsNavigation: { display: "flex", justifyContent: "center", gap: "20px" },
  titleContentItem: {
    ...CONST_TITLE,
    marginTop: "40px",
    paddingTop: "40px",
  },
  contenManagement: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  contenItemManagement: {
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
  },
  table: {
    display: "flex",
    justifyContent: "center",
    margin: "0 16px 0 16px",
  },
  buttonItem: {
    display: "flex",
    backgroundColor: "#4ab461",
    cursor: "pointer",
    fontSize: "15px",
    borderRadius: "3px",
    padding: "10px",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#fe6c36",
    },
  },
  wrapperItemPrice: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  contenItemPrice: {},

  sectionWhite: {
    // background: "linear-gradient(to left, white, white 100%, rgba(255,255,255 10%) 100%)",
    background: "linear-gradient(to left, black, black 100%, rgba(0, 0, 0, 10%) 90%)",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:900px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "330px",
    position: "relative",
    "@media (max-width:670px)": {
      height: "350px",
    },
    "@media (max-width:550px)": {
      height: "360px",
    },
    "@media (max-width:540px)": {
      height: "380px",
    },
    "@media (max-width:470px)": {
      height: "420px",
    },
    "@media (max-width:450px)": {
      height: "420px",
    },
    "@media (max-width:435px)": {
      height: "450px",
    },
    "@media (max-width:400px)": {
      height: "500px",
    },
    "@media (max-width:370px)": {
      height: "550px",
    },
  },
  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
  },
  title: {
    marginTop: "40px",
    marginBottom: "30px",
    marginLeft: "16px",
    marginRight: "16px",
    fontSize: "48px",
    color: "white",
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
      marginTop: "40px",
      marginBottom: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
      marginTop: "40px",

      marginBottom: "25px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
      marginTop: "30px",

      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
      marginTop: "20px",

      marginBottom: "15px",
    },
  },
  titleDesc: {
    display: "flex",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    maxWidth: "600px",
    margin: "0 auto",
    color: "white",
  },
  wrapper: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
};
