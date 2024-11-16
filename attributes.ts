import { Character } from "./character.ts";
import { locale } from "./i18n/locale.ts";

export const healthSuperficialLabel = `${locale.health} - ${locale.damage.superficial}`;
export const healthAggravatedLabel = `${locale.health} - ${locale.damage.aggravated}`;
export const willpowerSuperficialLabel = `${locale.willpower} - ${locale.damage.superficial}`;
export const willpowerAggravatedLabel = `${locale.willpower} - ${locale.damage.aggravated}`;
export const experienceTotalLabel = `${locale.experience.name} - ${locale.experience.total}`;
export const hungerLabel = `${locale.hunger}[range:0,5]`;
export const humanityLabel = `${locale.humanity}[range:0,10]`;
export const stainsLabel = `${locale.stains}[range:0,10]`;

export enum Discipline {
  Animalism,
  Auspex,
  Dominate,
  BloodSorcery,
  Fortitude,
  Protean,
  Obfuscate,
  Potence,
  Presence,
  Celerity,
  Rituals,
  ThinBloodAlchemy
}

export enum AttributeType {
  Standard = 1,
  MultilineTextBlock = 2,
  Checkbox = 3,
  Section = 4,
  RandomNumber = 5,
  Number = 6,
  ListChoice = 7,
}

export type Attribute = {
  parse?: (
    character: Character,
    origin: string,
    value: any,
    context?: any,
  ) => void;
  context?: (character: Character) => any;
  value?: string;
  type?: AttributeType;
  disciplines?: Discipline[];
};

export type Context = {
  generic: Attribute;
};

type AdvantageFlawContext = {
  object: {
    [name: string]: number;
  };
} & Context;

type DisciplineKeyType = keyof Character["disciplines"];

type DisciplineContext = {
  key: DisciplineKeyType;
} & Context;

export const attributes: {
  [name: string]: Attribute;
} = {};

const advantageFlawAttributeParse: Attribute = {
  parse: (_c, o, v: number, context: AdvantageFlawContext) =>
    context.object[o] = v,
  type: AttributeType.Number,
};

const disciplineAttributeParse: Attribute = {
  parse(c, o, v: boolean, context: DisciplineContext) {
    if (c.disciplines[context.key] == undefined) {
      c.disciplines[context.key] = [];
    }

    const array = c.disciplines[context.key]!;

    const index = array.indexOf(o);

    if (v && index == -1) {
      array.push(o);
    } else if (!v && index > -1) {
      array.splice(index, 1);
    }

    if (c.disciplines[context.key]!.length == 0) {
      delete c.disciplines[context.key];
    }
  },
  type: AttributeType.Checkbox,
};

