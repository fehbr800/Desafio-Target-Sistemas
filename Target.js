//01)

/*
let indice = 13;
soma = 0;
k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma); 
*/

//----------------------------------------------------------------------------------------------------------//


//02)

/*
function fibonacci(n) {
    let m = 0, t = 1, temp;
    
    //valor de n será verdadeiro com 0 e 1
    if (n === 0 || n === 1) {
      return true;
    }
    
    // Calcula a sequência até que o valor seja maior que n
    while (t <= n) {
      temp = t;
      t = m + t;
      m = temp;
      
      // Verifica se o número pertence à sequência
      if (t === n) {
        return true;
      }
    }
    return false;
  }
  

  const num = 8;
  const pertence = fibonacci(num);
  
  if (pertence) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
  */
//----------------------------------------------------------------------------------------------------------//


//03)

/*
const dadosFaturamento = [{
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
];

// O menor valor de faturamento ocorrido em um dia do mês;
const menorFaturamento = dadosFaturamento.reduce((min, dia) => {
    return dia.valor < min ? dia.valor : min;
}, dadosFaturamento[0].valor);

console.log('Menor faturamento diário: ', menorFaturamento);


// O maior valor de faturamento ocorrido em um dia do mês;

const maiorFaturamento = dadosFaturamento.reduce((max, dia) => {
    return dia.valor > max ? dia.valor : max;
}, dadosFaturamento[0].valor);

console.log('Maior faturamento diário: ', maiorFaturamento);

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
const diasComFaturamento = dadosFaturamento.filter((dia) => dia.valor > 0);
const mediaMensal = diasComFaturamento.reduce((total, dia) => {
  return total + dia.valor;
}, 0) / diasComFaturamento;

console.log('Dias do mês que mais tiveram faturamento: ', diasComFaturamento)
*/

//----------------------------------------------------------------------------------------------------------//


//04)
/*
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Valor total mensal da distribuidora
const valorTotalMensal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calculo do percentual de representação de cada estado dentro do valor total mensal
const percentualSP = (faturamentoSP / valorTotalMensal) * 100;
const percentualRJ = (faturamentoRJ / valorTotalMensal) * 100;
const percentualMG = (faturamentoMG / valorTotalMensal) * 100;
const percentualES = (faturamentoES / valorTotalMensal) * 100;
const percentualOutros = (faturamentoOutros / valorTotalMensal) * 100;


console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`);
*/
//----------------------------------------------------------------------------------------------------------//

//05)


let str = "Olá, mundo!";

// cria uma string vazia para armazenar a string invertida
let reverseStr = "";

// fara com com que a string seja lida de trás pra frente (--)
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}

console.log("String original: " + str);
console.log("String invertida: " + reverseStr);
