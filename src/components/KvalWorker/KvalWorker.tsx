import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";

interface IProps {}
export const KvalWorker: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.titleWorker}>Квалифицированные сотрудники</Box>
        <Box sx={classes.content}>
          <Box sx={classes.sectionImg}>
            <Image
              src="/photoNew/dev.png"
              alt={"image"}
              layout={"fill"}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          <Box sx={classes.sectionText}>
            <Box sx={classes.subTitle}>У нас работает более 2 000 специалистов</Box>
            <Box sx={classes.text}>
              Наша команда - это тщательно подобранный и обученный персонал. Ни один работник не допускается до клининга, пока не пройдет стажировку и обучение
              под руководством опытного наставника.
            </Box>
            <Box sx={classes.subTitle}>У нас работает более 2 000 специалистов</Box>
            <Box sx={classes.text}>
              Наша команда - это тщательно подобранный и обученный персонал. Ни один работник не допускается до клининга, пока не пройдет стажировку и обучение
              под руководством опытного наставника.
            </Box>
            <Box sx={classes.subTitle}>У нас работает более 2 000 специалистов</Box>
            <Box sx={classes.text}>
              Наша команда - это тщательно подобранный и обученный персонал. Ни один работник не допускается до клининга, пока не пройдет стажировку и обучение
              под руководством опытного наставника.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  titleWorker: {
    textAlign: "center",
  },
  subTitle: {},
  text: {},
  sectionImg: {
    display: "flex",
    position: "relative",
    width: "50%",
    height: "200px",
    border: "2px solid red",

    alignSelf: "center",
  },
  content: { display: "flex", gap: "15px" },
  sectionText: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    border: "2px solid red",
  },
};
