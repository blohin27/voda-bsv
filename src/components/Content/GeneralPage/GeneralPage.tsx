import Box from "@mui/material/Box";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { ServicesAll } from "@/components/ServicesAll/Services";
import React, { useState } from "react";
import { ClassesSx } from "@/theme/theme";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { BannerPromo } from "@/components/Content/GeneralPage/BannerPromo";
import { OurAdvantages } from "@/components/OurAdvantages/OurAdvantages";
import { Steps } from "@/components/Steps/Steps";
import { KvalWorker } from "@/components/KvalWorker/KvalWorker";
import { NashyRaboty } from "@/components/NashyRaboty/NashyRaboty";
import { LineBorder } from "@/components/LineBorder/LineBorder";
import { NashyRabotyTemplate } from "@/components/NashyRaboty/NashyRaboty2";
import { NashyRaboty3 } from "@/components/NashyRaboty/NashyRaboty3";
import { ButtonCentr } from "@/components/ButtonCenter/ButtonCentr";
import { Banner } from "@/components/Banner/Banner";
import { FotoRabot } from "@/components/FotoRabot/FotoRabot";
import { OurClients } from "@/components/OurClients/OurClients";
import { ComentOnas } from "@/components/ComentOnas/ComentOnas";
import { WhatTypeService } from "@/components/WhatTypeService/WhatTypeService";
import { QuesResonse } from "@/components/QuesResponse/QuesResponse";
import { EmailSbscribtion } from "@/components/EmailSubscription/EmailSubscription";
import { BannerOstalisVopros } from "@/components/Banner/BannerOstalisVopros";
import { RayonObsl } from "@/components/RayonObsl/RayonObsl";
import { Onas } from "@/components/ONas/Onas";
import { COLOR_BLACK, COLOR_BLUE_SECTION, COLOR_MILK } from "@/const";
import { SimpleDialog } from "@/components/Modal/Modal";
import { modalStore } from "@/domain";
import { observer } from "mobx-react";
import { Slogan } from "@/components/Slogan/Slogan";
import ScrollToTop from "react-scroll-up";
import { FcUpload } from "react-icons/fc";
import { FcRightUp2 } from "react-icons/fc";

export const ContentGeneralPage = observer(() => {
  return (
    <Box display={"flex"} flexDirection={"column"} className={montserrat.className}>
      <BannerPromo />
      <Box mt={-6}>
        <InfoBlocks />
      </Box>
      <Box>
        <Onas />
      </Box>
      <Box>
        <WhatTypeService />
      </Box>
      <Slogan text={"Не допустим ухудшения работы вашего водоснабжения! "} />
      <Box sx={{ backgroundColor: COLOR_BLUE_SECTION }}>
        <ServicesAll />
      </Box>
      <Box>
        <OurAdvantages />
      </Box>
      <Box>
        <Steps />
      </Box>
      <Box>
        <KvalWorker />
      </Box>
      {/*<NashyRabotyTemplate*/}
      {/*  textFirst*/}
      {/*  title={"Чистка скважины"}*/}
      {/*  glubina={"30 метров"}*/}
      {/*  time={"3 часа"}*/}
      {/*  typeWork={"Чистка скважины с использованием профессиональной химии"}*/}
      {/*  kolvoPersonal={"2 человека"}*/}
      {/*  photo={["/photo/1t.jpg", "/photo/2t.jpg", "/photo/5t.jpg", "/photo/6t.jpg", "/photo/7t.jpg"]}*/}
      {/*  price={"30 000 рублей"}*/}
      {/*/>*/}
      {/*<NashyRabotyTemplate*/}
      {/*  title={"Чистка скважины"}*/}
      {/*  glubina={"30 метров"}*/}
      {/*  time={"3 часа"}*/}
      {/*  typeWork={"Чистка скважины с использованием профессиональной химии"}*/}
      {/*  kolvoPersonal={"2 человека"}*/}
      {/*  photo={["/photo/1t.jpg", "/photo/2t.jpg", "/photo/5t.jpg", "/photo/6t.jpg", "/photo/7t.jpg"]}*/}
      {/*  price={"30 000 рублей"}*/}
      {/*/>*/}
      {/*<ButtonCentr title={"Больше кейсов"} />*/}

      <FotoRabot />
      <Box mt={10}>
        <Banner text={"Получить бесплатную консультацию"} subText={"Наш специалист свяжется с вами через некторое время"} />
      </Box>

      <SimpleDialog open={modalStore.modalOpen} />
    </Box>
  );
});

const classes: ClassesSx = {
  title: {
    marginTop: "40px",
    paddingTop: "40px",
    marginBottom: "30px",
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
};
