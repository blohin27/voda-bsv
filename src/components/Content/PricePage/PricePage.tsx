import React, { FC, forwardRef, useRef, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { data1, data2 } from "./data";
import { COLOR_BLACK, CONST_TITLE, CONST_TITLE_FIRST_PAGE } from "@/const";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { v4 as uuidv4 } from "uuid";

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
  const [dataTableRem, setDataTableRem] = useState<{ name: string; price: string }[]>([
    { name: "1Замена asdw asdwdа до 40 м.", price: "30" },
    { name: "2Замена насоса до 40 м.", price: "25" },
    { name: "3Замена насоса до 40 м.", price: "35" },
    { name: "4Замена насоса до 40 м.", price: "25" },
    { name: "5Замена насоса до 40 м.", price: "35" },
    { name: "6Замена насоса до 40 м.", price: "25" },
    { name: "7Замена насоса до 40 м.", price: "35" },
  ]);
  const [dataTableRemBur, setDataTableRemBur] = useState([
    { name: "Металл Ø133 мм.", price: "от 3000" },
    { name: "Металл/Пластик Ø133мм./117мм", price: "от 3200" },
    { name: "Металл Ø159 мм", price: "от 3500" },
    { name: "Металл/Пластик Ø159мм./125мм ", price: "от 3800" },
    { name: "Пластик НПВХ 125мм.", price: "от 2600" },
  ]);
  const [dataTableRemBur2, setDataTableRemBur2] = useState([
    { name: "Металл Ø133 мм.", price: "от 2800" },
    { name: "Металл/Пластик Ø133мм./117мм", price: "от 3000" },
    { name: "Металл Ø159 мм", price: "от 3500" },
    { name: "Металл/Пластик Ø159мм./125мм ", price: "от 3600" },
    { name: "Пластик НПВХ 125мм.", price: "от 2500" },
  ]);
  const [dataTableRemRem, setDataTableRemRem] = useState([
    { name: "Диагностика скважины на воду (Выезд)", price: "от 5000" },
    { name: "Видеодиагностика", price: "от 5000" },
    { name: "Замена гидроаккумулятора (гидробак)", price: "от 4000" },
    { name: "Замена реле управления", price: "от 2000" },
    { name: "Установка / замена оголовка", price: "от 2500" },
    { name: "Монтаж кранов и прочее", price: "от 2500" },
    { name: "Настройка автоматики", price: " от 2000" },
    { name: "Сварочные работы", price: " от 4000" },
  ]);
  const [chistka, setChistka] = useState([
    { name: "Диагностика (видеодиагностика)", price: "от 5000" },
    { name: "От 10 до 40 метров", price: "от 5000" },
    { name: "От 40 метров ", price: "от 7000" },
    { name: "От 60 метров ", price: "от 16000" },
    { name: "От 80 метров ", price: "от 18000" },
    { name: "От 120 метров ", price: "от 25000" },
  ]);
  const [diag, setDiag] = useState([
    { name: "Диагностика скважины на воду.Выезд в день обращения", price: "от 4500" },
    { name: "Видеодиагностика. Запись в подарок", price: "от 5500" },
  ]);
  const zamenaNasosa = [
    { name: "Замена насоса на глубине до 35 метров", price: "от 11000" },
    { name: "Замена насоса на глубинедо 60 метров", price: "от 16000" },
    { name: "Замена насоса на глубине до 80 метров", price: "от 23000" },
    { name: "Замена насоса на глубине  до 100 метров", price: "от 28000" },
    { name: "Замена насоса на глубине  до 120 метров", price: "от 31000" },
  ];
  const ustanovkaNasosa = [
    { name: "Установка насоса на глубине до 35 метров", price: "от 11000" },
    { name: "Установка насоса на глубине  до 60 метров", price: "от 16000" },
    { name: "Замена насоса на глубине до 80 метров", price: "от 23000" },
    { name: "Установка насоса на глубине  до 100 метров", price: "от 28000" },
    { name: "Установка насоса на глубине  до 150 метров", price: "от 33000" },
  ];
  const ecv = [
    { name: "Монтаж(замена установка) ЭЦВ насоса до 40 метров", price: "от 11000" },
    { name: "Монтаж(замена установка) ЭЦВ насоса до 60 метров", price: "от 16000" },
    { name: "Монтаж(замена установка) ЭЦВ насоса до 80 метров", price: "от 23000" },
    { name: "Монтаж(замена установка) ЭЦВ насосадо от 80 метров", price: "от 28000" },
  ];
  const servObsVodo = [
    { name: "Диагностика водоочистки", price: "от 4000 руб. при заказе другой услуги бесплатно" },
    { name: "Диагностика с анализом воды", price: "от 1000" },
    { name: "Сервисное обслуживание 1 балон", price: "от 5000" },
    { name: "Сервисное обслуживание 2 балона", price: "от 7000" },
    { name: "Сервисное обслуживание 3 балона", price: "от 9000" },
    { name: "Прочие услуги", price: "договорная" },
  ];
  const montajVodosnab = [
    { name: "Установка насоса в колодце под ключ", price: "от 3000" },
    { name: "Установка дополнительного крана", price: "от 4000" },
    { name: "Установка гидроаккумулятора ", price: "от 6000" },
    { name: "Установка дополнительного крана ", price: "от 6000" },
    { name: "Монтаж  греющего кабеля  ", price: "от 6000" },
    { name: "Монтаж точки потребления воды ", price: "от 6000" },
    { name: "Замена фильтра (картриджа) для воды", price: "от 6000" },
    { name: "Монтаж бойлера", price: "от 6000" },
    { name: "Сборка и установка любых узлов сантехники", price: "от 6000" },
    { name: "Монтаж кесона под ключ", price: "от 6000" },
    { name: "Монтаж адаптера скважинного", price: "от 6000" },
    { name: "Рытье траншей  лопатой  ", price: "от 6000" },
    { name: "Электромонтажные работы любой сложности", price: "от 6000" },
    { name: "Монтаж адаптера скважинного", price: "от 6000" },
    { name: "Установка гидроаккумулятора ", price: "от 6000" },
  ];
  const scrollToMyRef = (myRef: any) => {
    console.log("111");
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
                  <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
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
    "@media (max-width:540px)": {
      height: "380px",
    },
    "@media (max-width:450px)": {
      height: "420px",
    },
    "@media (max-width:400px)": {
      height: "500px",
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
