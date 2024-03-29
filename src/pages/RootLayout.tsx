import React, { FC, PropsWithChildren, ReactNode } from "react";
import "../app/globals.css";
import "@fontsource/inter";
import { Box } from "@mui/material";
import { COLOR_BLACK } from "@/const";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SimpleDialog } from "@/components/Modal/Modal";
import { stateStore } from "@/domain";
import ScrollToTop from "react-scroll-up";
import { FcRightUp2, FcUpload } from "react-icons/fc";
import { FaArrowCircleUp } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "@mui/system/CSSProperties";
import { FadeLoader } from "react-spinners";
import { observer } from "mobx-react";
import { ClassesSx } from "@/theme/theme";

// export default function RootLayout({ children }: PropsWithChildren<unknown>) {
//   return (
//     <Box sx={{ color: COLOR_BLACK, position: "relative" }}>
//       {/*{children}*/}
//       {/*<ToastContainer position="top-center" style={{ fontSize: "25px" }} autoClose={2000} />*/}
//       {/*<ScrollToTop showUnder={60} easing={"easeInOutCirc"}>*/}
//       {/*  <FaArrowCircleUp size={70} />*/}
//       {/*</ScrollToTop>*/}
//       <Box sx={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%", transform: "translate(-50%,-50%)" }}>
//         <FadeLoader color={"blue"} loading={true} cssOverride={override} aria-label="Loading Spinner" data-testid="loader" />
//       </Box>
//     </Box>
//   );
// }

type RootLayoutProps = {
  header: React.ReactNode; // Для HeaderSite
  content: React.ReactNode; // Для остального содержимого
};
const RootLayout: React.FC<PropsWithChildren<RootLayoutProps>> = observer(({ children, header, content }) => {
  return (
    <Box sx={{ ...classes.root }}>
      {header}
      <Box sx={classes.contentStyle}>{content}</Box>
      <ToastContainer position="top-center" style={{ fontSize: "25px" }} autoClose={2000} />
      <ScrollToTop showUnder={60} easing={"easeInOutCirc"}>
        <FaArrowCircleUp size={70} />
      </ScrollToTop>
    </Box>
  );
});
const classes: ClassesSx = {
  root: {
    color: COLOR_BLACK,
    position: "relative",
  },
  contentStyle: {
    marginTop: "138px",
    "@media (max-width: 1200px)": {
      marginTop: "138px",
    },
    "@media (max-width: 1100px)": {
      marginTop: "135px",
    },
    "@media (max-width: 920px)": {
      marginTop: "60px",
    },
  },
};
export default RootLayout;
// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };
