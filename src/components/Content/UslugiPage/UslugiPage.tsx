import React, { FC, useCallback, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { UslugiItem } from "@/components/Content/UslugiPage/UslugiItem";
import { COLOR_BLACK, COLOR_ORANGE, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { BannerFirst } from "@/components/Banner/BannerFirst";
import { PoleznyeStatiItem } from "@/components/Content/PoleznyeStatiPage/PoleznyeStatiItem";

interface IProps {}
export const UslugiPage: FC<IProps> = () => {
  const [pokaz, setPokaz] = useState(false);

  const changePokaz = useCallback(() => {
    setPokaz((prevState) => !prevState);
  }, []);

  return (
    <Box sx={classes.root}>
      {/*<BannerFirst src={"/photo/photoObjectObslug/mj.png"} title={"Услуги"} />*/}
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Услуги</Box>
              </h1>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*/////*/}
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box mt={-6}>
            <InfoBlocks />
          </Box>
          <Box sx={classes.subTitle1}> Услуги</Box>
          <Box sx={classes.uslugiItems}>
            <Box sx={{ ...classes.uslugiItems }}>
              <PoleznyeStatiItem photo={"/photo/burenie.jpg"} title={"Бурение скважины"} link={"/uslugi/burenie"} objectPosition={"center 80%"} />
              <PoleznyeStatiItem photo={"/photo/nasos.jpg"} title={"Ремонт скважины"} link={"/uslugi/remont-scvajin"} />
              <PoleznyeStatiItem photo={"/photo/gryaznaya_voda.jpg"} title={"Чистка скважины"} link={"/uslugi/chistka"} />
              <PoleznyeStatiItem photo={"/photo/diagnost.jpg"} title={"Диагностика скважины"} link={"/uslugi/diagnostica"} />
              <PoleznyeStatiItem photo={"/photo/zamena_nasosa.jpg"} title={"Замена насоса в скважине"} link={"/uslugi/zamena-nasosa"} />
              <PoleznyeStatiItem photo={"/photo/gidrobak.jpg"} title={"Замена гидроаккумуляторов"} link={"/uslugi/zamena-gidroaccumulatora"} />
              <PoleznyeStatiItem photo={"/photo/vodoochistka.jpg"} title={"Ремонт водоочистки"} link={"/uslugi/remont-vodoochistky"} />
              <PoleznyeStatiItem
                photo={"/photo/serviznoe_obslujivanie_truby.jpg"}
                title={"Сервисное обслуживание "}
                link={"/uslugi/servic-obslujivanie"}
                objectPosition={"center 10%"}
              />
              <PoleznyeStatiItem photo={"/photo/7t.jpg"} title={"Монтаж водоснабжения"} link={"/uslugi/montaj"} />
              <PoleznyeStatiItem photo={"/photo/analyzVody.jpg"} title={"Анализ воды в скважине"} link={"/uslugi/analyz-vody"} objectPosition={"center 20%"} />
              <PoleznyeStatiItem
                photo={"/photo/pesok_iz_skvajiny.jpg"}
                title={"Реанимация скважин"}
                link={"/uslugi/podvedenie-vody-k-domu"}
                objectPosition={"center 80%"}
              />
              <PoleznyeStatiItem
                photo={"/photo/podevedeine_vody_k_domu.jpg"}
                title={"Подведение воды к дому"}
                link={"/uslugi/podvedenie-vody-k-domu"}
                objectPosition={"center 80%"}
              />
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
    height: "280px",
    position: "relative",
    "@media (max-width:480px)": {
      height: "250px",
    },
  },
  sectionWhiteImg: {
    background: "linear-gradient(to left, black, black 100%, rgba(0, 0, 0, 10%) 90%)",
    opacity: 0.6,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:900px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
  wrapperImg: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  contentImg: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  titleGeneral: {
    marginTop: "80px",
    fontSize: "48px",
    color: "white",
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
    },
    "@media (max-width: 640px)": {},
    "@media (max-width: 480px)": {},
  },
};
