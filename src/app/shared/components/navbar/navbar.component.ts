import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() categoryClicked = new EventEmitter<void>();

  goToCategory(): void {
    this.categoryClicked.emit();
  }

}
