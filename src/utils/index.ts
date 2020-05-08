export function formatPrice(price: number) {
  let formatter = new Intl.NumberFormat();
  return formatter.format(price);
}
