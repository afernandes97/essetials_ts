import {DaoInterface} from './DaoInterface';
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface{
    
    nomeTabela: string= "tb_concessionaria";

    inserir(object: Concessionaria): boolean{
        console.log("logica de insert");
        return true
    }

    atualizar(object: Concessionaria): boolean{
        console.log("logica de update");
        return true
    }

    remover(id: number): Concessionaria{
        console.log("logica de Delete");
        return new Concessionaria('',[]);
    }
    selecionar(id: number): Concessionaria{
        console.log("logica de Select");
        return new Concessionaria('',[]);
    }

    selecionarTodos(): Array<Concessionaria>{
        console.log("logica de SelectAll");
        return [new Concessionaria('',[])]
    }

}