import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.css']
})
export class CardsMenuComponent implements OnInit {


  @Input() title:any;

  constructor() { }

  ngOnInit(): void {
  }

}
