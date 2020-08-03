import { Categories } from './categories.model';

export interface Games {
  categories: string[];
  name: string;
  image: string;
  id: string;
  jackpots?: number;
}
