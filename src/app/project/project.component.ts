import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
 Items =[
  {image:'../../assets/images/sgcare.png',linkUrl:'https://sgcareindia.com/',Title:'Sg Care'},
  {image:'../../assets/images/19.png',linkUrl:'https://sgsquare.in/',Title:'Sg Square'},
  {image:'../../assets/images/topay.png',linkUrl:'https://topay.live/',Title:'ToPay'},
  {image:'../../assets/images/karyon.png',linkUrl:'https://karyon.organic/',Title:'Karyon Organic'},
  {image:'../../assets/images/naman.png',linkUrl:'http://www.shrinamaninfracity.com/MainPage/Index',Title:'Namaninfra City'},
  {image:'../../assets/images/mobilepe.png',linkUrl:'https://mobilepe.co.in/',Title:'Mobile Pe'}
 ];
  constructor() {}

}
