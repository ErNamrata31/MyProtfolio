import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './about/aboutus.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    {path:  'home',component:HomeComponent},
    {path:'about-us',component:AboutusComponent},
    {path:'skills',component:SkillsComponent},
    {path:'projects',component:ProjectComponent},
    {path: 'home', redirectTo: '', pathMatch: 'full' }
];
