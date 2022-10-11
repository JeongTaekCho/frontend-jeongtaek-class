import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <button className={styles.button1}>빨간색</button>
      {process.browser && <button className={styles.button2}> 초록색</button>}
      <button className={styles.button3}>노란색</button>
    </div>
  );
}
