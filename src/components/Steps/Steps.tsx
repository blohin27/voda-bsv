import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import { COLOR_BLACK, COLOR_BLUE_SECTION } from "@/const";

interface IProps {}

export const Steps: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper} className={montserrat.className}>
        <Box sx={classes.title}> 4 шага до результата</Box>
        <Box sx={classes.content} mt={10}>
          <Box sx={classes.itemCard}>
            <Box sx={classes.circle}>
              <Box sx={classes.circleContent}>
                <Box style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Box style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "30px" }}>1</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={classes.itemCardContent}>
              <Box sx={classes.itemCardContentTitle}>Создание заявки</Box>
              <Box sx={{ ...classes.descAndIcon }}>
                <Box sx={classes.descTextSection}>
                  Ваш первый шаг к решению - просто позвоните нам, и наши специалисты незамедлительно приступят к обработке вашего запроса.{" "}
                </Box>
                <Box sx={classes.itemCardContentIcon}>
                  <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={classes.itemCard}>
            <Box sx={classes.circle}>
              <Box sx={classes.circleContent}>
                <Box style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Box style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "30px" }}>1</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={classes.itemCardContent}>
              <Box sx={classes.itemCardContentTitle}>Выезд Специалиста</Box>
              <Box sx={{ ...classes.descAndIcon }}>
                <Box sx={classes.descTextSection}>
                  Наши квалифицированные эксперты оперативно прибудут на место для оценки ситуации и диагностики вашей скважины.
                </Box>
                <Box sx={classes.itemCardContentIcon}>
                  <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={classes.itemCard}>
            <Box sx={classes.circle}>
              <Box sx={classes.circleContent}>
                <Box style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Box style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "30px" }}>1</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={classes.itemCardContent}>
              <Box sx={classes.itemCardContentTitle}>Разработка Плана Ремонта:</Box>
              <Box sx={{ ...classes.descAndIcon }}>
                <Box sx={classes.descTextSection}>Мы разработаем индивидуальный план ремонта, исходя из конкретных потребностей и условий вашей скважины.</Box>
                <Box sx={classes.itemCardContentIcon}>
                  <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={classes.itemCard}>
            <Box sx={classes.circle}>
              <Box sx={classes.circleContent}>
                <Box style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Box style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "30px" }}>1</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={classes.itemCardContent}>
              <Box sx={classes.itemCardContentTitle}>Завершение Работ</Box>
              <Box sx={{ ...classes.descAndIcon }}>
                <Box sx={classes.descTextSection}>Выполним все необходимые ремонтные работы быстро и эффективно, возвращая вам надежное водоснабжение.</Box>
                <Box sx={classes.itemCardContentIcon}>
                  <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
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
  root: {
    marginTop: "50px",
    paddingTop: "40px",
    paddingBottom: "70px",

    // backgroundColor: "#fcfbf9",
    backgroundColor: COLOR_BLUE_SECTION,
    "@media (max-width: 1200px)": {
      marginTop: "50px",
      paddingTop: "40px",
    },
    "@media (max-width: 950px)": {
      marginTop: "40px",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
    "@media (max-width: 640px)": {
      marginTop: "30px",
      paddingTop: "30px",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
      paddingTop: "30px",
      paddingBottom: "30px",
    },
  },
  title: {
    marginTop: "10px",
    paddingTop: "10px",
    marginBottom: "60px",
    fontSize: "52px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
      marginBottom: "50px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
    },
  },

  circleContent: {
    display: "flex",
    background: "white",
    border: "1px solid grey",
    borderRadius: "50%",
    height: "5em",
    width: "5em",
    fontSize: "15px",
    fontWeight: "600",
    top: "0%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  content: {
    gap: "50px",
    display: "flex",
    margin: "0 16px 0 16px",
    justifyContent: "space-between",
    "@media (max-width:1050px)": {
      width: "90%",
      margin: "0 auto",
      flexDirection: "column",
    },

    "@media (max-width:900px)": {
      // gap: "20px",
    },
  },

  itemCard: {
    backgroundColor: "white",
    width: "250px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "0 16px 0 16px",
    "@media (max-width:1050px)": {
      width: "600px",
      margin: "0 auto",
      height: "350px",
    },
    "@media (max-width:700px)": {
      width: "500px",
    },
    "@media (max-width:600px)": {
      width: "380px",
    },
    "@media (max-width:500px)": {
      width: "350px",
    },
    "@media (max-width:430px)": {
      width: "300px",
    },
    "@media (max-width:400px)": {
      width: "250px",
    },
  },
  itemCardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  circle: {
    width: "100%",
    display: "flex",
    "@media (max-width:900px)": {},
    position: "relative",
    height: "15%",
  },
  descAndIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80%",
    "@media (max-width:1050px)": {
      // flexDirection: "column",
      // gap: "40px",
    },
  },
  itemCardContentTitle: { textAlign: "center", display: "flex", marginTop: "20px", fontSize: "20px", fontWeight: 700, height: "20%" },
  descTextSection: {
    height: "50%",
    display: "flex",
    textAlign: "center",
    "@media (max-width:1050px)": { height: "40%" },
    "@media (max-width:1000px)": { fontSize: "16px" },
    fontSize: "15px",
    fontWeight: 300,
  },
  itemCardContentIcon: { textAlign: "center", display: "flex", height: "50%", "@media (max-width:1050px)": { height: "60%" } },
};
