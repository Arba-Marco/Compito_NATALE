import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {
  esercizio = [
    { nome: 'porsche 911', data: 2019, prezzo: ' 161.733' },
    { nome: 'ferrari Roma', data: 2023, prezzo: '217.001' },
    { nome: 'audi r8', data: 2007 , prezzo: '170.138' },
    { nome: 'bugatti chiron', data: 2016, prezzo: '9.792.500 ' },
    { nome: 'lamborghini Avendator', data: 2011, prezzo: '430.730' },
    { nome: 'lancia delta', data: 1991, prezzo: '180.000' }
  ];

}
