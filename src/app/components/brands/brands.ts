import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrandServices } from './../../Services/brand-services';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { BrandInterface } from './../../interfaces/brand-interface';

@Component({
  selector: 'app-brands',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'action'];
  dataSource: MatTableDataSource<BrandInterface>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private brandService: BrandServices) {
    this.brandService.getBrands().subscribe((result: any) => {
      console.log(result);
    });
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit() {
    this.getServerData();
  }

  private getServerData() {
    this.brandService.getBrands().subscribe((result) => {
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteItem(id: string) {
    this.brandService.deleteBrand(id).subscribe((result: any) => {
      alert('Brand deleted!');
      this.getServerData();
    });
  }
}
