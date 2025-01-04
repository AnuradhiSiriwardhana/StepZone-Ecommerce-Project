import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Item } from '../../model/Item';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,HttpClientModule],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  public item: Item = new Item(0, "", 0, "", 0); // Initialize item object with all required arguments

  constructor(private http: HttpClient) {}

  addItem() {
    this.http.post("http://localhost:8080/item/add", this.item).subscribe({
      next: (res) => {
        alert("Item Added!");
      },
      error: (err) => {
        console.error("Error adding item:", err);
        alert("Failed to add item.");
      }
    });
  }
}