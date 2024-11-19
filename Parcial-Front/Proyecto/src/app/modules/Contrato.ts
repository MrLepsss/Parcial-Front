export class Contrato{
    constructor(
        public id?: number | null,
        public identificar?: string | null,
        public valor?: number | null,
        public nombreContratante?: string | null,
        public documentoContratante?: string | null,
        public nombreContratista?: string | null,
        public documentoContratista?: string | null,
        public fechaInicial?: Date | null,
        public fechaFinal?: Date | null
        ){}
}