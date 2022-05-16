import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '@domain/category/entities/category';
import { RetrieveCategoriesUseCase } from '@domain/category/usecases/retrieve-categories/retrieve-categories.usecase';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource!: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly retrieveCategoriesUseCase: RetrieveCategoriesUseCase
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Category>();
    this.retrieveCategoriesUseCase.execute().then(categories => {
      this.dataSource.data = categories;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
