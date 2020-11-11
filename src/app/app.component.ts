import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioBuild2020';
  fruits = ['Apple','Banana','Orange',
  'Kiwi','Pineapple','Crabapple',
  'Breadfruit','Persimmon','Agbalumo',
  'Strawberry','Mango','Peach']

  profilePicture:string = "src/assets/peninhand"
  

  list = [];
  placeholders = [];
  pageSize = 10;
  pageToLoadNext = 1;
  // loading = false;

  constructor() {}

  
}
