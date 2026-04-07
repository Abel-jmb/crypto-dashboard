import { formatCompact, formatCurrency, formatPercent } from "../helpers/formatNumber";

const CoinCard = ({ coin }) => {
  let formattedNumber = formatCurrency(coin.current_price);
  let formattedPercent = formatPercent(coin.price_change_percentage_24h);
  let formattedCompact = formatCompact(coin.market_cap)
  let isPositive = coin.price_change_percentage_24h > 0;

  return (
    <article>
      <div>
        <h2>
          {coin.name} {coin.symbol}
        </h2>
        <span className="mr-2">{formattedNumber}</span>
        <span className={isPositive ? "text-green-500" : "text-red-500"}>
          {formattedPercent}
        </span>
        <p>
          Market Cap: <span>{formattedCompact}</span>
        </p>
      </div>

      <div>
        <img src={coin.image} alt={coin.name} />
      </div>
    </article>
  );
};

export default CoinCard;
