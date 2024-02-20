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
export const MontajVodos: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Монтаж водопровода на вашем участке </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Монтаж водоснабжения в скважине</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src="/photo/montaj_vodosnabjenia.jpg"
                alt={"Монтаж водоснабжения на фото "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 20%"
                quality={100}
              />
            </Box>
            <Box>
              Жить в загородном доме – это мечта каждого современного человека живущего в городе. По- настоящему удовольствие от проживания в дома можно
              получить, когда все инженерные системы работают без сбоев. Отдельное внимание следует уделить системы водоснабжение и ее монтажу.
            </Box>
            <Box mt={2}>
              Комфортное проживание может быть достигнуто только если сумма проблем с инженерными системами равна 0. Конечно они делятся на важные и очень важные
              , но любая проблема доставляет массу хлопот и дополнительно растраты на починку.
            </Box>
            <Box mt={2}>
              Наша команда имеет колоссальный опыт в обустройстве и монтажу инженерных. Прозрачность и скорость нашей работы привлекает клиентов со всех районов
              Московской области. Используем качественные инструменты, имеем в наличии большой склад запасных узлов всех систем.
            </Box>
            <Slogan text={"Выезд в день обращения. Скидки на комплекс услуг, работаем по договору."} />
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на монтаж водоснабжения</Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Что должно входит в построение системы водоснабдения?</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>Что должно входит в построение системы водоснабдения?</Box>

          <Box sx={classes.descTextSection}>
            <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Бурение скважины. </Box>
            Выбор буровой компании имеет большое значение. Следует соблюдать технологический процесс бурения, чтобы избежать дальнейшие проблемы связанные с
            этим. Мы также занимаемся бурением и предоставляем нашим клиентам большие скидки на комплекс услуг.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Обустройство устья. </Box>
            Предполагается установка кессона, ЖБ колец , адаптера или просто оголовка. Все зависит от того будет ли использоваться скважина зимой или требуется
            установка только летнего варианта. Мы рекомендуем установку Кессона, однако это один из самых дорогих способом обустройства, но при этом Вы получаете
            максимальную надежность и гарантию сохранности вашего оборудования , которое будет установлено в него.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Прокладка трубопровода к дому </Box>. После того как,
            скважина пробурена и кессон установлен. Мы приступаем к прокладке труб. Здесь ,коротко , стоит заострить внимание на типе использования труб. Нами
            рекомендуется в траншею к дому прокладывать ПНД трубу с утеплением, если глубина не высокая.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Разводка монтируется по проекту согласованным, с клиентом. Используем для этого коллектор и подводим трубы к точкам потребления воды. Трубы можно
            использовать любые.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> - Установка канализации. </Box>
            Тут клиенту стоит выбрать между септиком и автономной канализацией. Плюсы и минусы вы можете прочитать в наших статьях.
          </Box>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Все эти этапы наши специалисты могут выполнить в короткий срок. После завершения всех работ в комплексе мы предоставляем расширенную гарантию и
            существенные скидки на пост гарантийное обслуживание.
          </Box>
          <Slogan text={"Работаем от ИП! Гарантии по договору!"} />
          <h2>
            <Box sx={{ ...classes.subTitle1 }}> Как выбрать материал?</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection, marginTop: "20px" }}>
            Мастера нашей команды обязательно проконсультируют по имеющимся материалам и узлам водоснабжения на рынке, расскажут о плюсах и минусах тех или иных
            брендов. Мы рады сообщить вам, что за счет большого оборота клиентов в нашей компании, мы сотрудничаем с популярными поставщиками, которые , в свою
            очередь предоставляют скидки
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
