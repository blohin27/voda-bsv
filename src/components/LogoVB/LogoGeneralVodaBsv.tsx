import {FC} from "react";
import styles from './styles.module.css'

export const LogoGeneralVodaBsv: FC<any> = () => {
  return <div className={styles.menu_logo} style={{border:'1px solid red'}}>
    <div className={styles.img_logo}></div>
    <div className={styles.text_logo}>
      <div >
        voda-bsv.ru
      </div>
      <div className={styles.text_deviz}>
        вода в каждый дом
      </div>
    </div>
  </div>
}
