import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor() { }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes       
    return of(HEROES);
  }
    getHero(id: number | string) {
       return this.getHeroes().pipe(
         // (+) before `id` turns the string into a number     
          map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
           );
           }
}
