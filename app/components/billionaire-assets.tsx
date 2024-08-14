import styles from '../styles/billionaire-assets.module.css';

export interface IAssetProps {
  ticker: string;
  numberOfShares: number;
  exerciseOptionPrice?: number;
  currentPrice: number;
}

export interface FinancialAssetsProps {
  assets: IAssetProps[];
}

export default function BillionairesAssets({ assets }: FinancialAssetsProps) {
  return (
    <div className={styles.assets}>
      <h2>Financial Assets</h2>
      <div className={styles.assetGrid}>
        {assets.map((asset, index) => (
          <div key={index} className={styles.asset}>
            <p><strong>Ticker:</strong> {asset.ticker}</p>
            <p><strong>Shares:</strong> {asset.numberOfShares.toLocaleString()}</p>
            {asset.exerciseOptionPrice && (
              <p><strong>Exercise Price:</strong> ${asset.exerciseOptionPrice.toFixed(2)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
