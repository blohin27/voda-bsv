import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";

import { NashyRaboty } from "@/components/NashyRaboty/NashyRaboty";
import { NashyRabotyTemplate } from "@/components/NashyRaboty/NashyRaboty2";

interface IProps {}
export const OurWorksPage: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}>Примеры выполненых работ</Box>
          <Box sx={classes.itemWorks}>
            <NashyRabotyTemplate
              textFirst
              title={"Чистка скважины"}
              glubina={"30 метров"}
              time={"3 часа"}
              typeWork={"Чистка скважины с использованием профессиональной химии"}
              kolvoPersonal={"2 человека"}
              photo={["/photo/1t.jpg", "/photo/2t.jpg", "/photo/5t.jpg", "/photo/6t.jpg", "/photo/7t.jpg"]}
              price={"30 000 рублей"}
            />
            <NashyRabotyTemplate
              title={"Чистка скважины"}
              glubina={"30 метров"}
              time={"3 часа"}
              typeWork={"Чистка скважины с использованием профессиональной химии"}
              kolvoPersonal={"2 человека"}
              photo={["/photo/1t.jpg", "/photo/2t.jpg", "/photo/5t.jpg", "/photo/6t.jpg", "/photo/7t.jpg"]}
              price={"30 000 рублей"}
            />
            <NashyRabotyTemplate
              textFirst
              title={"Чистка скважины"}
              glubina={"30 метров"}
              time={"3 часа"}
              typeWork={"Чистка скважины с использованием профессиональной химии"}
              kolvoPersonal={"2 человека"}
              photo={["/photo/1t.jpg", "/photo/2t.jpg", "/photo/5t.jpg", "/photo/6t.jpg", "/photo/7t.jpg"]}
              price={"30 000 рублей"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  title: { fontWeight: 700, fontSize: "30px", textAlign: "center" },
};
