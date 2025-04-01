import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';


export interface DemoDTO {
  id?: number,
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private baseUrl = "/api"

  constructor(private http: HttpClient) { }

  loadAll(): Observable<DemoDTO[]> {
    return this.http.get<DemoDTO[]>(this.baseUrl + "/list/elements");
  }

  create(dto: DemoDTO): Observable<DemoDTO> {
    // TODO implement
    return this.http.post<DemoDTO>(this.baseUrl + `/list/create`, dto);
  }

  update(id: number, dto: DemoDTO): Observable<DemoDTO> {
    // TODO implement
    return this.http.put<DemoDTO>(this.baseUrl + `/list/update/${id}`, dto)
  }

  delete(id: number): Observable<void> {
    // TODO implement
    return EMPTY;
  }
}
