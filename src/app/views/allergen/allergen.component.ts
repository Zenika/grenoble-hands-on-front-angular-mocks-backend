import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RetrieveAllergensUseCase } from '@domain/allergen/usecases/retrieve-allergens/retrieve-allergens.usecase';
import { Allergen } from '@domain/allergen/entities/allergen';

@Component({
  selector: 'app-allergen',
  templateUrl: './allergen.component.html',
  styleUrls: ['./allergen.component.css']
})
export class AllergenComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource!: MatTableDataSource<Allergen>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly retrieveAllergensUseCase: RetrieveAllergensUseCase
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Allergen>();
    this.retrieveAllergensUseCase.execute().then(allergens => {
      this.dataSource.data = allergens;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
