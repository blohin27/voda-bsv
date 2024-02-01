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
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Как очистить скважину своими руками? </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Как очистить скважину своими руками?</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/gryaznaya_voda.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 20%"
                quality={100}
              />
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Первым делом необходимо выявить причину засорения. Часто это связано с накоплением ила и песка на дне скважины, что мешает нормальному поступлению
              воды. Кроме того, причиной могут быть микроорганизмы и водоросли, которые размножаются в воде и вызывают её загрязнение.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Для решения этой проблемы существует несколько методов. Один из наиболее эффективных - это механическая чистка скважины, которая позволяет удалить
              ил и песок. Также широко применяется химическая обработка, направленная на уничтожение бактерий и водорослей.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Помимо этого, регулярное обслуживание скважины, включая её дезинфекцию и промывку, поможет предотвратить подобные проблемы в будущем.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle2 }}>Как понять что скважину пора чистить?</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Как правило люди при ухудшении воды думают, что проблема это временная и скважина после прогона пару часов неопрятность уйдет сама собой, но на
            практике это не так. Снижение мощности, а также не приятные запахи и примеси могут стать серьезным признаком к тому, что скважину пора чистить.
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle2 }}>Почему скважина засорилась?</Box>
          </h2>
          <Box mt={2}>Причины засорения скважины стандартны.</Box>
          <Box ml={6} mt={2}>
            <ul>
              <li>
                <Box sx={{ ...classes.liSection }}>Заилился фильтр скважины на дне из-за редкого пользования скважиной</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Ошибка при монтаже скважины</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Большой срок эксплуатации</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Движение подземных пластов земли</Box>
              </li>
            </ul>
          </Box>

          <h2>
            <Box sx={{ ...classes.subTitle2 }}> Способы чистки скважины</Box>
          </h2>

          <Box sx={{ ...classes.descTextSection }} mt={2}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "120px" }}>
              <Image src="/photo/malysh.JPG" alt={"Монтаж водоснабжения на фото "} layout={"fill"} objectFit="contain" objectPosition="50% 20%" quality={100} />
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              <Box sx={{ fontWeight: 700, display: "inline" }}> С помощью вибранасоса Малыш. </Box>
              Первым способом и самым простым является очистка с помощью вибронасоса «Малыш». За счет того, что он создает вибрационные колебания внутри скважины
              вся грязь поднимается во взвесь и с помощью этого же насоса вы откачиваете грязную воду.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Таким способом нельзя злоупотреблять так как может пойти разрушение стенок ствола скважины. Чистка скважин таким способом подходит только на
              глубину до 40 метров, так как подьемная мощность насоса малыша не велика. Можно прибегнув к двух насосов но это уже следующий способ.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle2 }}> С помощью желонки.</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "200px" }}>
              <Image src="/photo/jelonka.JPG" alt={"Монтаж водоснабжения на фото "} layout={"fill"} objectFit="contain" objectPosition="50% 20%" quality={100} />
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Сама желонка представляет сама собой трубку с шариком из металла внутри.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Данный метод применяется если скважина не глубокая и загрязнения не значительные. При ударе о дно скважины шар перекрывает доступ и тем самым грязь
              которая в трубе без проблем вытаскивается на поверхность земли.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Стоимость данного метода не высока поэтому Вы можете пользоваться им регулярно, чтобы поддерживать вашу скважину в чистоте и порядке. Процедура не
              требует специального оборудования и может быть выполнена самостоятельно, что делает её доступной для большинства владельцев скважин.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Однако следует помнить, что эффективность желонки зависит от размера и типа загрязнений. Для более серьёзных загрязнений может потребоваться более
              комплексный подход.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle2 }}> С Помощью двух насосов.</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Один из насосов находится на дне скважины и захватывает воду вместо с грязью и песком воду, а другой насос работает в противоположном направлении.
            Т.е. с поверхности земли воду под напором подает в скважину тем самым пробивая ее от загрязнений.
          </Box>
          <Box sx={{ ...classes.imgSection, height: "600px" }}>
            <Image
              src="/photo/s pomoshu 2nasosa.JPG"
              alt={"Монтаж водоснабжения на фото "}
              layout={"fill"}
              objectFit="contain"
              objectPosition="50% 20%"
              quality={100}
            />
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
