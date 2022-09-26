import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalorieserviceService {

  constructor(private http:HttpClient) { }

  calorieapi()
  {
    //let headers = new HttpHeaders().set('x-api-key','yours api key here');
    let headers = new HttpHeaders().set('x-api-key','mB4avD1zLJetSX4LxAMu1Q==2B8F5cOw3OTq0f7z');

    return this.http.get('https://api.calorieninjas.com/v1/nutrition?query=1 egg',{headers });
  }
}
