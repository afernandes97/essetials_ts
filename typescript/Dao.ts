import {DaoInterface} from './DaoInterface';

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string= "tb_pessoa";

    inserir(object: T): boolean{
        console.log("logica de insert");
        return true
    }

    atualizar(object: T): boolean{
        console.log("logica de update");
        return true
    }

    remover(id: number): T{
        console.log("logica de Delete");
        return Object();
    }
    selecionar(id: number): T{
        console.log("logica de Select");
        return Object();
    }

    selecionarTodos(): Array<T>{
        console.log("logica de SelectAll");
        return [Object()]
    }
}