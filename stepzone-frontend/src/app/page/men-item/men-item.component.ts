import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-men-item',
  imports: [RouterLink,NavigationBarComponent,FooterComponent],
  templateUrl: './men-item.component.html',
  styleUrl: './men-item.component.css'
})
export class MenItemComponent {

}
