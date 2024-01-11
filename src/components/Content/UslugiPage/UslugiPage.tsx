import React, { FC, useCallback, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { UslugiItem } from "@/components/Content/UslugiPage/UslugiItem";
import { COLOR_ORANGE, CONST_TITLE } from "@/const";
import { grey } from "@mui/material/colors";
import Image from "next/image";

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
              <Box sx={{ ...classes.titleImg, fontSize: "52px" }}>Услуги по ремонту и обслуживания скважин на воду</Box>
              <Box sx={{ ...classes.titleDesc }}>
                Для быстрой навигации по странице используйте кнопки разделов или боковое меню. В них вы найдете подробное описание цен
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}> Услуги</Box>
          <Box sx={classes.uslugiItems}>
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
            <UslugiItem title={"Чистка скважин"} photo={"/photo/2t.jpg"} />
            <UslugiItem title={"Избавление от ила и песка"} photo={"/photo/5t.jpg"} />
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
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
  uslugiItems: { display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" },
  button: { display: "flex", backgroundColor: COLOR_ORANGE, color: "white", padding: "10px", fontWeight: "700", borderRadius: "3px", cursor: "pointer" },
  fade: {
    transition: "all .3s ",
  },
  fadeEnter: { opacity: 0 },

  fadeEnterActive: { opacity: 1 },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "600px",
    position: "relative",
    "@media (max-width:800px)": {
      // height: "50px",
    },
  },
  setcionGeneralPageBannerImg: {
    width: "100%",
    display: "flex",
    height: "450px",
    position: "relative",
    "@media (max-width:800px)": {
      // height: "50px",
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
  titleImg: { ...CONST_TITLE, marginTop: "40px", paddingTop: "40px", color: "white" },
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
