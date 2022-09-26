import { Component } from '@angular/core';
import { Myplayers } from './player.model';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Players';
  status: string | undefined;
  constructor(private playerserv:PlayerService)
  {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getplayers();
  }
  players:Myplayers[]=[];
  getplayers()
  {
    this.playerserv.getplayers().subscribe(
      data=>{
        this.players = data;
      },
      error=>{
        console.log(error);
      }
      )
    }

    player = new Myplayers();
    addplayer()
    {
      this.playerserv.postplayer(this.player).subscribe(
        data=>{
          alert("player added ");
          this.getplayers();
        },
        error=>{
          console.log(error);
        }
        )
      }

   idd:number=0
  deleteplayer(idd:number)
  {
    this.playerserv.deleteplayer(idd).subscribe(
      data=>{
        alert("player deleted :"+idd);
        this.getplayers();
    //   this.status = 'Delete successful';
      },
      error=>{
        console.log(error);
      }
    )
  }

  getbyidplayer:number=0;
  getbyid(getbyidplayer: number)
  {
    this.playerserv.getplayerByid(getbyidplayer).subscribe(
      data=>{
        this.getplayers();
      //  this.status = 'data get  successful';

      },
      error=>{
        console.log(error);
      }
    )
  }

}
