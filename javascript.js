const idade = 10;
// idade = 20;
let nome = 'Diego';
nome = 'Pedro';

function mensagem(texto) {
  // console.log("Testando: " + texto);
  console.log(`Testando: ${texto}`);
}

mensagem('Desktop');

const dizOla = function(nome) {
  console.log(`Olá ${nome}!`);
};

dizOla(nome);

// const calcularIdade = function(ano) {
//   return 2020 - ano;
// };

// const calcularIdade = (ano) => {
//   return 2020 - ano;
// };

// const calcularIdade = ano => {
//   return 2020 - ano;
// };

const calcularIdade = ano => 2020 - ano;

console.log(calcularIdade(1988));

const mensagemCurta = texto => `Testando: ${texto}`;
const resultado = mensagemCurta('123');
console.log(resultado);

// Object literal {}

const pessoa = {
  nome: 'Diego',
  sobrenome: 'Stiehl',
  idade: 32
};

pessoa.habilidades = ['Fazer macarrão', 'Lavar a louça'];
pessoa.habilidades.push('Dormir');

console.log(pessoa);
console.log(pessoa.nome);

for (const h of pessoa.habilidades) {
  console.log(h);
}
pessoa.habilidades.forEach(h => console.log(h));

const imprimir = function(h) {
  console.log(h);
};
pessoa.habilidades.forEach(imprimir);

const { sobrenome, nome: novoNome } = pessoa;
console.log(sobrenome, novoNome);

const dizOlaNovamente = ({ nome }) => console.log(`Olá ${nome}!`);
dizOlaNovamente(pessoa);

const pedro = { ...pessoa, cabelo: 'Castanho' };
pedro.nome = 'Pedro';

console.log(pessoa);
console.log(pedro);