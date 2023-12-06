import React, { FC, PropsWithChildren } from "react";
import { DEV } from "@/const";
import { ClassesSx } from "@/theme/theme";
import { Box, CircularProgress, Skeleton, Stack } from "@mui/material";

interface Props {}

export const IsDev: FC<PropsWithChildren<Props>> = ({ children }) => {
  if (DEV) {
    return (
      <>
        <div style={{ textAlign: "center", fontSize: "60px" }}>
          Сайт в разработке
        </div>
        <Box display={"flex"} justifyContent={"center"} mt={5}>
          <Stack sx={{ color: "grey.500" }} spacing={12} direction="row">
            <CircularProgress size={100} color="success" />
          </Stack>
        </Box>
      </>
    );
  }
  return <>{children}</>;
};
