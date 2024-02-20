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
import { podvedenie } from "@/price";

interface IProps {}
export const PodvedenVody: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Подведение воды к дому </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Подвести воду к дому</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/podevedeine_vody_k_domu.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 80%"
                quality={100}
              />
            </Box>
            <Box>
              Получение воды из земли процедура сложная и затратная. Если в вашем районе вода находится не глубоко , тогда на бурении можно сэкономить, за счет
              минимального количество метров под землей до источника. Но что делать после того как пробурили скважину? Правильно, заняться подведением воды.
            </Box>
            <Box mt={2}>
              Подведение воды к дому – это одна из самых популярных услуг при обустройстве скважины. Если дом используется для постоянного проживания , тогда
              каждый человек старается подготовить и автоматизировать все системы в лучшее состояние. Когда дело касается воды, приходится выбирать подключиться
              к центральному водоснабжению или установить свое. Если первого нет на вашем участке приходится прибегнуть ко второму.
            </Box>
            <Box mt={2}>
              Стоит уделить особое внимание системе водоснабжения, а именно составить схему всего водяного контура для того, чтобы в дальних точках было
              достаточно хорошее давление воды.
            </Box>
            <Box mt={2}>
              Требуется определиться будет ли у Вас летний или зимний ваирант. Это зависит на правильную глубину трубопровода. Сильные морозы земля может
              промерзать до 2-х метров. Стоит позаботиться об утеплении трубопровода . У нас имеются несколько cпособов которые пмогут не замерзнуть водопроводу
              зимой:
            </Box>
            <Box ml={6} mt={2}>
              <ul>
                <li>
                  <Box sx={{ ...classes.liSection }}>Глубоко закапываем трубопровод.</Box>
                </li>
                <li>
                  <Box sx={{ ...classes.liSection }}>Используем утеплители</Box>
                </li>
                <li>
                  <Box sx={{ ...classes.liSection }}>Монтируем греющий кабель.</Box>
                </li>
              </ul>
            </Box>
          </Box>
          <Slogan text={"Самостоятельный ремонт может безвозвратно ухудшить ситуацию"} />
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Адаптер Кессон или ЖБ кольца?</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Стоит определиться какое будет устье у скважины. Существуют несколько вариантов которые отличаются как по цене так и по качеству, а также удобству
            облсуживания.
          </Box>
          <Box sx={classes.descTextSection}>
            Начнем описание с Адаптера. Он представляет из себя конструкцию из 2 частей которые крепится на трубу обсадки и трубопровод.
          </Box>
          <Box ml={6} mt={2}>
            <ul>
              <Box sx={{ ...classes.liSection, color: "red" }}>Плюсы</Box>

              <li>
                <Box sx={{ ...classes.liSection }}>Экономия места</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Экономия места</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Не промерзает зимой</Box>
              </li>
            </ul>
          </Box>
          <Box ml={6} mt={2} mb={3}>
            <ul>
              <Box sx={{ ...classes.liSection, color: "red" }}>Минусы</Box>

              <li>
                <Box sx={{ ...classes.liSection }}>Сложность в обслуживании</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Дорогое обслуживание за счет сложности</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Имеется допустимо максимальная глубина</Box>
              </li>
            </ul>
          </Box>
          <Box sx={classes.descTextSection}>
            Второй метод. Кессон представляет из себя металлическую комнату очень ограниченного размера. В нем может храниться гидроаккумулятор и автоматика для
            управления насосом. Он устанавливается и крепится к трубе скважины, тем самым не дает себе подняться в случае затопления.
          </Box>
          <Box ml={6} mt={2}>
            <ul>
              <Box sx={{ ...classes.liSection, color: "red" }}>Плюсы</Box>

              <li>
                <Box sx={{ ...classes.liSection }}>Герметичный</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Легкий доступ к оборудованию</Box>
              </li>
            </ul>
          </Box>
          <Box ml={6} mt={2}>
            <ul>
              <Box sx={{ ...classes.liSection, color: "red" }}>Минусы</Box>
              <li>
                <Box sx={{ ...classes.liSection }}>Стоимость</Box>
              </li>
            </ul>
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на подведение воды к дому</Box>
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
                {podvedenie.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image src="/photo/adapter.jpg" alt={"Монтаж водоснабжения на фото "} layout={"fill"} objectFit="cover" objectPosition="50% 80%" quality={100} />
            </Box>
            При завершении прокладки труб к дому встает вопрос какие трубы использовать в самом доме? На данный момент существуют на рынке стальные, медные и
            полиэтиленовые. Мы рекомендуем использовать полиэтиленовые, так как они имеют большой срок службы и легки в монтаже.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Они не придают никакого вкуса воде и относительно безопасны от вандализма. Но при договоре мастер уточнит все нюансы вашего пользования водой и
            подберет нужный Вам вид труб.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Наши консультации бесплатные. Мы поможем Вам по любому вопросу связанному с водой, а также ее подведению к дому и разводке внутри дома.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Наши мастера составят договор, где будет подробно указаны все используемые материалы и виды выполненных работ. Расскажем секреты пользования системой
            водоснабжение так, чтобы она Вам прослужила многие годы
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
  sloganSection: { marginTop: "100px", "@media (max-width:1000px)": { marginTop: "30px" } },
  // mb={2} mt={2} sx={{ color: COLOR_ORANGE, fontWeight: 700, fontSize: "25px" }}
  liSection: { marginTop: "15px", color: COLOR_BLACK, fontWeight: "700", fontSize: "22px", "@media (max-width:500px)": { fontSize: "18px" } },

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
