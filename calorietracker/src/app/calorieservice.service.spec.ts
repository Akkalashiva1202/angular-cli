import { TestBed } from '@angular/core/testing';

import { CalorieserviceService } from './calorieservice.service';

describe('CalorieserviceService', () => {
  let service: CalorieserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalorieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
