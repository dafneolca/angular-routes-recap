import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn;
  }

  onLoadServers(id: number) {
    console.log('loading servers...');
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  onLoginToggle() {
    this.loggedIn = !this.loggedIn;
    this.loggedIn ? this.authService.login() : this.authService.logout();
  }
}
