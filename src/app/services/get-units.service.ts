import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.inteface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  constructor(private httpClient: HttpClient) {}

  getAllUnits(): Observable<UnitsResponse>;
}
