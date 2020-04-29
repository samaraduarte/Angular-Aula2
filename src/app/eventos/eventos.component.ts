import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  evento = [
    {name: 'PHP Conference', date: '6/30/2020', time: '10am', location: {address: 'UniBH ', city: 'Belo Horizonte', country: 'Brasil'}},
  ];

  eventos = [
    {name: 'Villa Mix', date: '9/26/2020', time: '10am', location: {address: 'Mineirão ', city: 'BH', country: 'Brasil'}},
    {name: 'Rock In Rio', date: '4/15/2020', time: '9am', onlineUrl: 'https://www.rockinrio.com.br/'},
    {name: 'Campus Party', date: '6/10/2020', time: '8am'},
    {name: 'Loolapalooza', date: '4/15/2020', time: '9am', onlineUrl: 'http://www.loolapalooza.com'},
    // tslint:disable-next-line: max-line-length
    {name: 'Samba Prime', date: '6/10/2020', time: '8am', location: {address: 'Expominas', city: 'Belo Horizonte', country: 'Brasil'}, onlineUrl: 'http://www.sambaprime.com.br'}
  ];

  constructor() {  }

  ngOnInit(): void {
  }

  receberEnderecoAtualizado(event) {
    this.eventos.forEach( evento => {
      // tslint:disable-next-line: triple-equals
      if (evento.name == event.name){
        evento.location = event.location;
      }
    });
 }

}


