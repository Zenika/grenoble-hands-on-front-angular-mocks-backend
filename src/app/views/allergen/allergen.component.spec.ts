import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllergenComponent } from './allergen.component';
import { MockModule, MockService } from 'ng-mocks';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RetrieveAllergensUseCase } from '@domain/allergen/usecases/retrieve-allergens/retrieve-allergens.usecase';

describe('AllergenComponent', () => {
  let component: AllergenComponent;
  let fixture: ComponentFixture<AllergenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenComponent ],
      imports: [
        MockModule(MatTableModule),
        MockModule(MatPaginatorModule),
        MockModule(MatProgressSpinnerModule)
      ],
      providers: [
        {
          provide: RetrieveAllergensUseCase,
          useValue: MockService(RetrieveAllergensUseCase)
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
