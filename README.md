# Aula2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Exercício Angular 2 - Prof. Ramon Pereira - Desenvolvimento Mobile - UniBH
2020/1
Diretivas Angular e Preparação para Consumo de Serviços.
Treinando..
1) Utilizando o exercício anterior “Angular 1” crie um novo componente chamado
datas.
2) Envie a data do evento inicial, do único evento via @Input para o componente
datas.
3) Adicione o componente datas no componente Eventos exatamente no local
onde ele estava anteriormente sendo exibido.
Utilizando o exercício anterior “Angular 1” faça as seguintes modificações: A página
de eventos está exibindo um evento e seu endereço. Crie um componente filho
chamado “endereco” que irá trabalhar com o endereço do Evento e iŕa exibir este
endereço no componente principal. Passe o atributo localização de cada evento
para do componente evento para o componente endereço. *DICA* chame o
componente endereço dentro de um ngFor passando o evento.location como
parâmetro. ** Não esqueça de importar o decorator Input do angular/core
1) Crie um componente endereço que tem uma propriedade @Input para
dados de endereço.
2) Importar este componente no app component (Se você utilizar o ng
generate isto é feito automaticamente).
3) Atualize o componente eventos para passar o endereço como @Input
em cada chamada do novo componente criado. Utilize a diretiva ngIf
para verificar se o evento possui ou não localização na hora da
chamada.
Ainda utilizando o exercício anterior, agora atualizado você irá treinar a diretiva
Output. O objetivo é que exista um botão atualizar endereço no componente filho
que faça a alteração do endereço do evento “Villa Mix” de forma estática. Para isto
você irá trabalhar com a atualização de um destes eventos.
1) No componente evento, crie uma função chamada:
receberEnderecoAtualizado que deverá receber um objeto do tipo
eventEmitter.
Esta função deverá percorrer todos os eventos disponíveis e atualizar o
endereço do evento que o nome for igual ao nome enviado pelo
componente filho. Deverá ser colocado o novo endereço, recebido no
componente filho como o endereço do objeto.
2) Adicione no componente endereço, o objeto Output para atualização do
endereço.
@Output() atualizaEndereco = new EventEmitter();
Este Output é do tipo EventEmitter();
3) Adicione no template do componente endereco um botão “Atualizar
Endereço” com o evento de click chamando a função atualizaEndereco.
4) Crie uma função atualizaEndereco para atualizar o endereço esta função
deverá conter os seguintes objetos:
let name = "Villa Mix";
let location = {address: 'Mineirinho', city: 'Belo Horizonte',
country: 'Brasil'};
Além disso, deverá ter a chamada do eventEmitter passando esss dois
objetos.
5) Adicione na chamada do componente endereço a diretiva de Output
(atualizarEndereco)="receberEnderecoAtualizado($event)"
Na qual ela escutará um evento e a chamada da função
atualizarEndereco dentro do componente filho.
