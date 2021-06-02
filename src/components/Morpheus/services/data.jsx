const Data = [
  {
    id: 0,
  },
  // ficha do Unorix
  {
    id: 1,
    name: "Unorix",
    apelido: "Bruno Valente",
    Raça: 'Humano',
    VidaDescanso: '1d8',
    pv: 10,
    ac:10,
    vida:15,
    atributos: {
      força: 9,
      destreza: 9,
      constituição: 10,
      inteligencia: 12,
      sabedoria: 12,
      carisma: 8,
    },
    resistencias:{
      fo: 0,
      des: 0,
      cons: 0,
      int: 0,
      sab: 1,
      car: 0,
    },
    pericias:{
      machado: '1 + for',
      arco: '1 + des',
      furtividade: '1 + des',
    },
    Habilidades: {
      Sangnolencia: 'critico + 1'
    },
    cubo:{
      nivel: 1,
      dado: '1d8',
      peso: '500g',
      usos: 1,
    },
    ItensEspeciais:{
      MiniTacape: '1d8 + 2',
      CotaDeMithril:'+4+2 Ac'
    },
    Equipamento:{
      machado: '1b8 + for',
      remedios: 2,
      Arco: '1d8 + des',
      flechas: 4,
      Espada: '1d8 + for',
      outros:'Panela, Biscoito Cream Craker, Radio walktalk, Mapa the forest'
    },
    CAItens:{
      CotaDeMithril:6,
      Escudo: 0,
      Proteçoes: 0,
    },
    truques:{
      MuniçãoMágicaN1: 'id8 + des'
    },
    MagiaN1:{
      pontos: '1 + sab',
      heal: '1d8 + sab',
    },
    Sanidade:{
      pontos: 5
    }
  },
  // ficha do Vove
  {
    id: 2,
    name: "Vove",
    apelido: "Adriano",
    Raça: 'Humano',
    VidaDescanso: '1d8',
    pv: 0,
    ac:10,
    vida:15,
    atributos: {
      força: 10,
      destreza: 8,
      constituição: 10,
      inteligencia: 10,
      sabedoria: 10,
      carisma: 12,
    },
    resistencias:{
      fo: 0,
      des: 0,
      cons: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pericias:{

    },
    Habilidades: {
      Sorte: '1 vez por descanso longo'
    },
    cubo:{
      nivel: 1,
      dado: '1d8',
      peso: '500g',
      usos: 1,
    },
    ItensEspeciais:{
      
    },
    Equipamento:{
      machado: '1d8 + for',
      Revolver: 'id8 + des',
    },
    CAItens:{
      Escudo: 0,
      Proteçoes: 3,
    },
    truques:{
      FacaEspectral: '1d8'
    },
    MagiaN1:{
      pontos:0
    },
    Sanidade:{
      pontos: 5
    }
  },
  // ficha do Paulão
  {
    id: 3,
    name: "Paulão",
    apelido: "Vandersom",
    Raça: 'Humano',
    VidaDescanso: '1d8',
    pv: 0,
    ac:10,
    vida:15,
    atributos: {
      força: 10,
      destreza: 8,
      constituição: 12,
      inteligencia: 10,
      sabedoria: 10,
      carisma: 10,
    },
    resistencias:{
      fo: 0,
      des: 0,
      cons: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pericias:{
      LaminasCurtas: '2 + for',
      furtividade: '1 + des'
    },
    Habilidades: {
      TomarFolego: '1d4 + cons'
    },
    cubo:{
      nivel: 1,
      dado: '1d8',
      peso: '500g',
      usos: 1,
    },
    ItensEspeciais:{
      Ferroada: '1d8 + 2',
      
    },
    Equipamento:{
      machado: '1d8 + for',
      Faca: '1d8 + for',
      ChaveDeGrifo: '1d8 + for',

    },
    CAItens:{
      Escudo: 0,
      Proteçoes: 3,
    },
    truques:{

    },
    MagiaN1:{
      Ineedhealing: '1DV + sab',
      pontos:2
    },
    Sanidade:{
      pontos: 5
    }
  },
  // ficha do Raphael
  {
    id: 4,
    name: "Raphaelita dos patins",
    apelido: "Raphael",
    Raça: 'Humano',
    VidaDescanso: '1d8',
    pv: 0,
    ac:10,
    vida:15,
    atributos: {
      força: 9,
      destreza: 10,
      constituição: 10,
      inteligencia: 9,
      sabedoria: 10,
      carisma: 12,
    },
    resistencias:{
      fo: 0,
      des: 0,
      cons: 0,
      int: 0,
      sab: 0,
      car: 0,
    },
    pericias:{
      ArmaDeFogo: '1 + des',
      lockpick: '1 + des',
      steath: '1 + des',
      
    },
    Habilidades: {
      SneakeAtack: 'dano x2',
      Inspiração: '+1 em roladas'
    },
    cubo:{
      nivel: 1,
      dado: '1d8',
      peso: '500g',
      usos: 1,
    },
    ItensEspeciais:{
      RevolverK: '1d8 + 2',
    },
    Equipamento:{
      facão: 'id8 + for',
      Revolver: 'id8 + des',
      balas: '4',
      outros:'cantil, barraca, pederneira, pacote de biz, lapis, corda',
    },
    CAItens:{
      Escudo: 0,
      Proteçoes: 3,
    },
    truques:{
      criarMunição: '1d8',
      BalaElemntal: 'Fogo',
      silenciador: '',
    },
    MagiaN1:{
      pontos:0
    },
    Sanidade:{
      pontos: 5
    }
  },
  // Personagens
  {
    // id: 5,
    OHomemDePreto:'',
    ONada:'',
    ImperatizMenina:'',
    OPistoleiro:'',
  },
  // Itens Maravilhosos
  {
    // id: 6,
    Ferroada:'',
    CotaDeMithril:'',
    MiniTacape: '',
    PistolaK:'',
  },
  // Magias e truques
  {
    id: 7,
    truques:{ 
      'Criar Muinição': 'Você uma munução de energia. Faça um ataque à distância contra o alvo. Se atingir, o alvo sofre 1d8 de dano de perfurante.',
      'Silenciador': 'Suas armas de fogo nao fazem barulho ao serem disparadas',
      'Bala Elemental': 'Voce imbui suas munição em energia elemental, dando a ela propriedades do elemento escolhido',
      'Faca Espectral': 'Você arremessa um Faca fantasma em uma criatura ou objeto dentro do alcance. Faça um ataque à distância contra o alvo. Se atingir, o alvo sofre 1d8 de dano de perfurante.',
  },
  MagiasN1:{
    'Cura pelas Mãos': '1d8 + sab'
  }
  },
  //Hailidades
  {
    id: 8,
    Habilidades: {
      SneakeAtack:'Dano x2 quando o inimigo nao sabe da sua presença',
      TomarFolego: 'Uma vez por combate pode gastar sua ação bônus para recupera 1d4 + cons',
      Inspiração:  'Uma vez por combate pode gastar sua ação bônus para concede a um companheiro +1 em uma rolagem de dados',
      Sanguinolência:'Seus danos críticos sempre são mais sangrentos, adiciona +1 ao dano',
      Sorte:'uma vez por dia você pode rerolar uma jogada de dados sua ou do oponente.',
    }
  },
  //gastos de PV
  {
    id: 9,
    TotalRecebido: {
      Unorix:30+50+15,
      Paulão:30+50+10,
      Vove:30+15,
      Raphael:30+50+10,
    },
    Atrubutos: {
      12:'20vp',
      14:'40vp',
      16:'80vp',
      18:'160vp',
      20:'320vp',
      22:'640vp',
      24:'1280vp',
      26:'2560vp',
      28:'5120vp',
    },
    DadosDeVida: {
      d10:'5vp',
      d12:'10vp',
      d14:'20vp',
      d16:'40vp',
      d18:'80vp',
      d20:'160vp',
      d22:'...',
    },
    PericiasComuns: {
      n1:'5vp',
      n2:'10vp',
      n3:'20vp',
      n4:'40vp',
      n5:'80vp',
      n6:'160vp',
      n7:'320vp',
      n8:'640vp',
      n9:'1280vp',
      n10:'2560vp',
    },
    SlotMagiaN1: {
      1:'20vp',
      2:'40vp',
      3:'80vp',
      4:'160vp',
      5:'320vp',
      6:'640vp',
      7:'1280vp',
      8:'2560vp',
      9:'5120vp',
    },
    Magia:{
      n0:'20vp',
      n1:'10vp',
      n2:'20vp',
      n3:'40vp',
      n4:'80vp',
      n5:'160vp',
      n6:'320vp',
      n7:'640vp',
      n8:'1280vp',
      n9:'2560vp',
      n10:'5120vp',
    }, 
    ManterItems:{
      comum:'5pv',
      munição: '0pv',
    },
    Habilidades: {
      n1:'10vp',
      n2:'20vp',
      n3:'40vp',
      n4:'80vp',
      n5:'160vp',
      n6:'320vp',
      n7:'640vp',
      n8:'1280vp',
      n9:'2560vp',
      n10:'5120vp',
    },
    CuboTransmorfo: {
      Nível1: '500 gramas ou 1d8 poder, 1 uso ao dia',
      Nível2: '1 quilo ou 2d6 poder, 1 uso ao dia (50 VP)',
      Nível3: '2 quilo ou 3d4 poder, 2 usos ao dia (100 VP)',
    }
  },
];

export default Data;
