import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../../Services/category';
import { CategoryInterface } from '../../interfaces/category-interface';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  categoryCollection: CategoryInterface[] = [];
  constructor(private CategoryServices: Category, private router: Router) {}
  ngOnInit(): void {
    this.CategoryServices.getCategory().subscribe((result) => {
      this.categoryCollection = result;
    });
  }
  onSearch(event: any) {
    // console.log(event.target.value);
    const query = event.target.value.trim();
    if (query) {
      this.router.navigate(['/products'], { queryParams: { search: query } });
    }
  }
  searchCategory(id: string) {
    this.router.navigate(['/products'], { queryParams: { categoryId: id } });
  }
}
