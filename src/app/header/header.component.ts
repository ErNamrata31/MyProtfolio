import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ReversePipe} from '../my-custom.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,ReversePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
