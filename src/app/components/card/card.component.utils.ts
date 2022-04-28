import {Ability, CostLimit, Currency, Tribe} from '../../../game/enums';

const AbilityBaseSingleSize = 42;
const AbilityBaseDoubleSize = 28;
const AbilityTransferredSize = 32;

const AbilityBaseSinglePos = [40, 136];
const AbilityBaseDoublePos1 = [40, 150];
const AbilityBaseDoublePos2 = [64, 130];

const TransferredAbilityPos = [
    [10, 30],
    [10, 72],
    [52, 30],
    [52, 72],
    [88, 72],
];

const TransferredAbilityNoBasePos = [
    [44, 140],
    ...TransferredAbilityPos,
];

const TribeIconPos = [
    [4, 4],
    [40, 4],
    [80, 4],
    [4, 80],
    [40, 80],
    [80, 80],
];

export type TribeImageData = {
    x: number,
    y: number,
    href: string,
};

export type AbilityImageData = {
    x: number,
    y: number,
    size: number,
    href: string,
};

export function getCardCostHref(currency: Currency, cost: number): string {
    if (cost < 1 || !currency || currency === Currency.None) {
        return null;
    }
    const costLimit = Currency.Blood ? CostLimit.Blood : CostLimit.Bone;
    const currencyName = currency.toLowerCase();
    const normalizedCost = Math.min(cost, costLimit);
    return `/assets/images/costs/cost_${currencyName}_${normalizedCost}.png`;
}

export function getTribeImageData(tribes: Tribe[]): TribeImageData[] {
    return tribes.map((tribe, index) => {
        const [x, y] = TribeIconPos[index];
        return {
            x,
            y,
            href: `/assets/images/tribeicons/tribeicon_${tribe.toLowerCase()}.png`,
        };
    });
}

export function getBaseAbilityImageData(abilities: Ability[]): AbilityImageData[] {

    if (abilities.length === 1) {
        const abilityName = abilities[0].toLowerCase();
        return [
            {
                x: AbilityBaseSinglePos[0],
                y: AbilityBaseSinglePos[1],
                size: AbilityBaseSingleSize,
                href: `/assets/images/abilities/ability_${abilityName}.png`,
            }
        ];
    }

    if (abilities.length === 2) {
        const abilityName1 = abilities[0].toLowerCase();
        const abilityName2 = abilities[1].toLowerCase();
        return [
            {
                x: AbilityBaseDoublePos1[0],
                y: AbilityBaseDoublePos1[1],
                size: AbilityBaseDoubleSize,
                href: `/assets/images/abilities/ability_${abilityName1}.png`,
            },
            {
                x: AbilityBaseDoublePos2[0],
                y: AbilityBaseDoublePos2[1],
                size: AbilityBaseDoubleSize,
                href: `/assets/images/abilities/ability_${abilityName2}.png`,
            }
        ];
    }

    return [];
}

export function getTransferredAbilityImageData(abilities: Ability[], hasBaseAbility: boolean): AbilityImageData[] {
    return abilities.map((ability, index) => {
        const name = ability.toLowerCase();
        const [x, y] = getTransferredAbilityPosition(index, hasBaseAbility);
        return {
            x,
            y,
            size: AbilityTransferredSize,
            href: `/assets/images/abilities/ability_${name}.png`,
        };
    });
}

function getTransferredAbilityPosition(index, hasBaseAbility) {
    const positions = hasBaseAbility ? TransferredAbilityPos : TransferredAbilityNoBasePos;
    return positions[index];
}
