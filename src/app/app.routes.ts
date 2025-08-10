import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './about/aboutus.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404 page
];



