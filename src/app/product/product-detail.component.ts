import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product:IProduct; 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService : ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe({
      next: prods => {
        let p = prods.filter((prod: IProduct) => prod.productId === id);
        this.product = p[0];
      }
    })
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
