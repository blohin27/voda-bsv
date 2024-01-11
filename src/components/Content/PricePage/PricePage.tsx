import React, { FC, useRef, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { data1, data2 } from "./data";
import { CONST_TITLE } from "@/const";

interface IProps {}
export const PricePage: FC<IProps> = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const [rem, setRem] = useState("Ремонт скважины");
  const [dataTableRem, setDataTableRem] = useState(data1);

  const scrollToMyRef = () => {
    // Проверяем, что элемент существует, прежде чем вызывать scrollIntoView
    myRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={classes.root}>
      <Box>
        <Box>
          <Box sx={classes.setcionGeneralPageBanner}>
            <Image src="/photo/photoObjectObslug/mj.png" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="50% 30%" quality={100} />
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.wrapper}>
              <Box sx={classes.content}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                  <Box sx={{ ...classes.title, fontSize: "52px" }}>Цены на ремонт скважин</Box>
                  <Box sx={{ ...classes.titleDesc }}>
                    Для быстрой навигации по странице используйте кнопки разделов или боковое меню. В них вы найдете подробное описание цен
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                    <Box sx={classes.buttonItem} onClick={scrollToMyRef}>
                      Чистка и ремонт
                    </Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={classes.wrapperItemPrice}>
            <Box sx={classes.contenItemPrice}>
              <Box sx={classes.titleContentItem}>Ремонт скважины</Box>
              <Box sx={classes.contenManagement}></Box>
              <Box sx={classes.table}>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "none" }}>
                  <thead>
                    <tr>
                      <th style={{ ...classes.thStyle }}>Название услуги</th>
                      <th style={{ ...classes.thStyle, width: "60%" }}>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTableRem.map((item) => (
                      <tr key={item.name}>
                        <td style={{ ...classes.tdStyle }}>{item.name}</td>
                        <td style={{ ...classes.tdStyle }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </Box>
            <Box sx={classes.contenItemPrice}>
              <Box sx={classes.titleContentItem}>Ремонт скважины</Box>
              <Box sx={classes.contenManagement}></Box>
              <Box sx={classes.table}>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "none" }}>
                  <thead>
                    <tr>
                      <th style={{ ...classes.thStyle }}>Название услуги</th>
                      <th style={{ ...classes.thStyle, width: "60%" }}>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTableRem.map((item) => (
                      <tr key={item.name}>
                        <td style={{ ...classes.tdStyle }}>{item.name}</td>
                        <td style={{ ...classes.tdStyle }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
  tdStyle: { textAlign: "center", backgroundColor: "#fcfbf9", border: "1px solid #dedede", height: "35px", fontSize: "16px", fontWeight: "400" },
  thStyle: { width: "60%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "20px", fontWeight: "600" },

  buttonsNavigation: { display: "flex", justifyContent: "center", gap: "20px" },
  titleContentItem: {
    ...CONST_TITLE,
    marginTop: "40px",
    paddingTop: "40px",
  },
  contenManagement: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  contenItemManagement: {
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
  },
  table: {
    display: "flex",
    justifyContent: "center",
  },
  buttonItem: {
    display: "flex",
    backgroundColor: "#4ab461",
    cursor: "pointer",
    borderRadius: "3px",
    padding: "10px 25px 10px 25px",
    color: "white",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#fe6c36",
    },
  },
  wrapperItemPrice: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  contenItemPrice: {},

  sectionWhite: {
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
  setcionGeneralPageBanner: {
    width: "100%",

    display: "flex",
    height: "450px",
    position: "relative",
    "@media (max-width:800px)": {
      // height: "50px",
    },
  },
  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "20px",
  },
  title: { ...CONST_TITLE, marginTop: "40px", paddingTop: "40px", color: "white" },
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
  wrapper: {
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
  },
};
