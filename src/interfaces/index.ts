export interface IPropertyListing {
  id: number;
  price: number;
  beds: number;
  type: string;
  address: string;
  city: string;
  postcode: string;
  description: string;
  expired: boolean;
  images: string[];
}
