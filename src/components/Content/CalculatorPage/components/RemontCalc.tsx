import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";

interface IProps {}
export const RemontCalc: FC<IProps> = () => {
  const [slider, setSlider] = useState(10);
  const [diametrSkv, setdiametrSkv] = useState(100);
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.sectionItems}>
            <Box sx={classes.item}>
              <Box sx={classes.title}>Глубина скважины</Box>
              <Box sx={classes.select}>
                <Slider
                  size="small"
                  defaultValue={10}
                  aria-label="Small"
                  onChange={(event, value, activeThumb) => {
                    setSlider(activeThumb);
                  }}
                  min={5}
                  max={150}
                />
              </Box>
            </Box>
            <Box sx={{ ...classes.item, alignItems: "center" }}>
              <Box sx={classes.title}>Диаметр скважины</Box>
              <Box sx={classes.select}>
                <Box
                  sx={classes.itemDiametr}
                  onClick={() => {
                    setdiametrSkv(100);
                  }}
                >
                  до 100мм
                </Box>
                <Box
                  sx={classes.itemDiametr}
                  onClick={() => {
                    setdiametrSkv(150);
                  }}
                >
                  100-200 мм
                </Box>
                <Box
                  sx={classes.itemDiametr}
                  onClick={() => {
                    setdiametrSkv(200);
                  }}
                >
                  Более 200мм
                </Box>
              </Box>
            </Box>
            <Box sx={{ ...classes.item, alignItems: "center" }}>
              <Box sx={classes.title}>Текущее состояние скважины</Box>
              <Box sx={classes.select}>
                <Box
                  sx={classes.itemDiametr}
                  onClick={() => {
                    setdiametrSkv(100);
                  }}
                >
                  Загрязнена/засорена.
                </Box>
                <Box
                  sx={classes.itemDiametr}
                  onClick={() => {
                    setdiametrSkv(150);
                  }}
                >
                  Механическое повреждение.
                </Box>
                <Box
                  sx={classes.itemDiametr}
                  onClick={() => {
                    setdiametrSkv(200);
                  }}
                >
                  Проблемы с насосным оборудованием.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px", display: "flex" },
  sectionItems: { display: "flex", flexDirection: "column", width: "100%" },
  item: { display: "flex", width: "100%", justifyContent: "center", gap: "20px" },
  select: { width: "200px" },
  itemDiametr: { cursor: "pointer" },
};
