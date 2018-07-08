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
    "ROMERO JUCÁ FILHO, no exercício da presidência",
    "ROBERTO JEFFERSON MONTEIRO FRANCISCO",
    "CARLOS LUPI",
    "GLEISI HELENA HOFFMANN",
    "ANTÔNIO CARLOS MAGALHÃES NETO",
    "LUCIANA BARBOSA DE OLIVEIRA SANTOS",
    "CARLOS ROBERTO SIQUEIRA DE BARROS",
    "GERALDO JOSÉ RODRIGUES ALCKMIN FILHO",
    "DANIEL S. TOURINHO",
    "EVERALDO DIAS PEREIRA",
    "ANTONIO CARLOS BOSCO MASSAROLLO",
    "OVASCO ROMA ALTIMARI RESENDE",
    "ROBERTO JOÃO PEREIRA FREIRE",
    "JOSÉ LUIZ DE FRANÇA PENNA",
    "LUIS HENRIQUE DE OLIVEIRA RESENDE",
    "CIRO NOGUEIRA LIMA FILHO",
    "JOSÉ MARIA DE ALMEIDA",
    "EDMILSON SILVA COSTA*",
    "JOSÉ LEVY FIDELIX DA CRUZ",
    "MARCELO GUILHERME DE ARO FERREIRA",
    "JOSÉ MARIA EYMAEL",
    "RUI COSTA PIMENTA",
    "RENATA HELLMEISTER DE ABREU",
    "GUSTAVO BEBIANNO ROCH, no exercício da presidência",
    "EDUARDO BENEDITO LOPES, no exercício da presidência",
    "JULIANO MEDEIROS",
    "JOSÉ TADEU CANDELÁRIA, no exercício da presidência",
    "ALFREDO COTAIT NETO, no exercício da presidência",
    "SÉRGIO RUBENS DE ARAÚJO TORRES",
    "ADILSON BARROSO OLIVEIRA",
    "EURÍPEDES G.DE MACEDO JÚNIOR",
    "PAULO PEREIRA DA SILVA",
    "MOISES DOS SANTOS JARDIM",
    "PEDRO IVO DE SOUZA BATISTA",
    "SUÊD HAIDAR NOGUEIRA",
  ];
  
  exPresidents = [
    "ex-presidente Luiz Inácio Lula da Silva",
    "ex-presidente Luiz Inácio",
    "ex-presidente Lula",
    "presidente Luiz Inácio Lula da Silva",
    "presidente Luiz Inácio",
    "presidente Lula",
    "Luiz Inácio Lula da Silva",
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
    "ex-vice-presidente",
    "ex-presidente",
    "Presidente",
    "Petista",
    "FHC",
  ];
  
  const partidosSiglas = [
    "PCdoB",
    "SD",
    "REDE","Rede",
    "PV",
    "PTC",
    "PTB",
    "PT",
    "PSTU",
    "PSOL",
    "PSL",
    "PSDB", 
    "PSD",
    "PSC",
    "PSB",
    "PRTB",
    "PRP",
    "PROS",
    "PRB",
    "PR",
    "PPS",
    "PPL",
    "PP",
    "PODE",
    "PMN",
    "PMB",
    "PHS",
    "PDT",
    "PCO",
    "PCB",
    "PATRI",
    "NOVO","Novo",
    "MDB","PMDB",
    "DEM",
    "DC",
    "AVANTE",  
  ];
  
  const partidosNames = [
    "MOVIMENTO DEMOCRÁTICO BRASILEIRO",
    "PARTIDO MOVIMENTO DEMOCRÁTICO BRASILEIRO",
    "PARTIDO VERDE",
    "PARTIDO TRABALHISTA CRISTÃO",
    "PARTIDO TRABALHISTA BRASILEIRO",
    "PARTIDO SOLIDARIEDADE",
    "PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO",
    "PARTIDO SOCIALISTA BRASILEIRO",
    "PARTIDO SOCIALISMO E LIBERDADE",
    "PARTIDO SOCIAL LIBERAL",
    "PARTIDO SOCIAL DEMOCRÁTICO",
    "PARTIDO SOCIAL CRISTÃO",
    "PARTIDO REPUBLICANO PROGRESSISTA",
    "PARTIDO REPUBLICANO DA ORDEM SOCIAL",
    "PARTIDO REPUBLICANO BRASILEIRO",
    "PARTIDO RENOVADOR TRABALHISTA BRASILEIRO",
    "PARTIDO REDE SUSTENTABILIDADE",
    "PARTIDO PÁTRIA LIVRE",
    "PARTIDO PROGRESSISTA",
    "PARTIDO POPULAR SOCIALISTA",
    "PARTIDO PODEMOS",
    "PARTIDO PATRIOTA",
    "PARTIDO NOVO",
    "PARTIDO HUMANISTA DA SOLIDARIEDADE",
    "PARTIDO DOS TRABALHADORES",
    "PARTIDO DEMOCRÁTICO TRABALHISTA",
    "PARTIDO DEMOCRATAS",
    "PARTIDO DEMOCRACIA CRISTÃ",
    "PARTIDO DA SOCIAL DEMOCRACIA BRASILEIRA",
    "PARTIDO DA REPÚBLICA",
    "PARTIDO DA MULHER BRASILEIRA",
    "PARTIDO DA MOBILIZAÇÃO NACIONAL",
    "PARTIDO DA CAUSA OPERÁRIA",
    "PARTIDO COMUNISTA DO BRASIL",
    "PARTIDO COMUNISTA BRASILEIRO",
    "PARTIDO AVANTE",
  ];
  
  elements.forEach((element) => {
    const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);
    
    validNodes.forEach((node) => {
      const text = node.nodeValue;
      
      const politicsSUX = text
      .replace(new RegExp(politicsNames.join('|'), 'ig'), 'Politico Qualquer')
      .replace(new RegExp(exPresidents.join('|'), 'ig'), 'Politico Qualquer')
      .replace(new RegExp(partidosNames.join('|'), 'ig'), 'Partido Qualquer')
      .replace(new RegExp(partidosSiglas.join('|'), 'g'), 'PQ');
      
      if (politicsSUX !== text) {
        node.nodeValue = politicsSUX;
      }
      
      
    });
    
  });
  
}