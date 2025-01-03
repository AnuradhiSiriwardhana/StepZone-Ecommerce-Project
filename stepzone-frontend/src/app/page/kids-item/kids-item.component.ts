import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-kids-item',
  imports: [RouterLink,NavigationBarComponent,FooterComponent],
  templateUrl: './kids-item.component.html',
  styleUrl: './kids-item.component.css'
})
export class KidsItemComponent {

}
