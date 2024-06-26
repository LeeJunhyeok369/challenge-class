import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function HomePage() {
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery({
    queryKey: ["product", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });

  const handleClickaddItemToCart = (productId) => {
    addItemToCart(productId, {
      onSuccess: () => {
        const yes = confirm(
          "상품이 장바구니에 잘 추가되었습니다. 장바구니로 갈까요?"
        );
        yes && navigate("/cart");
      },
    });
  };

  console.log(products);
  return (
    <div>
      <h1>HomePage</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {products.map((product) => (
            <li key={product.id}>
              <h5>{product.name}</h5>
              <button onClick={() => handleClickaddItemToCart(product.id)}>
                장바구니 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
