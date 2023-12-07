import React, { FC, PropsWithChildren } from "react";
import { DEV } from "@/const";
import { ClassesSx } from "@/theme/theme";
import { Box, CircularProgress, Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import ErrorLoader from "next/dist/build/webpack/loaders/error-loader";

interface Props {}

export const IsDev: FC<PropsWithChildren<Props>> = ({ children }) => {
  if (DEV) {
    return (
      <>
        <Box sx={c.setcionGeneralPageBanner}>
          <Skeleton />
          <Image
            src="/photoNew/dev.png"
            alt={"image"}
            layout={"fill"}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain"
            objectPosition="top center" // По умолчанию 'center', но может быть изменено
            quality={100}
            placeholder={"blur"}
            // priority
            blurDataURL={"/photoNew/devPre.jpg"}
            onLoad={(e) => console.log(e.target)}
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
    height: "100%",
    position: "relative",
  },
};
