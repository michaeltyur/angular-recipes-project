import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import{Recipe} from '../shared/models/recipe.model'
import {RecipeService} from '../recipe.service'

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  recipes$:Observable<Recipe[]>;

  private searchTerms=new Subject<string>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes$=this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recipeService.searchRecipe(term)),
    );
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
}
