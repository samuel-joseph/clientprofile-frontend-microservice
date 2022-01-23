import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-profile-frontend';
  light: boolean = false;
  switch() {
    console.log("AM I HERE")
    this.light = !this.light;
  }
}
