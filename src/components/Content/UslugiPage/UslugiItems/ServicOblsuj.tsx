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
import { montajVodosnab } from "@/price";

interface IProps {}
export const ServicObsluj: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Обслуживание водяных скважин </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Cервисное обслуживание скважин</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/serviznoe_obslujivanie_truby.jpg"
                alt={"Элементы оборудования скважины  "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 20%"
                quality={100}
              />
            </Box>
            <Box>
              Во всей системе водоснабжение нет узлов, которые бы играли второстепенную роль. Каждый элемент будь то насос или обратный клапан выполняет функцию
              без которой, все остальные элементы будут работать с перебоями или вовсе выйдут из строя.
            </Box>
            <Box mt={2}>
              Комфортное проживание может быть достигнуто только если сумма проблем с инженерными системами равна 0. Конечно они делятся на важные и очень важные
              , но любая проблема доставляет массу хлопот и дополнительно растраты на починку.
            </Box>
            <Box mt={2}>
              Зачастую, централизованной воды в СНТ и малозаселенных поселках нет совсем или подается с перебоями, поэтому правильным выбором будет бурения
              собственной скважины с обустройством системы водоснабжения, главными элементами которой являются насос и гидроаккумулятор.
            </Box>
            <Box mt={2}>
              Гидроаккумулятор – он же гидробак служит для выравнивание давления воды во всей системе дома. За счет груши, которая находится под определенным
              давлением, вновь прибывшая вода в емкость создает дополнительное давление в этой груши, поэтому на выходе получается ровный напор воды без
              пульсирующего эффекта. Существуют наиболее частые проблемы с которыми справляется гидробак
            </Box>
          </Box>
          <Box ml={6} mt={2}>
            <ul>
              <li>
                <Box sx={{ ...classes.liSection }}>Не стабильное давление.</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Имеется небольшая часть воды при выходе из строя насоса.</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Предостерегает от резкого изменения давления в системе.</Box>
              </li>
            </ul>
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "15px" }}>
            Управление происходит с помощью автоматики, которая регулирует интервал работы насоса по давлению. Это , в свою очередь способствует продеванию срока
            службы насоса. Она задает минимальное и максимальное давление в системе.
          </Box>
          <Box sx={classes.descTextSection}>Кратко опишем устройство гидробака Каждый такой бак имеет в своей устройстве следющие элементы:</Box>
          <Box ml={6} mt={2}>
            <ul>
              <li>
                <Box sx={{ ...classes.liSection }}>Металлический корпус</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Мембрана</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Подача воздуха через ниппель</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Реле давление с датчиков</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Металлическая опора</Box>
              </li>
            </ul>
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на ремонт и замену гидроаккумуляторов (гидробаков)</Box>
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
                {montajVodosnab.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Проблемы гидроаккумуляторов</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Самые частые проблемы в такого типа емкости это понижение минимального допустимого давление в груше. Причины этому могут быть различные, может
            потребоваться замены мембраны. Но для точной определения что стало причиной поломки, лучше обратиться к нашим специалистам.
          </Box>
          <Box sx={classes.descTextSection}>
            Установка насоса. Наша компания также осуществляет установки насоса в новые скважины. На основании паспорта скважины мы подбираем клиенту самый
            оптимальный насос по цене и качеству. Также производим установку с соблюдением всех правил безопасности и предоставляем гарантию на данную услугу.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Гидробаку как и всем узлам системы водоснабжения требуется регулировка. В регулировку чаще всего подразумевают настройку работы автоматики и
            выравнивание давлении воздуха в баке. Если причиной выхода из строя системы водоснабжения являются частые поломки гидроаккумулятора, его требуется
            заменить.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Не советуем проводить эту процедуру самостоятельно . В нашей команде есть профессиональные мастера по ремонту и замене гидроаккумуляторов.
            Качественный инструмент позволяет нам выполнять работы без лишних затрат за минимально время. Мы также выполняем ремонт таких баков.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            При выборе гидробака главной критерием является его объём. Как правило, большинство людей считают что бак должен быть большим, но это вовсе не так.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Расчет нужно производить по количеству жильцов в доме и так называемых точек потребления воды. В чрезмерно большом баке вода будет застаиваться, что
            приведет появлению отложений и образованию различных бактерий. Если итогом выбора станет бак с меньшим объёмом, тогда насос будет включаться слишком
            часто и пользы от такого бака будет мало. Со временем насос выйдет из строя.
          </Box>
          <Slogan text={"Работаем от ИП! Гарантии по договору!"} />
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
  // mb={2} mt={2} sx={{ color: COLOR_ORANGE, fontWeight: 700, fontSize: "25px" }}
  liSection: { marginTop: "15px", color: COLOR_ORANGE, fontWeight: "700", fontSize: "25px", "@media (max-width:500px)": { fontSize: "20px" } },

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
