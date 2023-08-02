import Map from "../Map/Map";
import DirectionTable from "../Table/Table";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.table}>
        <h1>Таблица 1 -Список маршрутов</h1>
        <DirectionTable />
      </div>
      <Map />s
    </div>
  );
}
