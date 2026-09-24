import { Injectable } from '@angular/core';

export interface CatalogProduct {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

export interface ProductCategory {
  Cateid: string;
  CateName: string;
  Products: CatalogProduct[];
}

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly datas: ProductCategory[] = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/h1.webp' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/h2.webp' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/h3.webp' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heineken', Price: 500, Image: 'assets/h4.png' },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: 'assets/h5.webp' },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: 'assets/h6.jpg' },
      ],
    },
  ];

  getCategories(): ProductCategory[] {
    return this.datas;
  }
}
