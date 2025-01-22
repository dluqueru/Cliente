import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="#">Minioland</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item active">
                    <a class="nav-link" routerLink='/home' routerLinkActive='active'>Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink='/minions' routerLinkActive='active'>Minions</a>
                  </li>
                </ul>
                <form class="d-flex ms-auto">
                  <input class="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search" [(ngModel)]="search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>`
})
export class NavbarComponent {

  @Output() searchEvent = new EventEmitter<string>();

  search:string = '';

  emitSearch(event:Event){
    // this.search = event.target.value;
  }

}
