import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ContractService {
 private apiUrl = 'https://localhost:7231/api/Contracts';
 constructor(private http: HttpClient) {}
 // CREATE CONTRACT
 createContract(data: any): Observable<any> {
   return this.http.post(this.apiUrl, data);
 }
 // GET ALL CONTRACTS
 getAllContracts(): Observable<any> {
   return this.http.get(this.apiUrl);
 }
}