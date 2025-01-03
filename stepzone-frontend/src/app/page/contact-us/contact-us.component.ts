import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink,NavigationBarComponent,FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
