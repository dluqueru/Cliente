import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { FormsModule } from '@angular/forms';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-cards',
  imports: [FormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnChanges, OnInit{

  public minions!: Minion [];

  constructor(private minionsService:MinionsService){}

  ngOnInit(): void {
      this.minionsService.getMinions()
        .subscribe({
          next: minions => {
            this.minions = minions
          }, error: error => console.log(error)
        })
  }
   
@Input() search:string = '';

//Monitorizo los cambios
ngOnChanges(changes: SimpleChanges): void {
  this.filter();
}

filter():void{
  // this.displayMinions =
  // this.minions.filter(minion => minion.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
}

}