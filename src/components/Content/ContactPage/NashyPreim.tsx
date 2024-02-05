import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";

interface IProps {}
export const NashyPreim: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title} mb={4}>
            Почему работать нужно именно с нами
          </Box>
          <Box sx={classes.sectionItems}>
            <Box sx={classes.sectionItem}>
              <Box sx={classes.titleItem}> Профессионализм сотрудников</Box>
              <Box sx={classes.descrItem}>Наша команда состоит из хороших специалистов, обладающих глубокими знаниями и многолетним опытом работы.</Box>
            </Box>
            <Box sx={classes.sectionItem}>
              <Box sx={classes.titleItem}> Индивидуальный подход</Box>
              <Box sx={classes.descrItem}>
                Мы уделяем особое внимание каждому клиенту, разрабатывая уникальные решения, идеально соответствующие вашим потребностям.
              </Box>
            </Box>
            <Box sx={classes.sectionOptional}>
              <Box sx={classes.sectionItem}>
                <Box sx={classes.titleItem}> Новейшие технологии</Box>
                <Box sx={classes.descrItem}>Мы используем последние достижения техники и технологий для достижения наилучших результатов в нашей работе.</Box>
              </Box>
            </Box>
            <Box sx={classes.sectionItem}>
              <Box sx={classes.titleItem}> Ответственность и надежность</Box>
              <Box sx={classes.descrItem}>
                Наша репутация построена на принципах ответственности и надежности, что гарантирует высокое качество выполнения каждого проекта.
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
  title: { textAlign: "center", fontSize: "35px", fontWeight: 700 },
  sectionItems: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    "@media(max-width:800px)": {
      flexDirection: "column",
      gap: "20px",
    },
    "@media(max-width:500px)": {
      gap: "10px",
    },
  },
  sectionOptional: {
    "@media(max-width:1000px)": {
      display: "none",
    },
    "@media(max-width:800px)": {
      display: "flex",
    },
  },
  sectionItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#352c1d",
    color: "white",
    height: "200px",
    width: "150px",
    minWidth: "150px",
    padding: "30px 30px",
    borderRadius: "10px",
    "&:hover": { backgroundColor: "#12dc00" },
    "@media(max-width:800px)": {
      padding: "30px",
      width: "auto",
      height: "auto",
    },
    "@media(max-width:500px)": {
      padding: "20px",
    },
  },
  titleItem: {
    fontWeight: 700,
    marginBottom: "30px",
    display: "flex",
    "@media(max-width:800px)": {
      marginBottom: "10px",
    },
  },
  descrItem: { fontWeight: 400, display: "flex", fontSize: "14px" },
};
