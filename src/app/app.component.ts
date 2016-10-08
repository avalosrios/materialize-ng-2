import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sorpresa Misteriosa';

  constructor(private router: Router){}

  menuClick(name: String){
    this.router.navigate(['/'+name]);
  }
}
