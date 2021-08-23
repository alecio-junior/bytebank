
import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor} from "./funcionario/Diretor.js";
import { SistemaAutentificacao } from "./SistemaAutentificacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678900);
gerente.cadastrarSenha("1234568");

const cliente = new Cliente("Lais", 453063243, "456");
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, "1234568");
const diretorEstaLogado = SistemaAutentificacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutentificacao.login(cliente, "456");

console.log(clienteEstaLogado);

//ultima aula assistido Classes abstratas 3


