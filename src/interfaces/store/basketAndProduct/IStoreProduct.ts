import { IProduct } from './IProduct';

export interface IStoreProduct {
  data: Array<IProduct>;
  error: boolean;
  loading: boolean;
}
