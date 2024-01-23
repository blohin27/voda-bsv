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
              <Box sx={classes.itemCardContentTitle}>Прием Звонка</Box>
              <Box sx={classes.itemCardContentDesc}>
                <Box sx={classes.descTextSection}> Оставьте заявку у нас на сайте. С Вами связжуться в ближайее время</Box>
              </Box>
              <Box sx={classes.itemCardContentIcon}>
                <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
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
              <Box sx={classes.itemCardContentTitle}>Прием Звонка</Box>
              <Box sx={classes.itemCardContentDesc}>
                <Box sx={classes.descTextSection}> Оставьте заявку у нас на сайте. С Вами связжуться в ближайее время</Box>
              </Box>
              <Box sx={classes.itemCardContentIcon}>
                <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
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
              <Box sx={classes.itemCardContentTitle}>Прием Звонка</Box>
              <Box sx={classes.itemCardContentDesc}>
                <Box sx={classes.descTextSection}> Оставьте заявку у нас на сайте. С Вами связжуться в ближайее время</Box>
              </Box>
              <Box sx={classes.itemCardContentIcon}>
                <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
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
              <Box sx={classes.itemCardContentTitle}>Прием Звонка</Box>
              <Box sx={classes.itemCardContentDesc}>
                <Box sx={classes.descTextSection}> Оставьте заявку у нас на сайте. С Вами связжуться в ближайее время </Box>
              </Box>
              <Box sx={classes.itemCardContentIcon}>
                <AddBusinessIcon style={{ fontSize: "110px", color: "#fe6c36" }} />
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
    "@media (max-width:900px)": {
      gap: "30px",
    },

    "@media (max-width:850px)": {
      flexDirection: "column",
      gap: "60px",
    },
  },
  itemCard: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid grey",
    width: "25%",
    "@media (max-width:1000px)": {
      width: "80%",
      margin: "0 auto",
    },
  },
  itemCardContent: {
    padding: "0 10px 0 10px",
    display: "flex",
    height: "400px",
    textAlign: "center",
    flexDirection: "column",
  },
  circle: {
    width: "100%",
    display: "flex",
    height: "60px",
    border: "2px solid red",
    "@media (max-width:900px)": {},
    position: "relative",
  },
  itemCardContentTitle: {
    fontSize: "28px",
    fontWeight: 700,
    textAlign: "center",
    flex: "0 0 auto",

    "@media (max-width:900px)": {
      fontSize: "23px",
    },
  },
  itemCardContentDesc: { display: "flex", flex: "0 0 auto", textAlign: "left", margin: "5px 5px", fontSize: "16px", fontWeight: "400", lineHeight: "1.55" },
  itemCardContentIcon: { textAlign: "center", height: "20%", display: "flex", justifyContent: "center" },
};
