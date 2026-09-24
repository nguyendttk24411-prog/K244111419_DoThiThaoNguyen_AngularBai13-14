import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../services/catalog-service';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css'],
})
export class ServiceProductImageEventComponent {
  public products: ReturnType<ProductService['getProductsWithImages']>;
  public categories: ReturnType<CatalogService['getCategories']>;

  constructor(
    private productService: ProductService,
    private catalogService: CatalogService,
    private router: Router,
  ) {
    this.products = this.productService.getProductsWithImages();
    this.categories = this.catalogService.getCategories();
  }

  viewDetail(product: { ProductId: string }) {
    this.router.navigate(['service-product-image-event', product.ProductId]);
  }
}