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

export const OurClients = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <Box>
      {/*<Box style={{ maxWidth: "1200px", margin: "0 auto" }}>*/}
      {/*  <TitleComponent title={"Наши клиенты"} />*/}
      {/*  <Box sx={classes.desc}>*/}
      {/*    Наши клиенты такие как: Emirates, Газпром, Seven Suns Development, Bitriver, Натура Сиберика, автоцентры "КИА", Rybakov PlaySchool, сеть магазинов*/}
      {/*    "Пятёрочка" , Альфа Банк, Банк ВТБ, Посольство Республики Гана, Университет прокуратуры Российской Федерации им. Дмитрия Герца, Пансионат «Никольский*/}
      {/*    парк» в Зеленограде , ФСИН России по г. Москве.*/}
      {/*  </Box>*/}
      {/*  <Swiper*/}
      {/*    navigation*/}
      {/*    // pagination={{ type: "fraction" }}*/}
      {/*    modules={[Navigation, Pagination]}*/}
      {/*    onSwiper={(swiper) => console.log(swiper)}*/}
      {/*    thumbs={{*/}
      {/*      swiper: thumbsSwiper,*/}
      {/*    }}*/}
      {/*    className="h-96 w-full rounded-lg"*/}
      {/*  >*/}
      {/*    {[*/}
      {/*      { in: 1, r: "png" },*/}
      {/*      { in: 2, r: "png" },*/}
      {/*      { in: 3, r: "svg" },*/}
      {/*      { in: 4, r: "svg" },*/}
      {/*      { in: 5, r: "png" },*/}
      {/*    ].map((item, index) => (*/}
      {/*      <SwiperSlide key={index}>*/}
      {/*        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>*/}
      {/*          <Box sx={classes.wrapperItem}>*/}
      {/*            <Image*/}
      {/*              src={`/photoNew/${item.in}.${item.r}`}*/}
      {/*              alt={"image"}*/}
      {/*              layout={"fill"}*/}
      {/*              // layout="responsive"*/}
      {/*              // height={200}*/}
      {/*              // width={200}*/}
      {/*              objectFit="contain"*/}
      {/*              objectPosition="center center" // По умолчанию 'center', но может быть изменено*/}
      {/*              quality={100}*/}
      {/*            />*/}
      {/*          </Box>*/}
      {/*        </Box>*/}
      {/*      </SwiperSlide>*/}
      {/*    ))}*/}
      {/*  </Swiper>*/}
      {/*</Box>*/}
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
  desc: {
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fcfbf9",
    padding: "50px",
    lineHeight: "30px",
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
