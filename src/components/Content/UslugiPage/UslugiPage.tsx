import React, { FC, useCallback, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { UslugiItem } from "@/components/Content/UslugiPage/UslugiItem";
import { COLOR_BLACK, COLOR_ORANGE, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";

interface IProps {}
export const UslugiPage: FC<IProps> = () => {
  const [pokaz, setPokaz] = useState(false);

  const changePokaz = useCallback(() => {
    setPokaz((prevState) => !prevState);
  }, []);
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Услуги </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box mt={-6}>
            <InfoBlocks />
          </Box>
          <Box sx={classes.subTitle1}> Услуги</Box>
          <Box sx={classes.uslugiItems}>
            <Link href={"/uslugi/remont-scvajin"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Ремонт "} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/chistka"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Чистка "} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/burenie"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Бурение "} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/zamena-nasosa"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Замена насоса  "} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/zamena-gidroaccumulatora"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Замена гидроаккумулятора"} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/servic-obslujivanie"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Сервисное обслуживание"} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/montaj"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Монтаж водоснабжения"} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/diagnostica"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Диагностика "} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/analyz-vody"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Анализ воды"} photo={"/photo/1t.jpg"} />
            </Link>
            <Link href={"/uslugi/reanimacia-skvajin"} style={{ textDecoration: "none" }}>
              <UslugiItem title={"Реанимация скважины"} photo={"/photo/1t.jpg"} />
            </Link>

            {pokaz && (
              <Box sx={{ ...classes.uslugiItems }}>
                <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
                <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
                <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
              </Box>
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box onClick={changePokaz} sx={{ ...classes.button, backgroundColor: `${pokaz ? "grey" : COLOR_ORANGE}` }}>
              {pokaz ? "Свернуть" : " Показать больше"}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  title: { fontSize: "30px", fontWeight: "600", textAlign: "center" },
  titleGeneral: {
    marginTop: "80px",
    ...CONST_TITLE_WITHOUT_MARGIN,
  },
  subTitle1: { ...CONST_TITLE_FIRST_PAGE, color: COLOR_BLACK },
  uslugiItems: { display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" },
  button: { display: "flex", backgroundColor: COLOR_ORANGE, color: "white", padding: "10px", fontWeight: "700", borderRadius: "3px", cursor: "pointer" },
  fade: {
    transition: "all .3s ",
  },
  fadeEnter: { opacity: 0 },

  fadeEnterActive: { opacity: 1 },
  setcionGeneralPageBannerImg: {
    width: "100%",
    display: "flex",
    height: "300px",
    position: "relative",
    "@media (max-width:480px)": {
      height: "250px",
    },
  },
  contentImg: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
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
  wrapperImg: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  sectionWhiteImg: {
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
};
