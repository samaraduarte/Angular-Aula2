import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco;
  @Input() cidade;
  @Input() pais;

  constructor() { }

  ngOnInit(): void {
  }

}
