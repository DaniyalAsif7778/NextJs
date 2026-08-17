import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/products";

function useGetProducts() {
  const {
    data:products ,
    isPending,
    isSuccess,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  return { products,isPending, isSuccess, error };
}

export default useGetProducts;
