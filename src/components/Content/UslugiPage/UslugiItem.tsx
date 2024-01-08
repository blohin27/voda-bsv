import React, { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLOR_ORANGE } from "@/const";

interface IProps {
  title: string;
  photo: string;
  link?: string;
}
export const UslugiItem: FC<IProps> = ({ title, photo }) => {
  const [opacity, setOpacity] = useState(0.8);
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box
          sx={classes.content}
          onMouseEnter={() => {
            setOpacity(0);
          }}
          onMouseLeave={() => {
            setOpacity(0.7);
          }}
        >
          <Box sx={{ ...classes.photoGeneralSection }}>
            <Box sx={classes.photo}>
              <Image
                src={photo}
                alt={"image"}
                layout={"fill"}
                objectFit="cover"
                objectPosition="left left" // По умолчанию 'center', но может быть изменено
                quality={100}
              />
              <Box sx={classes.Card}>
                <Box sx={classes.textCard}>{title}</Box>
              </Box>
              <Box sx={{ ...classes.sectionWhite, opacity: opacity }} />
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
  content: { cursor: "pointer" },
  photoGeneralSection: {},
  photo: {
    width: "370px",
    display: "flex",
    height: "300px",
    position: "relative",
    "@media (max-width:790px)": {
      width: "600px",
      height: "200px",
    },
    "@media (max-width:650px)": {
      width: "550px",
      height: "200px",
    },
    "@media (max-width:580px)": {
      width: "450px",
      height: "200px",
    },

    "@media (max-width:480px)": {
      width: "400px",
      height: "200px",
    },
    "@media (max-width:420px)": {
      width: "300px",
      height: "200px",
    },
    "@media (max-width:350px)": {
      width: "250px",
      height: "200px",
    },
  },
  Card: {
    color: "white",
    display: "flex",
    zIndex: 3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",

    "&:hover": {
      color: COLOR_ORANGE,
    },
  },
  textCard: { display: "flex", fontWeight: "700", fontSize: "25px", margin: "0 5px" },
  sectionWhite: {
    background: "linear-gradient(to right, black, black 100%, rgba(0, 0, 0, 10%) 80%)",

    position: "absolute",
    width: "100%",
    height: "100%",
  },
};
