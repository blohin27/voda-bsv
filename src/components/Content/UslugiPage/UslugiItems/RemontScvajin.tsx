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
import { dataTableRemontScv } from "@/price";

interface IProps {}
export const RemontScvajin: FC<IProps> = () => {
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
            <Box sx={{ ...classes.subTitle1 }}>Ремонт скважины </Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "240px" }}>
              <Image src="/photo/nasos.jpg" alt={"Демонтаж насоса ЭЦВ "} layout={"fill"} objectFit="cover" objectPosition="50% 50%" quality={100} />
            </Box>
            <Box>
              Ремонт скважины – это всегда не приятная ситуация которую вы точно не ждали. Отсутствие воды доставляет сильный дискомфорт, так как человек без
              воды находится не может. Что же делать в такой ситуации? Для начало хотим Вас предостеречь не в коем случае не пытаться починить своими руками. За
              частую вмешательство не подготовленного человека еще больше усугубляет и без того плохое положение. Обращайтесь к нашим специалистам, помните
              консультации бесплатные!
            </Box>
            <Box mt={2}>
              Мы предлагаем полный спектр услуг по водоснабжению для частных домов. От проектирования до установки и обслуживания – все под одной крышей.
            </Box>
            <Box mt={2}>
              Мы обеспечиваем эффективное водоснабжение, соответствующее вашим индивидуальным потребностям. Наша команда профессионалов гарантирует быструю и
              качественную работу. Мы используем только проверенные материалы и оборудование.{" "}
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.titlePrice }}>Цены на ремонт скважины</Box>
          </h2>
          <Box sx={{ ...classes.descTextSection, marginBottom: "20px" }}>
            Наши цены являются вполне доступными. Мы предлагаем значительные скидки на пакет услуг. Ниже вы найдете краткий перечень предоставляемых работ и их
            цены. Также мы предоставляем бесплатную телефонную консультацию, чтобы вы могли самостоятельно определить, что у вас не работает.
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
                {dataTableRemontScv.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.name}</TableCell>
                    <TableCell sx={{ ...classes.tdStyle }}>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Почему скважина выходит из строя?</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            Самые частые причины почему скважина на воду ломается, забегая вперед можем сказать, что любую проблему мы в силах устранить!
            <Box>
              <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>
                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Маленькое потребление.
                      </Box>
                    </h3>
                  </Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>

                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Неверный монтаж трубы.
                      </Box>
                    </h3>
                  </Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>
                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Перебои в сети электроэнергии
                      </Box>
                    </h3>
                  </Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>
                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Забился фильтр
                      </Box>
                    </h3>
                  </Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>
                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Неверно настроенное автоматика или гидроаккумулятор
                      </Box>
                    </h3>
                  </Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>
                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Неисправен кабель питания
                      </Box>
                    </h3>
                  </Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>
                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Застрял насоса
                      </Box>
                    </h3>
                  </Box>
                  <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <Box>
                      <FcMediumPriority size={40} color={COLOR_BLUE} />
                    </Box>
                    <h3>
                      <Box ml={2} sx={{ ...classes.liItem }}>
                        Плохая герметичность обратного клапана
                      </Box>
                    </h3>
                  </Box>
                </Box>
              </Box>
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
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Демонтаж насосного оборудования
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcCheckmark size={40} color={COLOR_BLUE} />
                  </Box>

                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Видеодиагностика
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcCheckmark size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Обнаруживаем источник засора и его причины
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcCheckmark size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      При необходимости желоним
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcCheckmark size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      При необходимости делаем гидроудар.
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Box>
                    <FcCheckmark size={40} color={COLOR_BLUE} />
                  </Box>
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Проверяем результат
                    </Box>
                  </h3>
                </Box>
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
