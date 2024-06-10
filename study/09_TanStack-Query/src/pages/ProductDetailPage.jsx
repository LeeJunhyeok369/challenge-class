import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import api from "./../api/api";
import Page from "./../components/Page";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", { id: productId }],
    queryFn: () => api.Products.getProduct(productId),
  });

  if (isLoading) return <Page>Loading...</Page>;
  if (isError) return <Page>error...</Page>;

  return <Page>{product.name}</Page>;
}
