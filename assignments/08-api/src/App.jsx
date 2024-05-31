import React, { useEffect } from "react";
import { getBrands } from "./api/api.brand";
import { getProduct } from "./api/api.product";

export default function App() {
  useEffect(() => {
    console.log(getProduct(9587059));
    console.log(getBrands());
  }, []);
  return <div></div>;
}
