import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, TranslateModule]
})
export class CategoryBarComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories = [
    { id: 'all', name: 'All' },
    { id: 'fruits', name: 'Technology' },
    { id: 'vegetables', name: 'Kitchen' },
    { id: 'dairy', name: 'Clothing' },
    { id: 'beverages', name: 'Games' },
    { id: 'snacks', name: 'Skincare' },
    { id: 'special', name: 'Accesories' }
  ];

  selectedCategory = 'all';

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.categorySelected.emit(categoryId);
  }
} 