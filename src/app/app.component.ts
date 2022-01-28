import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.counter += 1;
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.counter -= 1;
  }

  clear(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
