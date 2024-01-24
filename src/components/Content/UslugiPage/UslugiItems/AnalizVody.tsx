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
export const AnalizVody: FC<IProps> = () => {
  const [dataTableRem, setDataTableRem] = useState([
    { name: "Анализа воды из артезианской скважин", price: "от 2000" },
    { name: "Анализа воды из колодцев и не глубоких скважин", price: "от 1500" },
    { name: "Микробиологического анализа воды", price: "от 800" },
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
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}> Анализ воды </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Химический анализ воды в скважине</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/analyzVody.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 20%"
                quality={100}
              />
            </Box>
            <Box>
              Каждый дачник хочет быть уверенным в надежности своей скважины а также в качестве своей воды. Мы предлагаем быстрый и качественный анализ воды
              своим клиентам. Выезжаем в день обращения, работаем по всей Московской области.
            </Box>
            <Box mt={2}>
              Все знаю чтобы быть уверенным в своей воде нужен подробный анализ, который с точностью определит все имеющиеся примеси. Далее специалисты
              лаборатории сделают заключения из которого будет ясно, как разрешено использовать вашу воду.
            </Box>
            <Box mt={2}>
              Наша цель - обеспечить вас полной информацией о состоянии вашей скважины и качестве воды, давая вам уверенность в каждом капли. Мы используем
              только современное оборудование и методы тестирования, чтобы гарантировать точность и надежность результатов.Кроме того, мы предоставляем
              рекомендации по улучшению качества воды и поддержанию оптимального состояния вашей скважины.
            </Box>

            <h2>
              <Box sx={{ ...classes.subTitle1, marginTop: "20px" }}> Какие параметры имеет анализ воды</Box>
            </h2>
            <Box sx={classes.descTextSection}>Комплексный анализ воды включает в себя в основном следующие показатели:</Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "15px" }}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Наличие водорода. </Box>
              Сердние значение должны быть от 6 до 9. Выход на за пределы показателей дает запах воде или же ощущения жирности.
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "15px" }}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Наличие бактерий.</Box>
              Проверяют на присутсвтие бактерий в воде и их количество.
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "15px" }}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Окисляемость.</Box>
              Данный показатель обязан быть в пределах и не превышать 6 мг/л
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "15px" }}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Сульфаты и хлориды. </Box>
              Определяются почти что на вкус, значение которых не дожно превышать 250 мг и 500 мг в дм соответственно.
            </Box>
            <Box sx={{ ...classes.descTextSection, marginTop: "15px" }}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}>- Нитраты.</Box>
              Попадают они туда после того как люди удобряют почву.
            </Box>

            <Slogan text={"Диагностика скважин: Точность под землей, надежность на поверхности."} />
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на анализ воды</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Мы предлагаем своим клиентам одни из самых низких цен на рынке. При заключении договора с Вами составляется график в который мы будем измерять
            состояние вашей воды не реже чем один раз в три месяца. Данные будут опубликованы на нашем сайте в личном кабинете.
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
            <Box sx={{ ...classes.titlePrice, marginTop: "40px" }}> Как сделать анализ воды для лаборотории</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Для начала Вам потребуется приобрести тару для анализа, хорошо подойдет чистая стерилизованная булыка. Педет тем как брать анализ воды, следует
            очистить также шланг( кран) с которого поступает вода, тажке нужно пропустить первые 10-30 литров воды и только после этого набрать емкость с водой.
            Защитите попадания прямых солнечных лучшей на емкость, сделайте отметки о дате и месте сбора анализа.
          </Box>

          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Наши специалисты сообщат Вам итоговую стоимость работ , на основании заключенного договора. Далее наша команда прибывает на участок к клиенту и
            проводит все требуемые работы под присмотром клиента. В процессе клиенту будет рассказано то ,что не видно обычным взглядом.
          </Box>
          <Box sx={{ ...classes.sloganSection, marginTop: "30px" }}>
            <Slogan text={"Работаем от ИП! Гарантии по договору!"} />
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
  thStyle: { width: "60%", backgroundColor: "#4ab461", color: "white", height: "30px", fontSize: "25px", fontWeight: "600", textAlign: "center" },
  tdStyle: { textAlign: "center", backgroundColor: "#fcfbf9", border: "1px solid #dedede", height: "35px", fontSize: "16px", fontWeight: "400" },
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
