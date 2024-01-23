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

interface IProps {}
export const UslugiPage: FC<IProps> = () => {
  const [pokaz, setPokaz] = useState(false);

  const changePokaz = useCallback(() => {
    setPokaz((prevState) => !prevState);
  }, []);

  return (
    <Box sx={classes.root}>
      <BannerFirst src={"/photo/photoObjectObslug/mj.png"} title={"Услуги"} />
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
};
