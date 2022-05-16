import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grenoble-hands-on-front-angular-mocks-backend';

  constructor(
    private readonly router: Router
  ) {
  }

  goToCategory(): void {
    void this.router.navigate(['category']);
  }
}
