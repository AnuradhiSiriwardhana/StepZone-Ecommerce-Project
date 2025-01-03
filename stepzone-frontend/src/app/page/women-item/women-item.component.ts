import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-women-item',
  imports: [RouterLink,NavigationBarComponent,FooterComponent],
  templateUrl: './women-item.component.html',
  styleUrl: './women-item.component.css'
})
export class WomenItemComponent {

}
