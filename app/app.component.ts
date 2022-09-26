import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Shivas App';
 name="shiva";
 money=10;
 moneydollar:String="$50.00";
 nowdate = new Date();

}
