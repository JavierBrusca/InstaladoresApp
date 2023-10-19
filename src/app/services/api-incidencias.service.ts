import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Comunicaciones } from '../models/comunicaciones';
import { Partes } from '../models/partes';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiIncidenciasService {

  basePath="http://localhost:8080/"
  
  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log("Ha ocurrido un error" , error,error.message);
    }
    else{
      console.log("Codigo error ${error.status}, "+"Body: ${error.error}");
    }
    return throwError ('Ha sucedido un problema, reintentalo más tarde');
  }  

  

}
