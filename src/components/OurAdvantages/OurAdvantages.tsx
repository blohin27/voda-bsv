import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery } from "@mui/material";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import { CONST_TITLE } from "@/const";
import { FcIdea } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { LuActivity } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosNuclear } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { TfiSupport } from "react-icons/tfi";

interface IProps {}

export const OurAdvantages: FC<IProps> = () => {
  const mediumIcon500px = useMediaQuery("(max-width:500px)");
  return (
    <Box sx={classes.root}>
      <Box sx={{ ...classes.title }}>
        Что мы можем предложить? <br /> Наши услуги:
      </Box>
      <Box sx={classes.wrapperAdv}>
        <Box sx={{ ...classes.sectionItem }}>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <LuActivity style={{ color: "green" }} size={!mediumIcon500px ? "80px" : "50px"} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Комплексная Диагностика Скважин!</Box>
              <Box sx={classes.itemTextDescr}>
                Проведем тщательную проверку вашей скважины, используя современное оборудование, чтобы точно определить любые проблемы и потребности в
                обслуживании.
              </Box>
            </Box>
          </Box>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <MdMiscellaneousServices style={{ color: "green" }} size={!mediumIcon500px ? "80px" : "50px"} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Ремонт и Восстановление Скважин</Box>
              <Box sx={classes.itemTextDescr}>
                Качественный ремонт любой сложности, от устранения небольших неисправностей до глобального восстановления скважины, обеспечивая её долговечность
                и эффективность.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...classes.sectionItem }}>
          {" "}
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <FcOk style={{ color: "green" }} size={!mediumIcon500px ? "80px" : "50px"} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Монтаж и Обслуживание Насосного Оборудования!</Box>
              <Box sx={classes.itemTextDescr}>
                Установим и настроим насосное оборудование для вашей скважины, обеспечивая оптимальную производительность и надежность водоснабжения.
              </Box>
            </Box>
          </Box>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <PiPhoneCallFill style={{ color: "green" }} size={!mediumIcon500px ? "80px" : "50px"} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Консультации и Планирование Водоснабжения!</Box>
              <Box sx={classes.itemTextDescr}>
                Предоставим профессиональные консультации по всем вопросам водоснабжения, поможем в планировании системы водоснабжения, соответствующей вашим
                потребностям.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...classes.sectionItem }}>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <TfiSupport style={{ color: "green" }} size={!mediumIcon500px ? "80px" : "50px"} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Экстренные Работы и Техническая Поддержка:</Box>
              <Box sx={classes.itemTextDescr}>
                Мы не предлагаем своим заказчикам оплатить услугу на условиях предоплаты. Не навязываем заказчику дополнительных работ и дополнительных услуг.
              </Box>
            </Box>
          </Box>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <IoIosNuclear style={{ color: "green" }} size={!mediumIcon500px ? "80px" : "50px"} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Чистка и Обеззараживание Воды!</Box>
              <Box sx={classes.itemTextDescr}>
                Гарантируем чистоту и безопасность вашей воды благодаря профессиональной чистке скважин и современным методам обеззараживания.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  title: {
    ...CONST_TITLE,
    marginTop: "40px",
    paddingTop: "40px",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "50px",
    "@media (max-width:600px)": {
      marginTop: "35px",
    },
    "@media (max-width:400px)": {
      gap: "10px",
    },
  },
  itemText: {
    display: "flex",
    flexDirection: "column",
    width: "82%",
  },
  itemTextTitle: {
    сolor: "#362c1d",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "15px",
  },
  itemTextDescr: {
    lineHeight: "25px",
    сolor: "#362c1d",
    fontSize: "16px",
    fontWeight: 400,
    "@media (max-width:500px)": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  itemImage: {
    width: "18%",
    textAlign: "center",
  },

  sectionForItems: {
    display: "flex",

    width: "50%",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  wrapperAdv: { display: "flex", justifyContent: "center", flexDirection: "column", margin: "0 16px 0 16px" },
  sectionItem: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    "@media (max-width:860px)": {
      flexDirection: "column",
    },
  },
};
