import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() productClicked = new EventEmitter<void>();
  @Output() categoryClicked = new EventEmitter<void>();

  goToProduct(): void {
    console.log('goToProduct');
    this.productClicked.emit();
  }

  goToCategory(): void {
    console.log('goToCategory');
    this.categoryClicked.emit();
  }

}
