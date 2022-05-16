import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() categoryClicked = new EventEmitter<void>();
  @Output() allergenClicked = new EventEmitter<void>();

  goToCategory(): void {
    this.categoryClicked.emit();
  }

  gotToAllergen(): void {
    this.allergenClicked.emit();
  }

}
