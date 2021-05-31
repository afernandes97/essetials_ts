import {DaoInterface} from './DaoInterface';
import Pessoa from './Pessoa';

export class PessoaDao implements DaoInterface{
    
    nomeTabela: string= "tb_pessoa";

    inserir(object: Pessoa): boolean{
        console.log("logica de insert");
        return true
    }

    atualizar(object: Pessoa): boolean{
        console.log("logica de update");
        return true
    }

    remover(id: number): Pessoa{
        console.log("logica de Delete");
        return new Pessoa('','');
    }
    selecionar(id: number): Pessoa{
        console.log("logica de Select");
        return new Pessoa('','');
    }

    selecionarTodos(): Array<Pessoa>{
        console.log("logica de SelectAll");
        return [new Pessoa('','')]
    }

}