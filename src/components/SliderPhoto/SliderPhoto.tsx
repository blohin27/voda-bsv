import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface IProps {}

export const SliderPhoto: FC<IProps> = () => {
  const [state, setState] = useState("/photoNew/dev.png");
  const changeImg = () => {
    setState("/photo/1t.jpg");
  };
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.titleRoot}>Фото с наших обьектов</Box>
        <Box sx={classes.content}>
          <Box sx={classes.sectionImg}>
            <Image
              src={state}
              alt={"image"}
              layout={"fill"}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          <Box sx={classes.arrow}>
            <Box
              onClick={() => {
                changeImg();
              }}
              sx={classes.leftButton}
            >
              <FaArrowCircleLeft size={40} color={"#fd6c36"} />
            </Box>
            <Box sx={classes.rightButton}>
              <FaArrowCircleRight size={40} color={"#fd6c36"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: { backgroundColor: "#fcfbf9" },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  titleRoot: {
    fontSize: "38px",
    fontWeight: 700,
    textAlign: "center",
  },
  arrow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  leftButton: {},
  rightButton: {},

  content: { display: "flex", justifyContent: "center", flexDirection: "column" },
  sectionImg: {
    display: "flex",
    position: "relative",
    // width: "20%",
    height: "400px",
    alignSelf: "center",
    "@media (max-width:500px)": {
      height: "300px",
    },
    "@media (max-width:360px)": {
      height: "250px",
    },
  },
};
