import { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { MOBILE_TELEPHONE, NICKTELEGRAM } from "@/const";

interface IProps {}

export const SocialNetworkIcons: FC<IProps> = () => {
  return (
    <div className={styles.section}>
      <a href={`https://t.me/${NICKTELEGRAM}`} target={"_blank"}>
        <Image src="/icons/icons-telegram.svg" alt={"image"} width={35} height={35} />
      </a>

      <a href={`whatsapp://send?phone=${MOBILE_TELEPHONE.replace(/[^+\d]/g, "")}`} target={"_blank"}>
        <Image src="/icons/icons-whatsapp.svg" alt={"image"} width={40} height={40} />
      </a>
    </div>
  );
};
