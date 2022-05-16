import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockModule, MockService } from 'ng-mocks';
import { RetrieveCategoriesUseCase } from '@domain/category/usecases/retrieve-categories/retrieve-categories.usecase';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryComponent ],
      imports: [
        MockModule(MatTableModule),
        MockModule(MatPaginatorModule),
        MockModule(MatProgressSpinnerModule)
      ],
      providers: [
        {
          provide: RetrieveCategoriesUseCase,
          useValue: MockService(RetrieveCategoriesUseCase)
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
