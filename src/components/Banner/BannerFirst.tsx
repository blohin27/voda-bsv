import { FC, useCallback, useMemo } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { CONST_TITLE_WITHOUT_MARGIN } from "@/const";

interface IProps {
  src: string;
  title: string;
  height?: string;
}

export const BannerFirst: FC<IProps> = ({ src, title, height }) => {
  const heightBlockImg = useMemo(() => {
    if (height && height?.length > 0) {
      return height;
    }
    return "300px";
  }, [height]);

  const classes: ClassesSx = {
    setcionGeneralPageBannerImg: {
      width: "100%",
      display: "flex",
      height: heightBlockImg,
      position: "relative",
      "@media (max-width:480px)": {
        height: "250px",
      },
    },
    contentImg: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      fontSize: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    titleDesc: {
      display: "flex",
      fontSize: "16px",
      fontWeight: "400",
      textAlign: "center",
      justifyContent: "center",
      maxWidth: "600px",
      margin: "0 auto",
      color: "white",
    },
    wrapperImg: {
      zIndex: 2,
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
      height: "100%",
      display: "flex",
    },
    sectionWhiteImg: {
      // background: "linear-gradient(to left, white, white 100%, rgba(255,255,255 10%) 100%)",
      background: "linear-gradient(to left, black, black 100%, rgba(0, 0, 0, 10%) 90%)",
      opacity: 0.8,
      position: "absolute",
      width: "100%",
      height: "100%",
      "@media (max-width:900px)": {
        backgroundColor: "black",
        opacity: 0.65,
      },
    },
    titleGeneral: {
      marginTop: "80px",
      ...CONST_TITLE_WITHOUT_MARGIN,
    },
  };

  return (
    <>
      <Box sx={classes.setcionGeneralPageBannerImg}>
        <Image src={src} alt={"image"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
        <Box sx={classes.sectionWhiteImg} />
        <Box sx={classes.wrapperImg}>
          <Box sx={classes.contentImg}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <Box sx={{ ...classes.titleGeneral, fontSize: "52px" }}>{title} </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
