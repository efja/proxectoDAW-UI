// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIFilter } from 'src/app/helpers/uri-filter.helper';
import { environment } from '../../../environments/environment';
import { ResponseData } from '../../interfaces/response-data.interface';

// ##################################################################################################
// ## CLASE BaseService
// ##################################################################################################
export abstract class BaseModelService {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  protected uri : string = environment.API_URI;

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(protected http: HttpClient) { }

  // ************************************************************************************************
  // ** MÉTODOS CONEXIÓN BD
  // ************************************************************************************************
  protected setEndpoint(endpoint: string) {
    this.uri = `${this.uri}/${endpoint}`;
  }

  // ************************************************************************************************
  // ** MÉTODOS CRUD (CREACIÓN)
  // ************************************************************************************************
  // ------------------------------------------------------------------------------------------------
  // -- POST
  // ------------------------------------------------------------------------------------------------
  public create(obj: any): Observable<ResponseData> {
    const url = `${this.uri}`;

    return this.http.post<ResponseData>(url, obj);
  }

  public createList(objs: any[]): Observable<ResponseData> {
    const url = `${this.uri}`;

    return this.http.post<ResponseData>(url, objs);
  }

  // ************************************************************************************************
  // ** MÉTODOS CRUD (READ)
  // ************************************************************************************************
  // ------------------------------------------------------------------------------------------------
  // -- GET
  // ------------------------------------------------------------------------------------------------
  public getAll(filters? : string): Observable<ResponseData> {
    let queryFilters = '';

    if (filters) {
      const queryParams = new APIFilter(filters);
      queryFilters = `?${queryParams.getQueryString()}`;
    }

    const url = `${this.uri}${queryFilters}`;

    return this.http.get<ResponseData>(url);
  }

  public get(id: string, filters?  : string): Observable<ResponseData> {
    let queryFilters = '';

    if (filters) {
      const queryParams = new APIFilter(filters);
      queryFilters = `?${queryParams.getQueryString()}`;
    }

    const url = `${this.uri}/${id}${queryFilters}`;

    return this.http.get<ResponseData>(url);
  }

  // ************************************************************************************************
  // ** MÉTODOS CRUD (UPDATE)
  // ************************************************************************************************
  // ------------------------------------------------------------------------------------------------
  // -- PATCH
  // ------------------------------------------------------------------------------------------------
  public modify(id: string, objPatch: any): Observable<ResponseData> {
    const url = `${this.uri}/${id}`;

    return this.http.patch<ResponseData>(url, objPatch);
  }

  // ************************************************************************************************
  // ** MÉTODOS CRUD (DELETE)
  // ************************************************************************************************
  // ------------------------------------------------------------------------------------------------
  // -- DELETE
  // ------------------------------------------------------------------------------------------------
  public delete(id: string): Observable<ResponseData> {
    const url = `${this.uri}/${id}`;

    return this.http.delete<ResponseData>(url);
  }

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
}