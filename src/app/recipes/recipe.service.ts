import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingrdiant} from "../shared/Ingrediant.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService
{

  constructor(private slService:ShoppingListService) {
  }

  private Recipes : Recipe[] = [
    new Recipe('First Recipe',
      'This is simply test for recipe',
      'https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg',
      [
      new Ingrdiant('ingrdiant one',5),
      new Ingrdiant('ingrdiant two',5),
      new Ingrdiant('ingrdiant three',5),
    ]),
    new Recipe('Second Recipe',
      'This is simply test for recipe to move between them',
      'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
      [
        new Ingrdiant('ingrdiant one',9),
        new Ingrdiant('ingrdiant two',8),
        new Ingrdiant('ingrdiant three',4),
      ]),
    new Recipe('Third Recipe',
      'This is simply test for recipe to move to the third recipe',
      'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg',
        [
        new Ingrdiant('ingrdiant one',7),
          new Ingrdiant('ingrdiant two',8),
          new Ingrdiant('ingrdiant three',9),
        ])
  ]

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes(){
    return this.Recipes;
  }

  addIngerdiantsToShoppingList(ingridants:Ingrdiant[]){
    this.slService.addListOfIngerdiants(ingridants);
  }
}
