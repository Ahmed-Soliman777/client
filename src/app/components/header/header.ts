import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../../Services/category';
import { CategoryInterface } from '../../interfaces/category-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  categoryCollection: CategoryInterface[] = [];
  constructor(private CategoryServices: Category) {}
  ngOnInit(): void {
    this.CategoryServices.getCategory().subscribe((result) => {
      this.categoryCollection = result;
    });
  }
}
