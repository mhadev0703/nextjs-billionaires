import styles from "../styles/billionaire-profile.module.css";

export interface IProfileProps {
  name: string;
  netWorth: number;
  country: string;
  industries: string[];
  bio: string[];
  squareImage: string;
}

export default function BillionaireProfile({ name, netWorth, country, industries, bio, squareImage }: IProfileProps) {
  return (
    <div className={styles.profile}>
      <img src={squareImage} alt={name} className={styles.image} />
      <h1>{name}</h1>
      <p><strong>Net Worth:</strong> {Math.ceil(netWorth / 1000)} Billion</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Industry:</strong> {industries.join(', ')}</p>
      <p><strong>Bio:</strong> {bio.join(' ')}</p>
    </div>
  );
}