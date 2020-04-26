import { EnderecoComponent } from './endereco/endereco.component';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  evento = [
    {name: 'PHP Conference',
     date: '6/30/2020',
     time: '10am',
     location: {address: 'UniBH ', city: 'Belo Horizonte', country: 'Brasil'}},
 ];

  constructor() {  }

  ngOnInit(): void {
  }


  receberEnderecoAtualizado($event) {
    this.evento = Object.values($event);
    console.log($event);
 }
}


