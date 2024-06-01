import { client } from "./api";

export async function getProducts() {
  const endpoint = `/products`;
  const response = await client.get(endpoint);
  const data = await response.data;
  return data;
}
export async function getProduct(productId) {
  const endpoint = `/products/${productId}`;
  const response = await client.get(endpoint);
  const data = await response.data;
  return data;
}
