//import {ConcessionariaDao} from './ConcessionariaDao';
import Concessionaria from './Concessionaria';
import { Dao } from './Dao';
//import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa';

//let dao: ConcessionariaDao = new ConcessionariaDao();

let concessionaria = new Concessionaria('',[]);

//dao.inserir(concessionaria);

//let dao2: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('andre','kavasaki');

let dao3: Dao<Concessionaria> = new Dao();
let dao4: Dao<Pessoa> = new Dao();
dao3.inserir(concessionaria);
dao4.remover(4);