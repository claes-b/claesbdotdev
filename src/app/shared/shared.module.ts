import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [MenuComponent, FooterComponent, PageNotFoundComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
