import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactComponent }
];
