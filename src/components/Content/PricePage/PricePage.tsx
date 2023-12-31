import React, { FC, useRef, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { data1, data2 } from "./data";

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
            <Image src="/photoNew/testImage.jpg" alt={"image"} layout={"fill"} objectFit="cover" objectPosition="center center" quality={100} />
            <Box sx={classes.sectionWhite} />
            <Box sx={classes.wrapper}>
              <Box sx={classes.content}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      fontSize: "35px",
                      fontWeight: "700",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    Цены на ремонт скважин
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      fontSize: "16px",
                      fontWeight: "400",
                      textAlign: "center",
                      justifyContent: "center",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    Для быстрой навигации по странице используйте кнопки разделов или боковое меню. В них вы найдете подробное описание цен
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                    <Box sx={classes.buttonItem} onClick={scrollToMyRef}>
                      Чистка и ремонт
                    </Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box> <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
                    <Box sx={classes.buttonItem}>Чистка и ремонт</Box> <Box sx={classes.buttonItem}>Чистка и ремонт</Box>
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
                      <th style={{ width: "60%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>
                        Название услуги
                      </th>
                      <th style={{ width: "40%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTableRem.map((item) => (
                      <tr key={item.name}>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.price}
                        </td>
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
                      <th style={{ width: "60%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>
                        Название услуги
                      </th>
                      <th style={{ width: "40%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTableRem.map((item) => (
                      <tr key={item.name}>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.price}
                        </td>
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
                      <th style={{ width: "60%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>
                        Название услуги
                      </th>
                      <th style={{ width: "40%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTableRem.map((item) => (
                      <tr key={item.name}>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.price}
                        </td>
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
                      <th style={{ width: "60%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>
                        Название услуги
                      </th>
                      <th style={{ width: "40%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTableRem.map((item) => (
                      <tr key={item.name}>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.price}
                        </td>
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
                      <th style={{ width: "60%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>
                        Название услуги
                      </th>
                      <th style={{ width: "40%", backgroundColor: "#4ab461", color: "white", height: "50px", fontSize: "18px", fontWeight: "600" }}>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTableRem.map((item) => (
                      <tr key={item.name}>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            backgroundColor: "#fcfbf9",
                            border: "1px solid #dedede",
                            height: "35px",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {item.price}
                        </td>
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
  buttonsNavigation: { display: "flex", justifyContent: "center", gap: "20px" },
  titleContentItem: {
    display: "flex",
    fontSize: "38px",
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
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
    height: "350px",
    position: "relative",
    "@media (max-width:800px)": {
      height: "850px",
    },
  },
  sectionWhite: {
    // background: "linear-gradient(to left, white, white 100%, rgba(255,255,255 10%) 100%)",
    background: "linear-gradient(to left, white, white 100%, rgba(0, 0, 0, 10%) 90%)",
    opacity: 0.95,
    position: "absolute",
    width: "100%",
    height: "100%",
    "@media (max-width:900px)": {
      backgroundColor: "black",
      opacity: 0.65,
    },
  },
};
