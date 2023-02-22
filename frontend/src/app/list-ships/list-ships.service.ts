import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ListShipsService {
  
  constructor(
    private http: HttpClient,
  ) { }

  private url = 'ship';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getShips():Observable <any>{
    return this.http.get(this.url)
  }

  getShipById(id:number){
    return this.http.get(this.url+'?id='+id, this.httpOptions)
  }

  newShip(data: unknown){
    return this.http.post(this.url, data, this.httpOptions)
  }

  updateShip(data: unknown){
    return this.http.put(this.url, data, this.httpOptions);
  }

}
