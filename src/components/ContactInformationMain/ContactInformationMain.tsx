import { FC } from "react";

import { ClassesSx } from "@/theme/theme";
import { Box, useMediaQuery } from "@mui/material";
import { COLOR_BLACK, COLOR_ORANGE, EMAIL, MOBILE_TELEPHONE } from "@/const";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";

interface IProps {}

export const ContactInformationMain: FC<IProps> = ({}) => {
  const matches = useMediaQuery("(max-width:850px)");
  function createAndClickLink(url: string) {
    // Создаем новый элемент 'a'
    const link = document.createElement("a");
    link.href = url;

    // Добавляем элемент в DOM (невидимым образом)
    link.style.display = "none";
    document.body.appendChild(link);

    // Имитируем клик по ссылке
    link.click();

    // Удаляем элемент из DOM
    document.body.removeChild(link);
  }

  return (
    <Box sx={classes.tel_mob}>
      <Box>
        <Box>
          <Box
            sx={classes.tel_one}
            onClick={() => {
              createAndClickLink(`tel:${MOBILE_TELEPHONE}`);
            }}
          >
            {`${MOBILE_TELEPHONE}`}
          </Box>
        </Box>
        <Box
          className={montserrat.className}
          onClick={() => {
            createAndClickLink(`mailto:${EMAIL}`);
          }}
          sx={classes.tel_two}
        >{`${EMAIL}`}</Box>
      </Box>
      {!matches && (
        <Box style={{ textAlign: "center" }} ml={1}>
          <span style={{ fontWeight: "700", color: COLOR_BLACK }}>Режим работы</span>
          <br /> ежедневно <br /> с 07:00 до 21:00
        </Box>
      )}
    </Box>
  );
};

const classes: ClassesSx = {
  tel_mob: {
    display: "flex",
    color: "rgba(92, 92, 92)",
    alignItems: "center",
    fontFamily: "Montserrat', sans-serif",
  },
  tel_one: {
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    color: COLOR_ORANGE,
    "@media (max-width: 200px)": {
      fontSize: "16px",
    },
  },
  tel_two: {
    fontSize: "20px",
    textAlign: "center",
    color: "blue",
    textDecoration: "underline",
    letterSpacing: "1px",
    "@media (max-width: 200px)": {
      fontSize: "12px",
    },
  },
};
