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
import { stateStore } from "@/domain";
import Link from "next/link";
import { IP } from "@/const";

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
                <Box sx={classes.title}>Обьекты </Box>
                <Box sx={classes.arrayRef}>
                  <Box sx={classes.itemRef}>
                    <Link href={`/obsluzhivaemye-obekty/snt-ijs`} style={{ textDecoration: "none", color: "#62953d" }}>
                      {`СНТ и ИЖС`}
                    </Link>
                  </Box>
                  <Box sx={classes.itemRef}>
                    <Link href={`/obsluzhivaemye-obekty/doma`} style={{ textDecoration: "none", color: "#62953d" }}>
                      {`Частные дома`}
                    </Link>
                  </Box>
                  <Box sx={classes.itemRef}>
                    <Link href={`/obsluzhivaemye-obekty/torg-centry`} style={{ textDecoration: "none", color: "#62953d" }}>
                      {`Торговые центры`}
                    </Link>
                  </Box>
                  <Box sx={classes.itemRef}>
                    <Link href={`/obsluzhivaemye-obekty/predpriytie`} style={{ textDecoration: "none", color: "#62953d" }}>
                      {`Предприятия`}
                    </Link>
                  </Box>
                  <Link href={`/obsluzhivaemye-obekty/rozn-sety`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Розничные сети`}</Box>
                  </Link>
                </Box>
              </Box>
              <Box>
                <Box sx={classes.title}>Услуги</Box>
                <Box sx={classes.arrayRef}>
                  <Link href={`/uslugi/burenie`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Бурение скважины`}</Box>
                  </Link>
                  <Link href={`/uslugi/remont-scvajin`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Ремонт скважин`}</Box>
                  </Link>
                  <Link href={`/uslugi/chistka`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Чистка от ила`}</Box>
                  </Link>
                  <Link href={`/uslugi/diagnostica"`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Диагностика`}</Box>
                  </Link>
                  <Link href={`/uslugi/zamena-gidroaccumulatora`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Замена гидроаккумуляторв`}</Box>
                  </Link>
                </Box>
              </Box>
              <Box>
                <Box sx={classes.title}>Навигация</Box>
                <Box sx={classes.arrayRef}>
                  <Link href={`/`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Главная`}</Box>
                  </Link>
                  <Link href={`/uslugi`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Услуги`}</Box>
                  </Link>
                  <Link href={`/ceny`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Цены`}</Box>
                  </Link>
                  <Link href={`/avaria-vyezd`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Аварийный выезд`}</Box>
                  </Link>
                  <Link href={`/nashy-raboty`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Наши работы`}</Box>
                  </Link>
                  <Link href={`/contact`} style={{ textDecoration: "none", color: "#62953d" }}>
                    <Box sx={classes.itemRef}>{`Контакты`}</Box>
                  </Link>
                </Box>
              </Box>
              {!px600 && (
                <Box>
                  <Box sx={classes.title}>Режим работы</Box>
                  <Box sx={classes.arrayRef}>
                    <Box sx={classes.timeWork}>
                      <FcCustomerSupport fontSize={30} /> с 8:00 до 23:00
                    </Box>
                    <Box
                      sx={classes.zvonokButton}
                      onClick={() => {
                        stateStore.openModal();
                      }}
                    >
                      Обратный звонок
                    </Box>
                    <Box
                      sx={classes.raschetButton}
                      onClick={() => {
                        stateStore.openModal();
                      }}
                    >
                      Расчитать стоимость
                    </Box>
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
                  <Box
                    sx={classes.zvonokButton}
                    onClick={() => {
                      stateStore.openModal();
                    }}
                  >
                    Обратный звонок
                  </Box>
                  <Box
                    sx={classes.raschetButton}
                    onClick={() => {
                      stateStore.openModal();
                    }}
                  >
                    Расчитать стоимость
                  </Box>
                </Box>
              </Box>
            )}
            <Box sx={classes.sectionIP}>{`© 2017-2024 ${IP.name} Все права защищены`}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: { backgroundColor: "#252121" },
  title: { color: "white", fontWeight: "600", fontSize: "18px", mb: "20px", textAlign: "center" },
  arrayRef: { color: "#62953d", fontWeight: "400", fontSize: "14px", gap: "10px", display: "flex", flexDirection: "column" },
  itemRef: { cursor: "pointer", display: "flex", textAlign: "center", justifyContent: "center" },
  wrapper: { maxWidth: "1000px", margin: "0 auto" },
  content: { display: "flex", paddingTop: "40px", flexDirection: "column", margin: "0 16px 0 16px" },
  fourSection: {
    display: "flex",
    justifyContent: "space-between",
    flex: "1 1 25%",
    gap: "10px",
    "@media(max-width:400px)": {
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
