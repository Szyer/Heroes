import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroesDetailComponent,
  
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
