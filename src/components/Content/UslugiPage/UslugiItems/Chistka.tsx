import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLACK, COLOR_BLUE, COLOR_ORANGE, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import Image from "next/image";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Banner } from "@/components/Banner/Banner";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { data1 } from "@/components/Content/PricePage/data";
import { FotoRabot, PhotoItem } from "@/components/FotoRabot/FotoRabot";
import { List, ListItem, ListItemDecorator } from "@mui/joy";
import { FcFlashOn } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { color } from "@mui/system";
import { chistka } from "@/price";

interface IProps {}
export const Chistka: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Очистка и ремонт скважины</Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Чистка скважин от загрязнений </Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image src="/photo/gryaznaya_voda.jpg" alt={"Демонтаж насоса ЭЦВ "} layout={"fill"} objectFit="cover" objectPosition="50% 50%" quality={100} />
            </Box>

            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image src="/photo/chistyavoda.jpg" alt={"Демонтаж насоса ЭЦВ "} layout={"fill"} objectFit="cover" objectPosition="50% 50%" quality={100} />
            </Box>
            <Box>
              <Box sx={{ display: "inline", color: COLOR_ORANGE, fontWeight: 700 }}> Чистка скважины</Box> – одна из самых популярных услуг в нашей компании.
              Чаще всего люди обращаются к нам с проблемами , не стабильного давления, не приятных запахов , различных оттенков воды вместо привычного
              прозрачного. Данную услугу можете заказать в нашей компании. Мы выполняем прочистку скважин от ила и песка по всем районам Подмосковья. Выезд в
              день обращения.
            </Box>
            <Box mt={2}>
              Мы предлагаем полный спектр услуг по водоснабжению для частных домов. От проектирования до установки и обслуживания – все под одной крышей.
            </Box>
            <Box mt={2}>
              Мы обеспечиваем эффективное водоснабжение, соответствующее вашим индивидуальным потребностям. Наша команда профессионалов гарантирует быструю и
              качественную работу. Мы используем только проверенные материалы и оборудование.
            </Box>
          </Box>

          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Причины загрязнение скважины</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Загрязнение источника воды будь то скважина или колодец является ,как правило, стандартные проблемы и на территории Московской области давно
            известны:
          </Box>
          <ul>
            <li>
              <Box mb={2} mt={2}>
                Происходит перемещение подземного грунта, что в свою очередь влечет за собой появление песка и ила в тех местах, где его никогда не было
              </Box>
            </li>
            <li>
              <Box mb={2}>
                Редкое обслуживание системы водоснабжения. Вся система находится под большими нагрузками, как внешними там и внутренними, которая требует ухода
                ввиде замены различных узлов. Фильтр, который установлен на дне также требуется в дополнительной прочистке{" "}
              </Box>
            </li>
            <li>
              <Box mb={2}>
                Ошибки при проектировании. Часто встречаются ошибки проектировщиков бурения, которые не правильно указали место бурения. В этом случае количество
                различных примесей будет превышено на старте эксплуатации скважины.{" "}
              </Box>
            </li>
            <li>
              <Box mb={2}>
                Самый главная причина – это редкое использование своей скважины. Чем чаще вы будете прогонять воду через всю систему и пользоваться
                водоснабжением ,тем дольше будет жить ваш источник.
              </Box>
            </li>
          </ul>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на чистку скважин на воду</Box>
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
                {chistka.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Когда чистить скважину?</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Источник вашей воды нуждается каждодневном использовании, об этом Вам скажет любой специалист. Чаще всего к нам обращаются с проблемами в скважинах
            на песок – они не глубокие, находятся в верхних слоях почвы где протекают почвенные воды оттуда же и набирается песок и ил. Не стоит думать что люди
            имеют проблемы только с песочными скважинами, у артезианских также случаются сбои в работе.Есть несколько отличительных особенностей которые точно
            дадут Вам понять , что пора звонить нам:
          </Box>
          <Box>
            <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcApproval size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Давление воды будет пульсирующим
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcApproval size={40} color={COLOR_BLUE} />
                  </Box>

                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Неприятный запах
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcApproval size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Смена цвета от прозрачного на любой другой.
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcApproval size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Вода в вперемешку с грунтов
                    </Box>
                  </h3>
                </Box>
              </Box>
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Способы очистки скважины</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box>
              По приезду наших специалистов необходимо произвести полную диагностику скважины, замерить все показания. Может потребуется видеодиагностика. Мы
              обладаем качественным инструментам для диагностики , поэтому мастер после обследования вынесет точный вердикт в и определит первопричины проблемы.
            </Box>
            <Box mt={2}>
              Многое о скважине может сказать ее паспорт. Если у владельца он сохранился - это сэкономит время и деньги. В нем должны быть указаны следующие
              характеристики: -Глубина -Динамический уровень -Статический уровень -Мощность скважины -Дата бурения и срок службы
            </Box>
          </Box>
          <ul>
            <li>
              <Box mb={2} mt={2} sx={{ color: COLOR_ORANGE, fontWeight: 700 }}>
                Глубина
              </Box>
            </li>
            <li>
              <Box sx={{ color: COLOR_ORANGE, fontWeight: 700 }} mb={2}>
                Динамический уровень
              </Box>
            </li>
            <li>
              <Box sx={{ color: COLOR_ORANGE, fontWeight: 700 }} mb={2}>
                Статический уровень
              </Box>
            </li>
            <li>
              <Box sx={{ color: COLOR_ORANGE, fontWeight: 700 }} mb={2}>
                Мощность скважины
              </Box>
            </li>
            <li>
              <Box sx={{ color: COLOR_ORANGE, fontWeight: 700 }} mb={2}>
                Дата бурения и срок службы
              </Box>
            </li>
          </ul>
          <Box sx={classes.descTextSection}>
            <Box>
              По приезду наших специалистов необходимо произвести полную диагностику скважины, замерить все показания. Может потребуется видеодиагностика. Мы
              обладаем качественным инструментам для диагностики , поэтому мастер после обследования вынесет точный вердикт в и определит первопричины проблемы.
            </Box>
            <Box mt={2}>Существуют множество способов устранить неисправность , самые популярные перечислены ниже:</Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", fontWeight: 700 }}> С помощью вибраций.</Box>
              Данный методика рассчитана на не глубокие источники воды , так как при включении вибрационного насоса он отталкивает загрязнение от стенок обсадной
              трубы
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", fontWeight: 700 }}> Желонирование.</Box>В том случае когда видеодиагностика показала наличие большого количества
              песка используется этот способ. Специальный инструмент опускается на самое дно и достают оттуда песок. При использовании этого метода нужно быть
              максимально аккуратным, так как присутствует большая вероятность повредить фильтр или вовсе допустить застревание желонки в скважине.
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", fontWeight: 700 }}> Гидроударом.</Box> Мы используем данную технологию преимущественно на глубоких скважинах, от
              25-30 метров. Инструмент виде поршня опускается за счет свободного падения на дно скважины и ударом отводит от фильтра ил и песок. Чрезмерное
              употребление данным способом может разорвать фильтрующий элемент установленный в самом низу.
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", fontWeight: 700 }}> Использованием химии.</Box>Этим методом скважину очистить можно, но нужно воздержаться от питься
              из нее минимум на месяц и только после успешного анализа воды из нее. Применяют как простую лимонную кислоту так и более сложную типа фосфата
              натрия. Циркулирующим способом вся процедура может занимать до 14 часов.
            </Box>
          </Box>

          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Позвонив нам, что Вы получите?</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection }}>
            Как правило, восстановление скважины состоит из стандартных этапов и только в редком случае ваши проблемы с водоснабжением могут удивить наших
            мастеров. К нам поступает заявка и мы тут же распределяем их на группу специалистом с учетом территориального признака для того чтобы ваше ожидание
            было минимальным. По прибытию мастера производят детальную диагностику скважины и всех ее характеристик. Далее, наши специалисты дествуют следующим
            образом:
          </Box>
          <Box>
            <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcCheckmark size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem, color: COLOR_ORANGE }}>
                      Оплата после устранение всех проблем с водой
                    </Box>
                  </h3>
                </Box>
              </Box>
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
