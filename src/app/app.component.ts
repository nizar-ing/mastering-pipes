import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  receiver_name: string;
  date: string;
  amount: number;
  miles: number;

  onInputChange(value: string) {
    this.receiver_name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
