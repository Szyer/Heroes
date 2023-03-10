import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent {


  hero!: Observable<Hero[]>
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) {}


    ngOnInit(): void {
    
        switchMap((params: ParamMap) => this.heroService.getHero(parseInt(params.get('id')!))) 
    }
  

}
