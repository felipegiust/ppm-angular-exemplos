import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  nome: String;

  constructor() { 
    this.nome="Felipe";
  }

  ngOnInit(): void {
  }

}
