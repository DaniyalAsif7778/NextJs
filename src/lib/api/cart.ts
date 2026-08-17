import { api } from "../api";

 export async function getCartProducts() {
    const response = await api.get("/carts")
    return response.data;
}