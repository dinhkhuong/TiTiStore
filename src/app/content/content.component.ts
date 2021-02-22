import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../product/shared/product.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnChanges {

  images:any[];
  @Input() filterBy?: string = 'all'
  visibleImages:any[] = [];

  constructor(private imageService: ImageService) {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
