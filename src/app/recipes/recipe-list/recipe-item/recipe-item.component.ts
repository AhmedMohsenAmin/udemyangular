import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index : number;
  @Output() selectedRecipe = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe (){
    this.selectedRecipe.emit();
  }
}
