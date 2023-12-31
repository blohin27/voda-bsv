import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { FcCustomerSupport } from "react-icons/fc";
import { LogoGeneralVodaBsv } from "@/components/LogoVB/LogoGeneralVodaBsv";
import { RayonObsl } from "@/components/RayonObsl/RayonObsl";
import { ComentOnas } from "@/components/ComentOnas/ComentOnas";
import { QuesResonse } from "@/components/QuesResponse/QuesResponse";
import { EmailSbscribtion } from "@/components/EmailSubscription/EmailSubscription";
import { BannerOstalisVopros } from "@/components/Banner/BannerOstalisVopros";
import { useMediaQuery } from "@mui/material";

interface IProps {}
export const FooterPage: FC<IProps> = () => {
  const px600 = useMediaQuery("(max-width:600px)");
  return (
    <Box className={montserrat.className}>
      <RayonObsl />
      <ComentOnas />
      <QuesResonse />
      <EmailSbscribtion />
      <BannerOstalisVopros />
      <Box sx={classes.root} className={montserrat.className}>
        <Box sx={classes.wrapper}>
          <Box sx={classes.content}>
            <Box sx={classes.fourSection}>
              <Box>
                <Box sx={classes.title}>О нас</Box>
                <Box sx={classes.arrayRef}>
                  <Box sx={classes.itemRef}>Бурение скважин</Box>
                  <Box sx={classes.itemRef}>Бурение артезианских скважин</Box>
                  <Box sx={classes.itemRef}>Бурение МБУ</Box>
                  <Box sx={classes.itemRef}>Бурение на даче</Box>
                  <Box sx={classes.itemRef}>Обустройство скважины</Box>
                </Box>
              </Box>
              <Box>
                <Box sx={classes.title}>О нас</Box>
                <Box sx={classes.arrayRef}>
                  <Box sx={classes.itemRef}>Бурение скважин</Box>
                  <Box sx={classes.itemRef}>Бурение артезианских скважин</Box>
                  <Box sx={classes.itemRef}>Бурение МБУ</Box>
                  <Box sx={classes.itemRef}>Бурение на даче</Box>
                  <Box sx={classes.itemRef}>Обустройство скважины</Box>
                </Box>
              </Box>
              <Box>
                <Box sx={classes.title}>О нас</Box>
                <Box sx={classes.arrayRef}>
                  <Box sx={classes.itemRef}>Бурение скважин</Box>
                  <Box sx={classes.itemRef}>Бурение артезианских скважин</Box>
                  <Box sx={classes.itemRef}>Бурение МБУ</Box>
                  <Box sx={classes.itemRef}>Бурение на даче</Box>
                  <Box sx={classes.itemRef}>Обустройство скважины</Box>
                </Box>
              </Box>
              {!px600 && (
                <Box>
                  <Box sx={classes.title}>Режим работы</Box>
                  <Box sx={classes.arrayRef}>
                    <Box sx={classes.timeWork}>
                      <FcCustomerSupport fontSize={30} /> с 8:00 до 23:00
                    </Box>
                    <Box sx={classes.zvonokButton}>Обратный звонок</Box>
                    <Box sx={classes.raschetButton}>Расчитать стоимость</Box>
                  </Box>
                </Box>
              )}
            </Box>
            {px600 && (
              <Box>
                <Box sx={{ ...classes.title, textAlign: "center" }}>Режим работы</Box>
                <Box sx={classes.arrayRef}>
                  <Box sx={{ ...classes.timeWork, display: "flex", justifyContent: "center" }}>
                    <FcCustomerSupport fontSize={30} /> с 8:00 до 23:00
                  </Box>
                  <Box sx={classes.zvonokButton}>Обратный звонок</Box>
                  <Box sx={classes.raschetButton}>Расчитать стоимость</Box>
                </Box>
              </Box>
            )}
            <Box sx={classes.sectionIP}>
              © 2017-2024 ИП Блохин Д.В. <br /> Все права защищены
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: { backgroundColor: "#252121" },
  title: { color: "white", fontWeight: "600", fontSize: "18px", mb: "20px" },
  arrayRef: { color: "#62953d", fontWeight: "400", fontSize: "14px", gap: "10px", display: "flex", flexDirection: "column" },
  itemRef: { cursor: "pointer", display: "flex" },
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { display: "flex", paddingTop: "40px", flexDirection: "column", margin: "0 16px 0 16px" },
  fourSection: {
    display: "flex",
    justifyContent: "space-between",
    flex: "1 1 25%",
    gap: "10px",
    "@media(max-width:350px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  sectionIP: { display: "flex", color: "white", justifyContent: "center", textAlign: "center", margin: "100px 0px 40px 0" },
  timeWork: { color: "white", display: "flex", alignItems: "center" },
  zvonokButton: {
    backgroundColor: "#fe6c36",
    color: "white",
    borderRadius: "5px",
    padding: "10px 15px 10px 15px",
    textAlign: "center",
    fontWeight: "600",
    mb: "5px",
    cursor: "pointer",
  },
  raschetButton: {
    backgroundColor: "#064aca",
    color: "white",
    borderRadius: "5px",
    padding: "10px 15px 10px 15px",
    textAlign: "center",
    fontWeight: "600",
    cursor: "pointer",
  },
};
