import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";

interface IProps {}
export const NashiPreim: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}>Почему работать нужно именно с нами</Box>
          <Box sx={classes.sectionItems}>
            <Box sx={classes.sectionItem}>
              <Box sx={classes.titleItem}> Выезд 1-2 часа</Box>
              <Box sx={classes.descrItem}>Срочный выезд бригады клинеров в любое удобное для Вас время.</Box>
            </Box>
            <Box sx={classes.sectionItem}>
              <Box sx={classes.titleItem}> Выезд 1-2 часа</Box>
              <Box sx={classes.descrItem}>Срочный выезд бригады клинеров в любое удобное для Вас время.</Box>
            </Box>
            <Box sx={classes.sectionItem}>
              <Box sx={classes.titleItem}> Выезд 1-2 часа</Box>
              <Box sx={classes.descrItem}>Срочный выезд бригады клинеров в любое удобное для Вас время.</Box>
            </Box>
            <Box sx={classes.sectionItem}>
              <Box sx={classes.titleItem}> Выезд 1-2 часа</Box>
              <Box sx={classes.descrItem}>Срочный выезд бригады клинеров в любое удобное для Вас время.</Box>
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
  title: { textAlign: "center", fontSize: "35px", fontWeight: 700 },
  sectionItems: {
    width: "100%",
    display: "flex",
    border: "2px solid blue",
    justifyContent: "center",
    gap: "30px",
    "@media(max-width:850px)": {
      flexDirection: "column",
      gap: "20px",
    },
    "@media(max-width:500px)": {
      gap: "10px",
    },
  },
  sectionItem: {
    border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#352c1d",
    color: "white",
    height: "200px",
    width: "150px",
    padding: "30px 30px",
    borderRadius: "10px",
    "@media(max-width:850px)": {
      padding: "30px",
      width: "auto",
      height: "auto",
    },
    "@media(max-width:500px)": {
      padding: "20px",
    },
  },
  titleItem: { fontWeight: 700, marginBottom: "10px", display: "flex" },
  descrItem: { fontWeight: 400, display: "flex" },
};
