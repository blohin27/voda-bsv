import React, { Component, FC } from "react";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import styles from "./styles.module.css";

//
interface Props {}
export const SimpleSlider: FC<Props> = () => {
  return (
    <div className={styles.fullWidthImageContainer}>
      <img
        style={{ objectFit: "cover", zIndex: 1 }}
        width={"100%"}
        height={"300px"}
        src={"/photo/sp22.jpg"}
        alt="Описание изображения"
      />
      <div className={styles.containerBlack}></div>
      <div className={styles.text}>Вернем воду или деньги!</div>
    </div>
  );
};
