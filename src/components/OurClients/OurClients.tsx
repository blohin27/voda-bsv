"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { ClassesSx } from "@/theme/theme";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";
import { Swiper as SwiperClass } from "swiper/types";
import { COLOR_BLACK, COLOR_BLUE_SECTION } from "@/const";

export const OurClients = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <Box>
      <Box style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Box sx={classes.title}>Наши клиенты</Box>
        <Box sx={classes.desc}>
          Наши клиенты такие как: Emirates, Газпром, Seven Suns Development, Bitriver, Натура Сиберика, автоцентры КИА, Rybakov PlaySchool, сеть магазинов
          Пятёрочка , Альфа Банк, Банк ВТБ, Посольство Республики Гана, Университет прокуратуры Российской Федерации им. Дмитрия Герца, Пансионат «Никольский
          парк» в Зеленограде , ФСИН России по г. Москве.
        </Box>
        <Box sx={{ marginBottom: "30px", marginTop: "30px" }}>
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            thumbs={{
              swiper: thumbsSwiper,
            }}
            className="h-96 w-full rounded-lg"
          >
            {[
              { in: 1, r: "png" },
              { in: 2, r: "png" },
              { in: 3, r: "svg" },
              { in: 4, r: "svg" },
              { in: 5, r: "png" },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                  <Box sx={classes.wrapperItem}>
                    <Image
                      src={`/photoNew/${item.in}.${item.r}`}
                      alt={"image"}
                      layout={"fill"}
                      // layout="responsive"
                      // height={200}
                      // width={200}
                      objectFit="contain"
                      objectPosition="center center" // По умолчанию 'center', но может быть изменено
                      quality={100}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  wrapperItemThumbnail: {
    position: "relative",
    display: "flex",
    height: "auto",
    // "@media (max-width:960px)": {
    //   maxWidth: "32%",
    // },
    // "@media (max-width:780px)": {
    //   maxWidth: "50%",
    // },
  },
  title: {
    paddingTop: "40px",
    marginBottom: "30px",
    fontSize: "48px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",

      paddingTop: "60px",
      marginBottom: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",

      paddingTop: "40px",
      marginBottom: "25px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",

      paddingTop: "30px",
      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",

      paddingTop: "30px",
      marginBottom: "15px",
    },
  },
  desc: {
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    // backgroundColor: "#fcfbf9",
    backgroundColor: COLOR_BLUE_SECTION,
    padding: "50px",
    lineHeight: "30px",
    "@media (max-width:960px)": {
      lineHeight: "20px",
    },
  },
  wrapperItem: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "50%",
    height: "300px",

    // "@media (max-width:960px)": {
    //   maxWidth: "32%",
    // },
    // "@media (max-width:780px)": {
    //   maxWidth: "50%",
    // },
  },
};
