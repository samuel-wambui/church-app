import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      'assets/church.png',
      'assets/saint.png'
    ];
  }
}
