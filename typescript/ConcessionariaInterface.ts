//na interface definimos metodos que serao obrigatorios quando ela for declarada, no caso abaixo
//declaramos como obrigatorio o fornecimento do horario como um tipo simples de string
export interface ConcessionariaInterface{
    fornecerHorariosDeFuncionamento() : string;
}