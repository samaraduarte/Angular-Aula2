import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() location;

  @Output() atualizarEndereco = new EventEmitter();

  atualizaEndereco() {
    let name = 'Villa Mix';
    let location = {address: 'Mineirinho', city: 'Belo Horizonte', country: 'Brasil'};
    this.atualizarEndereco.emit({name, location});
  }
  constructor() { }

  ngOnInit(): void {
  }
}


