import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLACK, COLOR_BLUE, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import Image from "next/image";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Banner } from "@/components/Banner/Banner";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { data1 } from "@/components/Content/PricePage/data";
import { FotoRabot, PhotoItem } from "@/components/FotoRabot/FotoRabot";
import { List, ListItem, ListItemDecorator } from "@mui/joy";
import { FcFlashOn } from "react-icons/fc";
import { Slogan } from "@/components/Slogan/Slogan";

interface IProps {}
export const CrashDeparture: FC<IProps> = () => {
  const [dataTableRem, setDataTableRem] = useState([
    { name: " Аварийный Выезд ", price: "от 10 000" },
    { name: "Ремонт или замена насосного оборудования:", price: "от 15 000" },
    { name: "Чистка и обслуживание фильтров", price: " от 10 000" },
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
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Круглосуточный аварийный выезд</Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Аварийный Выезд по Водоснабжению</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image src="/photo/caravar.jpg" alt={"Наш микроавтобус "} layout={"fill"} objectFit="cover" objectPosition="50% 50%" quality={100} />
            </Box>
            <Box sx={{ fontSize: "20px", fontWeight: "700" }}>Ваша надежность в экстренных случаях водоснабжения - наш приоритет.</Box>
            <Box mt={1}>Мы понимаем, насколько важным является быстрое и эффективное устранение аварийных ситуаций в системах водоснабжения.</Box>
            <Box mt={1}>
              Наша команда специалистов оснащена всем необходимым оборудованием и знаниями для оперативного реагирования на любые проблемы, будь то утечка воды,
              засорение труб или поломка насосного оборудования.
            </Box>
            <Box mt={2}>
              При появлении признаков аварийной ситуации, таких как понижение давления воды, появление воды в непредназначенных местах или странные звуки в
              системе, наша команда оперативно выезжает на место для диагностики и устранения проблемы.
            </Box>
            <Box mt={2}>
              Мы используем передовые технологии и методы для обнаружения и устранения утечек, засорений и других неисправностей. Быстрое устранение
              неисправностей в кратчайший срок
            </Box>
          </Box>
          <Slogan text={"Круглосуточная готовность к Аварийному Выезду в Москве и МО"} />
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на аварийный выезд</Box>
          </h2>
          <Box sx={classes.table}>
            <Table style={{ width: "100%", borderCollapse: "collapse", border: "none" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...classes.thStyle }}>Название услуги</TableCell>
                  <TableCell sx={{ ...classes.thStyle, width: "60%" }}>Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTableRem.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Профессиональный Подход и Качественное Обслуживание</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Мы гордимся нашей репутацией надежного партнера в области водоснабжения. Наша команда состоит из квалифицированных специалистов, обладающих глубокими
            знаниями и опытом в области водоснабжения. Мы стремимся к тому, чтобы каждое обращение было выполнено качественно и эффективно.
          </Box>
          <Box sx={classes.descTextSection}>
            Если у вас возникла аварийная ситуация в системе водоснабжения, не теряйте времени – свяжитесь с нами прямо сейчас. Мы гарантируем оперативный выезд
            и качественное устранение любых неисправностей для обеспечения вашего комфорта и безопасности.Свяжитесь с Нами для Незамедлительного Реагирования
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
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> Многолетний опыт и высокая квалификация:</Box>
              Наша команда состоит из опытных инженеров и специалистов, которые имеют глубокие знания и многолетний опыт в области водоснабжения. Мы гарантируем,
              что каждый проект выполняется с максимальной профессиональностью и вниманием к деталям.
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}>Индивидуальный подход к каждому клиенту:</Box> Мы понимаем,
              что у каждого предприятия уникальные потребности и задачи. Поэтому мы предлагаем индивидуальные решения, специально адаптированные под ваши
              конкретные требования и условия.
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}>Гарантия качества и поддержка клиентов:</Box> Мы предлагаем
              гарантии на все наши услуги и оборудование. Кроме того, наши клиенты могут рассчитывать на быстрый и квалифицированный сервис поддержки в случае
              любых вопросов или проблем.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1OstavZayvk }}>Оставьте заявку </Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box mb={4} sx={{}}>
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

  subTitle1: { ...CONST_TITLE_FIRST_PAGE, color: COLOR_BLACK },
  subTitle1OstavZayvk: {
    fontSize: "35px",
    marginTop: "90px",
    marginBottom: "15px",
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "35px",
    },
    "@media (max-width: 1100px)": {
      fontSize: "35px",
      marginTop: "30px",
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
    marginTop: "20px",
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
