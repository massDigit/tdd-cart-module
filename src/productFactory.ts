import { Product } from "./cart";


export function productFactory(product?: Partial<Product>): Product {
    const factory: Product = {
      id: product?.id || Date.now().toString(),
      name: product?.name || `Product ${Date.now()}`,
      quantity: product?.quantity || Math.floor(Math.random() * 100),
      price: product?.price || Math.floor(Math.random() * 100),
    };
    return factory;
  }