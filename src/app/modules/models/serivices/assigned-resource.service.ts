// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseModelService } from './base-model.service';

// ##################################################################################################
// ## CONSTANTES
// ##################################################################################################
const ENDPOINT : string = 'assignedResources';

// ##################################################################################################
// ## CLASE AssignedResourceService
// ##################################################################################################
@Injectable({
  providedIn: 'root'
})
export class AssignedResourceService extends BaseModelService {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(protected override http: HttpClient) {
    super(http);

    this.setEndpoint(ENDPOINT);
  }

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
}