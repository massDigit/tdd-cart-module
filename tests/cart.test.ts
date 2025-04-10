import { describe, expect, it,beforeEach, } from "vitest";
import { cartService } from "src/cart";
import { productFactory } from "src/productFactory";


let cart :cartService;

beforeEach(() => {
  cart = new cartService()
});

describe("cart module", () => {
  it("should add a product to the cart", () => {
    // écrire le test ici
    const product = productFactory();
    cart.addProduct(product);
    expect(cart.cart.products.length).toBe(1);
  });

  it("should not add a product with negative quantity", () => {
    // écrire le test ici
    const product = productFactory({ quantity: -1 });
    expect(cart.cart.products.length).toBe(0);
    expect (()=> { cart.addProduct(product)}).toThrowError();
  });

  it("should not add a product with zero quantity", () => {
    // écrire le test ici
    const product = productFactory({ quantity: 0 });
    cart.addProduct(product);
    expect(cart.cart.products.length).toBe(0);
    expect (()=> { cart.addProduct(product)}).toThrowError();
  });

  it("should not add a product with negative price", () => {
    // écrire le test ici
    const product = productFactory({ price: -1 });
    cart.addProduct(product);
    expect (()=> { cart.addProduct(product)}).toThrowError();
    expect(cart.cart.products.length).toBe(0);
    
  });

  it("should not add a product with zero price", () => {
    // écrire le test ici
    const product = productFactory({ price: 0 });
    cart.addProduct(product);
    expect(cart.cart.products.length).toBe(0);
    expect (()=> { cart.addProduct(product)}).toThrowError();
  });

  it("should remove a product from the cart", () => {
    // écrire le test ici
    const product = productFactory({quantity: 1});
    cart.addProduct(product);
    expect(cart.cart.products.length).toBe(1);
    cart.removeProduct("1");
    expect(cart.cart.products.length).toBe(0);
  });

  it("should not remove a product that does not exist in the cart", () => {
    // écrire le test ici
    cart.removeProduct("nonexistentId");
    expect(cart.cart.products.length).toBe(0);
    expect (()=> { cart.removeProduct("nonexistentId")}).toThrowError()
  });

  
  it("should get the product count", () => {
    // écrire le test ici
    const product = productFactory();
    cart.addProduct(product);
    expect(cart.getProductCount()).toBe(1);
  });

  it("should get the product count when there are multiple products", () => {
    // écrire le test ici
    const product1 = productFactory();
    const product2 = productFactory();
    cart.addProduct(product1);
    cart.addProduct(product2);
    expect(cart.getProductCount()).toBe(2);
  });

  it("should get the product count when there are no products", () => {
    // écrire le test ici
    expect(cart.getProductCount()).toBe(0);
  });


  it("should get the total price of the cart", () => {
    // écrire le test ici
    const product1 = productFactory({ price: 10 });
    const product2 = productFactory({ price: 20 });
    cart.addProduct(product1);
    cart.addProduct(product2);
    expect(cart.getTotal()).toBe(30);
  });

  it("should not get the total price when there are no products", () => {
    // écrire le test ici
    expect(cart.cart.products.length).toBe(0);
    expect(cart.getTotal()).toThrowError();

  });

  it("should apply a discount code", () => {
    // écrire le test ici
    const product = productFactory({ price: 100 });
    cart.addProduct(product);
    cart.applyDiscount("DISCOUNT10");
    expect(cart.getTotal()).toBe(90);
  });

  
  it("should return the cart", () => {
    // écrire le test ici
    const product = productFactory();
    cart.addProduct(product);
    expect(cart.getCart()).toEqual({ products: [product] });
  });





});









// TODO : ajouter d'autres tests pour le module cart
