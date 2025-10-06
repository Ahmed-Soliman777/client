import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../../Services/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.css',
})
export class CategoryForm implements OnInit {
  name!: string;
  id!: string;
  isEdit: boolean = false;
  constructor(
    private categoryServices: Category,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.isEdit = true;
      this.categoryServices.getCategoryById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }
  add() {
    console.log(this.name);
    this.categoryServices.addCategory(this.name).subscribe((result: any) => {
      alert('category added!');
      this.router.navigateByUrl('/admin/categories');
    });
  }
  update() {
    console.log(this.name);
    this.categoryServices.updateCategory(this.id, this.name).subscribe((result: any) => {
      alert('category updated!');
      this.router.navigateByUrl('/admin/categories');
    });
  }
}
