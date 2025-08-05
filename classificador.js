const prompt = require('readline-sync');

const racas = [
  'Humano',
  'Ladino',
  'Guerreiro',
  'Tiefling',
  'Elfo',
  'Bardo',
  'Vampiro',
  'Gnomo',
  'Druida',
  'Sacerdote',
  'Mago',
  'Feiticeiro'
];

for (let i = 0; i < 3; i++) {
  console.log(`\n--- Classificação do Herói ${i + 1} ---`);

  let nomeHeroi = prompt.question('Digite o nome do heroi: ');

  let xp;
  while (true) {
    let entradaXP = prompt.question('Digite a quantidade de experiencia (XP) (apenas numeros): ');
    xp = parseInt(entradaXP);

    if (!isNaN(xp) && xp >= 0) {
      break;
    } else {
      console.log('Entrada invalida! Por favor, digite um numero inteiro positivo para XP.');
    }
  }

  console.log('\nEscolha a raça do heroi:');
  racas.forEach((raca, index) => {
    console.log(`${index + 1} - ${raca}`);
  });

  let escolhaRaca;
  while (true) {
    let entradaRaca = prompt.question('Digite o numero correspondente a raca: ');
    escolhaRaca = parseInt(entradaRaca);

    if (!isNaN(escolhaRaca) && escolhaRaca >= 1 && escolhaRaca <= racas.length) {
      break;
    } else {
      console.log(`Entrada invalida! Digite um numero de 1 a ${racas.length}.`);
    }
  }

  let nivel = '';

  if (xp <= 1000) {
    nivel = 'Ferro';
  } else if (xp <= 2000) {
    nivel = 'Bronze';
  } else if (xp <= 5000) {
    nivel = 'Prata';
  } else if (xp <= 7000) {
    nivel = 'Ouro';
  } else if (xp <= 8000) {
    nivel = 'Platina';
  } else if (xp <= 9000) {
    nivel = 'Ascendente';
  } else if (xp <= 10000) {
    nivel = 'Imortal';
  } else {
    nivel = 'Radiante';
  }

  const racaEscolhida = racas[escolhaRaca - 1];

  console.log(`\n O Herói ${nomeHeroi}, da raça ${racaEscolhida}, alcançou o nível ${nivel}!\n`);
}
