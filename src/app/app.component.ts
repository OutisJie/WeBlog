import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  blogger: Blogger = {
    id: 1,
    name: 'OutisJie'
  };
}
export class Blogger {
  id: number;
  name: string;
}
