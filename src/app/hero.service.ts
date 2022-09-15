import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

import {Hero} from './hero';
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: Got the heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: Fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService) {  }
}
