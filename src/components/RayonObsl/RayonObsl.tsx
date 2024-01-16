import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import { ButtonCentr } from "@/components/ButtonCenter/ButtonCentr";
import { useMediaQuery } from "@mui/material";
import { ItemIconRayon } from "@/components/RayonObsl/ItemIconRayon";

interface IProps {}
export const RayonObsl: FC<IProps> = () => {
  const adaptiv600 = useMediaQuery("(max-width:700px)");

  return (
    <Box sx={classes.root}>
      <Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={classes.title}>Районы обслуживания</Box>
          </Box>

          <Box sx={classes.setcionGeneralPageBanner}>
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.wrapper}>
              <Box sx={classes.content}>
                <Box sx={classes.blockItems}>
                  <Box sx={classes.block2}>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/balashiha.jpg"} />
                        <Box ml={1}> Балашихинский район</Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/volokolamsk.jpg"} />
                        <Box ml={1}> Волоколамский район</Box>
                      </Box>

                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/voskresensk.jpg"} />
                        <Box ml={1}> Воскресенский район</Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/dmitrov.jpg"} />
                        <Box ml={1}> Дмитровский район </Box>
                      </Box>

                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/egorevsk.jpg"} />
                        <Box ml={1}> Егорьевский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/zaraisk.jpg"} />
                        <Box ml={1}> Зарайский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/istra.jpg"} />
                        <Box ml={1}> Истринский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/ramensk.jpg"} />
                        <Box ml={1}> Раменский район </Box>
                      </Box>
                    </Box>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/kashira.jpg"} />
                        <Box ml={1}> Каширский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/ruza.jpg"} />
                        <Box ml={1}> Рузский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/klin.jpg"} />
                        <Box ml={1}> Клинский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/kolomna.jpg"} />
                        <Box ml={1}> Коломенский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/krasnogorsk.jpg"} />
                        <Box ml={1}> Красногорский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/lenin.jpg"} />
                        <Box ml={1}> Ленинский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/domodedovo.jpg"} />
                        <Box ml={1}> Домодедовский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/lotosh.jpg"} />
                        <Box ml={1}> Луховицкий район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/lubercy.jpg"} />
                        <Box ml={1}> Люберецкий район </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={classes.block2}>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/pushkino.jpg"} />
                        <Box ml={1}> Пушкинский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/mojaick.jpg"} />
                        <Box ml={1}> Можайский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/mytishi.jpg"} />
                        <Box ml={1}> Мытищинский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/nara.jpg"} />
                        <Box ml={1}> Наро-Фоминский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/noginsk.jpg"} />
                        <Box ml={1}> Ногинский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/odincovo.jpg"} />
                        <Box ml={1}> Одинцовский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/orehovo.jpg"} />
                        <Box ml={1}> Орехово-Зуевский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/pavlovo.jpg"} />
                        <Box ml={1}> Павлово-Посадский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/podolsk.jpg"} />
                        <Box ml={1}> Подольский район </Box>
                      </Box>
                    </Box>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/sergievo.jpg"} />
                        <Box ml={1}> Сергиево-Посадский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/serpuho.jpg"} />
                        <Box ml={1}> Серпуховский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/solnce.jpg"} />
                        <Box ml={1}> Солнечногорский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/stupino.jpg"} />
                        <Box ml={1}> Ступинский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/tald.jpg"} />
                        <Box ml={1}> Талдомский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/himki.jpg"} />
                        <Box ml={1}> Химкинский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/chehov.jpg"} />
                        <Box ml={1}> Чеховский район </Box>
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <ItemIconRayon src={"/photoFlag/shatura.jpg"} />
                        <Box ml={1}> Шатурский район </Box>
                      </Box>
                    </Box>
                  </Box>
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
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    margin: "0 16px 0 16px",
    flexDirection: "column",
    fontSize: "20px",
  },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    // height: "450px",
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
  blockItems: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    "@media (max-width:480px)": {
      flexDirection: "column",
      gap: "25px",
    },
  },
  block2: {
    display: "flex",
    gap: "30px",
    "@media (max-width:1200px)": {
      flexDirection: "column",
      gap: "5px",
    },
    "@media (max-width:480px)": {
      flexDirection: "column",
      gap: "5px",
    },
  },
  block4: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  itemRayon: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    padding: "2px",
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    borderRadius: "5px",
    "@media (max-width:480px)": {
      marginLeft: "90px",
      fontSize: "18px",
    },
    "@media (max-width:440px)": {
      marginLeft: "70px",
      fontSize: "18px",
    },
    "@media (max-width:400px)": {
      marginLeft: "50px",
      fontSize: "18px",
    },
    "@media (max-width:380px)": {
      marginLeft: "40px",
      fontSize: "18px",
    },
  },
  sectionWhite: {
    background: "linear-gradient(to left, white,white 100%, rgba(255, 255, 255, 10%) 90%)",
    opacity: 0.9,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};
