import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandServices } from './../../Services/brand-services';

@Component({
  selector: 'app-brands-forms',
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './brands-forms.html',
  styleUrl: './brands-forms.css',
})
export class BrandsForms implements OnInit {
  name!: string;
  id!: string;
  isEdit: boolean = false;
  constructor(
    private brandServices: BrandServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.isEdit = true;
      this.brandServices.getBrandsById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }
  add() {
    console.log(this.name);
    this.brandServices.addBrand(this.name).subscribe((result: any) => {
      alert('brand added!');
      this.router.navigateByUrl('/admin/brands');
    });
  }
  update() {
    console.log(this.name);
    this.brandServices.updateBrand(this.id, this.name).subscribe((result: any) => {
      alert('brand updated!');
      this.router.navigateByUrl('/admin/brands');
    });
  }
}
