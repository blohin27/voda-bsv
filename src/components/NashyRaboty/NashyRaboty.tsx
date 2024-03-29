import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import { COLOR_BLACK, CONST_TITLE } from "@/const";
import { LineBorder } from "@/components/LineBorder/LineBorder";

interface IProps {}
export const NashyRaboty: FC<IProps> = () => {
  const [state, setState] = useState("/photoNew/dev.png");
  const changeImg = () => {
    setState("/photo/1t.jpg");
  };

  return (
    <Box sx={classes.root}>
      <LineBorder />
      <Box sx={classes.wrapper}>
        <Box sx={classes.title}>Наши работы</Box>
        <Box sx={classes.content}>
          <Box sx={classes.sectionImg}>
            <Image
              src={state}
              alt={"image"}
              layout={"fill"}
              // width={600}
              // height={400}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
            <Box sx={classes.arrow}>
              <Box
                onClick={() => {
                  changeImg();
                }}
                sx={classes.leftButton}
              >
                <KeyboardArrowLeft style={{ color: "white", fontSize: "50px" }} />
              </Box>
              <Box sx={classes.rightButton}>
                <KeyboardArrowRightIcon style={{ color: "white", fontSize: "50px" }} />
              </Box>
            </Box>
          </Box>

          <Box sx={classes.sectionText}>
            <Box sx={classes.titleSectionText}>Объект: двухкомнатная квартира после ремонта</Box>
            <Box sx={classes.descr}>
              <Box>
                <Box display={"inline"} style={{ fontWeight: 700 }}>
                  Пакет
                </Box>
                Комплексный послестроительный клининг
              </Box>
              <Box>
                <Box display={"inline"} style={{ fontWeight: 700 }}>
                  Количество убранных комнат
                </Box>
                : 2
              </Box>
              <Box>
                <Box display={"inline"} style={{ fontWeight: 700 }}>
                  Сложные загрязнения:
                </Box>
                разводы клея после ремонта на полу и подоконнике
              </Box>
              <Box>
                <Box display={"inline"} style={{ fontWeight: 700 }}>
                  Бригада:
                </Box>
                2 человека
              </Box>
              <Box>
                <Box display={"inline"} style={{ fontWeight: 700 }}>
                  Время выполнения уборки после ремонта:
                </Box>
                4 часа
              </Box>
              <Box>
                <Box display={"inline"} style={{ fontWeight: 700 }}>
                  Пакет
                </Box>
                Сумма 6 500 руб.
              </Box>
              <Box display={"flex"}>
                <Box sx={classes.zakaz}>Заказать</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {
    marginTop: "60px",
    "@media (max-width:700px)": {
      marginTop: "40px",
    },
  },
  title: {
    marginTop: "20px",
    marginBottom: "30px",
    fontSize: "48px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
      marginTop: "20px",

      marginBottom: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
      marginTop: "20px",

      marginBottom: "25px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
      marginTop: "20px",

      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
      marginTop: "20px",

      marginBottom: "15px",
    },
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionImg: {
    display: "flex",
    position: "relative",
    width: "50%",
    height: "400px",
    alignSelf: "center",
    "@media (max-width:780px)": {
      width: "70%",
    },
    "@media (max-width:580px)": {
      width: "90%",
    },
    "@media (max-width:400px)": {
      width: "100%",
    },
  },
  zakaz: {
    display: "flex",
    color: "white",
    padding: "10px 20px 10px 20px",
    borderRadius: "2px",
    fontWeight: "700",
    backgroundColor: "#fd6c36",
    justifyContent: "start",
  },
  descr: {
    marginTop: "20px",
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  titleSectionText: {
    fontSize: "24px",
    fontWeight: "700",
    textAlign: "left",
    "@media (max-width:780px)": {
      textAlign: "center",
    },
  },
  content: {
    margin: "0 16px 0 16px",
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    "@media (max-width:780px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  leftButton: {
    cursor: "pointer",
    position: "absolute",
    zIndex: 2,
    left: "5px",
    top: "50%",
    backgroundColor: "#fd6c36",

    transform: "translate(0,-50%)",
    "&:active": {
      // Используйте одно двоеточие для псевдоклассов
      backgroundColor: "rgba(168, 207, 255)",
      transition: "all .3s ",
    },
  },
  rightButton: {
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "#fd6c36",
    zIndex: 2,
    right: "5px",

    top: "50%",
    transform: "translate(0,-50%)",
    "&:active": {
      // Используйте одно двоеточие для псевдоклассов
      backgroundColor: "rgba(168, 207, 255)",
      transition: "all .3s ",
    },
  },
  sectionLeftAndRight: {},

  sectionText: {
    border: "2px solid red",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    "@media (max-width:780px)": {
      width: "70%",
    },
    "@media (max-width:580px)": {
      width: "90%",
    },
    "@media (max-width:400px)": {
      width: "100%",
    },
  },
};
