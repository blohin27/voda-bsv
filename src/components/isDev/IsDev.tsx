import React, { FC, PropsWithChildren } from "react";
import { DEV } from "@/const";
import { ClassesSx } from "@/theme/theme";
import { Box, CircularProgress, Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";

interface Props {}

export const IsDev: FC<PropsWithChildren<Props>> = ({ children }) => {
  if (DEV) {
    return (
      <>
        <Box sx={c.text} className={montserrat.className}>
          В разработке
        </Box>
        <Box sx={c.setcionGeneralPageBanner}>
          <Image
            src="/photoNew/dev.png"
            alt={"image"}
            layout={"fill"}
            objectFit="contain"
            objectPosition="top center" // По умолчанию 'center', но может быть изменено
            quality={100}
            placeholder={"blur"}
            blurDataURL={"/photoNew/devPre.jpg"}
          />
        </Box>
      </>
    );
  }
  return <>{children}</>;
};

const c: ClassesSx = {
  text: {
    textAlign: "center",
    fontSize: "60px",
    backgroundColor: "blue",
    color: "white",
    "@media (max-width:600px)": {
      fontSize: "40px",
    },
  },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "100vh",
    position: "relative",
  },
};
