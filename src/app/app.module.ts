import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CriseslistModule } from './crisilist/criseslist.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PagNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CriseslistModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
