import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { Checkbox, Slider } from "@mui/material";
import Image from "next/image";

interface IProps {}
export const BurenieCalc: FC<IProps> = () => {
  const [state, setState] = useState({ count: 1, photoUrl: "/photoTruba/133.jpg", price: 2300 });
  const [slider, setSlider] = useState(10);
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.sectionLeft}>
            <Box sx={classes.title}> 1.Параметры трубы для скважины</Box>
            <Box sx={classes.checkBoxArray}>
              <Box sx={classes.checkBoxItem}>
                <Checkbox
                  checked={state.count === 1 ? true : false}
                  inputProps={{ "aria-label": "controlled" }}
                  onChange={() => {
                    setState({ count: 1, photoUrl: "/photoTruba/133.jpg", price: 2300 });
                  }}
                />
                <Box>Металлические трубы Ø133мм (Цена за метр - 2300 руб)</Box>
              </Box>
              <Box sx={classes.checkBoxItem}>
                <Checkbox
                  checked={state.count === 2 ? true : false}
                  inputProps={{ "aria-label": "controlled" }}
                  onChange={() => {
                    setState({ count: 2, photoUrl: "/photoTruba/133pnd117.jpg", price: 2300 });
                  }}
                />
                <Box>Металлические трубы Ø133мм + ПНД труба Ø117мм (Цена за метр - 2600 руб.)</Box>
              </Box>
              <Box sx={classes.checkBoxItem}>
                <Checkbox
                  checked={state.count === 3 ? true : false}
                  onChange={() => {
                    setState({ count: 3, photoUrl: "/photoTruba/159.jpg", price: 2800 });
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box>Металлические трубы Ø159мм (Цена за метр - 2800 руб.)</Box>
              </Box>
              <Box sx={classes.checkBoxItem}>
                <Checkbox
                  checked={state.count === 4 ? true : false}
                  onChange={() => {
                    setState({ count: 4, photoUrl: "/photoTruba/159125.jpg", price: 3000 });
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box>Металлические трубы Ø159мм + ПНД труба Ø125мм ( Цена за метр - 3000 руб.)</Box>
              </Box>
              <Box sx={classes.checkBoxItem}>
                <Checkbox
                  checked={state.count === 5 ? true : false}
                  onChange={() => {
                    setState({ count: 5, photoUrl: "/photoTruba/npvh125.jpg", price: 2200 });
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box>НПВХ Ø125мм (Цена за метр - 2200 руб)</Box>
              </Box>
              <Box sx={classes.checkBoxItem}>
                <Checkbox
                  checked={state.count === 6 ? true : false}
                  onChange={() => {
                    setState({ count: 6, photoUrl: "/photoTruba/npvh125_90.jpg", price: 2400 });
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box>НПВХ Ø125мм + НПВХ Ø90мм (Цена за метр - 2400 руб)</Box>
              </Box>
            </Box>
            <Box sx={{ maxWidth: "200px" }}>
              <Slider
                size="small"
                defaultValue={10}
                aria-label="Small"
                onChange={(event) => {
                  setSlider(event?.target?.value);
                }}
                min={5}
                max={150}
              />
              <Box sx={{ textAlign: "center", fontWeight: 700, fontSize: "27px" }}>{`${slider} м`}</Box>
            </Box>
          </Box>
          <Box sx={classes.photoGeneralSection}>
            <Box sx={classes.photo}>
              <Image
                src={state.photoUrl}
                alt={"image"}
                layout={"fill"}
                objectFit="contain"
                objectPosition="center center" // По умолчанию 'center', но может быть изменено
                quality={100}
              />
            </Box>
            <Box sx={{ textAlign: "center", fontWeight: 600, fontSize: "25px" }}>{`Итого ${slider * state.price} рублей`}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { display: "flex" },
  sectionLeft: {},
  title: { fontWeight: 700, fontSize: "25px" },
  checkBoxArray: {},
  checkBoxItem: { display: "flex", alignItems: "center" },
  photo: {
    width: "100%",
    display: "flex",
    height: "400px",
    position: "relative",
    "@media (max-width:800px)": {},
  },
  photoGeneralSection: {
    width: "45%",
  },
};
