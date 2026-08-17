import { useQuery } from "@tanstack/react-query";
import { getCartProducts } from "@/lib/api/cart";

function useGetProducts() {
  const {
    data: product,
    isPending,
    isSuccess,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: getCartProducts });
  return { product,    isPending,
isSuccess, error };
}

export default useGetProducts;
