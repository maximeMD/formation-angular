import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Individual } from './individual';

@Injectable({
  providedIn: 'root'
})
export class IndividualService {

  public individualApiUrl = 'http://localhost:3000/individuals/';

  constructor(
    private http: HttpClient
  ) { }

  getAllIndividuals(): Observable<Individual[]> {
    return this.http.get<Individual[]>(this.individualApiUrl);
  }

  deleteIndividual(id){
    return this.http.delete(this.individualApiUrl + id);
  }

  updateIndividual(editIndividual : Individual){
    return this.http.put(this.individualApiUrl + editIndividual.id, editIndividual);
  }
}
