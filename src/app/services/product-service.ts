import { Injectable } from '@angular/core';

export interface ProductImageDto {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly products: ProductImageDto[] = [
    {
      ProductId: 'p1',
      ProductName: 'Coca',
      Price: 100,
      Image: 'assets/h1.webp',
    },
    {
      ProductId: 'p2',
      ProductName: 'Pepsi',
      Price: 300,
      Image: 'assets/h2.webp',
    },
    {
      ProductId: 'p3',
      ProductName: 'Sting',
      Price: 200,
      Image: 'assets/h3.webp',
    },
  ];

  getProductsWithImages(): ProductImageDto[] {
    return this.products;
  }

  getProductDetail(id: string): ProductImageDto | undefined {
    return this.products.find((product) => product.ProductId === id);
  }
}