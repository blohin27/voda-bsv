import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import { ButtonCentr } from "@/components/ButtonCenter/ButtonCentr";
import { useMediaQuery } from "@mui/material";

interface IProps {}
export const RayonObsl: FC<IProps> = () => {
  const adaptiv600 = useMediaQuery("(max-width:700px)");

  return (
    <Box sx={classes.root}>
      <Box>
        <Box>
          <Box sx={classes.setcionGeneralPageBanner}>
            <Image src="/photoNew/rayony.jpg" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="center center" quality={100} />
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.wrapper}>
              <Box sx={classes.content}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={classes.title}>Районы обслуживания</Box>
                </Box>
                <Box sx={classes.blockItems}>
                  {/*<Box sx={classes.block2}>*/}
                  {/*  <Box sx={classes.block4}>*/}
                  {/*    <Box sx={classes.itemRayon}>Балашихинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Волоколамский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Воскресенский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Дмитровский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Домодедовский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Егорьевский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Зарайский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Истринский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Раменский район</Box>*/}
                  {/*  </Box>*/}
                  {/*  <Box sx={classes.block4}>*/}
                  {/*    <Box sx={classes.itemRayon}>Каширский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Рузский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Клинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Коломенский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Красногорский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Ленинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Лотошинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Луховицкий район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Люберецкий район</Box>*/}
                  {/*  </Box>*/}
                  {/*</Box>*/}
                  {/*<Box sx={classes.block2}>*/}
                  {/*  <Box sx={classes.block4}>*/}
                  {/*    <Box sx={classes.itemRayon}>Можайский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Мытищинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Наро-Фоминский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Новая Москва район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Ногинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Одинцовский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Орехово-Зуевский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Павлово-Посадский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Подольский район</Box>*/}
                  {/*  </Box>*/}
                  {/*  <Box sx={classes.block4}>*/}
                  {/*    <Box sx={classes.itemRayon}>Пушкинский район</Box>*/}

                  {/*    <Box sx={classes.itemRayon}>Сергиево-Посадский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Серпуховский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Солнечногорский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Ступинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Талдомский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Химкинский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Чеховский район</Box>*/}
                  {/*    <Box sx={classes.itemRayon}>Шатурский район</Box>*/}
                  {/*  </Box>*/}
                  {/*</Box>*/}
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
  wrapper: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "start",

    flexDirection: "column",
    fontSize: "20px",
  },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "450px",
    position: "relative",
    // "@media (max-width:1200px)": {
    //   height: "600px",
    // },
    // "@media (max-width:1000px)": {
    //   height: "650px",
    // },
    // "@media (max-width:930px)": {
    //   height: "700px",
    // },
    // "@media (max-width:780px)": {
    //   height: "800px",
    // },
    // "@media (max-width:700px)": {
    //   height: "900px",
    // },
  },
  title: {
    marginTop: "25px",
    padding: "5px 15px 5px 15px",
    backgroundColor: "white",
    display: "flex",
    fontSize: "35px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "50px",
    justifyContent: "center",
    borderRadius: "5px",
  },
  sectionItems: {
    display: "flex",
    flexDirection: "column",
  },
  blockItems: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "180px" },
  block2: {
    display: "flex",
    gap: "10px",
    "@media (max-width:1200px)": {
      flexDirection: "column",
    },
  },
  block4: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  itemRayon: {
    justifyContent: "center",
    backgroundColor: "white",

    padding: "2px",
    fontWeight: "600",
    display: "flex",
    textAlign: "center",
    borderRadius: "5px",
  },
  sectionWhite: {
    background: "linear-gradient(to left, #61d3ff, #61d3ff 100%, rgba(255, 255, 255, 10%) 90%)",
    opacity: 0.3,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};
