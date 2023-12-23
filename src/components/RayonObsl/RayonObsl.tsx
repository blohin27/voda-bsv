import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";

interface IProps {}
export const RayonObsl: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box>
        <Box>
          <Box sx={classes.setcionGeneralPageBanner}>
            <Image src="/photoNew/rayobsl.jpg" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="center center" quality={100} />
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.wrapper}>
              <Box sx={classes.content}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      marginTop: "25px",
                      padding: "5px 15px 5px 15px",
                      backgroundColor: "white",
                      display: "flex",
                      fontSize: "35px",
                      fontWeight: "700",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    Районы обслуживания
                  </Box>
                </Box>

                <Box sx={{ width: "100%", display: "flex", flex: "1 1 auto", justifyContent: "space-around" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", alignSelf: "center" }}>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", alignSelf: "center" }}>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", alignSelf: "center" }}>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", alignSelf: "center" }}>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                    <Box sx={{ display: "flex", backgroundColor: "white", padding: "10px", fontWeight: "600" }}>Волокорамский район</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
  },
  setcionGeneralPageBanner: {
    width: "100%",
    display: "flex",
    height: "500px",
    position: "relative",
    "@media (max-width:800px)": {
      height: "450px",
    },
  },
  sectionWhite: {
    // background: "linear-gradient(to left, white, white 100%, rgba(255,255,255 10%) 100%)",
    background: "linear-gradient(to left, black, black 100%, rgba(255, 255, 255, 10%) 90%)",
    opacity: 0.3,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:900px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
};
