import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { jsx } from "@emotion/react";
import JSX = jsx.JSX;

interface IProps {}
export const ScrollPhoto: FC<IProps> = () => {
  const [state, setState] = useState("/photoNew/dev.png");
  const changeImg = () => {
    setState("/photo/1t.jpg");
  };
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.sectionImg}>
            <Image
              src={state}
              alt={"image"}
              // layout={"fill"}
              width={600}
              height={400}
              objectFit="cover"
              objectPosition="center center" // По умолчанию 'center', но может быть изменено
              quality={100}
            />
          </Box>
          {/*<Box sx={classes.arrow}>*/}
          {/*  <Box*/}
          {/*    onClick={() => {*/}
          {/*      changeImg();*/}
          {/*    }}*/}
          {/*    sx={classes.leftButton}*/}
          {/*  >*/}
          {/*    <FaArrowCircleLeft size={40} color={"#fd6c36"} />*/}
          {/*  </Box>*/}
          {/*  <Box sx={classes.rightButton}>*/}
          {/*    <FaArrowCircleRight size={40} color={"#fd6c36"} />*/}
          {/*  </Box>*/}
          {/*</Box>*/}
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: {},

  content: {
    // marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
};
