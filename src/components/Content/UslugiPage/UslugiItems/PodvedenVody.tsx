import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLACK, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import Image from "next/image";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";

interface IProps {}
export const PodvedenVody: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>PodvedenVody</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box mt={-6}>
            <InfoBlocks />
          </Box>
          <Box sx={{ ...classes.subTitle1 }}>Ремонт скважины</Box>
          <Box sx={classes.descTextSection}>
            Благодаря многолетнему опыту и тщательному подходу к каждому проекту, мы завоевали доверие сотен клиентов. Мы гарантируем профессионализм,
            оперативность и высокие стандарты в каждой задаче, связанной с ремонтом и обслуживанием скважин. Благодаря многолетнему опыту и тщательному подходу к
            каждому проекту, мы завоевали доверие сотен клиентов. Мы гарантируем профессионализм, оперативность и высокие стандарты в каждой задаче, связанной с
            ремонтом и обслуживанием скважин. Благодаря многолетнему опыту и тщательному подходу к каждому проекту, мы завоевали доверие сотен клиентов. Мы
            гарантируем профессионализм, оперативность и высокие стандарты в каждой задаче, связанной с ремонтом и обслуживанием скважин. Благодаря многолетнему
            опыту и тщательному подходу к каждому проекту, мы завоевали доверие сотен клиентов. Мы гарантируем профессионализм, оперативность и высокие стандарты
            в каждой задаче, связанной с ремонтом и обслуживанием скважин.
          </Box>
          <Box sx={{ ...classes.subTitle1 }}>Ремонт скважины</Box>
          <Box sx={classes.descTextSection}>
            Благодаря многолетнему опыту и тщательному подходу к каждому проекту, мы завоевали доверие сотен клиентов. Мы гарантируем профессионализм,
            оперативность и высокие стандарты в каждой задаче, связанной с ремонтом и обслуживанием скважин. Благодаря многолетнему опыту и тщательному подходу к
            каждому проекту, мы завоевали доверие сотен клиентов. Мы гарантируем профессионализм, оперативность и высокие стандарты в каждой задаче, связанной с
            ремонтом и обслуживанием скважин. Благодаря многолетнему опыту и тщательному подходу к каждому проекту, мы завоевали доверие сотен клиентов. Мы
            гарантируем профессионализм, оперативность и высокие стандарты в каждой задаче, связанной с ремонтом и обслуживанием скважин. Благодаря многолетнему
            опыту и тщательному подходу к каждому проекту, мы завоевали доверие сотен клиентов. Мы гарантируем профессионализм, оперативность и высокие стандарты
            в каждой задаче, связанной с ремонтом и обслуживанием скважин.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  titleGeneral: {
    marginTop: "80px",
    ...CONST_TITLE_WITHOUT_MARGIN,
  },
  subTitle1: { ...CONST_TITLE_FIRST_PAGE, color: COLOR_BLACK },
  descTextSection: { textAlign: "left", margin: "5px 5px", fontSize: "16px", fontWeight: "400", lineHeight: "1.55" },
  content: { margin: "0 16px 0 16px" },
  setcionGeneralPageBannerImg: {
    width: "100%",
    display: "flex",
    height: "350px",
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
