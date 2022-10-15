import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  constructor(private http: HttpClient) { }

  consultaCnpj(Cnpj: string){
    if (Cnpj !== ''){
      const validaCnpj = /^[0-9]{8}$/;
      if (validaCnpj.test(Cnpj)){
        return this.http.get(`https://brasilapi.com.br/api/cnpj/v1/{cnpj}`);
      }
    }
    return of({});
  }
}