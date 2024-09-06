import { Component, OnInit } from '@angular/core'; // Add OnInit interface
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for Angular directives like *ngFor
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { // Implement OnInit for the lifecycle hook
  foodImages: string[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void { // Make sure to implement ngOnInit
    this.foodImages = this.foodService.getAll(); // Populate images on component initialization
  }
}
