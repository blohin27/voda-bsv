import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLACK, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import Image from "next/image";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { BannerFirst } from "@/components/Banner/BannerFirst";

interface IProps {}
export const AnalizVody: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <BannerFirst src={"/photo/photoObjectObslug/mj.png"} title={"Анализ воды"} />
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
};
