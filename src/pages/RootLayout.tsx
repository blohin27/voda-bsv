import React, { FC, PropsWithChildren, ReactNode } from "react";
import "../app/globals.css";
import "@fontsource/inter";
import { Box } from "@mui/material";
import { COLOR_BLACK } from "@/const";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SimpleDialog } from "@/components/Modal/Modal";
import { modalStore } from "@/domain";
import ScrollToTop from "react-scroll-up";
import { FcRightUp2, FcUpload } from "react-icons/fc";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <Box sx={{ color: COLOR_BLACK }}>
      {children}
      <ToastContainer position="top-center" style={{ fontSize: "25px" }} autoClose={2000} />
      <ScrollToTop showUnder={60} easing={"easeInOutCirc"}>
        <FcRightUp2 size={70} />
      </ScrollToTop>
    </Box>
  );
}
