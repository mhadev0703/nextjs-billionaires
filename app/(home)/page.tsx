import { API_URL } from "../config";
import Billion from "../components/billionaires";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getBillions() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const billions = await getBillions();
  return (
    <div className={styles.container}>
      {billions.map((billion) => (
        <Billion
          key={billion.id}
          id={billion.id}
          name={billion.name}
          squareImage={billion.squareImage}
          netWorth={billion.netWorth}
          industries={billion.industries}
        />
      ))}
    </div>
  );
}