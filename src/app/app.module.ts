import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { CharToSpacePipe } from './shared/CharToSpace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CharToSpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
