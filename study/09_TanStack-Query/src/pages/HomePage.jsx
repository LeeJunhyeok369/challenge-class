import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import api from "./../api/api";

export default function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", { page: 2 }],
    queryFn: () => {
      return api.Products.getProducts();
    },
    refetchInterval: 1000,
  });

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>error...</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}
