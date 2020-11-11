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

  cv:string = 'assets/CV/workCV(Colour).pdf'
  profilePicture:string = "src/assets/peninhand"
  ptMan:string = 'assets/images/ptman.jpg'
  safeTrans:string ='assets/images/safe-transaction.jpg'
  eltee:string = 'assets/images/eltee.jpg'

  list = [];
  placeholders = [];
  pageSize = 10;
  pageToLoadNext = 1;
  // loading = false;

  constructor() {}

  
}
