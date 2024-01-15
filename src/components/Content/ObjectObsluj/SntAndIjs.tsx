import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLACK, COLOR_BLUE, CONST_TITLE, CONST_TITLE_FIRST_PAGE, CONST_TITLE_WITHOUT_MARGIN } from "@/const";
import Image from "next/image";
import { InfoBlocks } from "@/components/InfoBlock/InfoBlock";
import { Banner } from "@/components/Banner/Banner";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface IProps {}
export const SntAndIjs: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src="/photo/photoObjectObslug/mj.png" alt={"Загородный дом"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1>
                <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>Водоснабжение для СНТ и ИЖС</Box>
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
            <Box sx={{ ...classes.subTitle1 }}>Как провести в СНТ или ИЖС водоснажение</Box>
          </h2>

          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "280px" }}>
              <Image src="/photo/remont_scvajin.jpg" alt={"Демонтаж насоса ЭЦВ "} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
            </Box>
            <Box>
              В садовых некоммерческих товариществах (СНТ) система водоснабжения регламентируется обширным спектром нормативных актов. Эти стандарты включают
              установку источников водоснабжения и подключение к канализационным системам на территории СНТ для обеспечения надежного водоснабжения. Варианты
              обеспечения СНТ водой включают подключение к централизованной системе водоснабжения или создание автономных источников, таких как скважины и
              колодцы.
            </Box>
            <Box mt={2}>
              Это позволяет обеспечить жителей качественной питьевой и хозяйственной водой как в летний, так и в зимний периоды. Таким образом, каждое СНТ может
              выбрать оптимальный для себя способ водоснабжения, соответствующий как существующим регламентам, так и потребностям и предпочтениям жителей.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Профессиональное Водоснабжение для Вашего СНТ и ИЖС</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box>
              Мы осознаем значимость стабильного доступа к качественной и безопасной воде. Наша команда специализируется на предоставлении комплексных услуг по
              водоснабжению для СНТ и ИЖС, охватывая весь процесс от проектирования до ввода системы в эксплуатацию и её последующего обслуживания. Мы
              предлагаем:
            </Box>
            <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <FaArrowAltCircleRight size={40} color={COLOR_BLUE} />
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Разработку индивидуальных проектов водоснабжения.
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <FaArrowAltCircleRight size={40} color={COLOR_BLUE} />
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Установку современных и эффективных систем.
                    </Box>
                  </h3>
                </Box>
                <Box sx={{ ...classes.liItem, display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <FaArrowAltCircleRight size={40} color={COLOR_BLUE} />
                  <h3>
                    <Box ml={2} sx={{ ...classes.liItem }}>
                      Регулярное техническое обслуживание и ремонт.
                    </Box>
                  </h3>
                </Box>
              </Box>
            </Box>
            <Box mt={2}>
              На нашем сайте вы найдете множество полезных статей и советов по эффективному использованию и экономии воды в СНТ и ИЖС. Мы делаем все, чтобы ваши
              системы водоснабжения были не только надежными, но и экономически выгодными.
            </Box>
          </Box>
          <h2>
            <Box sx={{ ...classes.subTitle1 }}>Почему Выбирают Нас?</Box>
          </h2>
          <Box sx={classes.descTextSection}>
            <Box sx={{ ...classes.imgSection, float: "left", height: "300px" }}>
              <Image src="/photo/dostaem_nasos.jpg" alt={"Демонтаж насоса в СНТ"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
            </Box>
            <Box mt={2}>
              Наши клиенты высоко ценят нас за наш индивидуальный подход, внимание к деталям и способность решать сложные задачи, обеспечивая надежные и
              эффективные решения. Мы постоянно стремимся к инновациям и улучшению наших методов работы, что позволяет нам предлагать только лучшие услуги на
              рынке. Это приверженность качеству и постоянное совершенствование делают нас предпочтительным выбором для клиентов, ищущих надежных профессионалов
              в нашей области.
            </Box>
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
  sectionWhiteImg: {
    // background: "linear-gradient(to left, white, white 100%, rgba(255,255,255 10%) 100%)",
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
};
