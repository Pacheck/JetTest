export interface Client {
    id: number,
    nome: String,
    nascimento: String,
    valor: number,
    email: String,
    profession: String,
}

export interface Operator {
    id: string;
    name: string;
    clients: Client[]
}

export interface HookApiResponse {
    status: number;
    data: Operator[];
}