import { Component, OnInit } from '@angular/core';
import { Contrato } from "../../modules/Contrato";
import { ContratoService } from "../../services/contrato.service";


@Component({
    selector: 'app-lista',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{
    
    contratos: Contrato[] = [];

    constructor(
        private contratoService: ContratoService;
    ){}

    ngOnInit(): void{
        this.contratoService.getContratoExterno().then((get) => {
            this.contratos = get;
        }).catch((error) =>{
            console.error(error);
        })
    }
}
