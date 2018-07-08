document.addEventListener('load', replace());

window.addEventListener('scroll', function (e) {
  replace();
});

function replace() {
// Convert HTMLCollection/NodeList to common JavaScript array with spread operator
const elements = [...document.getElementsByTagName('*')];

const politicsNames = [
  "Bolsomito",
  "Jair Messias Bolsonaro",
  "Jair Bolsonaro",
  "Bolsonaro",
  "Eduardo Bolsonaro",
  "Marina Silva",
  "Marina",
  "Geraldo Alckmin",
  "Ciro Gomes",
  "Aldo Rebelo",
  "Manuela D'Ávila",
  "Guilherme Boulos",
  "Álvaro Dias",
  "Rodrigo Maia",
  "Josué Gomes",
  "João Amoêdo",
  "Flávio Rocha",
  "Henrique Meirelles",
  "Fernando Collor",
  "Paulo Rabello de Castro",
  "Levy Fidelix",
];

exPresidents = [
  "ex-presidente Luiz Inácio Lula da Silva",
  "ex-presidente Luiz Inácio",
  "ex-presidente Lula",
  "presidente Luiz Inácio Lula da Silva",
  "presidente Luiz Inácio",
  "presidente Lula",
  "Lula",
  "ex-presidente Dilma Rousseff",
  "ex-presidente Dilma",
  "presidente Dilma Rousseff",
  "presidente Dilma",
  "Dilma Rousseff",
  "Dilma",
  "presidente Michel Temer",
  "presidente Temer",
  "Temer",
  "Presidente"
];

const partidosSiglas = [
  "MDB",
  "PTB",
  "PDT",
  "PT",
  "DEM",
  "PCdoB",
  "PSB",
  "PSDB",
  "PTC",
  "PSC",
  "PMN",
  "PRP",
  "PPS",
  "PV",
  "AVANTE",
  "PP",
  "PSTU",
  "PCB",
  "PRTB",
  "PHS",
  "DC",
  "PCO",
  "PODE",
  "PSL",
  "PRB",
  "PSOL",
  "PR",
  "PSD",
  "PPL",
  "PATRI",
  "PROS",
  "SD",
  "NOVO",
  "REDE","Rede",
  "PMB",
];

const partidosNames = [
  "MOVIMENTO DEMOCRÁTICO BRASILEIRO",
  "PARTIDO TRABALHISTA BRASILEIRO",
  "PARTIDO DEMOCRÁTICO TRABALHISTA",
  "PARTIDO DOS TRABALHADORES",
  "DEMOCRATAS",
  "PARTIDO COMUNISTA DO BRASIL",
  "PARTIDO SOCIALISTA BRASILEIRO",
  "PARTIDO DA SOCIAL DEMOCRACIA BRASILEIRA",
  "PARTIDO TRABALHISTA CRISTÃO",
  "PARTIDO SOCIAL CRISTÃO",
  "PARTIDO DA MOBILIZAÇÃO NACIONAL",
  "PARTIDO REPUBLICANO PROGRESSISTA",
  "PARTIDO POPULAR SOCIALISTA",
  "PARTIDO VERDE",
  "AVANTE",
  "PARTIDO PROGRESSISTA",
  "PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO",
  "PARTIDO COMUNISTA BRASILEIRO",
  "PARTIDO RENOVADOR TRABALHISTA BRASILEIRO",
  "PARTIDO HUMANISTA DA SOLIDARIEDADE",
  "DEMOCRACIA CRISTÃ",
  "PARTIDO DA CAUSA OPERÁRIA",
  "PODEMOS",
  "PARTIDO SOCIAL LIBERAL",
  "PARTIDO REPUBLICANO BRASILEIRO",
  "PARTIDO SOCIALISMO E LIBERDADE",
  "PARTIDO DA REPÚBLICA",
  "PARTIDO SOCIAL DEMOCRÁTICO",
  "PARTIDO PÁTRIA LIVRE",
  "PATRIOTA",
  "PARTIDO REPUBLICANO DA ORDEM SOCIAL",
  "SOLIDARIEDADE",
  "PARTIDO NOVO",
  "REDE SUSTENTABILIDADE",
  "PARTIDO DA MULHER BRASILEIRA",
];

  elements.forEach((element) => {
    const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);
    
    validNodes.forEach((node) => {
      const text = node.nodeValue;
      
      const politicsSUX = text.replace(new RegExp(politicsNames.join('|'), 'ig'), 'Politico Qualquer')
      .replace(new RegExp(exPresidents.join('|'), 'ig'), 'Politico')
      .replace(new RegExp(partidosSiglas.join('|'), 'g'), 'PQ')
      .replace(new RegExp(partidosNames.join('|'), 'ig'), 'Partido Qualquer');
      
      if (politicsSUX !== text) {
        node.nodeValue = politicsSUX;
      }
      
      
    });
    
  });
  
}