import { queryOptions, keepPreviousData } from "@tanstack/react-query";
import api from "../api";
import { ProductTypes } from "../types/productTypes";

interface Page<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const productsQuery = (filters: { category?: string; page?: number }) =>
  queryOptions({
    queryKey: ["products", filters],
    queryFn: () => {
      const qs = new URLSearchParams();
      if (filters.category) qs.set("category", filters.category);
      if (filters.page) qs.set("page", String(filters.page));
      return api<Page<ProductTypes>>(`/api/products/?${qs}`);
    },
    placeholderData: keepPreviousData,
  });

export const productQuery = (id: string | number) =>
  queryOptions({
    queryKey: ["product", id],
    queryFn: () => api<ProductTypes>(`/api/products/${id}`),
  });
