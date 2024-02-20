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
import { vodoOchistka } from "@/price";

interface IProps {}
export const RemontVodoOchistki: FC<IProps> = () => {
  const intervalService = [
    { name: "Сервисное обслуживание распределительной системы", price: "12 месяцев" },
    { name: "Сервисное обслуживание клапанов управления", price: "9 месяцев" },
    { name: "Сервисное обслуживание солевого блока", price: "9 месяцев" },
    { name: "Анализ воды", price: "6 месяцев" },
    { name: "Замена фильтра", price: "6 месяцев" },
    { name: "Промывка солезаборника", price: "6 месяцев" },
  ];

  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Ремонт систем водоочистки</Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Сервисное облсуживание водоочистки</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/vodoochistka.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 80%"
                quality={100}
              />
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
              При эксплуатации скважины на даче зачастую вода не всегда ожидаемого качество. Если имеются такие признаки как не приятный запах и вкус, изменения
              цвета, нужно немедленно делать анализ воды на скважину и смотреть концентрация каких веществ в воде зашкаливает.
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "10px" }}>
              После того как анализ будет у Вас на руках стоит задуматься о фильтрах для скважины. По результатам анализа наши специалисты смогут определить
              каким способом минимизировать концентрацию вредных веществ. Зачастую требуется ставить фильтра, для очистки грубых примесей, типа песка и глины,
              или очень мелких типа железа и сероводорода.
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "10px" }}>
              Железо и сероводород не нуждаются в представлении. В большинствах скважин Московской области присутствуют данные примеси. Невозможно употреблять
              воду имеющую в своем составе сероводород. Этот запах напоминает тухлые яйца. Этот газ опасен как для человека так и для самой техники.
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "10px" }}>
              Железо также пагубно влияет на организм человека и узлов систем водоснабжения. Поэтому при появлении признаков присутствия этих веществ нужно
              позаботиться о качественной системе водоочистки.
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "10px" }}>
              Наши специалисты проконсультируют Вас по телефону и помогут выяснить в чем проблема и какие следует предпринимать действия. Если ситуация требует
              вмешательство специалиста, тогда время прибытия мастера к Вам будет минимальным.
            </Box>
          </Box>
          <Box>
            <Slogan text={"Самостоятельный ремонт может безвозвратно ухудшить ситуацию"} />
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на ремонт и сервисное обслуживание водоочистки</Box>
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
                {vodoOchistka.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Как определить что требуется ремонт Вашей водоочистки?</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/nr_gr_elemtn1.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 50%"
                quality={100}
              />
            </Box>
            После успешной установки и настройки вашего водоочистительного оборудования, вы сможете наслаждаться чистой водой каждый день.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Однако, если вы заметите изменения в качестве воды, такие как появление специфического запаха, изменение цвета на оттенок железа или появление
            желтого налета, это явные признаки неисправности.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            В таких случаях, наилучшим решением будет обратиться к нашим специалистам. Наши мастера специализируются на быстром и эффективном устранении любых
            проблем с водоочисткой, гарантируя возврат воды к её первоначальному, идеальному качеству.
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}> Причины выхода из строя</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }}>
            Отсутствие окисления железа может быть связано с его большим количеством в воде и неверно рассчитанной мощности системы водоочистки. Также проблема
            может быть в слабом насосе, который не выдает нужно давление для окисления железа.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Следует засыпать определенное количество сорбентного слоя, в этом случае больше не значит хорошо. Следует доверять данную процедуру только нашим
            специалистам. В противном случае вода не будет фильтроваться.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Также не стоит забывать, что всему есть срок. Возможно ваша водоочистка и фильта в ней забились и их пора заменить . Мы справимся и с этой задачей.
            Наши мастера произведут чистку фильтров и в случае надобности заменять вышедший из строя элемент. У нас имеется большое количество запчастей.
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}> Как часто нужно производить сервисное обслуживание?</Box>
          </h2>
          <Box sx={classes.table}>
            <Table style={{ width: "100%", borderCollapse: "collapse", border: "none" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...classes.thStyle }}>Необходимые процедуры</TableCell>
                  <TableCell sx={{ ...classes.thStyle, width: "60%" }}>Интервал</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {intervalService.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "30px" }}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/nr_gryazny_element.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 50%"
                quality={100}
              />
            </Box>
            Для того чтобы система служила Вам долгое время следует проводить сервисное обслуживание и замену проточных фильтров не по загрязнению, а по времени
            эксплуатации. Бывают случаи когда фильтр чистый, но со своими обязанностями не справляется.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Стоит обратить внимание на заключения с нами договора на сервисное обслуживание. В договор может вносится изменения как по услугам так и по их
            стоимости. Он ориентирован на клиентов, поэтому любые правки вносятся без проблем.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Заключая договор с нами, Вы становитесь быть уверенными в надежности вашей системе водоснабжения. В случае каких либо неисправностей, оперативная
            бригада сразу же направится к Вам и устранит все проблемы. Нашими услугами Вы останитесь довольны!
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
