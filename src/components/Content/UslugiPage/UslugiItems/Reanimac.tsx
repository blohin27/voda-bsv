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
export const Reanimac: FC<IProps> = () => {
  const [dataTableRem, setDataTableRem] = useState([
    { name: "Диагностика(включает видео) скважины на воду", price: "Бесплатно(при реанимации скважины)" },
    { name: "Замена(ремон) насоса", price: "от 7000" },
    { name: "Очистка скважин", price: "от 7000" },
    { name: "Сварочные работы", price: "от 2000" },
    { name: "Замена(ремон) насоса", price: "от 5500" },
    { name: "Ремонт кессона", price: "от 6000" },
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
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Реанимация скважины на воду </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Диагностика и ремонт артезианских скважин на воду</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/pesok_iz_skvajiny.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 80%"
                quality={100}
              />
            </Box>
            <Box>
              Мы проводим восстановление и реанимацию любых систем водоснабжения в Московской области. Осуществляем чистку и обустройства всех источником воды.
              Не спешите бурить новую скважину , позвоните нам – мы обрадуем Вас водой на вашем участке.
            </Box>
            <Box mt={2}>
              Если вы испытываете проблемы с системой водоснабжения, по причине того , что долго не пользовались или же по не понятных для Вас причинам она
              полностью перестала давать воду. Для нее потребуется услуга «восстановления и реанимация скважины».
            </Box>
            <Box mt={2}>
              У нас имеется в наличии огромный опыт и специальный инструмент для таких процедур. Мы в любое время сможем заменить любой узел вашей системы, будь
              то насос , клапан реле и да же трубы.
            </Box>
            <Slogan text={"Самостоятельный ремонт может безвозвратно ухудшить ситуацию"} />
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цена на реанимацию скважины</Box>
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
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Мы – это ваша надежность в получении воды из скважины. Наши специалисты работают с самого начала образования команды и обладают колоссальным опытом
            по ремонту , чистке и обслуживанию систем водоснабжения, и мы их за это ценим! Мы никогда не экономим на своих материалах и инструментах.
            Осуществляем только качественный ремонт. Дорожим своим каждый клиентом. Спешим сообщить, что заключение договора сэкономит Вам большие деньги.
            Консультации у нас бесплатные!
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}> Враг всех систем водоснабжения – песок!</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }}>
            Любой дачник при обнаружении в своей системы песка расстраивается и понимает что его ждет дорогой ремонт, но не спешите расстраиваться . Наши мастера
            смогу Вам помочь. Песок бывает крупнозерновой или мелкозернёной(плывун).
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Появление песка говорит о неправильной эксплуатации системы водоснажения или же о не правильном установке фильтра на дне.При правильном монтаже
            фильтра накопления крупных примесей происходит медленно
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Самостоятельно вы можете прокачать скважину достаточно простым способом. Вам следует пользоваться водой ,непрерывно около, 4-6 часов. Если же песок
            не отступает, а все только прибавляется, нужно прибегнуть к более серьезным процедурам, но для этого нужно обратиться в нашу компанию.
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}> Важно правильно стыковать трубы при обсадке.</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }}>
            Плывун может появится спустя пару лет после обустройства системы водоснабжения. Естественно , недобросовестные бурильщики могут отказаться от
            гарантийного обслуживания и тогда Вам придется устранять проблему с помощью других компаний. Следует тщательно выбирать компании по бурению и в
            дальнейшем обслуживанию таких систем. Также частое появление песка в скважине означает о смешении грунта под землей. Мастера смогут выявить проблему
            и предложить разные решения.
          </Box>

          <Slogan text={"Длительное использование вибрационного насоса приводит к появлению песка."} />
          <Box sx={{ ...classes.descTextSection }}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/pesok_v_skvajine.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 30%"
                quality={100}
              />
            </Box>
            Чаще всего, люди приобретают вибрационный насос при выборе опираясь на цену. Но не стоит забывать, что вибрационный насос создает сильные вибрации в
            стволе скважины, что в свою очередь приводит к неизбежному появлению разрушений. Через эти разрушения и начинает проникать песок . Обязательно
            выбирайте насос посоветовавшись со специалистом не который продает Вам насосы, а который будет обслуживать Вашу скважину продолжительно время. В его
            интересах собрать все надежно и качественно.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Зачастую всего недобросовестные специалисты приступают к чистке скважины , с помощью гидроудара, но это не всегда верно. Существует вероятность
            разбить фильтр еще больше через которые повалит песок. В некоторых случаях происходит обрушения ствола. Цена восстановления такой скважины сравнима с
            ценой бурения новой, но не все так однозначно. Обратившись к нам мы договоримся о хороших скидках при заключении договора.
          </Box>
          <Box sx={{ ...classes.descTextSection }}>
            Если песок в скважине появился, с ним обязательно нужно что-то делать. Оставить ситуацию без изменений, значит приговорить в ближайшем будущее свое
            оборудование . Замена насоса, гидробака не совсем дешевая услуга, поэтому позаботьтесь о своей системе водоснабжения и она ответит вам взаимностью!
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
