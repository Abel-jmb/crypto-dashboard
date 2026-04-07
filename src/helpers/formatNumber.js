export const formatCurrency = (number) => {
  const formatterCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return formatterCurrency
};

export const formatPercent = (number) => {
  const formatterPercent = new Intl.NumberFormat("en-US", {
    style: "percent",
  }).format(number / 100);

  return formatterPercent
};


export const formatCompact = (number) => {
  const formatterCompact = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(number);

  return formatterCompact
};
