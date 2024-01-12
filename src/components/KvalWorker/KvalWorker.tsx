import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import { COLOR_BLACK } from "@/const";

interface IProps {}
export const KvalWorker: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.title}> Квалифицированные сотрудники</Box>
        <Box sx={classes.content} className={montserrat.className}>
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
            <Box>
              <Box sx={classes.subTitle}>У нас работает более 2 000 специалистов</Box>
              <Box sx={classes.text}>
                Наша команда - это тщательно подобранный и обученный персонал. Ни один работник не допускается до клининга, пока не пройдет стажировку и обучение
                под руководством опытного наставника.
              </Box>
            </Box>
            <Box>
              <Box sx={classes.subTitle}>У нас работает более 2 000 специалистов</Box>
              <Box sx={classes.text}>
                Наша команда - это тщательно подобранный и обученный персонал. Ни один работник не допускается до клининга, пока не пройдет стажировку и обучение
                под руководством опытного наставника.
              </Box>
            </Box>
            <Box>
              <Box sx={classes.subTitle}>У нас работает более 2 000 специалистов</Box>
              <Box sx={classes.text}>
                Наша команда - это тщательно подобранный и обученный персонал. Ни один работник не допускается до клининга, пока не пройдет стажировку и обучение
                под руководством опытного наставника.
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
    margin: "0 16px 0 16px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    marginTop: "40px",
    paddingTop: "40px",
    marginBottom: "50px",
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
  subTitle: {
    color: "#362c1d",
    fontWeight: 700,
    fontSize: "20px",
    marginBottom: "5px",
  },
  text: {
    lineHeight: "25px",
    сolor: "#362c1d",
    fontSize: "16px",
    fontWeight: 400,
    "@media (max-width:500px)": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  sectionImg: {
    display: "flex",
    position: "relative",
    width: "50%",
    height: "400px",
    alignSelf: "center",
    "@media (max-width:800px)": {
      width: "100%",
    },
    "@media (max-width:500px)": {
      height: "300px",
    },
    "@media (max-width:360px)": {
      height: "250px",
    },
  },
  content: {
    display: "flex",
    gap: "35px",
    "@media (max-width:800px)": {
      flexDirection: "column",
      gap: "25px",
    },
  },
  sectionText: {
    width: "50%",
    gap: "30px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:800px)": {
      width: "100%",
      gap: "15px",
    },
  },
};
