import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { LogoGeneralVodaBsv } from "@/components/LogoVB/LogoGeneralVodaBsv";
import { LogoVodaBsv } from "@/components/LogoVB/LogoVodaBsv";
import { IP } from "@/const";

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
              <Box> Полное наименоваие:{IP.name}</Box>
              <Box> ИНН:{IP.INN}</Box>
              <Box> ОГРН:{IP.OGRNIP}</Box>
            </Box>
            <Box sx={classes.textSection}>
              <Box display={"flex"} flexDirection={"column"}>
                <Box sx={classes.titleTextSection}>Кто мы?</Box>
                <Box sx={classes.descTextSection}>
                  Мы — команда опытных специалистов, занимающихся ремонтом и обслуживанием скважин на воду. Наша миссия — обеспечивать надежный и безопасный
                  доступ к воде для всех наших клиентов.
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <Box sx={classes.titleTextSection}> Чем мы занимаемся?</Box>
                <Box sx={classes.descTextSection}>
                  Наши услуги включают всесторонний ремонт и техническое обслуживание скважин. Мы используем передовое оборудование и технологии для обеспечения
                  высокого качества работ и долговечности водных скважин.
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
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
  title: { fontSize: "35px", fontWeight: 700, textAlign: "center" },
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
  titleTextSection: { textAlign: "left", fontWeight: 700 },
  descTextSection: { textAlign: "left", margin: "10px 10px" },
  section: {
    display: "flex",
    alignContent: "start",
    gap: "20px",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
};
