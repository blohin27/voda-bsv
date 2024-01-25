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
export const Post1: FC<IProps> = () => {
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
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Как пробурить скважину </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Как пробурить скважину правильно?</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image src="/photo/burim.jpg" alt={"Монтаж водоснабжения на фото "} layout={"fill"} objectFit="cover" objectPosition="50% 20%" quality={100} />
            </Box>
            <Box>
              Городская жизнь бежит с огромной скоростью и для того чтобы хоть иногда насладиться деревенскими просторами и широкими полями мы с Вами покупаем
              дачные участки для временного проживания или полностью меняем свой образ жизни переезжая в ближайший населенный пункт, в частный дом.
            </Box>
            <Box mt={2}>
              С какими трудностями мы сталкиваемся при переезде из города? Конечно же отсутствие центрального водоснабжения. В московской области зачастую в
              населенных пунктах нет центрального водопровода и людям приходится добывать воду из земли. И тут встает вопрос о бурении скважины?
            </Box>
            <Box mt={2}>
              При уверенном решении бурить скважину нужно учесть все нюансы расположения участка и подземных вод. В этой статье мы подробно осветим какие
              скважины бывают, сколько стоят каждый вид бурения и рассмотрим подводные камни, о которых мастера бурения не всегда рассказывают своим клиентам.
            </Box>
            <h2>
              <Box sx={{ ...classes.subTitle2 }}>Когда бурить скважину?</Box>
            </h2>
            <Box sx={classes.descTextSection}>
              Бурение скважины не сильно зависит от погоды, а если быть точным не зависит вообще. Все дело в удобстве рабочих, так зимой бывают морозе и это
              никак не способствует активному бурению, но если смотреть с точки зрения технологии, то процессы никакие не будут наущены.
            </Box>
            <Box mt={2}>
              Все происходит на глубине , а как мы с Вами знаем глубина промерзания на практике в редких случаях бывает глубже 2 метров. Поэтому если Вам
              необходима скважина зимой – не ждите потепления, но знайте, что бригада специалистов может сделать хорошую наценку.
            </Box>
          </Box>

          <h2>
            <Box sx={{ ...classes.subTitle2 }}>Какую скважину бурить и на сколько глубоко?</Box>
          </h2>

          <Box mt={2}>Чтобы ответить на этот вопрос давайте разберем какие вообще они бывают эти скважины.</Box>
          <Box ml={6} mt={2}>
            <ul>
              <li>
                <Box sx={{ ...classes.liSection }}>Абиссинская</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Песочная</Box>
              </li>
              <li>
                <Box sx={{ ...classes.liSection }}>Артезианская</Box>
              </li>
            </ul>
          </Box>

          <h2>
            <Box sx={{ ...classes.subTitle2 }}> Абиссинская скважина</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            <Box sx={{ ...classes.imgSectionOnlyOne, float: "left", height: "240px" }}>
              <Image
                src="/photo/scvajiny dlya stati.JPG"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 20%"
                quality={100}
              />
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Абиссинская скважина - это скважина для воды, которая имеет сравнительно не большую мощность (до 400 литров в час) , она довольно часто пользуется
              спросом и удовлетворяет потребность в воде не большой семьи. На ряду с маленькой производительностью и имеет место быть маленькой цене.
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              Как правило глубина таких скважин до 10-15 метров, что снижает затраты на мощный насос, кабель трос, и другие узлы водоснабжения. Чаще всего это
              дождевая вода и ждать хорошего качество не приходится. Бурится скважина довольно просто, используют так называемое устройство «забивная баба»{" "}
            </Box>
            <Box sx={{ ...classes.descTextSection }} mt={2}>
              С помощью этого устройства ударами загонят в землю трубу, после того как забьют одну в нее вкручивают другую по резьбе и продолжают до тех пор,
              пока налитая сверху мгновенно не исчезнет. Это означает , что фильтр погрузился в водоносный пласт.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle2 }}>Минусы абиссинской скважины</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Недостатки такой скважины предельно ясны. Низкая производительность, что объясняется небольшим количеством воды в верхний слоях почвы, а также такие
            скважины не бурят в твердых слоях почвы. В связи с тем что, качество воды не очень, в ней присутствуют
          </Box>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            При использовании такой скважины траты на чистку и обслуживания скважины могут возрасти. Стоимость бурения из выше перечисленных факторов получается
            не велика. Многие компании запросят ориентировочно от 15 до 30 тысяч рублей, за услуги бурения и обустройство.
          </Box>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Это достаточно низкая цена за получения источника воды круглый год хоть и не большой мощности. При установке фильтров, вода станет чистая и пригодная
            для бытовых нужд.
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle2 }}> Скважина на песок</Box>
          </h2>

          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Песочная скважина - это также не дорогой вид скважины, но с уже более мощным водоотдачей. Вода также находится близко к поверхности земли, но
            зачастую у таких скважин не большой срок службы. Связано это с тем, что песчаные слои наиболее подвижны и поэтому в один неудачный день воды может
            просто не стать.
          </Box>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Глубина бурения от 10 до 40 метров в стандартных случаях. Вода залегает в виде обособленных линз. Мощность уже на порядок выше и достигает в среднем
            литров 1000-1500 в час. Состоит она из ствола внизу которого установлен фильтр и погружной насос и в самом низу имеется заглушка.
          </Box>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Стоимость песочной скважины уже на порядок дороже чем абиссинской, и составляет ориентировочно 2300 рублей за метр , что умноженной на метраж
            получается от 40 тысяч рублей.
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle2 }}> Артезианская скважина</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Артезианская скважина- это скважина глубиной уже боле 40 метров , в редких случаях достигает до 200 метров, в зависимости от расположения.
            Преимущество этой скважины в том, что вода между породами известняка очень чистая и пригодна для питья, а также мощность скважины значительно выше
            чем у абиссинской и песочной скважины.
          </Box>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Бурят такие скважины с помощью буровых установок с применением вращающихся валов. Это малогабаритные установки или большие установки на базе ЗИЛ.
          </Box>

          <h2>
            <Box sx={{ ...classes.subTitle2 }}> Сколько стоит пробурить артезианскую скважину?</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }} mt={2}>
            Цены уже значительно выше за счет, того что сама скважина глубже и породы на глубине тверже. Поэтому цена стартует от 2000 рублей за метр. Также
            обустройство данного типа скважин выйдет Вам дороже, так как больше применяется труб и насос потребуется погружной с высокой мощностью. Эти скважины
            имеют более долгий срок службы, большую мощность и ,менее загрязнённую воду.
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
  liSection: { marginTop: "15px", color: COLOR_BLACK, fontWeight: "700", fontSize: "22px", "@media (max-width:500px)": { fontSize: "18px" } },

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
