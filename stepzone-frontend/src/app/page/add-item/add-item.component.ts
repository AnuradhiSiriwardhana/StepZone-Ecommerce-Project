import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  imports: [RouterLink,NavigationBarComponent,FooterComponent],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  constructor(private http:HttpClient){}
     addItem(){
      this.http.post()
      
     }
}
