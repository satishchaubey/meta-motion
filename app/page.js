import Image from "next/image";
import styles from "./page.module.css";
import HomeMain from "@/component/Layout/Home/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeMain/>
    </div>
  );
}
