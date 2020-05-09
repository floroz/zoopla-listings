import moment from "moment";

export function formatPrice(price: number) {
  let formatter = new Intl.NumberFormat();
  return formatter.format(price);
}

export function formatDate(listingDate: string): string {
  return moment(listingDate).format("Do MMM YYYY");
}
