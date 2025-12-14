export interface CreateSweetInput {
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export interface SweetResponse {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export interface SweetFilters {
  search?: string;
  category?: string;
}