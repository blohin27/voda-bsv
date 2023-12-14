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
        <Box sx={c.setcionGeneralPageBanner} className={montserrat.className}>
          В разработке
        </Box>
      </>
    );
  }
  return <>{children}</>;
};

const c: ClassesSx = {
  setcionGeneralPageBanner: {
    width: "100%",
    fontSize: "70px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    "@media (max-width:600px)": {
      fontSize: "40px",
    },
  },
};
