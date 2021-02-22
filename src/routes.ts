import { Routes } from "@angular/router"
import { ContentComponent } from "./app/content/content.component"
import { ProductDetailComponent } from "./app/product/product.component"

export const appRoutes:Routes = [
  { path: "content", component: ContentComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "", redirectTo: "/content", pathMatch: 'full' },
]
