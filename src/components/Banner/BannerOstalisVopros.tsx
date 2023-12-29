import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { OrderCall } from "@/components/OrderCall/OrderCall";
import TextField from "@mui/material/TextField";

interface IProps {}
export const BannerOstalisVopros: FC<IProps> = () => {
  const [mob, setMob] = useState<string>("");
  const validateNumber = (value: number | string) => {
    const regex = /^\d{1,13}$/;
    const val = value.toString();
    setMob(val);
  };

  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.setcionGeneralPageBanner}>
            <Image
              src="/photoNew/testImage.jpg"
              alt={"image"}
              layout={"fill"}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.contentForBanner}>
              <Box sx={classes.contentForBannerwrapperSection}>
                <Box sx={classes.sectionBanner}>
                  <Box display={"flex"} flexDirection={"column"} gap={"25px"} mr={2} ml={2}>
                    <Box sx={classes.bannerTitle}> Остались вопросы?</Box>
                    <Box sx={classes.descr}>
                      Просто заполните поля ниже, мы перезвоним Вам в течении 5 минут и подробно проконсультируем по нашим ценам и услугам.
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "15px", margin: "0 auto" }}>
                      <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "white", padding: "8px", borderRadius: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Телефон"
                          variant="outlined"
                          size={"small"}
                          sx={{ width: "100%", backgroundColor: "white", borderRadius: "5px" }}
                          value={mob}
                          onChange={(e) => {
                            validateNumber(e.target.value);
                          }}
                        />
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "white", padding: "8px", borderRadius: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Телефон"
                          variant="outlined"
                          size={"small"}
                          value={mob}
                          sx={{ width: "100%", borderRadius: "5px" }}
                          onChange={(e) => {
                            validateNumber(e.target.value);
                          }}
                        />
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            backgroundColor: "#ff6c36",
                            width: "100%",
                            textAlign: "center",
                            height: "50px",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            color: "white",
                            fontSize: "20px",
                            fontWeight: "500",
                            borderRadius: "5px",
                          }}
                        >
                          Отправить заявку
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "400",
                            flexWrap: "wrap",
                            justifyContent: "center",
                          }}
                        >
                          Нажимая на кнопку вы даете согласие на &nbsp; <span style={{ color: "#63fe93" }}> обработку персональных данных</span>
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
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  bannerTitle: {
    fontSize: "38px",
    fontWeight: 700,
    textAlign: "center",
    color: "white",
    "@media (max-width:900px)": {
      textAlign: "center",
      fontSize: "25px",
      lineHeight: "40px",
    },
  },
  sectionBanner: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    "@media (max-width:900px)": {
      justifyContent: "center",
      textAlign: "center",
    },
  },
  contentForBannerwrapperSection: {
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
  },
  descr: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "25px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
  },
  content: { display: "flex" },
  contentSection: { display: "flex", width: "100%" },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "500px",
    position: "relative",
    "@media (max-width:800px)": {
      height: "450px",
    },
  },
  contentForBanner: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  sectionContentBaner: {
    color: "red",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionWhite: {
    background: "linear-gradient(to left, black, black 100%, rgba(0, 0, 0, 10%) 90%)",
    opacity: 0.6,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:900px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
};
