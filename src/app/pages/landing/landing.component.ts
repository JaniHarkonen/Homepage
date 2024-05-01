import { Component } from '@angular/core';
import { TechnologyStackComponent } from '../../components/technology-stack/technology-stack.component';
import { TECHNOLOGIES } from '../../../assets/technologies/technologies';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TechnologyStackComponent, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  private usedTechnologies: string [] = [
    TECHNOLOGIES["angular"].id
  ];

  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    setTimeout(
      () => this.router.navigateByUrl("/about"), 
      8000
    );
  }

  public getTechnologies(): string[] {
    return this.usedTechnologies;
  }
}
