import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-us',
  imports: [RouterModule,RouterLink,NavigationBarComponent,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
