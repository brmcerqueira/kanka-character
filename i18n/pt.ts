import { LocaleType } from "./localeType.ts";

export const pt: LocaleType = {
  app: "KC",
  standard: "Padrão",
  character: "Personagem",
  specialties: {
    name: "Especializações",
    skill: "Habilidade",
    specialty: "Especialização",
  },
  template: "Modelo",
  characterLinks: "Fichas",
  discordId: "Discord Id",
  details: "Detalhes",
  name: "Nome",
  player: "Jogador",
  resonance: {
    name: "Ressonância",
    options: [
      "Colérica",
      "Melancólica",
      "Fleumática",
      "Sanguínea",
      "Sangue Animal",
    ],
  },
  ambition: "Ambição",
  desire: "Desejo",
  predator: {
    name: "Predador",
    options: [
      "Consensualista",
      "Fazendeiro",
      "Osíris",
      "Sacoleiro",
      "Sandman",
      "Sanguessuga",
      "Scene Queen",
      "Sereia",
      "Trinchador",
      "Vira-lata",
    ],
  },
  clan: {
    name: "Clã",
    options: [
      "Banu Haqim",
      "Brujah",
      "Caitiff",
      "Gangrel",
      "Hecata",
      "Lasombra",
      "Malkaviano",
      "Nosferatu",
      "O Ministério",
      "Ravnos",
      "Salubri",
      "Sangue-Ralo",
      "Toreador",
      "Tremere",
      "Tzimisce",
      "Ventrue",
    ],
  },
  generation: {
    name: "Geração",
    suffix: "ª",
  },
  physical: "Físicos",
  social: "Sociais",
  mental: "Mentais",
  attributes: {
    name: "Atributos",
    physical: {
      strength: "Força",
      dexterity: "Destreza",
      stamina: "Vigor",
    },
    social: {
      charisma: "Carisma",
      manipulation: "Manipulação",
      composure: "Autocontrole",
    },
    mental: {
      intelligence: "Inteligência",
      wits: "Raciocínio",
      resolve: "Determinação",
    },
  },
  skills: {
    name: "Habilidades",
    physical: {
      athletics: "Atletismo",
      brawl: "Briga",
      craft: "Ofícios",
      drive: "Condução",
      firearms: "Armas de Fogo",
      melee: "Armas Brancas",
      larceny: "Ladroagem",
      stealth: "Furtividade",
      survival: "Sobrevivência",
    },
    social: {
      animalKen: "Empatia com Animais",
      etiquette: "Etiqueta",
      insight: "Sagacidade",
      intimidation: "Intimidação",
      leadership: "Liderança",
      performance: "Performance",
      persuasion: "Persuasão",
      streetwise: "Manha",
      subterfuge: "Subterfúgio",
    },
    mental: {
      academics: "Erudição",
      awareness: "Percepção",
      finance: "Finanças",
      investigation: "Investigação",
      medicine: "Medicina",
      occult: "Ocultismo",
      politics: "Política",
      science: "Ciência",
      technology: "Tecnologia",
    },
  },
  health: "Vitalidade",
  willpower: "Força de Vontade",
  damage: {
    superficial: "Superficial",
    aggravated: "Agravado",
  },
  humanity: "Humanidade",
  stains: "Máculas",
  bloodPotency: "Potência de Sangue",
  hunger: "Fome",
  experience: {
    name: "Experiência",
    total: "Total",
    spent: "Gasta",
  },
  apply: {
    specialtyPhysical: "Especialização - Físicos",
    specialtySocial: "Especialização - Sociais",
    specialtyMental: "Especialização - Mentais",
    advantage: "Vantagem",
    flaw: "Defeito",
  },
  advantages: "Vantagens",
  flaws: "Defeitos",
  disciplines: {
    name: "Disciplinas",
    animalism: {
      name: "Animalismo",
      bondFamulus: "● Famulus Enlaçado",
      senseTheBeast: "● Sentir a Besta",
      feralWhispers: "●● Sussurros Selvagens",
      animalSucculence: "●●● Suculência Animal",
      quellTheBeast: "●●● Subjugar a Besta",
      unlivingHive: "●●● Enxame Não Vivo",
      subsumeTheSpirit: "●●●● Comunhão de Espíritos",
      animalDominion: "●●●●● Controle Animal",
      drawingOutTheBeast: "●●●●● Expulsar a Besta",
    },
    auspex: {
      name: "Auspícios",
      heightenedSenses: "● Sentidos Aguçados",
      senseTheUnseen: "● Sentir o Invisível",
      premonition: "●● Premonição",
      scryTheSoul: "●●● Perscrutar a Alma",
      shareTheSenses: "●●● Compartilhar os Sentidos",
      spiritsTouch: "●●●● Toque do Espírito",
      clairvoyance: "●●●●● Clarividência",
      possession: "●●●●● Possessão",
      telepathy: "●●●●● Telepatia",
    },
    dominate: {
      name: "Dominação",
      cloudMemory: "● Nublar Memória",
      compel: "● Compelir",
      mesmerize: "●● Mesmerismo",
      dementation: "●● Dementação",
      theForgetfulMind: "●●● A Mente Esquecida",
      submergedDirective: "●●● Diretriz Submersa",
      rationalize: "●●●● Racionalizar",
      massManipulation: "●●●●● Manipulação em Massa",
      terminalDecree: "●●●●● Decreto Terminal",
    },
    bloodSorcery: {
      name: "Feitiçaria do Sangue",
      corrosiveVitae: "● Vitae Corrosivo",
      aTasteForBlood: "● Um Gosto por Sangue",
      extinguishVitae: "●● Extinguir Vitae",
      bloodOfPotency: "●●● Aprimorar o Sangue",
      scorpionsTouch: "●●● Toque do Escorpião",
      theftOfVitae: "●●●● Furto do Vitae",
      baalsCaress: "●●●●● Carícia de Faal",
      cauldronOfBlood: "●●●●● Caldeirão de Sangue",
    },
    fortitude: {
      name: "Fortitude",
      resilience: "● Resiliência",
      unswayableMind: "● Mente Indestrutível",
      toughness: "●● Dureza",
      enduringBeasts: "●● Bestas Duradouras",
      defyBane: "●●● Desafiar o Banimento",
      fortifyTheInnerFacade: "●●● Fortificar a Fachada Interna",
      draughtOfEndurance: "●●●● Rascunho da Resistência",
      fleshOfMarble: "●●●●● Pele de Mármore",
      prowessFromPain: "●●●●● Proeza da Dor",
    },
    protean: {
      name: "Proteanismo",
      eyesOfTheBeast: "● Olhos da Besta",
      weightOfTheFeather: "● Peso da Pena",
      feralWeapons: "●● Garras da Besta",
      earthMeld: "●●● Fusão com a Terra",
      shapechange: "●●● Mudança de Forma",
      metamorphosis: "●●●● Forma da Besta",
      mistForm: "●●●●● Forma de Névoa",
      theUnfetteredHeart: "●●●●● Coração sem Restrições",
    },
    obfuscate: {
      name: "Ofuscação",
      cloakOfShadows: "● Manto das Sombras",
      silenceOfDeath: "● Silêncio Mortal",
      unseenPassage: "●● Presença Invisível",
      ghostInTheMachine: "●●● Fantasma na Máquina",
      maskOfAThousandFaces: "●●● Máscara das Mil Faces",
      conceal: "●●●● Esconder",
      vanish: "●●●● Desaparecer",
      cloakTheGathering: "●●●●● Cobrindo o Grupo",
      impostorsGuise: "●●●●● Disfarce do Impostor",
    },
    potence: {
      name: "Potência",
      lethalBody: "● Corpo Letal",
      soaringLeap: "● Salto Alto",
      prowess: "●● Façanha",
      brutalFeed: "●●● Alimentação Brutal",
      sparkOfRage: "●●● Centelha da Raiva",
      uncannyGrip: "●●● Aderência Estranha",
      draughtOfMight: "●●●● Rascunho do Poder",
      earthshock: "●●●●● Terremoto",
      fistOfCaine: "●●●●● Punho de Cain",
    },
    presence: {
      name: "Presença",
      awe: "● Fascínio",
      daunt: "● Assustar",
      lingeringKiss: "●● Beijo Prolongado",
      dreadGaze: "●●● Olhar Aterrorizante",
      entrancement: "●●● Transe",
      irresistibleVoice: "●●●● Voz Irresistível",
      summon: "●●●● Convocação",
      majesty: "●●●●● Majestade",
      starMagnetism: "●●●●● Magnetismo da Fama",
    },
    celerity: {
      name: "Celeridade",
      catsGrace: "● Graça Felina",
      rapidReflexes: "● Reflexos Rápidos",
      fleetness: "●● Rapidez",
      blink: "●●● Piscadela",
      traversal: "●●● Travessia",
      draughtOfElegance: "●●●● Elegância Direto da Fonte",
      unerringAim: "●●●● Mira Infalível",
      lightningStrike: "●●●●● Golpe Relâmpago",
      splitSecond: "●●●●● Fração de Segundo",
    },
    rituals: {
      name: "Rituais",
      bloodWalk: "● Caminhada do Sangue",
      clingingOfTheInsect: "● Apego do Inseto",
      craftBloodstone: "● Criar Pedra de Sangue",
      wakeWithEveningsFreshness: "● Acordar com o Frescor da Noite",
      wardAgainstGhouls: "● Proteção contra Carniçais",
      communicateWithKindredSire: "●● Comunicação com os Parentes",
      eyesOfBabel: "●● Olhos de Babel",
      illuminateTheTrailOfPrey: "●● Iluminar a Trilha das Presas",
      truthOfBlood: "●● Verdade do Sangue",
      wardAgainstSpirits: "●● Proteção Contra Espíritos",
      wardingCircleAgainstGhouls: "●● Círculo de Proteção Contra Carniçais",
      dagonsCall: "●●● O Chamado de Dagon",
      deflectionOfWoodenDoom: "●●● Deflexão Contra o Mau da Madeira",
      essenceOfAir: "●●● Essência do Ar",
      firewalker: "●●● Caminhar Sobre o Fogo",
      wardAgainstLupines: "●●● Proteção Contra Lupinos",
      wardingCircleAgainstSpirits: "●●● Círculo de Proteção contra Espíritos",
      defenseOfTheSacredHaven: "●●●● Defesa do Refúgio Sagrado",
      eyesOfTheNighthawk: "●●●● Olhos do Falcão da Noite",
      incorporealPassage: "●●●● Travessia Incorpórea",
      wardAgainstCainites: "●●●● Proteção contra os Cainitas",
      wardingCircleAgainstLupines: "●●●● Círculo de proteção contra Lupinos",
      escapeToTrueSanctuary: "●●●●● Fuga para o Verdadeiro Santuário",
      heartOfStone: "●●●●● Coração de Pedra",
      shaftOfBelatedDissolution: "●●●●● Eixo de Dissolução Tardia",
      wardingCircleAgainstCainites: "●●●●● Círculo de Proteção contra Cainitas",
    },
    thinBloodAlchemy: {
      name: "Alquimia de Sangue-Fraco",
      farReach: "● Longo Alcance",
      haze: "● Neblina",
      profaneHierosGamos: "● Profano Hieros-Gamos",
      envelop: "●● Envolver",
      defractionate: "●●● Defracionar",
      airborneMomentum: "●●●● Impulso no Ar",
      awakenTheSleeper: "●●●●● Acordar o Dorminhoco",
    },
  },
  reRollHelperText: "Re-rolando %v dado(s) da última jogada...",
  unauthorized: "Função não autorizada!",
  storytellerChangeDifficulty: "O narrador mudou a dificuldade.",
  storytellerChangeModifier: "O narrador mudou o modificador.",
  storytellerChangeCurrentCharacter: "O personagem escolhido foi...",
  bestialFailure: "Falha Bestial",
  failure: "Falha",
  success: "Sucesso",
  regularCritical: "Crítico",
  messyCritical: "Crítico Bestial",
  dices: "Dados",
  difficulty: "Dificuldade",
  successes: "Sucessos",
  status: "Status",
  modifier: "Modificador",
  commands: {
    roll: {
      name: "jogar",
      description: "Jogue dados de dez faces",
      dices: {
        name: "dados",
        description: "Quantidade de dados",
      },
      hunger: {
        name: "fome",
        description: "Quantidade de fome do vampiro",
      },
      difficulty: {
        name: "dificuldade",
        description: "Dificuldade da jogada",
      },
      descriptionField: {
        name: "descrição",
        description: "Descrição da jogada",
      },
    },
    dicePools: {
      name: "parada-de-dados",
      description: "O jogador joga uma parada de dados de acordo com sua ficha",
      attribute: {
        name: "atributo",
        description: "Nome do atributo",
      },
      secondaryAttribute: {
        name: "atributo-2",
        description: "Nome do segundo atributo",
      },
      skillPhysical: {
        name: "habilidade-física",
        description: "Nome da habilidade física",
      },
      skillSocial: {
        name: "habilidade-social",
        description: "Nome da habilidade social",
      },
      skillMental: {
        name: "habilidade-mental",
        description: "Nome da habilidade mental",
      },
      discipline: {
        name: "disciplina",
        description: "Nome da disciplina",
      },
    },
    actions: {
      name: "ação",
      description: "O jogador executa uma ação de acordo com sua ficha",
      action: {
        name: "nome",
        description: "Nome da ação",
      },
    },
    setDifficulty: {
      name: "dificuldade",
      description: "Dificuldade determinada pelo narrador",
      difficulty: {
        name: "valor",
        description: "Valor da nova dificuldade",
      },
    },
    setModifier: {
      name: "modificador",
      description: "Modificador determinado pelo narrador",
      modifier: {
        name: "valor",
        description: "Valor do novo modificador",
      },
    },
    setCharacter: {
      name: "personagem",
      description:
        "O narrador escolhe o personagem corrente para ser usado na parada de dados",
      character: {
        name: "nome",
        description: "Nome do personagem",
      },
    },
  },
  actions: [
    "Ataque com os punhos [Força + Briga]",
    "Cantar [Carisma + Performance]",
    "Conduzir suas ações com perfeição em um jantar formal [Destreza + Etiqueta]",
    "Corrida prolongada [Vigor + Atletismo]",
    "Decifrar uma ameaça velada [Raciocínio + Intimidação]",
    "Descobrir o nível de segurança de um local [Inteligência + Ladroagem]",
    "Descobrir informações sobre uma gangue [Carisma + Manha]",
    "Desviar de um obstáculo enquanto dirigi [Raciocínio + Condução]",
    "Distrair cães de guarda enquanto se infiltra [Manipulação + Empatia com Animais]",
    "Emparelhar um veículo enquanto dirigi [Raciocínio + Condução]",
    "Encontrar abrigo para passar o dia [Raciocínio + Sobrevivência]",
    "Fazer uma tocaia [Vigor + Furtividade]",
    "Ler um livro esotérico [Inteligência + Ocultismo]",
    "Reforçar uma porta de refúgio [Raciocínio + Ofícios]",
    "Sacar uma arma de forma velada [Destreza + Subterfúgio]",
    "Verificar credibilidade de uma história [Manipulação + Persuasão]",
    "Performance Artística [Carisma + Performance]",
    "Farrear [Carisma + Sagacidade]",
    "Credibilidade [Manipulação + Subterfúgio]",
    "(Resistido) Credibilidade [Raciocínio + Sagacidade]",
    "Conversa Fiada [Carisma + Subterfúgio]",
    "(Resistido) Conversa Fiada [Autocontrole + Sagacidade]",
    "Interrogatório pacífico [Manipulação + Sagacidade]",
    "(Resistido) Interrogatório pacífico [Autocontrole + Raciocínio]",
    "Interrogatório agressivo [Manipulação + Intimidação]",
    "(Resistido) Interrogatório agressivo [Autocontrole + Determinação]",
    "Intimidação - Coerção sutil [Manipulação + Intimidação]",
    "(Resistido) Intimidação - Coerção sutil [Autocontrole + Determinação]",
    "Intimidação - Ameaça descarada [Força + Intimidação]",
    "(Resistido) Intimidação - Ameaça descarada [Autocontrole + Determinação]",
    "(Resistido) Intimidação - Ameaça descarada [Força + Intimidação]",
    "Discurso [Carisma + Performance]",
    "Preparar um discurso [Inteligência + Sagacidade]",
    "Sedução em um baile [Autocontrole + Etiqueta]",
    "Sedução em um bar [Carisma + Sagacidade]",
    "Sedução em uma academia [Manipulação + Atletismo]",
    "Sedução em uma cafeteria [Raciocínio + Subterfúgio]",
    "(Resistido) Sedução [Carisma + Subterfúgio]",
    "Escalar [Destreza + Atletismo]",
    "Pousar com os pés depois de uma queda [Destreza + Atletismo]",
    "Dirigir [Destreza + Condução]",
    "Dirigir com pouca visibilidade [Raciocínio + Condução]",
    "Levantar ou esmagar coisas [Força + Atletismo]",
    "Arremessar [Força + Atletismo]",
    "Arremessar [Destreza + Atletismo]",
    "Intrusão [Força + Ladroagem]",
    "Estabelecer um sistema de segurança [Inteligência + Ladroagem]",
    "Penetrar sistemas se segurança puramente eletrônicos [Inteligência + Tecnologia]",
    "Perseguição via veículos [Raciocínio + Condução]",
    "Perseguição à pé em uma corrida longa [Vigor + Atletismo]",
    "Perseguição à pé em uma corrida de velocidade [Força + Atletismo]",
    "Perseguição à pé usando parkour [Destreza + Atletismo]",
    "Seguir [Raciocínio + Percepção]",
    "(Resistido) Seguir [Determinação + Manha]",
    "(Resistido) Seguir [Raciocínio + Furtividade]",
    "(Resistido) Seguir [Raciocínio + Manha]",
    "Roubar carteira [Destreza + Ladroagem]",
    "(Resistido) Roubar carteira [Raciocínio + Ladroagem]",
    "(Resistido) Roubar carteira [Raciocínio + Percepção]",
    "Atividade oculta [Destreza + Furtividade]",
    "(Resistido) Atividade oculta [Raciocínio + Percepção]",
    "Nadar [Vigor + Atletismo]"
  ],
};