attributes[locale.player] = {
  parse: (c, _o, v: string) => c.player = v,
};
attributes[
  `${locale.resonance.name}[range:,${locale.resonance.options.join(",")}]`
] = {
  parse: (c, _o, v: string) => c.resonance = v,
};
attributes[locale.ambition] = {
  parse: (c, _o, v: string) => c.ambition = v,
};
attributes[locale.desire] = {
  parse: (c, _o, v: string) => c.desire = v,
};
attributes[
  `${locale.predator.name}[range:${locale.predator.options.join(",")}]`
] = {
  parse: (c, _o, v: string) => c.predator = v,
};
attributes[`${locale.clan.name}[range:${locale.clan.options.join(",")}]`] = {
  parse: (c, _o, v: string) => c.clan = v,
};
attributes[`${locale.generation.name}[range:4,16]`] = {
  parse: (c, _o, v: number) => c.generation = v,
  type: AttributeType.Number,
};
attributes[locale.details] = {
  parse: (c, _o, v: string) => c.details = v,
  type: AttributeType.MultilineTextBlock,
};
attributes[`${locale.bloodPotency}[range:0,10]`] = {
  parse: (c, _o, v: number) => c.bloodPotency = v,
  type: AttributeType.Number,
};
attributes[hungerLabel] = {
  parse: (c, _o, v: number) => c.hunger = v,
  type: AttributeType.Number,
};
attributes[humanityLabel] = {
  parse: (c, _o, v: number) => c.humanity.total = v,
  type: AttributeType.Number,
};
attributes[stainsLabel] = {
  parse: (c, _o, v: number) => c.humanity.stains = v,
  type: AttributeType.Number,
};
attributes[healthSuperficialLabel] = {
  parse: (c, _o, v: number) => c.health.superficial = v,
  type: AttributeType.Number,
};
attributes[healthAggravatedLabel] = {
  parse: (c, _o, v: number) => c.health.aggravated = v,
  type: AttributeType.Number,
};
attributes[willpowerSuperficialLabel] = {
  parse: (c, _o, v: number) => c.willpower.superficial = v,
  type: AttributeType.Number,
};
attributes[willpowerAggravatedLabel] = {
  parse: (c, _o, v: number) => c.willpower.aggravated = v,
  type: AttributeType.Number,
};
attributes[experienceTotalLabel] = {
  parse: (c, _o, v: number) => c.experience.total = v,
  type: AttributeType.Number,
};
attributes[`${locale.experience.name} - ${locale.experience.spent}`] = {
  parse: (c, _o, v: number) => c.experience.spent = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.name} - ${locale.physical}`] = {
  type: AttributeType.Section,
};
attributes[`${locale.attributes.physical.strength}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.physical.strength = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.physical.dexterity}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.physical.dexterity = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.physical.stamina}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.physical.stamina = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.name} - ${locale.social}`] = {
  type: AttributeType.Section,
};
attributes[`${locale.attributes.social.charisma}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.social.charisma = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.social.manipulation}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.social.manipulation = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.social.composure}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.social.composure = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.name} - ${locale.mental}`] = {
  type: AttributeType.Section,
};
attributes[`${locale.attributes.mental.intelligence}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.mental.intelligence = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.mental.wits}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.mental.wits = v,
  type: AttributeType.Number,
};
attributes[`${locale.attributes.mental.resolve}[range:1,5]`] = {
  parse: (c, _o, v: number) => c.attributes.mental.resolve = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.name} - ${locale.physical}`] = {
  type: AttributeType.Section,
};
attributes[`${locale.skills.physical.melee}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.melee = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.firearms}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.firearms = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.athletics}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.athletics = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.brawl}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.brawl = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.drive}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.drive = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.stealth}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.stealth = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.larceny}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.larceny = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.craft}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.craft = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.physical.survival}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.physical.survival = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.name} - ${locale.social}`] = {
  type: AttributeType.Section,
};
attributes[`${locale.skills.social.animalKen}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.animalKen = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.etiquette}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.etiquette = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.intimidation}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.intimidation = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.leadership}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.leadership = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.streetwise}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.streetwise = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.performance}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.performance = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.persuasion}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.persuasion = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.insight}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.insight = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.social.subterfuge}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.social.subterfuge = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.name} - ${locale.mental}`] = {
  type: AttributeType.Section,
};
attributes[`${locale.skills.mental.science}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.science = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.academics}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.academics = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.finance}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.finance = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.investigation}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.investigation = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.medicine}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.medicine = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.occult}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.occult = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.awareness}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.awareness = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.politics}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.politics = v,
  type: AttributeType.Number,
};
attributes[`${locale.skills.mental.technology}[range:0,5]`] = {
  parse: (c, _o, v: number) => c.skills.mental.technology = v,
  type: AttributeType.Number,
};
attributes[locale.specialties.name] = {
  type: AttributeType.Section,
  context: (c) => {
    for (const key in c.specialties) {
      delete c.specialties[key];
    }
    return <Context> {
      generic: {
        parse: (c: Character, o: string, v: string) => {
          if (c.specialties[v] == undefined) {
            c.specialties[v] = [];
          }
          if (c.specialties[v].indexOf(o) == -1) {
            c.specialties[v].push(o);
          }
        },
      },
    };
  },
};
attributes[locale.advantages] = {
  type: AttributeType.Section,
  context: (c) => {
    for (const key in c.advantages) {
      delete c.advantages[key];
    }
    return <AdvantageFlawContext> {
      generic: advantageFlawAttributeParse,
      object: c.advantages,
    };
  },
};
attributes[locale.flaws] = {
  type: AttributeType.Section,
  context: (c) => {
    for (const key in c.flaws) {
      delete c.flaws[key];
    }
    return <AdvantageFlawContext> {
      generic: advantageFlawAttributeParse,
      object: c.flaws,
    };
  },
};
attributes[locale.disciplines.animalism.name] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "animalism",
    };
  },
};
attributes[locale.disciplines.animalism.bondFamulus] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.senseTheBeast] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.feralWhispers] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.animalSucculence] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.quellTheBeast] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.unlivingHive] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.subsumeTheSpirit] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.animalDominion] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.animalism.drawingOutTheBeast] = {
  disciplines: [Discipline.Animalism],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.name] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "auspex",
    };
  },
};
attributes[locale.disciplines.auspex.heightenedSenses] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.senseTheUnseen] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.obeah] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.premonition] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.scryTheSoul] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.shareTheSenses] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.spiritsTouch] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.clairvoyance] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.possession] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.telepathy] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.auspex.unburdeningTheBestialSoul] = {
  disciplines: [Discipline.Auspex],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.name] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "dominate",
    };
  },
};
attributes[locale.disciplines.dominate.cloudMemory] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.compel] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.mesmerize] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.dementation] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.domitorsFavor] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.theForgetfulMind] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.submergedDirective] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.rationalize] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.massManipulation] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.dominate.terminalDecree] = {
  disciplines: [Discipline.Dominate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.name] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "bloodSorcery",
    };
  },
};
attributes[locale.disciplines.bloodSorcery.corrosiveVitae] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.aTasteForBlood] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.extinguishVitae] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.bloodOfPotency] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.scorpionsTouch] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.theftOfVitae] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.baalsCaress] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.bloodSorcery.cauldronOfBlood] = {
  disciplines: [Discipline.BloodSorcery],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.name] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "fortitude",
    };
  },
};
attributes[locale.disciplines.fortitude.resilience] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.unswayableMind] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.toughness] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.enduringBeasts] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.valeren] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.defyBane] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.fortifyTheInnerFacade] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.draughtOfEndurance] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.fleshOfMarble] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.fortitude.prowessFromPain] = {
  disciplines: [Discipline.Fortitude],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.name] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "protean",
    };
  },
};
attributes[locale.disciplines.protean.eyesOfTheBeast] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.weightOfTheFeather] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.feralWeapons] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.vicissitude] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.earthMeld] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.shapechange] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.fleshcrafting] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.metamorphosis] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.horridForm] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.mistForm] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.theUnfetteredHeart] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.protean.oneWithTheLand] = {
  disciplines: [Discipline.Protean],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.name] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "obfuscate",
    };
  },
};
attributes[locale.disciplines.obfuscate.cloakOfShadows] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.silenceOfDeath] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.unseenPassage] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.chimerstry] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.ghostInTheMachine] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.maskOfAThousandFaces] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.fataMorgana] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.conceal] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.vanish] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.cloakTheGathering] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.obfuscate.impostorsGuise] = {
  disciplines: [Discipline.Obfuscate],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.name] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "potence",
    };
  },
};
attributes[locale.disciplines.potence.lethalBody] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.soaringLeap] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.prowess] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.brutalFeed] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.sparkOfRage] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.uncannyGrip] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.draughtOfMight] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.earthshock] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.potence.fistOfCaine] = {
  disciplines: [Discipline.Potence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.name] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "presence",
    };
  },
};
attributes[locale.disciplines.presence.awe] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.daunt] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.eyesOfTheSerpent] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.lingeringKiss] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.dreadGaze] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.entrancement] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.irresistibleVoice] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.summon] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.majesty] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.presence.starMagnetism] = {
  disciplines: [Discipline.Presence],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.name] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "celerity",
    };
  },
};
attributes[locale.disciplines.celerity.catsGrace] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.rapidReflexes] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.fleetness] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.blink] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.traversal] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.draughtOfElegance] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.unerringAim] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.lightningStrike] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.celerity.splitSecond] = {
  disciplines: [Discipline.Celerity],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.name] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "rituals",
    };
  },
};
attributes[locale.disciplines.rituals.bloodWalk] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.clingingOfTheInsect] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.craftBloodstone] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wakeWithEveningsFreshness] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardAgainstGhouls] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.communicateWithKindredSire] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.eyesOfBabel] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.illuminateTheTrailOfPrey] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.ishtarsTouch] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.truthOfBlood] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardAgainstSpirits] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardingCircleAgainstGhouls] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.dagonsCall] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.deflectionOfWoodenDoom] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.essenceOfAir] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.firewalker] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardAgainstLupines] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardingCircleAgainstSpirits] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.oneWithTheBlade] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.defenseOfTheSacredHaven] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.eyesOfTheNighthawk] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.incorporealPassage] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardAgainstCainites] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardingCircleAgainstLupines] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.escapeToTrueSanctuary] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.heartOfStone] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.shaftOfBelatedDissolution] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.rituals.wardingCircleAgainstCainites] = {
  disciplines: [Discipline.Rituals],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.thinBloodAlchemy.name] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Section,
  context: () => {
    return <DisciplineContext> {
      generic: disciplineAttributeParse,
      key: "thinBloodAlchemy",
    };
  },
};
attributes[locale.disciplines.thinBloodAlchemy.farReach] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.thinBloodAlchemy.haze] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.thinBloodAlchemy.envelop] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.thinBloodAlchemy.profaneHierosGamos] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.thinBloodAlchemy.defractionate] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.thinBloodAlchemy.airborneMomentum] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Checkbox,
};
attributes[locale.disciplines.thinBloodAlchemy.awakenTheSleeper] = {
  disciplines: [Discipline.ThinBloodAlchemy],
  type: AttributeType.Checkbox,
};
