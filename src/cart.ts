import { productFactory } from "./productFactory";
import { z } from "zod";

const ProductSchema = z.object({ 
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number()
});

const CartSchema = z.object({
  products: z.array(ProductSchema)
});

export type Product = z.infer<typeof ProductSchema>;

export type Cart = z.infer<typeof CartSchema>;

export class cartService {

 public cart: Cart;

  constructor() {
    this.cart = { products: [] };
  }

  public addProduct(product: Product) {
    if (product.quantity > 0 && product.price > 0) {
      this.cart.products.push(product);
    }
    else {
      throw new Error("Invalid product quantity");
    }
  }
  
  public removeProduct(productId: string): void {
  }

  public getProductCount(): void {
  }

  public getTotal(): number {
    return -1;
  }

  public getCart(): Cart {
 
  }

  public applyDiscount(code: string): void {
  }
}




