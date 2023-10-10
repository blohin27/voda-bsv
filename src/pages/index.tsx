import {MyProvider} from "@/context/MyContext";
import {FC, useContext} from "react";
import {MyContext} from "@/context/MyContext";
import style from '../pages/index.module.css'
import {LogoGeneralVodaBsv} from "@/components/LogoVB/LogoGeneralVodaBsv";

export default function Home() {
  return (
    <>
      <MyProvider>
        <HomePage />
      </MyProvider>
    </>
  )
}

export const HomePage: FC<any> = () => {
  const data = useContext(MyContext)
  console.log(data)
  return <div className={style.test}>HomePage
    <LogoGeneralVodaBsv /></div>
}
