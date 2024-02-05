import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLACK, COLOR_BLUE, COLOR_ORANGE, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN, MOBILE_TELEPHONE } from "@/const";
import Image from "next/image";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Banner } from "@/components/Banner/Banner";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { FotoRabot, PhotoItem } from "@/components/FotoRabot/FotoRabot";
import { FcCheckmark } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { Slogan } from "@/components/Slogan/Slogan";
import { margin } from "@mui/system";

interface IProps {}
export const Post3: FC<IProps> = () => {
  const [dataTableRem, setDataTableRem] = useState([
    { name: "Диагностика скважины на воду.Выезд в день обращения", price: "от 4500" },
    { name: "Видеодиагностика. Запись в подарок", price: "от 5500" },
  ]);

  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Причины выхода из строя насоса в скважине </Box>
              </h1>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box mt={-6}>
            <InfoBlocks />
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Почему насос выходит из строя</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/zamena_nasosa_beloozersk.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 70%"
                quality={100}
              />
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Пользование скважиной стало неотьемлемая потребность при проживании на загородном участке в дали от городской суеты. Не редкость пользования водой
              сопровождают различные поломки и проблемы в системе водоснабжения . Одной из такой является поломка насоса.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Давайте начнем с самого начала и обратим внимание на то где вы приобретали свой насос и за какую цену. Известно что качественные товары дешево
              стоить не могут – это относится и к вашему насосу.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Если цена его на момент приобретения Вами на рынке составляла 7-11 тысяч рублей соответсвенно ни о какой стабильной и долговечной работе говорить
              не приходится. Наш рынок заполонили китайские подделки европейских брендов . Но также нельзя сказать что Китайские насосы плохие. Не нужно
              остерегаться Китая, нужно остерегаться подделок сделаных в Китае.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Так же стоит обратить внимания на правильное использование насоса и его защиту от перепадов напряжения. Зачастую люди также экономят на защите
              насоса и перенебрегают инстуркцией , что в свою очередь приводит к плохим последствием. Для предотвращение подобных случаев устанавливайте защитные
              автоматы на питание насоса и обязательно читайте инстуркции по использованию насоса.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
                <Image
                  src="/photo/gryaznyi_nasos_black.jpg"
                  alt={"Монтаж водоснабжения на фото "}
                  layout={"fill"}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  quality={100}
                />
              </Box>
              Очередная причина – это частые включения выключения насоса. Если по каким либо причинам вы не установили гидро аккумулятор который является
              своебразным предохранителем, насос включается при каждом пользовании водой, что не может сказаться на нем положительно. Устанавливайте гидробак
              нужного обьема чтобы насос не включался слишком часто.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Не редкость причиной поломки является не правильный монтаж и демонтаж насосного оборудования. При доставании насоса из скважины горе- специалисты
              тянуть его за силовой провод тем самым разрушая его контакты мотора двигателя.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Если на насосе нет защиты типа холостого хода, не редкость бывает так, что насос работают в холостую тем самым не охлаждая себя . Перегрев насоса –
              это частая причина выхода из строя
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Подведя итог можно сказать следующее. Любые действия с насосом лучше производить под присмотром специалиста или полностью доверить эту работу ему.
              Обязательно устанавилвайте автоматы защиты для насоса – это продлит его жизнь. Используйте насос по техническим характеристикам . Берегите свою
              сситему водоснабжения
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}> Фото наших работ</Box>
          </h2>
          <Box sx={classes.arrayPhoto}>
            <PhotoItem src="/photo/primer_vodoochistki.jpg" />
            <PhotoItem src="/photo/zamena_nasosa_beloozersk.jpg" />
            <PhotoItem src="/photo/vodoochistka.jpg" />
            <PhotoItem src="/photo/zamena_trub.jpg" />
            <PhotoItem src="/photo/reanim.jpg" />
            <PhotoItem src="/photo/nasos_dlya_vody.jpg" />
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Почему стоит выбрать Нас?</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "350px" }}>
              <Image src="/photo/zamena_nasosa.jpg" alt={"Демонтаж насоса в СНТ"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
            </Box>
            <Box mt={2}>
              Клиенты высоко ценят нас за персонализированный подход, тщательное внимание к деталям и нашу способность эффективно решать сложные задачи,
              предоставляя надежные и продуктивные решения. Мы активно следим за инновациями и постоянно совершенствуем наши методы работы, благодаря чему мы
              предоставляем ведущие услуги на рынке.
            </Box>
            <Box mt={2}>
              Мы регулярно повышаем свою квалификацию, оставаясь на переднем крае современных технологий. Наши проекты по водоснабжению выделяются высоким
              качеством и надежностью. Мы гордимся множеством успешно реализованных установок по всей Московской области.
            </Box>
            <Box mt={2}>
              Наша преданность высокому качеству и непрерывное улучшение делают нас избранным выбором для тех, кто ищет достоверных профессионалов в данной
              сфере. Наша команда состоит из сертифицированных специалистов с обширным опытом в сфере водоснабжения.
            </Box>
            <Box mt={2}>Наш опыт гарантирует вашу уверенность в идеальном водоснабжении. Все ремонтные работы производятся в соответсвии с договором</Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Оставьте заявку </Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box mb={4}>
              Готовы начать работу над вашим проектом водоснабжения? Наш специалист ждет вашего звонка или сообщения. Оставьте заявку прямо сейчас, и наш
              специалист свяжется с вами для предоставления бесплатной консультации и составления предварительного плана работ.
            </Box>
          </Box>
        </Box>
      </Box>
      <Banner text={"Получить бесплатную консультацию"} subText={"Наш специалист свяжется с вами через некторое время"} />
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  titleGeneral: {
    marginTop: "80px",
    subTitle1: {
      fontSize: "35px",
      marginTop: "40px",
      marginBottom: "15px",
      fontWeight: 700,
      textAlign: "center",
      "@media (max-width: 1200px)": {
        fontSize: "35px",
      },
      "@media (max-width: 950px)": {
        fontSize: "30px",
      },
      "@media (max-width: 640px)": {
        fontSize: "24px",
      },
      "@media (max-width: 480px)": {
        fontSize: "22px",
      },
      color: COLOR_BLACK,
    },
    ...CONST_TITLE_WITHOUT_MARGIN,
  },
  liItem: { fontWeight: "600", fontSize: "20px", color: COLOR_BLACK, "@media (max-width:700px)": { fontSize: "14px" } },
  imgSection: {
    position: "relative",
    height: "150px",
    width: "350px",
    float: "left",
    marginRight: "15px",
    "@media (max-width:600px)": {
      width: "100%",
      marginBottom: "10px",
    },
  },
  imgSectionOnlyOne: {
    position: "relative",
    height: "150px",
    width: "550px",
    float: "left",
    marginRight: "15px",
    "@media (max-width:770px)": {
      width: "100%",
      marginBottom: "10px",
    },
  },
  sloganSection: { marginTop: "100px", "@media (max-width:1000px)": { marginTop: "30px" } },
  // mb={2} mt={2} sx={{ color: COLOR_ORANGE, fontWeight: 700, fontSize: "25px" }}
  liSection: { marginTop: "15px", color: COLOR_BLACK, fontWeight: "600", fontSize: "16px", "@media (max-width:500px)": { fontSize: "18px" } },

  subTitle1: {
    fontSize: "35px",
    marginTop: "40px",
    marginBottom: "15px",
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "35px",
    },
    "@media (max-width: 950px)": {
      fontSize: "30px",
    },
    "@media (max-width: 640px)": {
      fontSize: "24px",
    },
    "@media (max-width: 480px)": {
      fontSize: "22px",
    },
    color: COLOR_BLACK,
  },
  subTitle2: {
    fontSize: "30px",
    marginTop: "20px",
    marginBottom: "5px",
    fontWeight: 600,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "25px",
    },
    "@media (max-width: 950px)": {
      fontSize: "20px",
    },
    "@media (max-width: 640px)": {
      fontSize: "18px",
    },
    "@media (max-width: 480px)": {
      fontSize: "22px",
    },
    color: COLOR_BLACK,
  },
  descTextSection: { textAlign: "left", margin: "5px 5px", fontSize: "16px", fontWeight: "400", lineHeight: "1.55" },
  content: { margin: "0 16px 0 16px" },
  setcionGeneralPageBannerImg: {
    width: "100%",
    display: "flex",
    height: "280px",
    position: "relative",
    "@media (max-width:480px)": {
      height: "250px",
    },
  },
  contentImg: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  titleDesc: {
    display: "flex",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    maxWidth: "600px",
    margin: "0 auto",
    color: "white",
  },
  wrapperImg: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  arrayPhoto: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
    "@media (max-width:580px)": {
      gap: "2px",
    },
  },
  sectionWhiteImg: {
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
  table: {
    display: "flex",
    justifyContent: "center",
  },
  tdStyle: {
    textAlign: "center",
    backgroundColor: "#fcfbf9",
    border: "1px solid #dedede",
    height: "25px",
    fontSize: "22px",
    fontWeight: "700",
    "@media (max-width:500px)": { fontSize: "15px" },
  },
  thStyle: { width: "60%", backgroundColor: "#4ab461", color: "white", height: "30px", fontSize: "25px", fontWeight: "600", textAlign: "center" },
  titlePrice: {
    fontSize: "35px",
    marginTop: "30px",
    marginBottom: "15px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "35px",
    },
    "@media (max-width: 950px)": {
      fontSize: "30px",
    },
    "@media (max-width: 640px)": {
      fontSize: "24px",
    },
    "@media (max-width: 480px)": {
      fontSize: "22px",
    },
  },
};
