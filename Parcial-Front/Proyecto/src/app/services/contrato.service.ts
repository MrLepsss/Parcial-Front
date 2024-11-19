import { Injectable } from '@angular/core';
import axios from 'axios';
import { Contrato } from '../modules/Contrato';

@Injectable({
    providedIn: 'root'
})

export class ContratoService{

    private url = 'http://localhost:8080/api/contrato';

    getContratoExterno(): Promise<Contrato[]>{
        return axios.get<Contrato[]>(`${this.url}/list`).then(response => response.data);
    }

    getContratoByIdExterno(id: number): Promise<Contrato>{
        return axios.get<Contrato>(`${this.url}/get/${id}`).then(response => response.data);
    }

}