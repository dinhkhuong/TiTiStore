import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductDetailComponent implements OnInit {
  image:any

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id'])
  }

}
