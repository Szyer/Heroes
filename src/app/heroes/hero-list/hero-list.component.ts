import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of, switchMap } from 'rxjs';
import { HeroesModule } from '../heroes.module';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  hero$!: Observable<Hero[]>

  constructor(
   private service: HeroService
  ) {}

  ngOnInit(): void {
    this.hero$ = this.service.getHeroes()  
  }

}



