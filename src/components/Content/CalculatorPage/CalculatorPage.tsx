import { FC, useCallback, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_BLUE, COLOR_BLUE_HOVER, COLOR_ORANGE } from "@/const";
import { BurenieCalc } from "@/components/Content/CalculatorPage/components/BurenieCalc";
import { RemontCalc } from "@/components/Content/CalculatorPage/components/RemontCalc";

interface IProps {}
export const CalculatorPage: FC<IProps> = () => {
  const [state, setState] = useState("Бурение");

  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}>Расчет стоимость скважины под ключ онлайн</Box>
          <Box sx={classes.sectionButtons}>
            <Box
              sx={state === "Бурение" ? classes.itemButtonActive : classes.itemButton}
              onClick={() => {
                setState("Бурение");
              }}
            >
              Бурение
            </Box>
            <Box
              sx={state === "Ремонт и отчистка" ? classes.itemButtonActive : classes.itemButton}
              onClick={() => {
                setState("Ремонт и отчистка");
              }}
            >
              Ремонт и чистка
            </Box>
            <Box
              sx={state === "Обустройство" ? classes.itemButtonActive : classes.itemButton}
              onClick={() => {
                setState("Обустройство");
              }}
            >
              Обустройство
            </Box>
            <Box
              sx={state === "Канализация" ? classes.itemButtonActive : classes.itemButton}
              onClick={() => {
                setState("Канализация");
              }}
            >
              Канализя
            </Box>
          </Box>
          {state === "Бурение" && <BurenieCalc />}
          {state === "Ремонт и отчистка" && <RemontCalc />}
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  title: { fontWeight: "700", fontSize: "30px", textAlign: "center" },
  sectionButtons: { display: "flex", justifyContent: "center", gap: "10px" },
  itemButton: {
    backgroundColor: COLOR_BLUE,
    color: "white",
    fontWeight: 500,
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": { backgroundColor: COLOR_BLUE_HOVER },
  },
  itemButtonActive: { backgroundColor: COLOR_ORANGE, color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer" },
};
