import {
    Ability,
    CardDecal,
    CardEffect,
    CardFace,
    CardKind,
    CardMark,
    CardPowerType,
    Currency,
    Tribe,
} from './enums';

export const createPortraitHref = (name: string) => `/assets/images/portraits/portrait_${name.toLowerCase()}.png`;

export const NormalCardBackgroundHref = '/assets/images/cards/card_empty.png';
export const RareCardBackgroundHref = '/assets/images/cards/card_empty_rare.png';
export const TerrainCardBackgroundHref = '/assets/images/cards/card_terrain_empty.png';
export const NormalCardBackfaceHref = '/assets/images/cards/card_back.png';

export interface CardBlueprint {
    name: string
    title: string
    portraitHref: string
    backgroundHref: string
    backfaceHref: string
    kind: CardKind
    tribes: Tribe[]
    cloneable: boolean
    powerType: CardPowerType
    cost: number
    power: number
    health: number
    currency: Currency
    decals: CardDecal[]
    intrinsicAbilities: Ability[]
    baseAbilities: Ability[]
    transferredAbilities: Ability[]
}

export type Card = {
    readonly id: number;
    readonly blueprint: CardBlueprint;

    /* CardBlueprint Attributes */
    name: string;
    title: string;
    portraitHref: string;
    backgroundHref: string;
    backfaceHref: string;
    kind: CardKind;
    tribes: Tribe[];
    powerType: CardPowerType;
    cost: number;
    currency: Currency;
    decals: CardDecal[];
    intrinsicAbilities: Ability[];
    baseAbilities: Ability[];
    transferredAbilities: Ability[];

    /* Portal Attributes */
    effect: CardEffect;
    face: CardFace;
    mark: CardMark;

    /* Stat Attributes */
    initialPower: number;
    initialHealth: number;
    powerBuff: number;
    powerDebuff: number;
    damage: number;
    power: number;
    health: number;

};

type CardBlueprintOptions = Partial<CardBlueprint> & Required<{name: string}>;

export function createCardBlueprint(options: CardBlueprintOptions): CardBlueprint {
    const name = options.name;
    const title = options.title ?? name;
    const portraitHref = options.portraitHref ?? createPortraitHref(name);
    const backgroundHref = options.backgroundHref ?? NormalCardBackgroundHref;
    const kind = options.kind ?? CardKind.Normal;
    const tribes = options.tribes ?? [];
    const cloneable = options.cloneable ?? true;
    const decals = options.decals ?? [];
    const powerType = options.powerType ?? CardPowerType.Attack;
    const cost = options.cost ?? 0;
    const power = options.power ?? 0;
    const health = options.health ?? 1;
    const baseAbilities = options.baseAbilities ?? [];
    const intrinsicAbilities = options.intrinsicAbilities ?? [];
    const transferredAbilities = [];
    const currency = options.currency ?? Currency.None;
    const backfaceHref = NormalCardBackfaceHref;
    return {
        name,
        title,
        portraitHref,
        backgroundHref,
        backfaceHref,
        tribes,
        kind,
        cloneable,
        decals,
        powerType,
        cost,
        currency,
        power,
        health,
        baseAbilities,
        intrinsicAbilities,
        transferredAbilities,
    };
}

export function cloneCardBlueprint(blueprint: CardBlueprint, overrides?: Partial<CardBlueprint>): CardBlueprint {
    const clone = {
        ...blueprint,
        ...overrides,
    } as CardBlueprint;

    clone.baseAbilities = clone.baseAbilities.slice();
    clone.transferredAbilities = clone.transferredAbilities.slice();
    clone.intrinsicAbilities = clone.intrinsicAbilities.slice();
    clone.tribes = clone.tribes.slice();

    return clone;
}

export function createCardFromBlueprint(id: number, blueprint: CardBlueprint, overrides?: Partial<CardBlueprint>): Card {
    const blueprintAttrs = cloneCardBlueprint(blueprint, overrides);
    return {
        id,
        blueprint,
        ...blueprintAttrs,
        initialHealth: blueprint.health,
        initialPower: blueprint.power,
        powerBuff: 0,
        powerDebuff: 0,
        damage: 0,
        effect: CardEffect.None,
        face: CardFace.Front,
        mark: CardMark.None,
    };
}
