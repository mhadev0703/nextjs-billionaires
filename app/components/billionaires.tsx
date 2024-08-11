"use client"

import { useRouter } from "next/navigation";
import styles from "../styles/billionaire.module.css";

interface IBillionProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

const formatNetWorth = (netWorth: number): string => {
  const billions = Math.ceil(netWorth / 1000);
  return `${billions} Billion`;
};

export default function Billion({id, name, squareImage, netWorth, industries}: IBillionProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`)
  }
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={squareImage} alt={name} className={styles.image}/>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.details}>{formatNetWorth(netWorth)} / {industries.join(', ')}</p>
    </div>
  );
}