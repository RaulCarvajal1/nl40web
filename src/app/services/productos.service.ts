import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { uri_port } from './config';
import { producto_basico, producto } from '../interfaces/productos.interface';
import { val_ind } from '../interfaces/val_ind.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any){
    return this.http.post<any>(`http://${uri_port.url}:${uri_port.port}/api/productos`,data);
  }

  get(id: number){
    return this.http.get<producto[]>(`http://${uri_port.url}:${uri_port.port}/api/productos/${id}`);
  }

  getBasico(id: number){
    return this.http.get<producto_basico[]>(`http://${uri_port.url}:${uri_port.port}/api/productosbasicos/${id}`);
  }

  getById(id: number){
    return this.http.get<producto[]>(`http://${uri_port.url}:${uri_port.port}/api/producto/${id}`);
  }

  saltarProductos(id: number){
    return this.http.get<producto[]>(`http://${uri_port.url}:${uri_port.port}/api/siguiente_paso/${id}`);
  }

  delete(id: number){
    return this.http.delete<any>(`http://${uri_port.url}:${uri_port.port}/api/producto/${id}`);
  }

  getValInd(id: number){
    return this.http.get<val_ind[]>(`http://${uri_port.url}:${uri_port.port}/api/val_ind/${id}`);
  }
}
