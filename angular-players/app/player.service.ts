import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Myplayers } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getplayers()
  {
    return this.http.get<Myplayers[]>('http://localhost:1234/players');
  }

  postplayer(player:Myplayers)
  {
    return this.http.post<Myplayers>('http://localhost:1234/players',player);
  }

  // return this.http.delete(`${baseUrl}/${id}`);
  deleteplayer(playerId:number)
  {
    return this.http.delete('http://localhost:1234/players/'+playerId);
  }

  // putplayer(playerId:number)
  // {
  //   return this.http.put<Myplayers>('http://localhost:1234/players/'+playerId);
  // }


  getplayerByid(playerId:number)
  {
    return this.http.get<Myplayers>('http://localhost:1234/players/id/'+playerId);
  }


}
