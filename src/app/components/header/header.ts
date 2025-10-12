import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../../Services/category';
import { CategoryInterface } from '../../interfaces/category-interface';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Auth } from '../../Services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  categoryCollection: CategoryInterface[] = [];
  searchTerm!: string;
  constructor(
    private CategoryServices: Category,
    private router: Router,
    public authService: Auth
  ) {}
  ngOnInit(): void {
    this.CategoryServices.getCategory().subscribe((result) => {
      this.categoryCollection = result;
    });
  }
  onSearch(event: any) {
    // console.log(event);
    const query = event.target.value.trim();
    if (query) {
      this.router.navigate(['/products'], { queryParams: { searchTerm: query } });
    }
  }
  btnSearch(search: any) {

    const query = search.trim();
    if (query) {
      this.router.navigate(['/products'], { queryParams: { searchTerm: query } });
    }
  }
  searchCategory(id: string) {
    this.searchTerm = '';
    this.router.navigate(['/products'], { queryParams: { categoryId: id } });
  }
  logout() {
    localStorage.clear();
  }
}
