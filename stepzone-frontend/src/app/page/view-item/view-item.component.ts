import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GETItem } from '../../model/GETItem'; // Ensure the correct path to the GETItem interface or class
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-item',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  items: GETItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.http.get<GETItem[]>('http://localhost:8080/items').subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  }

  deleteItem(id: number): void {
    this.http.delete(`http://localhost:8080/items/${id}`).subscribe({
      next: () => {
        this.items = this.items.filter(item => item.id !== id);
      },
      error: (err) => {
        console.error('Error deleting item:', err);
      }
    });
  }
}