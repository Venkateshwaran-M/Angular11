import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title='Angular'
  name='venky'

  constructor() { }
  nav(){
    console.log('hi boss')
    
    var input = document.getElementById('button') as HTMLInputElement;
    input.innerHTML = "I am Getting Boring";
  }

  ngOnInit(): void {
  }

}
