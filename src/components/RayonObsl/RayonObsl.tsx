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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={classes.title}>Районы обслуживания</Box>
          </Box>
          <Box sx={classes.setcionGeneralPageBanner}>
            {/*<Image src="/photoNew/rayony.jpg" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="center center" quality={100} />*/}
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.wrapper}>
              <Box sx={classes.content}>
                <Box sx={classes.blockItems}>
                  <Box sx={classes.block2}>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoOkr/bal.png" alt={"image"} width={30} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Балашихинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoOkr/" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Волоколамский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Воскресенский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Дмитровский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Домодедовский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Егорьевский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Зарайский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Истринский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Раменский район
                      </Box>
                    </Box>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Каширский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Рузский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Клинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Коломенский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Красногорский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Ленинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Лотошинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Луховицкий район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Люберецкий район
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={classes.block2}>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Можайский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Мытищинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Наро-Фоминский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Новая Москва район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Ногинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Одинцовский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Орехово-Зуевский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Павлово-Посадский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Подольский район
                      </Box>
                    </Box>
                    <Box sx={classes.block4}>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Пушкинский район
                      </Box>

                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Сергиево-Посадский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Серпуховский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Солнечногорский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Ступинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Талдомский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Химкинский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Чеховский район
                      </Box>
                      <Box sx={classes.itemRayon}>
                        <Image src="/photoNew/rayony.jpg" alt={"image"} width={50} height={30} objectFit="cover" objectPosition="center center" quality={100} />
                        Шатурский район
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
  blockItems: { display: "flex", justifyContent: "center", gap: "10px" },
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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    padding: "2px",
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    borderRadius: "5px",
  },
  sectionWhite: {
    background: "linear-gradient(to left, white,white 100%, rgba(255, 255, 255, 10%) 90%)",
    opacity: 0.9,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};
