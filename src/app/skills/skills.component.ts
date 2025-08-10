import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  frontendskills = [{name: 'HTML'},
     {name: 'CSS'},
      {name: 'JavaScript'},
      {name: 'JQuery'},
       {name: 'TypeScript'},
        {name: 'Angular'},
        
        {name: 'Bootstrap'},
        ];

  backendskills = [
     {name:'.Net Core'},
     {name:'.Net MVC'},
      {name: 'Node.js'},
      {name: 'Express.js'},
      {name: 'MongoDB'},
      {name: 'SQL Server'},
      {name: 'PostgreSQL'},
      {name: 'REST APIs'}];

VersionControlSkills = [
        {name: 'Git'},
      {name: 'GitHub'},
      {name: 'GitLab'}];
}
