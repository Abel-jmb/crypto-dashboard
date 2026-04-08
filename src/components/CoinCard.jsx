import { formatCompact, formatCurrency, formatPercent } from "../helpers/formatNumber";

const CoinCard = ({ coin }) => {
  let formattedNumber = formatCurrency(coin.current_price);
  let formattedPercent = formatPercent(coin.price_change_percentage_24h);
  let formattedCompact = formatCompact(coin.market_cap)
  let isPositive = coin.price_change_percentage_24h > 0;

  return (
    <article className="flex justify-between rounded-4xl p-6 bg-neutral-100 font-bold dark:bg-slate-800">
      <div>
        <h2>
          {coin.name} <span className="uppercase">{coin.symbol}</span>
        </h2>
        <p className="mr-2">{formattedNumber}</p>
        <p className={isPositive ? "text-green-500" : "text-red-500"}>
          {formattedPercent}
        </p>
        <p>
          Market Cap: <span>{formattedCompact}</span>
        </p>
      </div>

      <div className="h-24 w-24">
        <img className="w-full h-full object-contain" src={coin.image} alt={coin.name} />
      </div>
    </article>
  );
};

export default CoinCard;
