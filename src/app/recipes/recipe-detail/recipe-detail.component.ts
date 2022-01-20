import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //@Input() selectedRecipeDetails : Recipe;
  selectedRecipeDetails: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipeDetails = this.recipeService.getRecipeByIndex(this.id);
      }
    );
  }

  addToShoppingList() {
    this.recipeService.addIngerdiantsToShoppingList(this.selectedRecipeDetails.ingerdiantes);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }

}
