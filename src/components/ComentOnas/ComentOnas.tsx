import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { ButtonCentr } from "@/components/ButtonCenter/ButtonCentr";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { IoStarSharp } from "react-icons/io5";
import { COLOR_BLUE_SECTION } from "@/const";
// import { IoStarSharp } from "react-icons/io5";

interface IProps {}
export const ComentOnas: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.titleContent} className={montserrat.className}>
            Отзывы о нас:
          </Box>
          <Box sx={classes.obOcen}>
            <Box style={{ fontSize: "100px", fontWeight: "600" }}>4,7</Box>
            <Box>
              <img src="photoNew/4.5stars.jpg" alt="Your Alt Text" />
            </Box>
            <Box>Общая оценка</Box>
          </Box>
          <Box sx={classes.ostOtz}>
            <Box display={"flex"} sx={classes.itemSee}>
              Cмотреть на Google
            </Box>
            <Box display={"flex"} sx={classes.itemSee}>
              Cмотреть на Яндекс
            </Box>
            <Box display={"flex"} sx={classes.itemSee}>
              Cмотреть на 2gis
            </Box>
            <Box sx={classes.buttonComment}>Оставить отзыв</Box>
          </Box>
        </Box>
        <Box sx={classes.sectionOtz}>
          <ItemOtz />
          <ItemOtz />
          <ItemOtz />
          <ItemOtz />
        </Box>
      </Box>
    </Box>
  );
};

const ItemOtz = () => {
  return (
    <Box sx={classes.sectionOtzItem}>
      <Box sx={classes.otzItemDesc}>
        Окна отмыли прекрасно, не оставили ни одного развода на стекле, да и вокруг ничего не намочили и не зaпачкали. Оставили о себе только полoжительные
        впечатления.
      </Box>
      <Box>
        <Box>
          <IoStarSharp color={"orange"} />
          <IoStarSharp color={"orange"} />
          <IoStarSharp color={"orange"} />
          <IoStarSharp color={"orange"} />
        </Box>
        <Box sx={classes.otsItemName}> Белоконь Я.Н.</Box>
        <Box sx={classes.otsItemDate}>Оставлен в Google год назад</Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  sectionOtz: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
    "@media (max-width:1150px)": {
      justifyContent: "center",
      width: "70%",
      margin: "0 auto",
    },
    "@media (max-width:700px)": {
      justifyContent: "center",
      width: "100%",
    },
  },
  otzItemDesc: {
    fontWeight: "300",
  },
  otsItemName: {
    fontWeight: "700",
  },
  otsItemDate: {
    fontWeight: "300",
  },
  sectionOtzItem: {
    minHeight: "200px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // backgroundColor: "#fcfbf9",
    backgroundColor: COLOR_BLUE_SECTION,
    padding: "20px 25px 25px 25px",
    fontSize: "14px",
    width: "20%",
    marginTop: "30px",
    "@media (max-width:1150px)": {
      width: "30%",
      marginTop: "0px",
    },
    "@media (max-width:700px)": {
      width: "60%",
      minHeight: "150px",
    },
    "@media (max-width:500px)": {
      width: "80%",
    },
  },
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  obOcen: {
    padding: "30px",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    backgroundColor: "#fcfbf9",
    // backgroundColor: COLOR_BLUE_SECTION,
    marginLeft: "100px",
    "@media (max-width:1100px)": {
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "0px",
      marginTop: "26px",
    },
  },
  titleContent: {
    fontSize: "50px",
    fontWeight: "700",
    marginLeft: "60px",
    "@media (max-width:1100px)": {
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "0px",
    },
  },
  itemSee: {
    display: "flex",
    "@media (max-width:1100px)": {
      justifyContent: "center",
    },
  },
  buttonComment: {
    marginTop: "20px",
    backgroundColor: "#fc6c36",
    borderRadius: "5px",
    padding: "15px 10px 15px 10px",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: "600",
  },
  ostOtz: {
    fontWeight: "350",
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    gap: "15px",
    marginLeft: "80px",
    "@media (max-width:1100px)": {
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "0px",
      alignSelf: "center",
      marginTop: "26px",
    },
  },
  content: {
    display: "flex",
    margin: "0 16px 0 16px",
    alignItems: "center",
    "@media (max-width:1100px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
};
