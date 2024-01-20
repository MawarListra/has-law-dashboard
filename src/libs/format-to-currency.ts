export const formatToCurrency = (n: number, renderRp?: boolean): string => {
  const nStr = n.toString();

  const isNegativeValue = nStr.includes("-");
  let regex = nStr.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (isNegativeValue) regex = "-" + regex;
  if (renderRp) regex = "Rp. " + regex;

  return regex;
};
