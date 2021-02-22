import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageFilterPipe} from './product/shared/filter.pipe'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ProductDetailComponent } from './product/product.component';
import { ImageService } from './product/shared/product.service';
import { appRoutes } from  '../routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ProductDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
