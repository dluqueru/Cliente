import { Component, OnInit, Input } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-card-details',
  imports: [],
  template: `
    <h1 class="text-center mt-4">Minion {{minion.name}}</h1>
    @if (!minion) {
        <p class="text-center">No hay minion con ese nombre :c</p>
    }
    <div class="container mt-5 d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img [src]="minion.img" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">{{minion.name}},
                            <small class="text-body-secondary">{{minion.side}} </small>
                            <small class="text-body-secondary">({{minion.birth}})</small>
                        </h5>
                        <p class="card-text">{{minion.bio}}</p>
                    </div>
                </div>
                <div class="col-md-2">
                    @if (minion.side === 'de los buenos') {
                        <img src="assets/img/de los buenos.PNG" class="img-fluid rounded-start" alt="..." style="height: 8vh;">
                    } @else {
                        <img src="assets/img/de los malos.PNG" class="img-fluid rounded-start offset-1" alt="..." style="height: 6vh;">
                    }
                </div>
            </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <a class="btn btn-secondary" href="./minions">Volver</a>
      </div>
  `
})
export class CardDetailsComponent implements OnInit{

  public minion!:Minion;

  constructor(private minionsService:MinionsService){}

  @Input() id!:string;

  ngOnInit():void {
    this.minionsService.getMinionById(this.id)
      .subscribe({
        next: minion => {
          this.minion = minion
        }, error: err => console.log(err)
      })
  }
}
