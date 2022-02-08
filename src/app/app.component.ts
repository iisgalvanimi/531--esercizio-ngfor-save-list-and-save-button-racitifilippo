import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '531--esercizio-ngfor-save-list-and-save-button-racitifilippo';

  lista:string[] = ["Filo", "Marco", "Falcio", "Piazzo"]

  variabile:string = ""

  addList(){
    this.lista.push(this.variabile)
    console.log(this.lista)
  }
}
