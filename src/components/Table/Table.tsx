import { Table } from "antd";
import styles from "./table.module.scss";

const dataSource = [
  {
    key: "1",
    маршрут: "Маршрут №1",
    point1: `59.84660399, 30.29496392`,
    point2: `59.82934196, 30.42423701`,
    point3: `59.83567701, 30.38064206

    `
  },
  {
    key: "2",
    маршрут: "Маршрут №2",
    point1: `59.82934196, 30.42423701`,
    point2: `59.82761295, 30.41705607`,
    point3: `59.84660399, 30.29496392`
  },
  {
    key: "3",
    маршрут: "Маршрут №3",
    point1: `59.83567701, 30.38064206`,
    point2: `59.84660399, 30.29496392`,
    point3: `59.84660399, 30.29496392`
  }
];

const columns = [
  {
    title: "Маршрут",
    dataIndex: "маршрут",
    key: "маршрут"
  },
  {
    title: "Точка 1(lat,lng)",
    dataIndex: "point1",
    key: "point1"
  },
  {
    title: "Точка 2(lat,lng)",
    dataIndex: "point2",
    key: "point2"
  },
  {
    title: "Точка 3(lat,lng)",
    dataIndex: "point3",
    key: "point3"
  }
];

const DirectionTable = () => {
  return (
    <Table
      className={styles.tableInfo}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default DirectionTable;
