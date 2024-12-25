const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function formatCurrency(price) {
  return intl.format(price);
}
