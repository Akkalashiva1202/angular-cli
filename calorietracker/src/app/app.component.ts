import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Calorie } from 'src/calorie.model';
import { CalorieserviceService } from './calorieservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calorietracker';
  constructor(private caloserv:CalorieserviceService)
  {

  }
  caloriess:Calorie[]=[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.caloserv.calorieapi().subscribe(
      data=>{
        let myjson = JSON.parse(JSON.stringify(data));
        for( let i=0;i<myjson.caloriess.length;i++)
        {
          //  calories:number=0;
// carbohydrates_total_g:number=0;
// cholesterol_mg: number=0;
// fat_saturated_g:number=0;
// fat_total_g:number=0;
// fiber_g: number=0;
// name:string='';
// potassium_mg: number=0;
// protein_g:number=0;
// serving_size_g: number=0;
// sodium_mg: number=0;
// sugar_g: number=0;
          let cal = new Calorie();
            cal.calories = myjson.calories[i].calories;
            cal.carbohydrates_total_g = myjson.calories[i].carbohydrates_total_g;
            cal.cholesterol_mg = myjson.caloriess[i].cholesterol_mg;
            cal.fat_saturated_g = myjson.caloriess[i].fat_saturated_g;
            cal.fat_total_g = myjson.caloriess[i].fat_total_g;
            cal.fiber_g = myjson.caloriess[i].fiber_g;
            cal.name = myjson.caloriess[i].name;
            cal.potassium_mg = myjson.caloriess[i].potassium_mg;
            cal.protein_g = myjson.caloriess[i].protein_g;
            cal.serving_size_g = myjson.caloriess[i].serving_size_g;
            cal.sodium_mg = myjson.caloriess[i].sodium_mg;
            cal.sugar_g = myjson.caloriess[i].sugar_g;
            this.caloriess.push(cal);
        }

        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
