import { IProduct } from '../store/basketAndProduct/IProduct';

export interface IProductInfo {
  key: string;
  productInfo: IProduct;
  basket: boolean;
}

// Product

export interface IProductRequestSuccsess {
  type: string;
  data: IProduct;
}

export interface IProductDeleteShowRequestSuccsess {
  type: string;
  data: string;
}
