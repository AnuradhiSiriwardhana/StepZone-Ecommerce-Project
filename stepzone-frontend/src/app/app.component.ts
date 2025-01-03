import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavigationBarComponent } from './page/navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,RouterModule,NavigationBarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 

  ngOnInit(): void {
    initFlowbite();
  }
 
}
