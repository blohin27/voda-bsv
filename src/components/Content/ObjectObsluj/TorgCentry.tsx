import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLACK, COLOR_BLUE, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import Image from "next/image";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Banner } from "@/components/Banner/Banner";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { data1 } from "@/components/Content/PricePage/data";
import { FotoRabot, PhotoItem } from "@/components/FotoRabot/FotoRabot";
import { List, ListItem, ListItemDecorator } from "@mui/joy";
import { FcFlashOn } from "react-icons/fc";

interface IProps {}
export const TorgCentry: FC<IProps> = () => {
  const [dataTableRem, setDataTableRem] = useState([
    { name: "Проектирование водоснабжения", price: "от 5000" },
    { name: "Строительство и монтаж:", price: "от 10000" },
    { name: "Установка насосного оборудования:", price: "от 7000" },
    { name: "Очистка и фильтрация воды", price: "от 5000" },
    { name: "Консультационные Услуги", price: "по договоренности" },
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
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Водоснабжение для торгового центра </Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Водоснабжение в торговых центрах</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image
                src={"/photo/photoObjectObslug/tc.jpg"}
                alt={"Демонтаж насоса ЭЦВ "}
                layout={"fill"}
                objectFit="cover"
                objectPosition="50% 50%"
                quality={100}
              />
            </Box>
            <Box>
              <Box mt={2}>
                Система водоснабжения в торговом центре должна соответствовать установленным стандартам и нормативам. Качество материалов труб и методы очистки
                воды напрямую влияют на характеристики питьевой воды, поэтому необходимо уделять особое внимание их выбору.
              </Box>
              <Box mt={2}>
                В торговых центрах размещаются магазины, рестораны, кинотеатры и спортивные комплексы, привлекающие сотни посетителей. Система водоснабжения
                торгового центра должна обеспечивать потребности в воде как для пожаротушения, так и для хозяйственных и питьевых нужд. Для того чтобы
                удовлетворить потребности всех этих объектов, требуется установка многофункциональной и мощной системы водоснабжения.
              </Box>
              <Box mt={2}></Box>
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на услуги водоснабжение в торговых центрах</Box>
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
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Этапы водоснабжения в ТЦ</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Существует перечень определенных этапов водоснабжения, без котороых не обходится ни одно подключение торгового центра к источнику воды. Рассмотрим их
            более подробно:
          </Box>
          <Box>
            <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcFlashOn size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Проект водоснабжения в ТЦ
                    </Box>
                  </h3>
                </Box>
                <Box sx={classes.descTextSection}>
                  Водоснабжение торгового центра может осуществляться из разных источников: это может быть либо централизованная городская водопроводная сеть,
                  либо автономная скважина. Чтобы подключиться к муниципальной водоснабжающей сети, необходимо получить соответствующее разрешение от местных
                  властей. Аналогично, для бурения собственной скважины потребуется разрешение от городских властей.{" "}
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcFlashOn size={40} color={COLOR_BLUE} />
                  </Box>

                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Строительство системы водоснабжения
                    </Box>
                  </h3>
                </Box>
                <Box sx={classes.descTextSection}>
                  Этапы работ по водоснабжению включают врезку в центральную водопроводную магистраль и разводку внутренних трубопроводов. Устанавливаются
                  насосы, счетчики, системы очистки и запорная арматура. Затем проводится прокладка труб к сантехнике и оборудованию, а также монтаж раковин,
                  душевых и унитазов. Весь процесс подключения оборудования выполняется согласно утвержденному проекту, при этом трубопровод монтируется как
                  открытым, так и скрытым способом для удобства последующего ремонта и обслуживания.
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcFlashOn size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Запуск и тестирование
                    </Box>
                  </h3>
                </Box>
                <Box sx={classes.descTextSection}>
                  Перед запуском системы проводится тщательная проверка всех её компонентов. Это включает осмотр труб, насосов, фильтров, счетчиков и запорной
                  арматуры, чтобы убедиться в их правильной установке и функционировании.Система водоснабжения запускается в тестовом режиме. Это позволяет
                  оценить работу насосов и другого оборудования при минимальной нагрузке, а также проверить герметичность всех соединений. По завершении всех
                  тестов составляется отчёт о состоянии системы водоснабжения. При положительных результатах система получает разрешение на эксплуатацию.
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
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}> Многолетний опыт и высокая квалификация:</Box>
              Наша команда состоит из опытных инженеров и специалистов, которые имеют глубокие знания и многолетний опыт в области водоснабжения. Мы гарантируем,
              что каждый проект выполняется с максимальной профессиональностью и вниманием к деталям.
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}>Индивидуальный подход к каждому клиенту:</Box> Мы понимаем,
              что у каждого предприятия уникальные потребности и задачи. Поэтому мы предлагаем индивидуальные решения, специально адаптированные под ваши
              конкретные требования и условия.
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "inline", color: COLOR_BLUE, fontWeight: 600, fontSize: "20px" }}>Гарантия качества и поддержка клиентов:</Box> Мы предлагаем
              гарантии на все наши услуги и оборудование. Кроме того, наши клиенты могут рассчитывать на быстрый и квалифицированный сервис поддержки в случае
              любых вопросов или проблем.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1OstavZayvk }}>Оставьте заявку </Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box mb={4} sx={{}}>
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
  liItem: { fontWeight: "600", fontSize: "20px", color: COLOR_BLACK, "@media (max-width:700px)": { fontSize: "16px" } },
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
  subTitle1OstavZayvk: {
    fontSize: "35px",
    marginTop: "90px",
    marginBottom: "15px",
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "35px",
    },
    "@media (max-width: 1100px)": {
      fontSize: "35px",
      marginTop: "30px",
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
    marginTop: "60px",
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
