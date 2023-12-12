import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import Image from "next/image";

interface IProps {}
export const FotoRabot: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <TitleComponent title={"Наши сотрудники за работой"} />
          <Box sx={classes.arrayPhoto}>
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
          </Box>
        </Box>
        ;
      </Box>
    </Box>
  );
};

const PhotoItem = () => {
  return (
    <Box sx={classes.wrapperItem}>
      <Image
        src="/photoNew/1.png"
        alt={"image"}
        // layout={"fill"}
        layout="responsive"
        height={200}
        width={200}
        objectFit="cover"
        objectPosition="center center" // По умолчанию 'center', но может быть изменено
        quality={100}
      />
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  arrayPhoto: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    "@media (max-width:780px)": {
      gap: "0px",
    },
  },
  wrapperItem: {
    position: "relative",
    display: "flex",
    maxWidth: "24%",
    "@media (max-width:960px)": {
      maxWidth: "32%",
    },
    "@media (max-width:780px)": {
      maxWidth: "50%",
    },
  },
};
