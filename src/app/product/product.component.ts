import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../Services/alertify.service'
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]

})
export class ProductComponent implements OnInit {
  filterText = "";
  title = "Ürün Listesi";
  products: Product[] = [];

  constructor(private alertifyService: AlertifyService,
     private productSevice: ProductService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productSevice.getProducts(params["categoryId"]).subscribe(data =>
        this.products = data);
    })

  }

  addToCart(product: any) {

    this.alertifyService.success(product.categoryId + "added");
  }
  test(mesaj: string) {
    document.write(mesaj + "Merhaba");
  }
  runalert() {
    this.alertifyService.success('Çalıştım');
  }

}
