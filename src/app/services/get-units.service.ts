import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  constructor(private httpClient: HttpClient) { }

  getAllUnits(): Observable<UnitsResponse>;
}
