import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.html',
  styleUrls: ['./service-product-image-event-detail.css'],
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: ReturnType<ProductService['getProductDetail']>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id !== null) {
        this.selectedProduct = this.productService.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}