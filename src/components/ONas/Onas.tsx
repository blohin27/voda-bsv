import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { LogoGeneralVodaBsv } from "@/components/LogoVB/LogoGeneralVodaBsv";
import { LogoVodaBsv } from "@/components/LogoVB/LogoVodaBsv";
import { COLOR_BLACK, COLOR_BLUE, CONST_TITLE, IP } from "@/const";

interface IProps {}
export const Onas: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}>О НАС</Box>
          <Box sx={classes.section}>
            <Box sx={classes.photo}>
              <LogoVodaBsv sizeText={"50px"} sizeLogoHome={"80px"} />
              <Box sx={classes.titleReqvizit} mt={2}>
                Реквизиты
              </Box>
              <Box mt={2}>
                <Box sx={classes.titleItemReqvizit}>Полное наименоваие: </Box>
                <Box sx={classes.itemValueReqvizit}> {IP.name}</Box>
              </Box>
              <Box mt={1}>
                <Box sx={classes.titleItemReqvizit}> ИНН:</Box>
                <Box sx={classes.itemValueReqvizit}>{IP.INN}</Box>
              </Box>
              <Box mt={1}>
                <Box sx={classes.titleItemReqvizit}> ОГРН:</Box>
                <Box sx={classes.itemValueReqvizit}> {IP.OGRNIP}</Box>
              </Box>
            </Box>
            <Box sx={classes.textSection}>
              <Box display={"flex"} flexDirection={"column"}>
                <Box sx={classes.titleTextSection}>Кто мы?</Box>
                <Box sx={classes.descTextSection}>Мы — команда опытных специалистов, занимающихся ремонтом и обслуживанием скважин на воду.</Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"} mt={1}>
                <Box sx={classes.titleTextSection}> Чем мы занимаемся?</Box>
                <Box sx={classes.descTextSection}>
                  Наши услуги включают ремонт и техническое обслуживание скважин. Мы используем передовое оборудование и технологии для обеспечения высокого
                  качества работ
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"} mt={1}>
                <Box sx={classes.titleTextSection}> Почему нам доверяют?</Box>
                <Box sx={classes.descTextSection}>
                  Благодаря многолетнему опыту и тщательному подходу к каждому проекту, мы завоевали доверие сотен клиентов. Мы гарантируем профессионализм,
                  оперативность и высокие стандарты в каждой задаче, связанной с ремонтом и обслуживанием скважин.
                </Box>
              </Box>
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
  titleReqvizit: { fontWeight: 700, fontSize: "25px", color: COLOR_BLACK },
  titleItemReqvizit: { display: "inline", color: COLOR_BLACK, fontWeight: 600 },
  itemValueReqvizit: { display: "inline", fontWeight: 400, fontSize: "16px" },
  title: {
    marginTop: "40px",
    paddingTop: "40px",
    marginBottom: "30px",
    fontSize: "48px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
      marginTop: "20px",
      paddingTop: "60px",
      marginBottom: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
      marginTop: "40px",
      paddingTop: "40px",
      marginBottom: "25px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
      marginTop: "30px",
      paddingTop: "30px",
      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
      marginTop: "20px",
      paddingTop: "30px",
      marginBottom: "15px",
    },
  },
  photo: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  titleTextSection: { textAlign: "left", fontWeight: 700, fontSize: "24px", color: COLOR_BLACK },
  descTextSection: { textAlign: "left", margin: "5px 5px", fontSize: "16px", fontWeight: 300, lineHeight: "25px" },
  section: {
    display: "flex",
    alignContent: "start",
    gap: "20px",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
};
