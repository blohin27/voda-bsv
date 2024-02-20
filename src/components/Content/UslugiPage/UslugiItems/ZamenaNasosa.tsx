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
import { ecv, ustanovkaNasosa, zamenaNasosa } from "@/price";

interface IProps {}
export const ZamenaNasosa: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Замена насоса в скважине</Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Замена насоса в скважине c гарантией</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image src="/photo/nasos_dlya_vody.jpg" alt={"Замена насоса  "} layout={"fill"} objectFit="cover" objectPosition="50% 0%" quality={100} />
            </Box>
            <Box>
              Наша компания предлагает полный спектр услуг по установке и замене насосного оборудования для скважин на воду. Мы готовы как отремонтировать
              существующий насос, так и установить новый, приобретенный вами. Наша работа основывается на использовании надежных брендов, таких как Джилекс,
              Unipump, Pedrollo, Водолей и Grundfos.
            </Box>
            <Box mt={2}>
              Скважинный насос является ключевым элементом системы водоснабжения на вашем участке. Существуют разнообразные типы насосов, каждый из которых
              обладает своими уникальными характеристиками.
            </Box>
            <Box mt={2}>
              Несмотря на то, что современные насосы оснащены множеством защитных функций, они все равно могут испытывать сложности из-за высоких
              эксплуатационных нагрузок.
            </Box>
            <Box mt={2}>
              В случае возникновения проблем с насосом, таких как его поломка, обрыв или застревание, настоятельно рекомендуем не пытаться устранять их
              самостоятельно. Опыт показывает, что попытки самостоятельного ремонта часто приводят к дополнительным расходам в будущем.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цена на замену насоса</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Заменим насос в короткие сроки подберем по цене и качеству подходящий под вашу скважину. Много оборудования есть в наличии. Большие скидки на
            комплекс услуг.
          </Box>
          <Box sx={classes.table}>
            <Table style={{ width: "100%", borderCollapse: "collapse", border: "none" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...classes.thStyle }}>Название услуги</TableCell>
                  <TableCell sx={{ ...classes.thStyle, width: "60%" }}>Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {zamenaNasosa.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Опубликованные цены на сайте соответствуют реальным в договоре об оказании услуг. За счет большого оборота выполненных работ мы имеем хорошие скидки
            у поставщиков оборудования для водоснабжение, что благоприятно влияет на общую стоимость услуг.
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Цены на установку насоса</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Установка насоса. Наша компания также осуществляет установки насоса в новые скважины. На основании паспорта скважины мы подбираем клиенту самый
            оптимальный насос по цене и качеству. Также производим установку с соблюдением всех правил безопасности и предоставляем гарантию на данную услугу.
          </Box>
          <Box sx={classes.table}>
            <Table style={{ width: "100%", borderCollapse: "collapse", border: "none" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...classes.thStyle }}>Название услуги</TableCell>
                  <TableCell sx={{ ...classes.thStyle, width: "60%" }}>Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ustanovkaNasosa.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Slogan text={"Срочный выезд! Аварийная подача воды!"} />
          <h2>
            <Box sx={{ ...classes.subTitle1 }}> Цены замену насоса ЭЦВ</Box>
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
                {ecv.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "40px" }}>
            <Box sx={{ display: "block", color: COLOR_BLACK, fontWeight: 700, fontSize: "20px" }}> Почему же насосы выходят из строя:</Box>
            Неисправный насос Многим кажется что на рынке уже нет плохих насосов и факторы при которых выходят из строя насосы , все предусмотрены, но на самом
            деле это не так. У них по прежнему есть как плюсы так и минусы. Ниже приведены причины по которым выходят из струя глубинные насосы:
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            <Box sx={{ display: "block", color: COLOR_ORANGE, fontWeight: 700, fontSize: "20px" }}> - Перепады напряжения. </Box>
            За территорией года на дачных участках зачастую бывает серьезные перепады напряжения. У тех людей у кого установлен перед насосом какая-либо защита
            от скачков напряжения, могут избежать эту проблему на 99%.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            <Box sx={{ display: "block", color: COLOR_ORANGE, fontWeight: 700, fontSize: "20px" }}> - Не правильно настроена автоматика( реле ).</Box>
            Правильной выбора гидробака – это 50% успеха при построении системы водоснабжения. Для правильного выбора гидроаккумулятора(гидробака) обращайтесь к
            нам.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            <Box sx={{ display: "block", color: COLOR_ORANGE, fontWeight: 700, fontSize: "20px" }}> - Срок службы.</Box>
            Не стоит забывать, что насос работает в сложных условиях с постоянными пусками и у него как у всего на свете имеется срок службы. Топовые брены могут
            проработать и более 10 лет при должном уходе, но и встречаются наступление гарантийных случаев.
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
