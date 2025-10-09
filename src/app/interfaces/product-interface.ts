export interface ProductInterface {
  _id: string;
  name: string;
  description: string;
  shortDescription: string;
  purshasePrice: number;
  sellingPrice: number;
  discount: number;
  images: string;
  categoryId: string;
  isFeature: boolean;
  isNew: boolean;
}
