import {Ability, Currency, Tribe, CardPowerType} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'AntQueen',
    title: 'Ant Queen',
    powerType: CardPowerType.Ants,
    power: 1,
    health: 2,
    tribes: [Tribe.Insect],
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [Ability.DrawAnt]
});
