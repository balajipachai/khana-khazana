import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burger Recipe', 'Steps to create a recipe', 'https://get.pxhere.com/photo/dish-food-recipe-snack-fast-food-cuisine-sandwich-vegetarian-food-baked-goods-power-supply-junk-food-beirut-mediterranean-food-finger-food-european-food-breakfast-sandwich-american-food-1375814.jpg'),
    new Recipe('French Fries', 'Steps to create french fries', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
