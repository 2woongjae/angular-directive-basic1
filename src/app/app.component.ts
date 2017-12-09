import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isVisible = false;
  list = [
    {url: 'https://angular.io/tutorial', title: 'Tour of Heroes'},
    {url: 'https://github.com/angular/angular-cli/wiki', title: 'CLI Documentation'},
    {url: 'https://blog.angular.io/', title: 'Angular blog'}
  ];
}
