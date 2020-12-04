import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  progressValue: number = 0;
  sliderValue: number = 0;
  maxProgressValue: number = 30;
  increaseValue: number = 0;

  resetTimer() {
    this.progressValue = 0;
    this.maxProgressValue = this.sliderValue * 1000;

    let interval = setInterval(() => {
      this.progressValue = this.progressValue + 0.5;
      this.increaseValue = this.progressValue / 5;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, this.maxProgressValue);
  }
}
