import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router) {}
  
  // findRoute() {
  //   const url = this.router.url;
  //   console.log(url);
  //   console.log(url !== '/about');
  //   return true;
  // }

}
