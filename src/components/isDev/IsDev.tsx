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
        <Box style={{ textAlign: "center", fontSize: "60px", backgroundColor: "blue", color: "white" }} className={montserrat.className}>
          Сайт в разработке
        </Box>
        <Box sx={c.setcionGeneralPageBanner}>
          <Image
            src="/photoNew/dev.png"
            alt={"image"}
            layout={"fill"}
            objectFit="cover"
            objectPosition="center center" // По умолчанию 'center', но может быть изменено
            quality={100}
          />
        </Box>
      </>
    );
  }
  return <>{children}</>;
};

const c: ClassesSx = {
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "100vh",
    position: "relative",
  },
};
