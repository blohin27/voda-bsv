import Box from "@mui/material/Box";
import React, { FC, useEffect, useMemo, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { LineBorder } from "@/components/LineBorder/LineBorder";
import { COLOR_BLACK } from "@/const";
import { useMediaQuery } from "@mui/material";

interface IProps {
  title?: string;
  textFirst?: boolean;
  typeWork?: string;
  glubina?: string;
  price?: string;
  kolvoPersonal?: string;
  time?: string;
  photo: string[];
}
export const NashyRabotyTemplate: FC<IProps> = ({ title, typeWork, photo, textFirst, time, glubina, kolvoPersonal, price }) => {
  const [index, setIndex] = useState(0);
  const maxIndex = photo.length - 1;
  const px780 = useMediaQuery("(max-width:780px)");
  const _textFirst = useMemo(() => {
    if (!px780) {
      return textFirst;
    }
    return false;
  }, [px780, textFirst]);

  const changeImgRight = () => {
    if (maxIndex > index) {
      setIndex((prevState) => prevState + 1);
    } else {
      setIndex(0);
    }
  };
  const changeImgLeft = () => {
    if (index > 0) {
      setIndex((prevState) => prevState - 1);
    } else {
      setIndex(maxIndex);
    }
  };
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          {_textFirst ? (
            <>
              <Box sx={classes.sectionText}>
                <Box sx={classes.titleSectionText}>{title}</Box>
                <Box sx={classes.descr}>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Вид работ&nbsp;
                    </Box>
                    {typeWork}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Глубина скважины:&nbsp;
                    </Box>
                    {glubina}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Бригада:&nbsp;
                    </Box>
                    {kolvoPersonal}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Время выполнения уборки после ремонта:&nbsp;
                    </Box>
                    {time}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Стоимость&nbsp;
                    </Box>
                    {price}
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Box sx={classes.zakaz}>Заказать</Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={classes.sectionImg}>
                <Image
                  src={photo[index]}
                  alt={"image"}
                  layout={"fill"}
                  // width={600}
                  // height={400}
                  objectFit="cover"
                  objectPosition="center center" // По умолчанию 'center', но может быть изменено
                  quality={100}
                />
                <Box sx={classes.arrow}>
                  <Box onClick={changeImgLeft} sx={classes.leftButton}>
                    <KeyboardArrowLeft style={{ color: "white", fontSize: "50px" }} />
                  </Box>
                  <Box sx={classes.rightButton} onClick={changeImgRight}>
                    <KeyboardArrowRightIcon style={{ color: "white", fontSize: "50px" }} />
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box sx={classes.sectionImg}>
                <Image
                  src={photo[index]}
                  alt={"image"}
                  layout={"fill"}
                  // width={600}
                  // height={400}
                  objectFit="cover"
                  objectPosition="center center" // По умолчанию 'center', но может быть изменено
                  quality={100}
                />
                <Box sx={classes.arrow}>
                  <Box onClick={changeImgLeft} sx={classes.leftButton}>
                    <KeyboardArrowLeft style={{ color: "white", fontSize: "50px" }} />
                  </Box>
                  <Box sx={classes.rightButton} onClick={changeImgRight}>
                    <KeyboardArrowRightIcon style={{ color: "white", fontSize: "50px" }} />
                  </Box>
                </Box>
              </Box>
              <Box sx={classes.sectionText}>
                <Box sx={classes.titleSectionText}>{title}</Box>
                <Box sx={classes.descr}>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Вид работ&nbsp;
                    </Box>
                    {typeWork}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Глубина скважины:&nbsp;
                    </Box>
                    {glubina}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Бригада:&nbsp;
                    </Box>
                    {kolvoPersonal}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Время выполнения уборки после ремонта:&nbsp;
                    </Box>
                    {time}
                  </Box>
                  <Box>
                    <Box display={"inline"} style={{ fontWeight: 700 }}>
                      Стоимость&nbsp;
                    </Box>
                    {price}
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Box sx={classes.zakaz}>Заказать</Box>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {
    color: COLOR_BLACK,
    "@media (max-width:780px)": {
      marginTop: "80px",
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
    transition: ".5s",
    alignSelf: "center",
    "@media (max-width:780px)": {
      width: "70%",
      height: "320px",
    },
    "@media (max-width:580px)": {
      width: "90%",
      height: "300px",
    },
    "@media (max-width:400px)": {
      width: "100%",
    },
  },
  zakaz: {
    marginTop: "10px",
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
  titleRoot: {
    fontSize: "38px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
  },
  titleSectionText: {
    color: COLOR_BLACK,
    fontSize: "24px",
    fontWeight: "700",
    textAlign: "center",
    "@media (max-width:780px)": {
      textAlign: "center",
      fontSize: "20px",
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
    opacity: 0.4,
    "&: hover": {
      opacity: 0.8,
    },
    transform: "translate(0,-50%)",
    "&:active": {
      // Используйте одно двоеточие для псевдоклассов
      backgroundColor: "rgba(168, 207, 255)",
      transition: "all .3s ",
    },
  },
  rightButton: {
    opacity: 0.4,
    "&: hover": {
      opacity: 0.8,
    },
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
