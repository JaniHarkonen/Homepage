import { Component } from '@angular/core';
import { TechnologyStackComponent } from '../../components/technology-stack/technology-stack.component';
import { Router, RouterModule } from '@angular/router';

const TRANSITION_TIME = 8000;

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TechnologyStackComponent, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  private router: Router;
  private transitionTimeout: any;

  constructor(router: Router) {
    this.router = router;
    this.transitionTimeout = null;
  }

  ngOnInit() {
    this.transitionTimeout = setTimeout(
      () => this.router.navigateByUrl("/about"), 
      TRANSITION_TIME
    );
  }

  ngOnDestroy() {
    clearTimeout(this.transitionTimeout);
  }
}
