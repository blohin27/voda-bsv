import { LogoGeneralVodaBsv } from "@/components/LogoVB/LogoGeneralVodaBsv";
import { ContactInformationMain } from "@/components/ContactInformationMain/ContactInformationMain";
import { SocialNetworkIcons } from "@/components/SocialNetwork/SocialNetworkIcons";
import { SectionButtons } from "@/components/SectionButtons/SectionButtons";
import React from "react";
import { HeaderMenu } from "@/components/header/HeaderMenu/HeaderMenu";
import { Box, useMediaQuery } from "@mui/material";
import { ClassesSx } from "@/theme/theme";
import { useMediaPredicate } from "react-media-hook";
import { MOBILE_TELEPHONE } from "@/const";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const HeaderSite = () => {
  const showDrawer = useMediaQuery("(max-width:720px)");

  return (
    <Box>
      {showDrawer && (
        <Box sx={classes.sectionHeaderSite}>
          <Box className={montserrat.className} sx={classes.phone}>
            <span>{MOBILE_TELEPHONE}</span>
          </Box>
          <Box sx={classes.wrapperLinesHeader}>
            <Box sx={classes.linesHeader}></Box>
            <Box sx={classes.linesHeader}></Box>
            <Box sx={classes.linesHeader}></Box>
          </Box>
        </Box>
      )}
      <Box sx={classes.wrapperHeader}>
        <Box sx={classes.sectionHeaderSite}>
          <LogoGeneralVodaBsv />
          <ContactInformationMain />
          <SocialNetworkIcons />
          <SectionButtons />
        </Box>
        <div>
          <HeaderMenu />
        </div>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  wrapperHeader: {
    "@media (max-width:720px)": {
      display: "none",
    },
  },
  wrapperLinesHeader: {
    padding: "5px",
    paddingRight: "20px",
  },
  linesHeader: {
    width: "30px",
    height: "6px",
    borderTop: "4px solid black",
  },
  phone: {
    fontSize: "22px",
    fontWeight: "700",
  },
  sectionHeaderSite: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "15px auto",
    marginBottom: "15px",
    "@media (max-width:720px)": {
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
};
