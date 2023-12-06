import { LogoGeneralVodaBsv } from "@/components/LogoVB/LogoGeneralVodaBsv";
import { ContactInformationMain } from "@/components/ContactInformationMain/ContactInformationMain";
import { SocialNetworkIcons } from "@/components/SocialNetwork/SocialNetworkIcons";
import { SectionButtons } from "@/components/SectionButtons/SectionButtons";
import React, { useState } from "react";
import { HeaderMenu } from "@/components/header/HeaderMenu/HeaderMenu";
import { Box, useMediaQuery } from "@mui/material";
import { ClassesSx } from "@/theme/theme";
import { MOBILE_TELEPHONE } from "@/const";
import { Montserrat } from "next/font/google";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";

export const montserrat = Montserrat({ subsets: ["latin"] });

export const HeaderSite = () => {
  const showDrawer = useMediaQuery("(max-width:910px)");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  const list = () => (
    <List>
      {[
        { title: "Услуги", urlRedirect: "/" },
        { title: "Цены", urlRedirect: "/" },
        { title: "Срочный выезд", urlRedirect: "/" },
        { title: "Калькулятор", urlRedirect: "/" },
        { title: "Наши работы", urlRedirect: "/" },
        { title: "Полезные статьи", urlRedirect: "/" },
        { title: "Контакты", urlRedirect: "/" },
      ].map((text, index) => (
        <Box key={`${index + text.title}`} sx={classes.itemHeaderDrawer} className={montserrat.className}>{`${text.title}`}</Box>
      ))}
    </List>
  );
  return (
    <Box>
      <Box sx={classes.root}>
        <Drawer
          sx={{ "& .MuiDrawer-paper": { backgroundColor: "#4da6e2" } }}
          anchor="left"
          open={isOpen}
          onClose={() => {
            toggleDrawer(false);
          }}
        >
          {list()}
        </Drawer>
        {showDrawer && (
          <Box sx={classes.sectionHeaderSite}>
            <Box className={montserrat.className} sx={classes.phone}>
              <span>{MOBILE_TELEPHONE}</span>
            </Box>
            <Box
              sx={classes.wrapperLinesHeader}
              onClick={() => {
                toggleDrawer(true);
              }}
            >
              <Box sx={classes.linesHeader}></Box>
              <Box sx={classes.linesHeader}></Box>
              <Box sx={classes.linesHeader}></Box>
            </Box>
          </Box>
        )}
        <Box sx={classes.wrapperHeader}>
          <Box ml={2} mr={2}>
            <Box sx={classes.sectionHeaderSite}>
              <LogoGeneralVodaBsv />
              <ContactInformationMain />
              <SocialNetworkIcons />
              <SectionButtons />
            </Box>
          </Box>
          <div>
            <HeaderMenu />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  itemHeaderDrawer: {
    color: "white",
    margin: "25px",
    fontSize: "25px",
    cursor: "pointer",
    fontWeight: "700",
    "@media (max-width:400px)": {
      fontSize: "25px",
    },
  },
  wrapperHeader: {
    "@media (max-width:910px)": {
      display: "none",
    },
  },
  wrapperLinesHeader: {
    padding: "5px",
    cursor: "pointer",
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
    "@media (max-width:920px)": {
      margin: "10px 16px 10px 16px",
    },
  },
};
